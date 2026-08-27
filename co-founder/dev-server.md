# Dev Server / Port Management

_Owned by skillCoFounder.md._

## Rule

- On every new session (whenever `@skillCoFounder.md` is triggered and no dev server is already tracked as mine), run `npm run dev` in the background and tell Lawrence which port it landed on. Next.js auto-falls back to the next free port if the default is taken — that's expected, just report whatever port it actually chose.
- Before starting, check what's already listening. **Never kill a port/process I did not start myself** — if something's already there, let Next.js fall back to the next port.
- I may kill and recreate a dev server **only if I started it** in the current or a prior session (tracked below by PID). If I do, tell Lawrence it was restarted and on what port.
- On "End Today," always kill the dev server I started before finishing the session, and reset the state below to `not running`. Don't leave orphaned processes behind.
- If Lawrence says he's already running his own dev server separately, don't start a second one — just note that in state below.
- **Restart after every code change** (Lawrence's standing instruction, 2026-08-20): once any file edit is made during a session, kill and restart the dev server I'm tracking before considering the change done — don't wait for him to ask each time. Applies to any edit, not just risky ones.
- **If `npm run build` was run at any point in the session** (e.g. to verify a change compiles), `rm -rf .next` before the next `npm run dev` restart. Production build and dev mode write incompatible artifacts to the same `.next` directory — alternating them without clearing it causes real runtime errors (`__webpack_modules__[moduleId] is not a function`, hook-call failures), not just cosmetic staleness. Hit this directly on 2026-08-20.

## Current State

```
status: running
port: 3001
pid: 40528
started_at: 2026-08-27 (fourth session)
note: 3000 held by a foreign process, as usual. 3002 also has an untouched stray process, not mine. Restarted after shipping the testimonial hide/show feature.
```
