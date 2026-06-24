# skill_newProjectMaker

## Trigger

User says `@skills/skill_newProjectMaker.md` or `skill_newProjectMaker`, or any equivalent that means: start the new project intake workflow.

---

## What it does

This skill guides a multi-phase workflow for adding a new project to `app/projects/projects.js`. It:

1. Analyzes existing projects to learn the pattern and determine the next ID
2. Generates a **Probe Prompt** the user pastes into the **new project's own Claude Code session**
3. Receives the **Report** that Claude Code pastes back here
4. Writes the new project object into `projects.js`
5. Produces a **Screenshot Checklist** — one filename + one instruction per image

When the user says **"End Today"**, the skill writes its current phase and collected data into the `## Session State` section at the bottom of this file so the next session resumes exactly where this one left off.

---

## Behavior — Phase by Phase

### Phase 0 — Startup

When triggered (`@skills/skill_newProjectMaker.md`):

1. Read `## Session State` at the bottom of this file.
   - If `phase` is not `idle`, resume from that phase and echo a one-line summary of where things stand.
   - If `phase` is `idle`, continue below.
2. Read `app/projects/projects.js` (the full file).
3. Find the highest `id` value across all projects. The new project's ID = highest + 1.
4. Tell the user: *"Ready to add project #<ID>. I'll now generate the Probe Prompt — paste it into the new project's Claude Code session and bring the report back here."*
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

After the user pastes the report back, move to Phase 2.

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

Output a checklist in this exact format — one entry per image file the project needs:

```
SCREENSHOT CHECKLIST for <Title>

P<ID>.png
`<instruction for the main/hero image>`

P<ID>_1.png
`<instruction for feature 1>`

P<ID>_2.png
`<instruction for feature 2>`

...
```

Instructions should say exactly what page/state to capture and on what URL, e.g.:
- `take a screenshot of the landing page of example.com`
- `take a screenshot of the dashboard with sample data loaded at example.com/dashboard`
- `take a screenshot of the login page at example.com/login`

After outputting this, mark phase as `idle` in Session State and clear stored data. The workflow is complete.

---

## "End Today" command

When the user says **End Today** (at any point during this workflow):

1. Determine current phase and all data collected so far.
2. Overwrite the `## Session State` section at the bottom of **this file** with the current snapshot (see format below).
3. If anything was learned about this portfolio project's conventions that isn't already in `CLAUDE.md`, append a brief note under a `## New Project Maker Notes` section in `CLAUDE.md`.
4. Reply: *"Session saved at Phase <N>. Next session will resume from here."*

---

## Scope

- Writes to: `app/projects/projects.js`, this skill file's `## Session State` section, `CLAUDE.md` (only if new conventions discovered)
- Reads: `app/projects/projects.js`, this skill file
- Never modifies: any other source file, public images (user places them manually)

---

## Edge cases

- **Report is incomplete**: Ask the user for the missing fields before proceeding. Do not guess.
- **Duplicate urlTitle**: Warn the user and ask for a different one before writing.
- **User resumes mid-session**: Read Session State, echo where we left off, continue from that phase.
- **No new conventions for CLAUDE.md**: Skip that step silently — don't add empty or redundant notes.
- **Tech stack icon not in the known list**: Use the closest match and note it to the user.

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
