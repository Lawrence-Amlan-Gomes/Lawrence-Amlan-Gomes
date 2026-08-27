# Where We Left Off

_Owned by skillCoFounder.md — read this first on every session start, overwritten on every "End Today."_

## Current focus

Same long Solvendix session continued (see `session-log.md` for the full two-part writeup). After yesterday's shared-database negotiation, today's second half was: fixed GitHub→Coolify auto-deploy (was never connected), shipped the agreed testimonial schema fields, caught and fixed a real live-data gap on the shared testimonials collection, and found a real, currently-unfixed bug (MinIO has no CORS config, breaking browser-based photo/video uploads).

## Immediate next step — tomorrow, per Lawrence

**Fix the MinIO CORS issue.** In Coolify: open the MinIO service → Environment Variables → add `MINIO_API_CORS_ALLOW_ORIGIN` (scope to the real domains, e.g. `https://lawrenceamlangomes.com,https://solvendix.com`, rather than `*`) → restart the MinIO service. This needs Lawrence's hands in Coolify — neither app's code can fix it. Until it's done, the public testimonial submission form's photo/video upload is likely silently broken for real visitors — this is a live bug, not a theoretical one, verified independently this session (I reproduced the same `NoSuchCORSConfiguration`/`501 NotImplemented` errors myself against the shared bucket).

After that's fixed, the remaining query-filtering work is still open: `getAllTestimonials()` in `db/queries.js` currently returns everything unfiltered (used by both admin and public pages) — needs a public-facing variant that filters `status: "approved"` and (eventually) `visibleOn` including `"portfolio"`, without breaking the admin panel's need to see everything regardless of status.

## The Solvendix database decision — still true, know this before touching anything DB-related

Solvendix connects directly to this app's own `lawrenceAmlanGomes` database using the **root** credential over the **public** address (`185.201.8.71:27018`) — not an isolated database, not a scoped credential. This was Lawrence's explicit, informed override of the safer setup we'd built first. Current real state, unchanged since yesterday: public port open, root credential shared externally, on purpose.

## What actually shipped today (code, not just talk)

- `models/testimonial-model.js`: added `visibleOn: [String]` (default `["portfolio"]`), `solvendixCaseStudyRef: String | null`, `status: enum["pending","approved","rejected"]` (default `"approved"`). Schema-only — no query filtering built yet, see Immediate next step above. Committed and pushed (`8188b40`).
- Live data backfill on the shared `testimonials` collection (both Mr. Zaman and Mr. Musfiq docs): added `"portfolio"` to `visibleOn` via `$addToSet` (additive, preserved Solvendix's own `"solvendix"` tag), set `status: "approved"` where missing. Verified independently by both sides afterward.
- GitHub webhook added manually in the repo's Settings → Webhooks (Coolify's GitHub webhook URL + secret, push events only) — auto-deploy confirmed working by watching the schema-fields push actually land.

## Open questions

- Cross-linking (solvendix.com ↔ lawrenceamlangomes.com) — still not implemented on either side, still a confirmed real requirement.
- Case study client consent (Zaman, Musfiq) for Solvendix — still not done.
- `skillsUpdateMentor` mail destination is still broken (see `mail-relay.md`) — needs Lawrence to confirm the real current path before it's usable again.

## Blockers

MinIO CORS — see Immediate next step. Everything else is either done or has a clear next action, nothing else blocking.

## Other things worth knowing next session

- Solvendix's Claude independently found and fixed something on their own: the two legacy testimonial `photoUrl` values were relative paths into this project's own `public/` folder (`/C1pic.png`, `/C3pic.png`), never actually in MinIO — a pre-existing bug, unrelated to anything built this session. They located the real image files and uploaded them into the shared bucket themselves; both docs' `photoUrl`/`photoKey` were updated. Verified this myself afterward: the new URL resolves (200), and `lawrenceamlangomes.com/testimonials` still returns 200. Not something I need to redo.
- Direct cross-session messaging (`ListAgents`/`SendMessage`) with Solvendix's Claude worked well all through today's second half — several real back-and-forths (CORS discovery, backfill confirmation) happened this way with no manual copy-paste needed.
- `CLAUDE.md` updated: new Known Gaps entry for the MinIO CORS bug, new Environment Variables note about the manual GitHub webhook fix.
- Carried forward from before (still untouched, still open): whether to keep or gut `/register`+`/payment` mockups, `@emailjs/browser` unused dependency, text-only skill chip icons.

## Dev server

Not running — stayed off the whole second half of today's session; verification was done via `npm run build` and direct database/HTTP checks instead.
