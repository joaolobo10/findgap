// Tests the pure logic of skills/findgap/assets/quiz-template.html.
// Run: node scripts/test-quiz.mjs
import { readFileSync } from "node:fs";
import vm from "node:vm";
import assert from "node:assert/strict";

const html = readFileSync(new URL("../skills/findgap/assets/quiz-template.html", import.meta.url), "utf8");
const dataSrc = html.match(/<script type="application\/json" id="quiz-data">([\s\S]*?)<\/script>/)[1];
const appSrc = html.match(/<script id="quiz-app">([\s\S]*?)<\/script>/)[1];

const demo = JSON.parse(dataSrc);
const ctx = {};
vm.createContext(ctx);
vm.runInContext(appSrc, ctx); // no `document` here, so only the logic is defined
const Q = ctx.FindgapQuiz;
assert.ok(Q, "FindgapQuiz API not exposed");

let passed = 0;
function test(name, fn) { fn(); passed++; console.log("ok -", name); }

test("demo quiz validates", () => {
  assert.deepEqual([...Q.validateQuiz(demo)], []);
  assert.equal(demo.items.length, 4);
});

const demoAnswers = [
  { option: "A", confidence: 4 }, // Q1 wrong, high  -> dangerous
  { option: "C", confidence: 2 }, // Q2 right, low   -> fragile
  { option: "A", confidence: 3 }, // Q3 right, high  -> mastered
  { option: "B", confidence: 1 }  // Q4 wrong, low   -> known gap
];

test("results block matches question-design.md format exactly", () => {
  const expected = [
    "FINDGAP RESULTS v1",
    "quiz: Demo — mixed-field diagnostic",
    "Q1 T1.1 answer=A confidence=4 correct=no",
    "Q2 T2.1 answer=C confidence=2 correct=yes",
    "Q3 T3.1 answer=A confidence=3 correct=yes",
    "Q4 T4.1 answer=B confidence=1 correct=no"
  ].join("\n");
  assert.equal(Q.buildResults(demo, demoAnswers), expected);
});

test("summary: score, 2x2 matrix, dangerous items, calibration gate", () => {
  const s = Q.summarize(demo, demoAnswers);
  assert.equal(s.correct, 2);
  assert.equal(s.total, 4);
  assert.deepEqual({ ...s.matrix }, { mastered: 1, fragile: 1, known: 1, dangerous: 1 });
  assert.deepEqual([...s.dangerous.map(d => d.item.id)], ["Q1"]); // spread: vm arrays have another prototype
  assert.equal(s.enough, false);
});

test("calibration lines need >= 8 items and count ratings correctly", () => {
  const items = Array.from({ length: 8 }, (_, i) => ({ ...demo.items[i % 4], id: "Q" + (i + 1) }));
  const quiz = { title: "Eight", items };
  const key = items.map(it => it.options.find(o => o.correct).id);
  const wrong = it => it.options.find(o => !o.correct).id;
  const answers = [
    { option: key[0], confidence: 4 }, { option: key[1], confidence: 4 },
    { option: key[2], confidence: 4 }, { option: wrong(items[3]), confidence: 4 },
    { option: key[4], confidence: 1 }, { option: wrong(items[5]), confidence: 2 },
    { option: key[6], confidence: 2 }, { option: key[7], confidence: 3 }
  ];
  const s = Q.summarize(quiz, answers);
  assert.equal(s.enough, true);
  assert.deepEqual({ ...s.certain }, { right: 3, n: 4 });
  assert.deepEqual({ ...s.low }, { right: 2, n: 3 });
  assert.equal(Q.fmt(Q.I18N.en.calibCertain, { r: 3, n: 4 }), "When you rated 4 (certain), you were right 3 of 4.");
  assert.equal(Q.fmt(Q.I18N.en.calibLow, { r: 2, n: 3 }), "When you rated 1–2 (guessing or unsure), you were right 2 of 3.");
});

test("feedback follows question-design.md for all four cases", () => {
  const t = Q.I18N.en, q1 = demo.items[0];
  const wrongHigh = Q.feedbackFor(q1, { option: "A", confidence: 4 }, t);
  assert.equal(wrongHigh.tone, "warn");
  assert.equal(wrongHigh.lines[0], "You were certain of A; it's B.");
  assert.ok(wrongHigh.lines.some(l => l.startsWith("Why A was tempting: Confuses enzyme inhibition")));
  const wrongFairly = Q.feedbackFor(q1, { option: "A", confidence: 3 }, t);
  assert.equal(wrongFairly.lines[0], "You were fairly sure of A; it's B.");
  const wrongLow = Q.feedbackFor(q1, { option: "C", confidence: 1 }, t);
  assert.equal(wrongLow.lines[0], "Not quite. The answer is B.");
  assert.ok(wrongLow.lines.some(l => l.startsWith("Why: ")));
  assert.ok(wrongLow.lines.some(l => l.startsWith("Why C was tempting: ")));
  const rightLow = Q.feedbackFor(q1, { option: "B", confidence: 2 }, t);
  assert.equal(rightLow.tone, "ok");
  assert.deepEqual([...rightLow.lines], [t.rightLow, "Why: " + q1.explanation]);
  const rightHigh = Q.feedbackFor(q1, { option: "B", confidence: 4 }, t);
  assert.deepEqual([...rightHigh.lines], [t.rightHigh]);
});

test("validation catches broken data", () => {
  const clone = () => JSON.parse(JSON.stringify(demo));
  const twoCorrect = clone(); twoCorrect.items[0].options[0].correct = true;
  assert.match(Q.validateQuiz(twoCorrect).join(" "), /exactly one correct option \(found 2\)/);
  const noStem = clone(); delete noStem.items[1].stem;
  assert.match(Q.validateQuiz(noStem).join(" "), /Item 2 \(Q2\): missing "stem"/);
  const spaced = clone(); spaced.items[0].topic = "T1 1";
  assert.match(Q.validateQuiz(spaced).join(" "), /must not contain spaces/);
  const dupe = clone(); dupe.items[1].id = "Q1";
  assert.match(Q.validateQuiz(dupe).join(" "), /duplicate id/);
  assert.equal(Q.validateQuiz({ title: "x", items: [] }).length, 1);
  assert.equal(Q.validateQuiz(null).length, 1);
  assert.equal(Q.validateQuiz([]).length, 1);
});

test("language selection falls back to en", () => {
  assert.equal(Q.pickLang("pt-BR"), "pt-BR");
  assert.equal(Q.pickLang("pt"), "pt-BR");
  assert.equal(Q.pickLang("es-MX"), "es");
  assert.equal(Q.pickLang("fr"), "en");
  assert.equal(Q.pickLang(undefined), "en");
});

test("all UI dictionaries have the same keys", () => {
  const keys = l => Object.keys(Q.I18N[l]).sort().join(",");
  assert.equal(keys("pt-BR"), keys("en"));
  assert.equal(keys("es"), keys("en"));
  for (const l of ["en", "pt-BR", "es"]) assert.equal(Q.I18N[l].conf.length, 4);
});

console.log(`\n${passed} tests passed`);
