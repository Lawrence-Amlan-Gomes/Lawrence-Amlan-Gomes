# Where We Left Off

_Owned by skillCoFounder.md — read this first on every session start, overwritten on every "End Today."_

## Current focus

Shipped a real new feature — Case Studies — plus several small content/UI cleanups Lawrence asked for directly (no Chat/Mail Relay this session).

1. Built `/case-studies` + `/case-study/[urlTitle]`, backed by `app/case-studies/case-studies.js`, scoped to the 2 client-project entries (Facelees, Library Management). Confirmed scope with Lawrence via AskUserQuestion first (data file location, which project types qualify) before writing content.
2. Wired case-study links into project cards (landing + `/projects`), project detail pages, and testimonial cards (testimonials now say "View Case Studies" when a case study exists for that project's testimonial).
3. Small polish: saas projects say "See Live" not "Live Demo"; Contact page says "Discovery Call" not "Meeting"; theme toggle redesigned as an animated pill switch instead of a static PNG icon swap.
4. **Removed Resume entirely** at Lawrence's request: `/resume` route, `components/Resume.jsx`, `public/resume.jpg`/`resume.pdf`, and the landing-page "Resume" button — all gone.
5. Removed the "· Based in Dhaka, BD" tag from the landing About bio.
6. `CLAUDE.md` synced: new Case Studies pattern section, `/case-studies`/`/case-study/[urlTitle]` route rows, saas "See Live" note, `/resume` row removed.

## Immediate next step

Nothing code-blocking. Carried forward, still open:
- Add the six `S3_*` env vars to Vercel (testimonial uploads still won't work in prod without them).
- Keep or gut the dead `/register` route + mockup `/payment` surface?
- `@emailjs/browser` is still a fully unused dependency — never followed up on whether to remove it from `package.json`.
- Icons for Testing & Tooling / CI/CD / Astro chips, or stay text-only permanently?
- Case Studies currently covers only the 2 existing client projects — revisit if a new client project ships and should get one too.

## Open questions

None outstanding.

## Blockers

None on my side. Lawrence needs to add the `S3_*` vars to Vercel for testimonial uploads to work in production (long-standing, unrelated to this session).

## Dev server

Not running — started at session start (landed on 3001, port 3000 held by a foreign process as usual), restarted several times mid-session after edits per the standing rule, hit one stale-`.next` cache error after deleting `Resume.jsx` (fixed via `rm -rf .next`), killed clean at End Today.
