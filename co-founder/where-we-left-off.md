# Where We Left Off

_Owned by skillCoFounder.md — read this first on every session start, overwritten on every "End Today."_

## Current focus

Short second session on 2026-09-20: no code changes. Lawrence decided to keep the Coolify API token live, and I opened a direct chat with the My Daily Routine cofounder (`daily-routine-63`) to tell it how to reach Coolify and where the Google client stands. Chat ended by Lawrence; no reply came back before it ended. Portfolio chatbot and Google login are live and unchanged.

## Immediate next step (ask/do first next session)

1. **My Daily Routine (Coolify) still NOT redeployed** with the new Google client. It has paying users. Blocked on Lawrence confirming the new client's consent screen is **"In production"** (not "Testing") in Google Cloud Console. The env vars (new client ID + secret) are already set on its Coolify app; only the redeploy is missing. Its cofounder now knows how to reach Coolify (token by file path only) and was told NOT to redeploy or change env until Lawrence says so in its window. Its uuid `nhgimbntwvp5gxy4p9ivw5qt`.
2. **Solvendix (Coolify) Google client** — unanswered whether to switch it to the new client. Can't read its current values (token lacks read:sensitive); separate business with its own cofounder. Needs `https://solvendix.com/api/auth/callback/google` registered first if yes.
3. **www → apex redirect on Coolify is not working** (setting saved as `non-www`, redeployed + restarted, www still 200). Offered a `next.config.js` `redirects()` fix (commit + push) — unanswered. I'd just do it.
4. **Other projects with a `GEMINI_API_KEY`** (My Daily Routine, Solvendix, Cloud Flow Library, Chemistry MCQ Test, recruiter-reply): if they share the dead old key their chatbots are broken; they'd also need `gemini-2.5-flash` → newer model + the thought-signature fix in their own code. Unanswered. Not this repo's code to edit.
5. Consider rotating the Gemini key later (it was pasted in chat).
6. Optional: one automatic retry in `app/server.js` for Gemini's transient 503 "high demand".

Carried-over older loose ends, still unconfirmed: root Mongo password rotation on the old shared instance; production switch to Coolify's internal Mongo address; Mr. Zaman's testimonial still says "library management system"; Fiverr's wrong Mr. Kabir testimonial claim; `skillsUpdateMentor` mail path broken; cross-linking with solvendix.com; case-study client consent for Solvendix reuse.

## What happened this session

- **Decision locked**: Coolify API token stays live (Lawrence: "leave it as is"). No more delete reminders. Logged in `decisions-locked.md`, memory `coolify-api-access` updated. It's shared with other sessions by file path only, never by value.
- **Direct chat with `daily-routine-63`** (My Daily Routine): one message sent — Coolify API base, token location (`.env.local` → `COOLIFY_TOKEN`), its app uuid, env-update and redeploy calls, the new-client state, and the hold on redeploy. No secret values sent. Ended by Lawrence; no reply seen.
- Dev server started on 3002 (3000/3001 foreign), killed clean at End Today. No mail in, none out (nothing in this session mattered to the sibling mailboxes). No `CLAUDE.md` or public-facing changes needed.

## Blockers

None technical — everything waits on Lawrence's answers (consent-screen status for item 1, Solvendix switch, redirect approach).

## Dev server

Not running. `npm run build` is run by skillGit right after End Today, so `.next` holds a production build: `rm -rf .next` before the next `npm run dev`.
