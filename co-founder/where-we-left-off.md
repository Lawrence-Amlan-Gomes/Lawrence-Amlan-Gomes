# Where We Left Off

_Owned by skillCoFounder.md — read this first on every session start, overwritten on every "End Today."_

## Current focus

No portfolio code/content changed this session — pure co-founder rules/process work, three pieces:

1. **Processed inbound mail from High Level Design** (5 mails, 2026-07-24 through 2026-07-28) — Lawrence's separate system-design learning project. Absorbed into memory (`mail_box_senders.md`): its 31-topic curriculum is now 27/31 done (Core Concepts 9/9, Key Technologies 10/10, Common Patterns 8/8, all mastered) — only Practice Designs (4 topics) remains. All 5 files deleted per protocol.
2. **Locked in two new standing rules, explicitly requested by Lawrence:**
   - **Silent execution**: no play-by-play narration while working — execute the task, then report once it's done. Exception: still speak up for genuine blockers, decisions only Lawrence can make, or risky/hard-to-reverse actions needing confirmation. Saved to memory (`feedback_silent_execution.md`).
   - **Git workflow**: `skillGit.md` step 2 now defaults to `git add -A` (was "prefer specific files") — Lawrence's explicit instruction. The pre-stage `git status` secret-check stays as the safeguard.
3. **Expanded the "everywhere's about" public-facing sync rule** (skillCoFounder.md step 6): added `components/LandingStatsStrip.jsx` (the four hardcoded home stat counters) as a real sync target — bump only when a milestone genuinely crosses. Clarified that `/projects` + `/testimonials` (and their home previews) stay in scope for the "does this match reality" check too — they just self-render from `app/projects/projects.js` / `app/testimonials/testimonials.js`, so any fix lands in the data file, not the component.

## A real clarification worth remembering

Discussed *why* DSA (DSA Visualized) and System Design (High Level Design) skills don't get synced to the public site even though they're genuinely Lawrence's skills: it's not that mail-derived skills don't count — it's a **prior confirmed decision** to keep their granular/named detail (problem counts, named topic lists) off the public skim-altitude surfaces, treated as interview-prep altitude instead. Confirmed directly with Lawrence: a genuinely *new* stack skill reported via mail (e.g. a hypothetical "mastered Angular.js") WOULD get synced automatically at End Today — nothing is blocking that case, since no prior exclusion decision applies to it. Two things that were never actually decided either way and remain open if Lawrence wants to revisit: whether a single plain "System Design" or "DSA / Problem Solving" chip (no breakdown) belongs on the public skills page.

## Immediate next step

Nothing in-flight. Watch for: more High Level Design mail as it progresses through Practice Designs (last group). Revisit the open "System Design / DSA as a plain public chip" question whenever Lawrence wants to.

## Open questions

- Still open from earlier sessions: keep or gut the dead `/login`/`/register` + broken Google OAuth + mockup `/payment` surface?
- Icons for Testing & Tooling / CI/CD chips, or stay text-only permanently?
- Still unconfirmed: is the JobCrack mailbox exclusively a mail-drop, or does it double as a data folder for something else?
- New: add a plain "System Design" and/or "DSA / Problem Solving" chip to the public skills page, or keep both internal-only? Undecided, Lawrence's call.

## Blockers

None.

## Dev server

Not running — killed clean at End Today (was on port 3001 this session; had to run `npm install` first since `node_modules` was missing on this checkout). See `co-founder/dev-server.md`.
