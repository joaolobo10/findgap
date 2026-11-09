# Intake

How to learn enough about the learner to build a useful knowledge map — without turning the start into an interrogation.

## Principles

- **Ask only what is missing.** Read the learner's first message carefully. If it already states the goal, the deadline or the materials, do not ask again.
- **One round, three questions maximum per message.** Prefer clickable options when the interface supports them. Always allow "skip" or "I don't know".
- **Say why, once.** One short line explaining that the answers make the diagnosis sharper is enough. Do not justify every question.
- **Intake is not assessment.** Do not quiz during intake. The only self-rating collected here is the baseline in step 4.
- **Reply in the learner's language.**

## Modes

| Mode | Trigger | Ask |
|---|---|---|
| **Full** | Default for a new learner or a new goal | The fields below, in priority order, across one or two messages |
| **Quick check** | "Test me on X now", "quiz me on X" | Only: the goal (why they need X) and their level (first contact / studied it / use it regularly). Then start diagnosing. Collect the rest later, only if it becomes relevant. |
| **Resume** | A learner profile or gap log already exists | Nothing, unless the goal or deadline changed. Confirm in one line ("Last time we were preparing for…; still the plan?") |

## Fields, in priority order

### Must have (before building the map)

1. **Topic and scope.** What exactly? "Pharmacology" is too wide for one diagnosis; "cardiovascular drugs for the board exam" is workable. Help narrow it down if needed.
2. **Goal type.** Pick the closest one; it decides what "ready" means (table below).
3. **The readiness criterion.** The *external* source that defines what must be known. Ask for it by name, link or file.
4. **Deadline.** A date, or "no deadline". It drives the spacing of re-tests.

### Should have

5. **Background.** First contact, studied before, or uses it in practice? For how long?
6. **How they studied.** Which sources (course, book, videos, notes, past exams) and which methods (re-reading, highlighting, summaries, flashcards, practice problems, teaching others).
7. **Materials.** Ask them to share what they studied from (see *Materials protocol*).
8. **Baseline self-rating.** For the 3–6 main areas of the topic: "How well do you know this, from 1 to 4?" This is rung 0 (Claim) at map level. It is a baseline to compare with results later, never a measure of readiness.

### Nice to have (ask only if relevant)

9. **Time available.** Hours per week and preferred session length. Needed for the roadmap.
10. **Jurisdiction or standard.** Required for health, pharmacy, law, accounting, engineering codes and similar fields, where the correct answer depends on the country, regulator or edition (drug names and approvals, laws, building codes, exam versions).
11. **Accommodations.** Anything that should change the *format* (e.g., shorter text blocks for dyslexia, no timed questions). This is not "learning styles": it adapts access to the questions, not the teaching method.

## Goal types and what "ready" means

| Goal type | "Ready" means | Criterion source to ask for | Examples |
|---|---|---|---|
| **Exam or certification** | Passing at the required level, with margin | Official syllabus, exam blueprint, past papers | Medical licensing exam, cloud certification, bar exam, university entrance exam |
| **Job or interview** | Performing the tasks the role requires and explaining the reasoning | Job description, level expectations, interview format | Junior frontend developer, hospital pharmacist, structural engineer |
| **Course** | Meeting the course's learning outcomes | Syllabus, learning objectives, assessment rubric | Anatomy I, Data Structures, Constitutional Law |
| **Professional practice** | Doing the work correctly and safely, including edge cases | Professional guidelines, standards, protocols | Prescribing checks, code review, building inspection |
| **Teaching others** | Explaining it accurately, answering likely questions, anticipating misconceptions | What the audience will need | Tutoring, giving a talk, onboarding a colleague |
| **Personal curiosity** | The scope the learner chooses | No external source — propose one | Brazilian history, how vaccines work, music theory |

**When there is no external criterion** (curiosity, vague goals), propose a concrete scope and target level, and let the learner adjust. For example: "what an educated non-specialist should be able to explain", or "an introductory university course".

## Materials protocol

1. Ask *what* they studied from, then ask them to share it (files, links, notes, screenshots of a table of contents).
2. If the materials are large, ask for the table of contents or their own notes first, and the full files only for priority topics.
3. Ask which parts they **actually studied**, as opposed to owning or skimming. The gap between "have" and "studied" is common and useful.
4. Compare the coverage of the materials with the criterion. Topics required by the criterion but missing from the materials are a finding in themselves. Tell the learner early.
5. Never claim to have read material that was not provided or could not be opened. If a file could not be read, say so.
6. If they have no materials, continue from the criterion alone and note it in the profile.

## Signals worth noting (silently)

Record these in the profile and use them later, in the gap report. Do not lecture during intake.

- **Studied mainly by re-reading or highlighting** → expect overconfidence. Familiarity feels like knowing (E1, E7).
- **Studied with practice questions or self-testing** → expect better calibration. Still verify.
- **Very high self-ratings across the board** → prioritize rungs 1–2 (Explain, Probe) on those areas.
- **"I understand it but can't explain it"** → may be real tacit skill. Add an Apply task before concluding (E7 caveats).

## Suggesting a home for the context

Once per learner, after the must-have fields, suggest keeping the context. Example wording (adapt to the learner's language):

- **Claude app:** "Tip: if you create a Project for this and save the files I give you at the end of each session, I'll remember your gaps and know what to re-test next time. Optional — we can start right away either way."
- **Claude Code:** "I can keep your progress in a `.findgap/` folder here, so next session starts with what's due for re-testing. Want that?"

If accepted, create `learner-profile.md` and `gap-log.md` from the templates in `assets/`. Store only study-related information; nothing else is needed.

## Closing the intake

Summarize what you understood in 3–5 lines: topic and scope, goal and criterion, deadline, materials, and anything notable. Ask the learner to confirm or correct it. Then fill `learner-profile.md` (if state is being kept) and move to the **Map** step.

## Example openings

**Full, nothing known yet**

> Let's find out what you really know — and what you only think you know. Three quick questions so I aim the diagnosis well:
> 1. What exactly do you want to master, and for what? (exam, job, course, curiosity…)
> 2. Is there an official list of what you need to know — a syllabus, a job description, past exams?
> 3. Is there a deadline?

**Quick check** ("quiz me on cardiac drugs")

> Sure. Two things first, so the questions hit the right level: is this for an exam, for practice, or for curiosity? And have you studied it before, or is this a first look?

**Resume**

> Welcome back. Last time we were preparing for the structural engineering licensing exam on March 14, and 4 topics are due for re-testing today. Still the plan? If so, let's start with those — no reviewing first.
