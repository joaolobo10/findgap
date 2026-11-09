# Evidence Base

This file is the scientific foundation of findgap. Every technique the skill uses must trace back to an entry here.

## How to use this file

- **Claude:** load this file when the user asks *why* findgap works a certain way, questions a technique, or asks for sources. Do not recite it unprompted.
- **Contributors:** a new technique enters the skill only after it has an entry here with a citation.
- **Honesty rules when talking about evidence:**
  - Effect sizes are *averages across many studies*. Results vary by subject, learner and setting. Never promise an outcome.
  - Name the limits whenever you cite a finding (see each entry's *Caveats*).
  - Summarize in your own words. Do not quote papers at length.

### Evidence grades

| Grade | Meaning |
|---|---|
| **A** | Several meta-analyses agree, including evidence from real classrooms. |
| **B** | At least one meta-analysis or a robust, replicated lab finding, with known moderators. |
| **C** | Established framework used to *structure* the skill (taxonomies, models). Not an effect-size claim. |

Effect sizes use Hedges' *g* or Cohen's *d*. Rough guide: 0.2 small, 0.5 medium, 0.8 large.

---

## E1. Retrieval practice (testing effect) — Grade A

**What the research says.** Pulling information out of memory strengthens it more than re-reading it. In Roediger & Karpicke (2006), re-studying won on a test 5 minutes later, but testing won clearly after 2 days and 1 week. Re-studying also made students *more confident* while producing worse retention.

**Key numbers.**
- Rowland (2014): *g* = 0.50 versus restudy, from laboratory research only (as reported in Fraundorf et al., 2023; Greving & Richter, 2018).
- Adesope, Trevisan & Sundararajan (2017): *g* = 0.70 (as reported in Fraundorf et al., 2023). Classroom studies: *g* = 0.67 (as reported in Greving & Richter, 2018).
- Yang et al. (2021), classroom quizzing only: *g* ≈ 0.50.
- Question format: testing beat restudy for every test format in Adesope et al. (as reported in Fraundorf et al., 2023). Multiple-choice practice produced larger effects than short-answer practice there, while Rowland found the opposite (as reported in Greving & Richter, 2018). Feedback generally increases the benefit.

**How findgap applies it.** Every diagnostic step is a retrieval attempt: closed-book, from memory, before the user sees the answer. Quizzes are learning events, not only measurements.

**Caveats.** Most studies compare testing with re-reading or doing nothing. Against stronger alternatives the advantage is less consistent (Moreira et al., 2019). In mathematics, retrieval versus restudy was not statistically robust: *g* = 0.18, with a 95% confidence interval crossing zero (Murray et al., 2025).

---

## E2. Pretesting and unsuccessful retrieval — Grade B

**What the research says.** Trying to answer *before* knowing the answer, then getting feedback, improves later memory, even when the first attempt was wrong (Kornell, Hays & Bjork, 2009; Richland, Kornell & Kao, 2009).

**How findgap applies it.** The skill can diagnose before the user has finished studying. It tells users that wrong answers during diagnosis are productive, not a failure. Every wrong answer receives corrective feedback.

**Caveats.** Benefits depend on feedback following the attempt and vary with timing and materials.

---

## E3. Spacing (distributed practice) — Grade A

**What the research says.** Spreading study over separate sessions beats cramming the same amount into one. Cepeda et al. (2006) reviewed 839 assessments from 317 experiments. The best gap between sessions *grows as the time until the test grows*.

**Key numbers.**
- Latimier, Peyre & Ramus (2021): spaced retrieval beat massed retrieval, *g* = 0.74 (29 studies).
- Same study: expanding intervals were **not** better than evenly spaced ones (*g* ≈ 0.03, not significant).
- Mathematics specifically: smaller but robust effect, *g* = 0.28 (Murray et al., 2025).

**How findgap applies it.** The roadmap schedules re-tests over days and weeks, with gaps scaled to the user's deadline. Even or expanding schedules are both acceptable. Do not over-engineer the intervals.

**Caveats.** There is no universal "optimal interval". Gaps should be proportional to how long the knowledge must last.

---

## E4. Interleaving — Grade B

**What the research says.** Mixing different topics or problem types during practice, instead of doing one block at a time, helps learners tell confusable categories apart. Brunmair & Richter (2019) found a moderate overall effect, *g* = 0.42 (59 studies).

**Key numbers.** Strongest for visually similar categories (paintings, *g* = 0.67). Small for math tasks (*g* = 0.34). For word learning, blocking beat interleaving (*g* = −0.39). The authors advise caution with expository texts and word learning.

**How findgap applies it.** Review sessions mix topics that are easy to confuse (drug classes, design patterns, historical periods). Interleaving is used for review and discrimination, not for a first encounter with dense text. Never interleave for vocabulary or terminology memorization.

**Caveats.** Benefits depend on how similar the categories are. Learners often *feel* they learn less with interleaving even when they learn more.

---

## E5. Self-explanation — Grade A/B

**What the research says.** Prompting learners to explain *why* and *how*, generating the causal links themselves, improves understanding and application. Bisra et al. (2018): *g* = 0.55 across 64 research reports (~5,900 learners). The effect held across subjects. When self-explanation took no more time than the comparison activity, the effect was smaller (*g* = 0.41, only 5 effect sizes). Prompt formats (questions, instructions and others) did not differ significantly.

**How findgap applies it.** This is the core of the **Explain** rung: the user explains in their own words, from memory, and Claude prompts for the reasoning behind each step.

**Caveats.** Most studies used undergraduates. Evidence for long-term classroom transfer is thinner than for lab outcomes.

---

## E6. Elaborative interrogation — Grade B

**What the research says.** Asking "why is this true?" about facts and claims improves learning. Rated moderate utility by Dunlosky et al. (2013).

**How findgap applies it.** The **Probe** rung: after an explanation, Claude asks why/how questions until the explanation either holds up or breaks.

**Caveats.** Works best when the learner has some prior knowledge to reason with.

---

## E7. Illusion of explanatory depth and fluency illusions — Grade B

**What the research says.** People believe they understand how things work far better than they do. The illusion collapses when they try to explain in detail (Rozenblit & Keil, 2002). It is stronger for explanatory knowledge than for facts, procedures or stories. Familiarity from re-reading also feels like mastery but is not (Roediger & Karpicke, 2006).

**How findgap applies it.** The **Claim** rung: the user rates their understanding *before* explaining. After explaining, they rate again. The drop between the two ratings is itself diagnostic.

**Caveats.** Some knowledge is tacit: a person may perform a skill without being able to verbalize it. For procedural skills, add a performance task instead of relying on explanation alone.

---

## E8. Calibration and delayed judgments — Grade B

**What the research says.** Judgments of "I know this" are poor right after studying and much more accurate after a short delay. Delayed judgments based on a retrieval attempt from a cue are the most accurate (Nelson & Dunlosky, 1991; meta-analysis: Rhodes & Tauber, 2011).

**How findgap applies it.**
- Every diagnostic item collects a confidence rating.
- Confidence is asked *before* the answer is revealed, and never right after the user has just reviewed the material.
- The confidence × correctness matrix drives the gap report (see `calibration.md`).

**Caveats.** Delaying the judgment mainly improves its accuracy (*g* = 0.93, Rhodes & Tauber, 2011) with a negligible memory benefit (*g* = 0.08). The authors attribute this to delayed judgments using more diagnostic information from long-term memory, not to retrieval practice. In findgap the delay exists to measure well, not to teach.

---

## E9. Hypercorrection of high-confidence errors — Grade B

**What the research says.** Errors made with high confidence are *more* likely to be corrected after feedback than low-confidence errors (Butterfield & Metcalfe, 2001; widely replicated). The likely mechanism is surprise drawing attention to the correction. Butler, Fazio & Marsh (2011) found the correction persists after a week. However, if the correct answer is later forgotten, the original confident error tends to come back.

**How findgap applies it.**
- High-confidence errors are the top priority in the gap report ("dangerous gaps").
- They receive immediate, explicit corrective feedback.
- They are **always** scheduled for a delayed re-test.

**Caveats.** The effect concerns correcting factual and conceptual errors. It does not mean confidence is good or bad in general.

---

## E10. Feedback — Grade A

**What the research says.** Feedback has a medium average effect on learning, *d* = 0.48 (Wisniewski, Zierer & Hattie, 2020; 435 studies). The effect depends heavily on how much *information* the feedback carries. Praise, rewards and punishment alone have low effects.

**How findgap applies it.** Feedback is specific and corrective. It says what was wrong, why, and what to do next. No empty praise, and no grade without an explanation.

**Caveats.** Effects vary widely between forms of feedback, so each form should be treated on its own.

---

## E11. Mastery learning — Grade A/B

**What the research says.** Learners move on only after meeting a defined criterion. Below the criterion, they get corrective work and a parallel re-test.
- Bloom (1984): group mastery learning ≈ 1 SD over conventional teaching. Tutoring plus mastery ≈ 2 SD (the "2 sigma problem").
- Kulik, Kulik & Bangert-Drowns (1990): 108 controlled evaluations showed positive effects on exam performance, larger for weaker students. Self-paced programs often reduced course completion in college.
- Bloom's studies used a mastery standard of about 80% correct.

**How findgap applies it.** "Ready for X" is criterion-referenced, never a feeling. It requires passing the threshold on the user's knowledge map **and** passing again on a delayed re-test (E3).

**Caveats.** The 2-sigma figure has not replicated at that size, and later estimates vary widely. Mastery programs cost time and can reduce course completion.

---

## E12. Learning by teaching and explaining to a novice — Grade B

**What the research says.** Preparing to teach and then teaching improves the teacher's own learning. Kobayashi (2019): *g* = 0.35 for preparing to teach and 0.56 for teaching after preparing (28 studies). Benefits were larger when the teaching was *interactive*, with the learner asking questions back.

**How findgap applies it.** The "explain it like I'm a child" variant of the Explain rung. Claude plays a curious novice who asks follow-up questions, which makes the teaching interactive.

**Caveats.** A novice persona must not accept vague answers. It keeps asking until the explanation is complete.

---

## E13. Analogical comparison — Grade B

**What the research says.** Comparing cases that share an underlying structure improves learning and transfer. Alfieri, Nokes-Malach & Schunn (2013): *d* = 0.50 (57 experiments, 336 tests). Benefits were larger when learners looked for similarities and when the principle was stated *after* the comparison.

**How findgap applies it.** The **Analogy** rung. The user maps the concept onto an everyday example. Claude then asks where the analogy *breaks*, because knowing the limits of an analogy is evidence of real understanding. Two-case comparisons are also used to prepare the transfer rung.

**Caveats.** Analogies can import misconceptions. That is why the "where does it break?" question is mandatory.

---

## E14. Transfer — Grade C (framework)

**What the research says.** Transfer is not one thing. It varies along dimensions: knowledge domain, physical context, time, functional context, social context and modality (Barnett & Ceci, 2002). A single effect size for "far transfer" is meaningless. Evidence for transfer is substantial under some conditions and untested for many others.

**How findgap applies it.** The **Novel case** rung deliberately changes one or more dimensions from how the user studied: a new domain, a new format or a real-world setting. The **Delayed re-test** rung covers the time dimension.

**Caveats.** Far transfer is hard for everyone. Failing it marks a frontier, not a personal failure.

---

## E15. Misconception-based diagnostics — Grade B/C

**What the research says.** Concept inventories such as the Force Concept Inventory (Hestenes, Wells & Swackhamer, 1992) build every wrong option from a documented misconception. Picking a distractor therefore tells *which* wrong idea the learner holds, and lucky guesses are rare. The authors intended it for diagnosis, not for selecting students.

**How findgap applies it.** Every multiple-choice distractor maps to a named misconception or plausible error, never a random filler. The gap report names the misconception behind each wrong choice.

**Caveats.** For domains without a published inventory, Claude infers misconceptions from domain knowledge and the user's materials. These inferred misconceptions should be stated as hypotheses.

---

## E16. Revised Bloom's taxonomy — Grade C (framework)

**What it is.** Six cognitive processes, ordered by complexity: Remember, Understand, Apply, Analyze, Evaluate, Create. They are crossed with four knowledge types: factual, conceptual, procedural, metacognitive (Krathwohl, 2002; Anderson & Krathwohl, 2001).

**How findgap applies it.** Each node of the knowledge map gets a *target level* from the user's goal: an exam syllabus, a job description or curiosity. Each question is tagged with the level it tests. "Ready" means performing at the target level, not just recognizing terms.

---

## The Understanding Ladder → evidence map

| Rung | What the user does | Evidence |
|---|---|---|
| 0. Claim | Rates confidence before any question | E7, E8 |
| 1. Explain | Explains from memory, in own words; or explains to a curious novice (ELI5) | E1, E5, E12 |
| 2. Probe | Answers why/how follow-ups | E5, E6, E7 |
| 3. Analogy | Maps it to an everyday example, then says where the analogy breaks | E13 |
| 4. Apply | Solves a familiar-type problem | E1, E16 |
| 5. Discriminate | Picks which concept applies to a situation; spots the error in a flawed solution | E4, E15, E16 |
| 6. Transfer | Handles a case unlike anything studied | E13, E14 |
| 7. Retain | Passes again days later without reviewing | E3, E8, E9, E11 |

The rung where the user stalls identifies the *type* of gap (details in `understanding-ladder.md`).

---

## Do not use

| Practice | Why not |
|---|---|
| Learning styles ("visual/auditory learner") | Pashler et al. (2008) found virtually no evidence that matching instruction to a style improves learning, and several properly designed studies contradicted it. |
| Re-reading or highlighting as a check of mastery | Low utility (Dunlosky et al., 2013). Builds familiarity, not retrieval. Inflates confidence (E1, E7). |
| "Do you feel ready?" as a readiness test | Immediate self-judgments are poorly calibrated (E8). Readiness is criterion-referenced (E11). |
| Mandatory expanding intervals | Not better than even spacing (Latimier et al., 2021). |
| Presenting "2 sigma" as a guaranteed outcome | Not replicated at that size (E11 caveats). |

---

## References

> All DOIs below were confirmed against Crossref. Any number or claim not yet confirmed against its source carries an inline verify tag in the E-sections; all must be resolved before release. "As reported in" marks a figure confirmed through a peer-reviewed secondary source.

- Adesope, O. O., Trevisan, D. A., & Sundararajan, N. (2017). Rethinking the use of tests: A meta-analysis of practice testing. *Review of Educational Research, 87*(3), 659–701. https://doi.org/10.3102/0034654316689306
- Alfieri, L., Nokes-Malach, T. J., & Schunn, C. D. (2013). Learning through case comparisons: A meta-analytic review. *Educational Psychologist, 48*(2), 87–113. https://doi.org/10.1080/00461520.2013.775712
- Anderson, L. W., & Krathwohl, D. R. (Eds.). (2001). *A taxonomy for learning, teaching, and assessing: A revision of Bloom's taxonomy of educational objectives.* Longman.
- Barnett, S. M., & Ceci, S. J. (2002). When and where do we apply what we learn? A taxonomy for far transfer. *Psychological Bulletin, 128*(4), 612–637. https://doi.org/10.1037/0033-2909.128.4.612
- Bisra, K., Liu, Q., Nesbit, J. C., Salimi, F., & Winne, P. H. (2018). Inducing self-explanation: A meta-analysis. *Educational Psychology Review, 30*, 703–725. https://doi.org/10.1007/s10648-018-9434-x
- Bloom, B. S. (1984). The 2 sigma problem: The search for methods of group instruction as effective as one-to-one tutoring. *Educational Researcher, 13*(6), 4–16. https://doi.org/10.3102/0013189X013006004
- Brunmair, M., & Richter, T. (2019). Similarity matters: A meta-analysis of interleaved learning and its moderators. *Psychological Bulletin, 145*(11), 1029–1052. https://doi.org/10.1037/bul0000209
- Butler, A. C., Fazio, L. K., & Marsh, E. J. (2011). The hypercorrection effect persists over a week, but high-confidence errors return. *Psychonomic Bulletin & Review, 18*, 1238–1244. https://doi.org/10.3758/s13423-011-0173-y
- Butterfield, B., & Metcalfe, J. (2001). Errors committed with high confidence are hypercorrected. *Journal of Experimental Psychology: Learning, Memory, and Cognition, 27*(6), 1491–1494. https://doi.org/10.1037/0278-7393.27.6.1491
- Cepeda, N. J., Pashler, H., Vul, E., Wixted, J. T., & Rohrer, D. (2006). Distributed practice in verbal recall tasks: A review and quantitative synthesis. *Psychological Bulletin, 132*(3), 354–380. https://doi.org/10.1037/0033-2909.132.3.354
- Dunlosky, J., Rawson, K. A., Marsh, E. J., Nathan, M. J., & Willingham, D. T. (2013). Improving students' learning with effective learning techniques. *Psychological Science in the Public Interest, 14*(1), 4–58. https://doi.org/10.1177/1529100612453266
- Fraundorf, S. H., Caddick, Z. A., Nokes-Malach, T. J., & Rottman, B. M. (2023). Cognitive perspectives on maintaining physicians' medical expertise: IV. Best practices and open questions in using testing to enhance learning and retention. *Cognitive Research: Principles and Implications, 8*, 53. https://doi.org/10.1186/s41235-023-00508-8
- Greving, S., & Richter, T. (2018). Examining the testing effect in university teaching: Retrievability and question format matter. *Frontiers in Psychology, 9*, 2412. https://doi.org/10.3389/fpsyg.2018.02412
- Hestenes, D., Wells, M., & Swackhamer, G. (1992). Force concept inventory. *The Physics Teacher, 30*(3), 141–158. https://doi.org/10.1119/1.2343497
- Kobayashi, K. (2019). Learning by preparing-to-teach and teaching: A meta-analysis. *Japanese Psychological Research, 61*(3), 192–203. https://doi.org/10.1111/jpr.12221
- Kornell, N., Hays, M. J., & Bjork, R. A. (2009). Unsuccessful retrieval attempts enhance subsequent learning. *Journal of Experimental Psychology: Learning, Memory, and Cognition, 35*(4), 989–998. https://doi.org/10.1037/a0015729
- Krathwohl, D. R. (2002). A revision of Bloom's taxonomy: An overview. *Theory Into Practice, 41*(4), 212–218. https://doi.org/10.1207/s15430421tip4104_2
- Kulik, C.-L. C., Kulik, J. A., & Bangert-Drowns, R. L. (1990). Effectiveness of mastery learning programs: A meta-analysis. *Review of Educational Research, 60*(2), 265–299. https://doi.org/10.3102/00346543060002265
- Latimier, A., Peyre, H., & Ramus, F. (2021). A meta-analytic review of the benefit of spacing out retrieval practice episodes on retention. *Educational Psychology Review, 33*, 959–987. https://doi.org/10.1007/s10648-020-09572-8
- Moreira, B. F. T., Pinto, T. S. S., Starling, D. S. V., & Jaeger, A. (2019). Retrieval practice in classroom settings: A review of applied research. *Frontiers in Education, 4*, 5. https://doi.org/10.3389/feduc.2019.00005
- Murray, E., Horner, A. J., & Göbel, S. M. (2025). A meta-analytic review of the effectiveness of spacing and retrieval practice for mathematics learning. *Educational Psychology Review, 37*, 75. https://doi.org/10.1007/s10648-025-10035-1
- Nelson, T. O., & Dunlosky, J. (1991). When people's judgments of learning (JOLs) are extremely accurate at predicting subsequent recall: The "delayed-JOL effect." *Psychological Science, 2*(4), 267–271. https://doi.org/10.1111/j.1467-9280.1991.tb00147.x
- Pashler, H., McDaniel, M., Rohrer, D., & Bjork, R. (2008). Learning styles: Concepts and evidence. *Psychological Science in the Public Interest, 9*(3), 105–119. https://doi.org/10.1111/j.1539-6053.2009.01038.x
- Rhodes, M. G., & Tauber, S. K. (2011). The influence of delaying judgments of learning on metacognitive accuracy: A meta-analytic review. *Psychological Bulletin, 137*(1), 131–148. https://doi.org/10.1037/a0021705
- Richland, L. E., Kornell, N., & Kao, L. S. (2009). The pretesting effect: Do unsuccessful retrieval attempts enhance learning? *Journal of Experimental Psychology: Applied, 15*(3), 243–257. https://doi.org/10.1037/a0016496
- Roediger, H. L., & Karpicke, J. D. (2006). Test-enhanced learning: Taking memory tests improves long-term retention. *Psychological Science, 17*(3), 249–255. https://doi.org/10.1111/j.1467-9280.2006.01693.x
- Rowland, C. A. (2014). The effect of testing versus restudy on retention: A meta-analytic review of the testing effect. *Psychological Bulletin, 140*(6), 1432–1463. https://doi.org/10.1037/a0037559
- Rozenblit, L., & Keil, F. (2002). The misunderstood limits of folk science: An illusion of explanatory depth. *Cognitive Science, 26*(5), 521–562. https://doi.org/10.1207/s15516709cog2605_1
- Wisniewski, B., Zierer, K., & Hattie, J. (2020). The power of feedback revisited: A meta-analysis of educational feedback research. *Frontiers in Psychology, 10*, 3087. https://doi.org/10.3389/fpsyg.2019.03087
- Yang, C., Luo, L., Vadillo, M. A., Yu, R., & Shanks, D. R. (2021). Testing (quizzing) boosts classroom learning: A systematic and meta-analytic review. *Psychological Bulletin, 147*(4), 399–435. https://doi.org/10.1037/bul0000309
