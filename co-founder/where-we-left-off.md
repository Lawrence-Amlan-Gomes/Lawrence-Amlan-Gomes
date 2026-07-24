# Where We Left Off

_Owned by skillCoFounder.md — read this first on every session start, overwritten on every "End Today."_

## Current focus

No portfolio code changed this session — pure co-founder tooling/process work, three pieces:

1. **Built the inbound half of Mail Relay.** Created `mail-box/` at the project root — this project's own mailbox, where sibling cofounder projects write mail files addressed to me. `co-founder/mail-relay.md` now has a full **Inbound** section (mirrors the existing **Outbound** section): checked automatically on every session start (Startup behavior step 3), absorb anything valuable, delete each file once processed, leave non-mail files alone and flag them instead of guessing. Actually exercised it this session: two mails arrived from **DSA Visualized** (Lawrence's separate DSA-practice project) — a full 52-problems-solved snapshot and a session summary noting DSA Visualized now mails this project's `mail-box/` as a standing recipient going forward. Both absorbed into a lightweight cross-session memory note (`mail_box_senders.md`) and deleted per their own "delete after reading" instruction.
2. **Defined the "everywhere's about" public-facing sync rule** (End Today step 6). Whenever a session verifies a new skill, ships a project, or changes a client/experience fact, six independently-duplicated surfaces get synced automatically, no confirmation needed: `README.md`, `app/about/skills.js`, `components/About.jsx`, `components/LandingAbout.jsx` (4 separate spots in that one file), `app/myself.js` (the Gemini chatbot's own bio), and `app/about/experiences.js` (the actual Experience data — "current experience" specifically means whichever entry has an open-ended duration, i.e. ends in "Present"). Skill depth on the live page stays **curated/skim altitude** by design, not expanded to match the full internal reference. If nothing changed in a session, the whole step is skipped silently — confirmed explicitly with Lawrence, this doesn't fire on tooling-only sessions like this one.
3. **Chained `@skillGit.md` onto the end of every End Today** (step 8, new). Build check → fix → commit → push to `main` now runs automatically right after the stand-up reply, no separate ask required going forward. Still usable standalone any other time too.

## Immediate next step

Nothing in-flight. Watch for: DSA Visualized will likely keep mailing this project's `mail-box/` every session going forward per its own new mail system — expect that to be routine, not surprising.

## Open questions

- Still open from earlier sessions: keep or gut the dead `/login`/`/register` + broken Google OAuth + mockup `/payment` surface?
- Icons for Testing & Tooling / CI/CD chips, or stay text-only permanently?
- Still unconfirmed: is the JobCrack mailbox exclusively a mail-drop, or does it double as a data folder for something else (it had 5 pre-existing non-mail files before mail-relay work started)?

## Blockers

None.

## Dev server

Not running — killed clean at End Today. See `co-founder/dev-server.md`.
