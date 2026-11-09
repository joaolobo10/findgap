# findgap — project conventions

findgap is an open-source Agent Skill (https://agentskills.io/specification): a study
assistant that finds knowledge gaps in any field using evidence-based learning science.
The skill lives in `skills/findgap/`; everything else in the repo is packaging and docs.

## Language
- All files, code and docs are written in English (exception: `README.pt-BR.md`, the
  Portuguese mirror of `README.md` — keep the two in sync).
- The skill itself must instruct Claude to reply in the user's language.

## Structure and size
- `SKILL.md` stays lean: target < 300 lines (spec hard limit: 500 lines / ~5000 tokens).
- Details live in `references/` and are loaded only when needed (progressive disclosure).
  `SKILL.md` must say *when* to load each reference file.
- References are one level deep from `SKILL.md` — reference files don't chain to other
  reference files.
- Frontmatter `name` must equal the folder name (`findgap`): lowercase a-z, 0-9 and
  single hyphens, max 64 chars. `description` max 1024 chars and says what the skill does
  and when to use it.

## Evidence
- Every learning technique referenced anywhere in the skill must be backed by a citation
  in `references/evidence-base.md`.
- A new technique requires a new E-entry (`## E<n>. <name> — Grade <A|B|C>`) in
  `evidence-base.md` *before* it is used anywhere else in the skill: what the research
  says, key numbers, how findgap applies it, caveats, plus the full reference with DOI.
- Update the Understanding Ladder → evidence map when a rung's evidence changes.
- Respect the **"Do not use"** list in `evidence-base.md`: nothing on it may appear in
  the skill as a recommended practice. Removing an item from that list needs new
  evidence cited in the same change.
- Numbers (effect sizes, study counts) must match the cited source. Mark unconfirmed
  DOIs or numbers with **[verify]** until checked against Crossref or the paper.
- Summarize sources in our own words — never copy text from papers.
- No learning styles or other debunked methods (e.g. VAK matching, "left/right brain"
  learners, the learning pyramid / "we remember 10% of what we read").

## Domain-agnostic
- Never hardcode content for a specific field. Examples must be generic or show several
  contrasting fields, never a single default domain.

## Release checklist
- [ ] `grep -n "\[verify" skills/findgap/references/evidence-base.md` returns nothing
      before tagging v0.1.0 (every number and DOI confirmed against its source).

## Local testing
- `~/.claude/skills/findgap` links to `skills/findgap` in this repo; edits are picked up
  in new Claude Code sessions.
