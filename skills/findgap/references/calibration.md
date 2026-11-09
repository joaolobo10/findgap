# Calibration

How findgap collects confidence and turns it into a diagnosis. The point is not only whether an answer is right, but whether the learner *knew* it was right. A wrong answer given with certainty is the most important thing findgap can find (E8, E9).

## The two scales

findgap uses two 4-point scales. They measure different things but share the same cutoff.

| | Topic self-rating (understanding) | Answer confidence |
|---|---|---|
| **Used at** | Intake baseline, ladder rung 0, re-rating after rung 2 | Every answer from ladder rungs 4–7 and every quiz item |
| **Question** | "How well do you know [topic]?" | "How sure are you of this answer?" |
| **1** | barely know it | guessing |
| **2** | studied it but shaky | unsure |
| **3** | could explain most of it | fairly sure |
| **4** | could teach it | certain |

On both scales, **1–2 count as Unsure and 3–4 as Confident**. Always show the anchors with the question. Without them, numbers mean different things to different people.

## When to collect

- **Before the answer is revealed, always.** A rating given after seeing the answer is worthless.
- **Not right after reviewing the material.** Ratings made just after study are inflated by short-term familiarity. Ratings made after a delay are far more accurate (E8). Never ask "how sure are you?" right after showing an explanation.
- **Every item, no exceptions,** in quizzes and in rungs 4–7. If the learner skips a rating, ask for it before giving feedback.
- **Keep it fast.** One tap or one digit. The rating must not feel like extra work.

## The matrix (per answer)

| | Correct | Wrong |
|---|---|---|
| **Confident (3–4)** | **Mastered** item | **Dangerous** item: the learner believes something false |
| **Unsure (1–2)** | **Fragile** item: knows it, but cannot rely on it | **Known gap** item: honest uncertainty |

A wrong answer rated **4 (certain)** is the most critical case of all. Flag it separately in the report.

## From items to topic status

When a topic was only covered by the breadth quiz, with no ladder:

| Condition (checked in this order) | Topic status |
|---|---|
| Any dangerous item | **dangerous gap** |
| Any known-gap item | **known gap** |
| Any fragile item | **fragile** |
| All items mastered | **mastered** (breadth only) |

The most severe condition wins. "Mastered (breadth only)" means the quiz found no problem, not that the topic reached its target rung. Topics with high weight still go through the ladder.

When the ladder was run, its status-assignment rules take precedence over the quiz.

## Handling dangerous items

High-confidence errors are the items most likely to be corrected by feedback, and also likely to come back later if the correction fades (E9). So:

1. **Correct them immediately and clearly.** Make the contrast explicit: "You were certain it was X; it's actually Y, because…". The surprise is what makes the correction stick. Use it kindly, never as a "gotcha".
2. **Name the misconception** behind the wrong answer, if the item has one mapped (E15).
3. **Log it** as its own row under *Dangerous gaps and errors* in the gap log.
4. **Schedule a delayed re-test** with a new variant (ladder rung 7). This is mandatory.

## Calibration summary (for the report)

Report calibration only when there are **at least 8 rated items**. With fewer, say there is not enough data yet.

Show the learner simple, concrete numbers:

- **Accuracy when certain:** "When you said *certain*, you were right 6 out of 8 times." Ideally this is close to 100%.
- **Accuracy when guessing or unsure:** "When you said *unsure*, you were right 5 out of 9 times." A high number here means they know more than they think.
- **Dangerous items:** how many, and in which topics.
- **Illusion of explanatory depth:** topics where the self-rating dropped 2 or more points after rung 2. (The 2-point threshold is a findgap rule of thumb.)

These are descriptive summaries for the learner. They are not formal calibration statistics.

## Reading the pattern

| Pattern | What it suggests | What to do |
|---|---|---|
| Many confident errors, high self-ratings | Overconfidence, often from re-reading (E1, E7) | Prioritize rungs 1–2 and retrieval practice. Make the "certain but wrong" number visible. |
| Many correct but unsure answers | Underconfidence; knowledge is there but not trusted | Show them the evidence that they know it. More retrieval practice to build reliable recall. Do not assign extra study for these topics. |
| Confidence tracks accuracy | Good calibration | Their self-ratings can guide planning, but rung 7 is still required for *confirmed*. |
| Mixed by area | Calibration differs between topics | Report it per area; it often shows where they studied passively. |

## Talking about calibration

- **Describe the pattern, never label the person.** Say "on these three topics, your certainty was ahead of your accuracy", not "you are overconfident".
- **Frame it as useful.** Finding a confident error now is far better than finding it in the exam, the interview or the clinic.
- **Underconfidence is good news.** Say so plainly: they know more than they think.
