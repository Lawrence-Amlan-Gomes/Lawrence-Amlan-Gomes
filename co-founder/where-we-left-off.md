# Where We Left Off

_Owned by skillCoFounder.md — read this first on every session start, overwritten on every "End Today."_

## Current focus

Big infrastructure session, two threads:

1. **Chat Relay with Solvendix** (Lawrence's business site) about sharing a database between the two sites. Agreed shape: a `founder_profile` collection (and later, maybe read-only testimonials) as the only genuinely shared data, isolated from each app's own DB. Landed on self-hosted Mongo on Lawrence's Coolify VPS (not a shared Atlas cluster, which was the original proposal) once Lawrence decided to move this project off Vercel onto the same Coolify/Hostinger VPS as Solvendix.
2. **Actually executing that migration**: moved this portfolio's hosting from Vercel to self-hosted Coolify (`185.201.8.71`, domain `lawrenceamlangomes.com` already cut over — no more sslip.io preview), and migrated this app's own MongoDB data off Atlas onto a new self-hosted Mongo instance on that same VPS via `mongodump | mongorestore` (13 docs: 8 messages, 2 testimonials, 2 users, 1 settings — all verified intact in the `lawrenceAmlanGomes` database there).

## Immediate next step

**Not yet confirmed working end-to-end.** The last action before "End Today" was fixing `MONGODB_CONNECTION_STRING` in Coolify (it had gone fully `undefined` at build time on the second-to-last attempt, then I gave Lawrence the corrected full value — host, db name, `authSource=admin` — and told him to redeploy). **I never got confirmation that final redeploy succeeded or that testimonials actually render on the live site.** First thing next session: check `https://lawrenceamlangomes.com/testimonials` actually shows the 2 real testimonials (Mr. Zaman + one more), and that `/admin`, `/admin/testimonials`, `/about`, `/case-studies` all build/render fine (these are the pages that call `dbConnect()` during static prerendering).

Also unverified since the platform switch: **Google Sign-In on the new Coolify deployment** — domain didn't change so it should still work, but this was never actually re-tested after cutover.

## Open questions

- Is Solvendix's app in the same Coolify **Project** as this one? Asked Lawrence early in the session, never got a confirmed answer. Matters once Solvendix actually builds the `founder_profile` read — if they're in different Projects, the internal Coolify hostname won't resolve for them and either the apps need to move into the same Project or the DB's network needs explicit cross-Project attachment.
- Database name/shape for the shared `founder_profile` collection was never finalized with Solvendix — that's the actual point of the "next session" chat.

## Blockers

None on my side technically, but the deploy's real-world correctness is unverified — treat as "probably broken until checked," not "done."

## Other things worth knowing next session

- **New shared Mongo instance is currently public** (`185.201.8.71:27018`, root creds) — needed to stay open so I could run migration/diagnostic commands from my own machine, and so far also so Lawrence's local dev (`.env.local`, updated this session to point at this same instance) can reach it without VPN/internal access. Longer-term this should probably move to internal-only + Lawrence using the Coolify terminal for admin tasks, but that trade-off was never explicitly resolved — flag if it comes up.
- **Unrelated but discovered this session**: Lawrence's other SaaS product, My Daily Routine, has its own separate MongoDB on this same VPS (`mongodb-database-my-daily-routine`) that's *also* been publicly exposed with root creds for 12+ days, totally independent of anything done this session. Not touched, not this project's problem to fix, just flagged to Lawrence for awareness.
- `CLAUDE.md` updated this session: Database/Environment Variables sections now describe Coolify hosting + self-hosted Mongo instead of Vercel + Atlas, and note the buildtime-env-var and db-name-in-connection-string gotchas hit repeatedly during this migration.
- Local `.env.local`'s `MONGODB_CONNECTION_STRING` was updated to match the new Coolify Mongo (was still pointing at Atlas before this session).
- Carried forward from before (still untouched, still open): whether to keep or gut `/register`+`/payment` mockups, `@emailjs/browser` unused dependency, text-only skill chip icons.

## Dev server

Not running — wasn't needed for most of this session (pure Coolify/VPS ops), started briefly then killed clean at End Today.
