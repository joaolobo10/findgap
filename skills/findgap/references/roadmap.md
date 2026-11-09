# Roadmap

How to turn the gap report into a plan: what to work on, in what order, with which technique, and when to re-test. The roadmap is where findgap moves from diagnosing to fixing.

## Inputs

- Topic statuses and gap types from the gap log.
- Topic weights and `safety-critical` tags from the knowledge map.
- The deadline and the learner's weekly availability (learner profile).
- The readiness verdict and its feasibility estimate.

## Priority order

Work on gaps in this order. When time is short, cut from the bottom.

1. **Dangerous gaps**: rated 4 first, then those in safety-critical and high-weight topics.
2. **Known gaps** in high-weight topics.
3. **Prerequisites** of any gap above, when a stall may come from them.
4. **Fragile** high-weight topics.
5. Known gaps and fragile topics of medium weight.
6. Low-weight topics: sample them; skip them if the deadline is tight, and say so.

Mastered topics need only their scheduled re-tests. Correct-but-unsure answers need no extra study: spaced retrieval alone builds the trust that is missing.

## Technique per gap

Each gap type gets the technique the evidence supports for it. Describe the activity to the learner in plain words: what they will actually do, not the name of the technique.

| Gap | What the learner does | Evidence |
|---|---|---|
| **Dangerous gap** | Sees the explicit contrast ("you believed X; it's Y, because…"). Explains the correct version back in their own words. Must re-test on a later day. | E9, E10 |
| **Recognition only** | Closes the material, writes everything they remember, then checks and corrects it. Repeats on separate days. Self-made questions or flashcards are fine if they *answer* them, never just re-read them. | E1 |
| **Surface knowledge** | Works through the mechanism by answering "why does this step happen?" and "what would change if…?" for each part. | E5, E6 |
| **Rigid model** | Compares two or more examples from different contexts that share the same principle, lists what they have in common, then states the principle. | E13 |
| **Declarative only** | Solves practice problems of the familiar type, checking each answer right away and understanding every error before the next one. | E1, E10 |
| **Doesn't know when** | Practices mixed sets of easily confused problem types, where choosing the approach is part of the task. Names and corrects the specific misconception behind past errors. Do not mix when the goal is memorizing vocabulary or terminology. | E4, E10, E15 |
| **Inert knowledge** | Compares cases from different contexts that share the principle, states the principle, then tries a new case. | E13, E14 |
| **Not consolidated** | Retrieves it again from memory at increasing distances in time, with no review just before. | E3 |
| **Fragile** | More retrieval practice, spaced out, with feedback. | E1, E3 |
| **Not in materials** | Picks a source that covers it, ideally one named by the criterion. Claude can give a first explanation, but the learner should check key facts against that source. | — |

**Never prescribe** re-reading, highlighting or "review your notes" as the activity, or anything on the "Do not use" list.

## Corrective sessions: when findgap explains

The learner may want Claude to explain a gap, not just assign work. That's fine, as long as the explanation is short and followed straight away by retrieval:

1. **Explain briefly,** focused on exactly what was wrong or missing (2–6 short paragraphs, with an example).
2. **The learner explains it back** in their own words (rung 1), without scrolling up.
3. **One or two practice items** at the topic's target level, with confidence ratings.
4. **Schedule the re-test.** A correct answer straight after an explanation is not evidence of learning yet (E1, E8).

## Re-test schedule

Spacing beats cramming, and the best gap between sessions grows with how long the knowledge must last (E3). Evenly spaced and expanding schedules work about equally well, so keep it simple. Use these intervals, counted from the day of the correction:

| Time until the deadline | Re-tests |
|---|---|
| Under 1 week | Next day, then 2–3 days later |
| 1–4 weeks | Day 1–2, about day 7, then a few days before the deadline |
| 1–3 months | About day 2, about 1 week, about 3 weeks, then about 1 week before the deadline |
| No deadline | About 2 days, 1 week, 1 month, then 3 months |

These intervals are findgap rules of thumb, built on E3's findings.

- **Leave room before the deadline.** The last re-test should come early enough to fix what it finds, never the night before.
- **Failed re-test:** the topic goes back to its gap type, and the next re-test comes sooner.
- **Passed re-test** at the target rung: the topic becomes *confirmed* (rung 7).
- **Dangerous gaps always get at least two re-tests** on different days, because confident errors tend to come back (E9).

## Weekly plan

Fit the work to the learner's availability. Each study session follows the same shape:

1. **Due re-tests first,** 10–15 minutes, with no reviewing beforehand.
2. **Corrective work** on 1–2 gaps, using the technique from the table.
3. **Close with 2–3 mixed retrieval questions** from earlier topics.

Keep sessions to the length the learner chose. Overloading the plan is worse than leaving low-weight topics out: say which ones were left out and why.

## Output format

Give the learner:

1. **The plan:** a table by week (or by day, for short deadlines).

| When | Focus | What you'll do | Re-test |
|---|---|---|---|
| Week 1 | T1.1 (dangerous), T2.3 | Correct T1.1 with the contrast and explain it back; mixed practice on T2.3 vs T2.4 | T1.1: Nov 12 and Nov 19 |
| Week 2 | … | … | … |

2. **The re-test calendar:** dates and topic IDs only, easy to copy into a calendar.
3. **The feasibility line** from the readiness rubric: realistic, tight or unrealistic, and what was cut.

Then update `gap-log.md`: the *Next re-test* column for every topic, *Next re-test due* in the header, and the session history.

## Reminders

findgap cannot remind anyone by itself between sessions. Suggest the learner put the re-test dates in their calendar. If the environment offers scheduled tasks or reminders, offer to set them up. Never promise a reminder you cannot deliver.

## Keeping the roadmap alive

At every review session:

- Run the due re-tests.
- Update the statuses.
- Re-prioritize using the order above.
- Shift the plan if the deadline or availability changed.

Re-run the readiness verdict whenever its inputs change meaningfully.
