# Where We Left Off

_Owned by skillCoFounder.md — read this first on every session start, overwritten on every "End Today."_

## Current focus

As of 2026-09-29, the portfolio positions Lawrence as a "Full-Stack Developer & AI Engineer" and the dev server is running on port 3002. The 2026-09-20 operational questions below remain unconfirmed. The Cofounder Chat protocol was replaced on 2026-09-29; no chat is active and no prior peer or instructor carries forward.

## Immediate next step (ask/do first next session)

1. **My Daily Routine (Coolify) still NOT redeployed** with the new Google client. It has paying users. Blocked on Lawrence confirming the new client's consent screen is **"In production"** (not "Testing") in Google Cloud Console. The env vars (new client ID + secret) are already set on its Coolify app; only the redeploy is missing. Its uuid `nhgimbntwvp5gxy4p9ivw5qt`.
2. **Solvendix (Coolify) Google client** — unanswered whether to switch it to the new client. Can't read its current values (token lacks read:sensitive); separate business with its own cofounder. Needs `https://solvendix.com/api/auth/callback/google` registered first if yes.
3. **www → apex redirect on Coolify is not working** (setting saved as `non-www`, redeployed + restarted, www still 200). Offered a `next.config.js` `redirects()` fix (commit + push) — unanswered. I'd just do it.
4. **Other projects with a `GEMINI_API_KEY`** (My Daily Routine, Solvendix, Cloud Flow Library, Chemistry MCQ Test, recruiter-reply): if they share the dead old key their chatbots are broken; they'd also need `gemini-2.5-flash` → newer model + the thought-signature fix in their own code. Unanswered. Not this repo's code to edit.
5. Consider rotating the Gemini key later (it was pasted in chat).
6. Optional: one automatic retry in `app/server.js` for Gemini's transient 503 "high demand".

Carried-over older loose ends, still unconfirmed: root Mongo password rotation on the old shared instance; production switch to Coolify's internal Mongo address; Mr. Zaman's testimonial still says "library management system"; Fiverr's wrong Mr. Kabir testimonial claim; cross-linking with solvendix.com; case-study client consent for Solvendix reuse.

## What happened this session

- Coolify API token stays live (Lawrence's 2026-09-20 decision). No more delete reminders.
- On 2026-09-29, updated the portfolio's AI engineering positioning and replaced all live cofounder chat/relay rules. Older exchanges remain only in `session-log.md` as history.

## Blockers

None technical — everything waits on Lawrence's answers (consent-screen status for item 1, Solvendix switch, redirect approach).

## Dev server

Running on port 3002. See `co-founder/dev-server.md` for its tracked PID and shutdown rule.
