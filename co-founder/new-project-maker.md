# New Project Maker

_Owned by skillCoFounder.md. Absorbed from `skills/skill_newProjectMaker.md` (now safe to delete — this is the canonical copy)._

## Trigger

Lawrence says **"New Project"**, "add a project," "add project maker," or a clear equivalent meaning: start the new project intake workflow.

## What it does

Guides a multi-phase workflow for adding a new project to `app/projects/projects.js`. It:

1. Analyzes existing projects to learn the pattern and determine the next ID.
2. Generates a **Probe Prompt** Lawrence pastes into the **new project's own Claude Code session**.
3. Receives the **Report** Lawrence pastes back here.
4. Writes the new project object into `projects.js`.
5. Produces a **Screenshot Checklist** — one filename + one instruction per image.

If "End Today" happens mid-workflow, current phase and collected data get snapshotted into `## Session State` at the bottom of this file (in addition to the normal `co-founder/where-we-left-off.md` note pointing here), so the next session resumes exactly where this one left off.

---

## Behavior — Phase by Phase

### Phase 0 — Startup

When triggered:

1. Read `## Session State` at the bottom of this file.
   - If `phase` is not `idle`, resume from that phase and echo a one-line summary of where things stand.
   - If `phase` is `idle`, continue below.
2. Read `app/projects/projects.js` (the full file).
3. Find the highest `id` value across all projects. The new project's ID = highest + 1.
4. Tell Lawrence: *"Ready to add project #<ID>. I'll now generate the Probe Prompt — paste it into the new project's Claude Code session and bring the report back here."*
5. Move to Phase 1.

---

### Phase 1 — Generate Probe Prompt

Output the following block verbatim (fill in `<NEXT_ID>` with the real number):

---

**PROBE PROMPT — paste this into the new project's Claude Code:**

```
You are helping document this project for a portfolio. Please read the codebase thoroughly and produce a structured report. Be accurate and specific — this will be used to write the portfolio entry automatically.

Report format (fill every field):

PROJECT TITLE: <full display name>
URL TITLE: <kebab-case, used in URL — e.g. my-daily-routine>
DATE: <completion date in YYYY-MM-DD>
LIVE LINK: <full URL with https://>
GIT LINK: <full GitHub URL>

SHORT DESCRIPTION (1–2 sentences, ~200 chars max):
<write it here>

LONG DESCRIPTION (3–5 sentences, detailed, mention key tech and purpose):
<write it here>

TECH STACK (list each as "Display Name | icon-slug"):
Use only slugs from this list: NextJs | React | TailwindCss | js | ts | Mongodb | cloudflare | Firebase | framerMotion | redux
Example:
- Next.js | NextJs
- React | React
- TypeScript | ts

FEATURES (list every major page / feature section):
For each one use this structure:

## FEATURE: <title>
DESCRIPTION PARAGRAPHS:
- <paragraph 1>
- <paragraph 2 if needed>
LIST ITEMS:
- <bullet 1>
- <bullet 2>
- ...
SCREENSHOT SUGGESTION: <what to capture for this feature, e.g. "the dashboard with a few tasks loaded">

(Repeat ## FEATURE blocks for every distinct page or feature)

END OF REPORT
```

---

After Lawrence pastes the report back, move to Phase 2.

---

### Phase 2 — Parse the Report

Read the pasted report. Extract:
- `id` = next ID from Phase 0
- `title`, `urlTitle`, `date`, `liveLink`, `gitLink`
- `shortDescription`, `longDescription`
- `techStack` — convert to `[["Display Name", "/icon-slug.png"], ...]`
- `feaTures` array — convert each `## FEATURE` block to:
  ```js
  {
    title: "...",
    description: [
      {
        text: ["paragraph 1", "paragraph 2"],
        listItems: ["...", "..."],
        images: []   // filled in Phase 3
      }
    ]
  }
  ```

Assign image filenames now:
- Main image (first in `img` array): `P<ID>.png`
- Feature images: `P<ID>_<n>.png` starting at `P<ID>_1.png`, incrementing per feature that has a screenshot suggestion.
- Fill the `images` arrays in the feature objects.
- Leave the last "Technical Implementation" feature's images as `[]`.

Move to Phase 3.

---

### Phase 3 — Write to projects.js

1. Open `app/projects/projects.js`.
2. Insert the new project object **at the very beginning** of the `const projects = [` array (before the current first item).
3. Keep exact formatting style matching existing entries (2-space indent, trailing commas, same key order: id, title, urlTitle, date, img, liveLink, shortDescription, longDescription, techStack, gitLink, feaTures).
4. Save the file.
5. Confirm: *"Project #<ID> '<Title>' added to projects.js."*

Move to Phase 4.

---

### Phase 4 — Screenshot Checklist

**Standing rule (2026-08-21, corrected three times same day): stay in chat, not an Artifact — each stem gets its own fenced code block (with a real copy-icon button), and `.png` sits outside it.** The chat UI only renders a hover copy-icon button on triple-backtick fenced blocks, not on inline single-backtick spans — so each stem (`P<ID>`, `P<ID>_1`, `P<ID>_2`, ...) must be its own fenced block, containing only that stem and nothing else (no `.png`, no instruction text inside it). Immediately after the block, write `.png` as plain text, then the capture instruction as plain text or inline code on the same or next line. Format per item:

```
```
P<ID>_1
```
.png — <capture instruction>
```

First attempt published a whole HTML artifact with JS copy buttons (overkill). Second attempt used inline single-backtick spans, which have no copy button in this chat UI at all. Third (this) attempt uses fenced blocks, which do render a copy button, with the stem alone inside so the button copies exactly the stem.

Instructions should say exactly what page/state to capture and on what URL, e.g.:
- `take a screenshot of the landing page of example.com`
- `take a screenshot of the dashboard with sample data loaded at example.com/dashboard`
- `take a screenshot of the login page at example.com/login`

After publishing, tell Lawrence the artifact link and mark phase as `idle` in Session State, clearing stored data. The workflow is complete.

---

## "End Today" mid-workflow

If "End Today" fires while this workflow is not `idle`:

1. Overwrite `## Session State` below with the current phase and all data collected so far.
2. In `co-founder/where-we-left-off.md`, note that a new-project-maker run is mid-flight and to check this file.
3. If anything was learned about this portfolio project's conventions that isn't already in `CLAUDE.md`, edit `CLAUDE.md` precisely (only the relevant section).

---

## Scope

- Writes to: `app/projects/projects.js`, this file's `## Session State` section, `CLAUDE.md` (only if new conventions discovered)
- Reads: `app/projects/projects.js`, this file
- Never modifies: any other source file, public images (Lawrence places them manually)

---

## Edge cases

- **Report is incomplete**: Ask Lawrence for the missing fields before proceeding. Do not guess.
- **Duplicate urlTitle**: Warn Lawrence and ask for a different one before writing.
- **Resuming mid-session**: Read Session State, echo where we left off, continue from that phase.
- **No new conventions for CLAUDE.md**: Skip that step silently — don't add empty or redundant notes.
- **Tech stack icon not in the known list**: Use the closest match and note it to Lawrence.

---

## Known tech stack icon map

| Display Name | File path |
|---|---|
| Next.js / Next.js 16 | /NextJs.png |
| React / React 19.2 | /React.png |
| Tailwind CSS | /TailwindCss.png |
| JavaScript | /js.png |
| TypeScript | /ts.png |
| MongoDB | /Mongodb.png |
| Node.js | /node.png |
| Express.js | /express.png |
| PostgreSQL | /postgresql.png |
| Redis | /redis.png |
| Docker | /docker.png |
| Nginx | /nginx.png |
| BullMQ | /bullmq.png |
| Cloudflare | /cloudflare.png |
| Firebase | /Firebase.png |
| Framer Motion | /framerMotion.png |
| Redux Toolkit | /redux.png |

---

## Session State

```
phase: idle
next_id: null
project_title: null
data_collected: null
```
<!-- Last completed: Project #25 "Real Caffeine Calculator" on 2026-06-16. Full workflow finished. -->
