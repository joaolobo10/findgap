# Knowledge map

How to turn the readiness criterion and the learner's materials into a map of what must be known: a short tree of topics, each with a stable ID, a weight and a target level. The map decides what to test, in what order, and what "ready" means for each topic.

## Inputs

- The **readiness criterion** from intake (syllabus, exam blueprint, job description, guideline, or an agreed scope).
- The learner's **materials** and which parts they actually studied.
- The **goal type** and **deadline**.
- The **jurisdiction or standard**, when answers depend on it.

## Build the map

### 1. Extract topics from the criterion

- **Syllabus or course outline:** use its units and headings.
- **Exam blueprint:** use its domains. If it gives percentage weights, keep them; they become the weights.
- **Past exams:** count which topics appear most often; use this to adjust weights.
- **Job description:** turn each responsibility into the competencies it requires ("reviews pull requests" → reading unfamiliar code, spotting bugs, giving actionable feedback).
- **No external criterion:** propose a scope (see *Without an external criterion*).

Where the criterion and the materials disagree, the criterion wins. Topics required by the criterion but absent from the materials are flagged, not dropped.

### 2. Structure the tree

- **Two levels:** areas (T1, T2…) and topics (T1.1, T1.2…). Use a third level (T1.1.1) only when a topic is too broad to test with a handful of questions.
- **4–10 areas, at most ~40 topics.** A bigger map is a sign the scope is too wide: narrow it with the learner, or diagnose one part first.
- **Every topic must be testable.** If you cannot imagine three distinct questions about it, it is either too vague (split it or make it concrete) or too small (merge it).
- **Name topics by what the learner must be able to do or explain**, not by chapter titles. "Choose the right data structure for a lookup-heavy task" beats "Chapter 4: Hash tables".

### 3. Assign weights

Each topic gets **high**, **medium** or **low**, based on:

| Factor | Raises the weight when… |
|---|---|
| Criterion weight | The blueprint or syllabus gives it a large share |
| Frequency | It appears often in past exams or in the daily work of the role |
| Centrality | Many other topics depend on it (a prerequisite) |
| Risk | Getting it wrong causes harm: patient safety, legal liability, structural failure, security breaches |

**Risk overrides the rest:** a safety-critical topic is always high, even if it is small in the blueprint.

### 4. Set a target level per topic

The target level is how deeply the learner must know the topic, using the revised Bloom's taxonomy (E16). Read it from the verbs of the criterion. When the criterion has no verbs, infer the level from the goal type.

| Criterion verbs (examples) | Target level | Diagnosis passes at rung |
|---|---|---|
| list, name, define, state, identify | Remember | 1 Explain (accurate recall) |
| explain, describe, summarize, interpret, compare | Understand | 3 Analogy |
| calculate, apply, use, perform, implement, solve | Apply | 4 Apply |
| differentiate, choose, diagnose, troubleshoot, debug | Analyze | 5 Discriminate |
| judge, critique, justify, review, assess, prioritize | Evaluate | 5 Discriminate (spot-the-error and justify) |
| design, plan, compose, propose, build | Create | 6 Transfer |

Defaults by goal type, when the criterion is silent:

- **Exam or course:** follow the dominant verbs of past questions. Most exams sit at Understand–Apply, with some Analyze.
- **Job or professional practice:** Apply to Analyze for core tasks; Evaluate for anything the role reviews or signs off.
- **Teaching others:** Understand at minimum, plus knowing the common misconceptions.
- **Personal curiosity:** Understand, unless the learner wants more.

Every topic is **confirmed** only after passing rung 7 (Retain) on a later day, whatever its target level.

### 5. Mark prerequisites

Note dependencies between topics ("T3.2 requires T1.1"). When a learner stalls on a topic, check its prerequisites before concluding the gap is in the topic itself. Diagnose prerequisites first when time is short.

### 6. Tag each topic

Tag only when applicable:

- `not-in-materials`: required by the criterion but not covered by what the learner studied.
- `jurisdiction`: the correct answer depends on country, regulator, code or edition. State which one applies.
- `safety-critical`: errors here can cause harm.
- `self-rated-high`: the learner rated this area 3–4 at intake. Test it early: it is where illusions of knowing hide (E7).

## Show the map to the learner

- Show it compactly: areas and topics, with weight and target **in plain words**. Do not use Bloom jargon with the learner: say "recall it", "explain it", "use it", "choose between options", "judge a solution", "handle new cases".
- Keep it to one screen. For large maps, show the areas and let the learner expand any of them.
- Ask them to **confirm, cut or add**. They know their exam or job better than the criterion does sometimes ("this part never comes up in practice").
- Note any flagged topics (`not-in-materials`, `jurisdiction`) right away.

## Order of diagnosis

Test in this order, and stop to report when time or energy runs out:

1. High-weight and `safety-critical` topics.
2. Prerequisites of those topics.
3. Topics tagged `self-rated-high`, to catch illusions of knowing.
4. Medium-weight topics.
5. Low-weight topics, sampled rather than exhaustive.

The breadth quiz covers the whole map lightly. The ladder goes deep in the order above.

## Keep IDs stable

- IDs never change once the learner has seen the map. `gap-log.md` depends on them.
- New topics get the next free ID (T2.5, T7). Never renumber.
- Removed topics are marked `out of scope` in the log, not deleted, so history stays readable.

## Without an external criterion

Propose a scope and a target, then let the learner adjust. Good default scopes:

- "What an educated non-specialist should be able to explain."
- "An introductory university course."
- "What a practitioner uses every week."

For curiosity topics, build areas around the big questions of the field: periods and turning points in history, core mechanisms in science, recurring patterns in a craft.

## Quick check and Explain mode

- **Quick check:** build an implicit map of 3–6 topics from the request and the learner's level. Do not show it unless asked. Save it to the gap log only if state is being kept.
- **Explain mode:** no map; one concept.

## Examples

These two are deliberately from different fields. Copy the shape, not the content.

**Cloud certification (blueprint gives weights)**

```
T1 Secure architectures — high (30% of exam)
  T1.1 Choose access controls for a given scenario — Analyze — self-rated-high
  T1.2 Explain encryption at rest vs in transit — Understand
T2 Resilient architectures — high (26%)
  T2.1 Design a multi-zone deployment for a stated uptime target — Create
  T2.2 Pick a backup strategy that meets a recovery target — Analyze
T3 Cost optimization — medium (20%)
  T3.1 Estimate the monthly cost of a simple workload — Apply — not-in-materials
```

**Brazilian history, personal curiosity (proposed scope)**

```
T1 Colonial period — medium
  T1.1 Explain why the sugar economy shaped colonial society — Understand
T2 Independence and Empire — high
  T2.1 Explain how independence differed from Spanish America's — Understand
  T2.2 Compare the First and Second Reign — Analyze
T3 Republic and the Vargas era — high
  T3.1 Explain what changed in 1930 and why it mattered — Understand
```
