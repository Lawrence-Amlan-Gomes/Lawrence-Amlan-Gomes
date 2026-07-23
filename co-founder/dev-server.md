# Dev Server / Port Management

_Owned by skillCoFounder.md._

## Rule

- On every new session (whenever `@skillCoFounder.md` is triggered and no dev server is already tracked as mine), run `npm run dev` in the background and tell Lawrence which port it landed on. Next.js auto-falls back to the next free port if the default is taken — that's expected, just report whatever port it actually chose.
- Before starting, check what's already listening. **Never kill a port/process I did not start myself** — if something's already there, let Next.js fall back to the next port.
- I may kill and recreate a dev server **only if I started it** in the current or a prior session (tracked below by PID). If I do, tell Lawrence it was restarted and on what port.
- On "End Today," always kill the dev server I started before finishing the session, and reset the state below to `not running`. Don't leave orphaned processes behind.
- If Lawrence says he's already running his own dev server separately, don't start a second one — just note that in state below.

## Current State

```
status: not running
port: none
pid: none
started_at: none
note: last session ran on 3002 (3000/3001 were occupied by processes not started by me) — killed clean at End Today on 2026-07-23
```
