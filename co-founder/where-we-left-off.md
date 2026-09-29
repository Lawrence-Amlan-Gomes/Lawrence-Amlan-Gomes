# Where We Left Off

_Owned by skillCoFounder.md — read this first on every session start, overwritten on every "End Today."_

## Current focus

As of 2026-09-29, the portfolio positions Lawrence as a "Full-Stack Developer & AI Engineer". The copy and chat protocol updates were committed as `6a263a1`, pushed to `main`, and deployed successfully. No chat is active and no prior peer or instructor carries forward.

## Immediate next step (ask/do first next session)

1. **www → apex redirect** — last checked 2026-09-20: the Coolify `non-www` setting had not redirected `www` requests. Recheck and, if still broken, implement a Next.js redirect.
2. **Gemini 503 retry** — optional single automatic retry for the chatbot's transient "high demand" responses.

Older portfolio loose ends, not rechecked since 2026-09-20: confirm production Mongo connection and old root-password rotation status; review Mr. Zaman's testimonial wording and Fiverr's Mr. Kabir testimonial claim.

## What happened this session

- Updated the portfolio's AI engineering positioning, service descriptions, skills, experience, metadata, README, and chatbot bio; committed, pushed, and verified the live deployment.
- Replaced the Cofounder Chat rules and removed the obsolete chat and mail relay files. Historical exchanges remain in `session-log.md` only.
- Pre-existing `CLAUDE.md` deletion remains unstaged and uncommitted per Lawrence's instruction.

## Blockers

No active blocker. The redirect status and older portfolio loose ends need a fresh check before action.

## Dev server

Not running. The successful production build left `.next` in production mode; clear it before the next `npm run dev`.
