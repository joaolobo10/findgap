# Question design

How to write questions that diagnose: each one tests a known topic at a known level, and every wrong answer tells you *why* the learner got it wrong.

## Principles

- **One item, one topic, one level.** Every question has a topic ID from the knowledge map and a target level. If you can't name both, don't ask it.
- **Test the level you claim.** An Apply item must require *doing* something; naming the procedure is only Remember. A Discriminate item must offer real, plausible alternatives.
- **Difficulty yes, tricks no.** A question can be hard; it must never be a trap. A trick question measures attention to wording, not knowledge.
- **Unambiguous.** An expert in the field should agree on the single best answer without debate.
- **Grounded.** Build questions from the readiness criterion and the learner's materials. When a question goes beyond their materials, say so in the feedback.
- **Correct, or not at all.** If you are not certain the answer key is right, don't use the item. In health, pharmacy, law and similar fields, the key fact must be checkable against the criterion or an authoritative source. Respect the jurisdiction and edition noted at intake.
- **Learner's language.** Write questions in the learner's language. Keep technical terms in the form their exam or field uses.

## Item types

| Type | Best for | Rung | Where |
|---|---|---|---|
| Single best answer (multiple choice) | Breadth, Discriminate, misconception detection | 4, 5 | Quiz artifact or chat |
| Short answer / free recall | Remember, Explain | 1 | Chat |
| Explain / why-how | Understand | 1, 2 | Chat |
| Problem / calculation / task | Apply | 4 | Chat (or quiz, if the answer can be given as an option) |
| Which applies? | Analyze | 5 | Either |
| Spot the error | Analyze, Evaluate | 5 | Either |
| Novel case | Create, transfer | 6 | Chat |

The **quiz artifact uses single-best-answer items only**, so it can score them automatically. Open-ended items run in the chat, where Claude can read and judge the answer.

## Writing multiple-choice items

These rules follow the multiple-choice item-writing guidelines reviewed by Haladyna, Downing & Rodriguez (2002) (evidence base, A1). Distractor content comes from misconceptions (E15).

### The stem

- Write it as a complete question. The learner should be able to answer it before seeing the options.
- For Apply and above, use a short scenario: a patient, a codebase, a client, a site, a historical situation.
- No clues in the stem: no grammatical hints, no word repeated only in the correct option.
- Avoid negatives ("which is NOT…"). If one is unavoidable, highlight the **NOT**.

### The options

- **3 or 4 options**, with exactly one best answer.
- **Every distractor maps to a named misconception or a plausible error** (E15). No filler options. Record the misconception for each distractor; it goes in the feedback and the gap report.
- Make the options similar in length, structure and level of detail. The correct answer must not be the longest or the most qualified one.
- No "all of the above" or "none of the above".
- Vary the position of the correct answer across items.

### Where distractors come from (best first)

1. **The learner's own errors** from earlier answers and sessions (gap log).
2. **Known misconceptions** of the field. When none is documented, state the misconception you are assuming as a hypothesis (E15 caveats).
3. **Confusable concepts** in the knowledge map: the alternatives for Discriminate items.
4. **Near-miss procedures:** a skipped step, a wrong unit, a swapped sign, an off-by-one, a rule applied outside its conditions.

## Writing open-ended items

- Before asking, decide the **2–4 key points** a complete answer must contain. Keep that rubric to yourself; use it to judge Pass, Partial or Stall.
- Ask for one thing at a time. "Explain X and compare it with Y and give an example" is three items.
- Don't fish for exact wording. Accept any correct formulation of the key points.

## Composing a breadth quiz

- **Size:** 10–20 items for a full diagnosis, 5–8 for a quick check.
- **Coverage:** 1–3 items per topic. Give more to high-weight topics, and at least one to every `safety-critical` topic.
- **Levels:** mix them according to each topic's target level. Don't make the whole quiz Remember-level.
- **Order:** mix topics, so the position of an item doesn't reveal its topic.
- **Confidence:** every item collects a 1–4 rating before the answer is revealed.

## Feedback per item

After the learner answers and rates:

- **Wrong:** the correct answer, why it is correct, and why their choice was tempting (name the misconception). 2–4 lines.
- **Wrong with high confidence (3–4):** add the explicit contrast: "You were certain of X; it's Y, because…".
- **Right with low confidence (1–2):** confirm it and say *why* it's right, so the next retrieval is easier.
- **Right with high confidence (3–4):** one line, no need to elaborate.

## Quiz data format

The quiz artifact reads its questions from this structure. Generate it exactly in this shape.

```json
{
  "title": "Cloud architecture — diagnostic",
  "language": "en",
  "items": [
    {
      "id": "Q1",
      "topic": "T1.1",
      "level": "Analyze",
      "stem": "A team needs read-only access to one storage bucket for an audit. What is the best approach?",
      "options": [
        { "id": "A", "text": "…", "correct": true,  "misconception": null },
        { "id": "B", "text": "…", "correct": false, "misconception": "Grants broader access than needed for convenience" },
        { "id": "C", "text": "…", "correct": false, "misconception": "Confuses authentication with authorization" }
      ],
      "explanation": "Why the correct option is right, in 1–3 sentences.",
      "source": "Exam guide, domain 1"
    }
  ]
}
```

## Results format

The quiz ends by showing this block for the learner to copy and paste back into the chat:

```
FINDGAP RESULTS v1
quiz: Cloud architecture — diagnostic
Q1 T1.1 answer=B confidence=4 correct=no
Q2 T2.2 answer=A confidence=2 correct=yes
...
```

When it arrives, classify each line with the confidence × correctness matrix, update the topic statuses and the gap log, and continue with the ladder on the priority topics.

## Before sending any question: checklist

- [ ] Has a topic ID and a target level, and actually tests that level
- [ ] Exactly one best answer, and you are sure of it
- [ ] Correct for the learner's jurisdiction or edition, if relevant
- [ ] Every distractor has a named misconception or plausible error
- [ ] No clues in the stem or the option lengths
- [ ] In the learner's language
- [ ] Past exam questions from the learner's materials are used as models, not copied. If you reuse one directly, say so.
