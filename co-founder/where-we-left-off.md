# Where We Left Off

_Owned by skillCoFounder.md — read this first on every session start, overwritten on every "End Today."_

## Current focus

Two-part session: small landing/contact tweaks, then a real restructuring of how projects and client-status are represented across the site.

1. **Landing photo + YouTube link**: swapped the Landing About section's photo from `/22.jpg` (portrait, `aspect-[3/4]`) to `/ProfilePic27.png` (square, frame changed to `aspect-square`) in `components/LandingAbout.jsx`. Added a YouTube link (`https://www.youtube.com/channel/UCQGdRvyFVqexgZWts4O3jsA`) to all three contact-adjacent components — `Footer.jsx` (icon row via `SiYoutube`), `Contact.jsx` and `LandingContact.jsx` (tech-stack icon grid, same `[name, null, null, IconComponent]` pattern as Fiverr/Contra).

2. **New project taxonomy — asked clarifying questions first, then implemented**: every entry in `app/projects/projects.js` now has `type: "saas" | "clients-project" | "hobby-project"`. Client's-project (2): Library Management, Facelees. SaaS (3): My Daily Routine, Real Caffeine Calculator, Budget Meal Maker. Hobby-project (18): everything else, including Chemistry MCQ Test (reclassified — was implicitly treated as client work before). Client and SaaS entries got `gitLink: null` — the existing `{gitLink && ...}` conditional rendering in `ProjectCard.jsx`/`ProjectCardDetailed.jsx`/`SingleProject.jsx` already hides the GitHub button on falsy, so no UI code changes were needed there, only data.

3. **Mr. Kabir testimonial deleted from the live MongoDB testimonials collection** (Lawrence confirmed via AskUserQuestion) — his testimonial claimed a client relationship over Chemistry MCQ Test, which is no longer accurate now that project is hobby-classified. Also stripped from `scripts/seed-testimonials.mjs`'s `SEED_DATA` so a future re-seed (empty-collection guard) can't bring him back.

4. **Blogs/Writing removed entirely** (Lawrence confirmed full deletion, not just hiding): deleted `app/blogs/`, `app/blog/[urlTitle]/`, `app/blogs/blogs.js`, and all Blog* components (`Blogs.jsx`, `LandingBlogs.jsx`, `BlogCard.jsx`, `BlogCardDetailed.jsx`, `SingleBlog.jsx`). Removed the nav link (`TopNavbar.jsx`), the home-page section (`LandingPage.jsx`), the "Blogs:" section in the AI chatbot bio (`app/myself.js`), and README's "Writing" section.

5. **`/projects` filter bar**, built and then corrected twice at Lawrence's direction:
   - First built as `sticky`, inside the padded content flow — wrong, it pushed the "My Projects" heading/divider down from their original position.
   - Corrected to `fixed` (out of flow), positioned right under the main navbar (`top-14`/`sm:top-14`/`md:top-16`, matching `TopNavbar.jsx`'s breakpoints) — heading/divider now sit at their original pre-feature position again.
   - Then found overlapping the scrollbar — fixed by replicating `TopNavbar.jsx`'s exact scrollbar-measurement pattern (`document.getElementById("app-scroll-root")`, `offsetWidth - clientWidth`, applied as an inline `right` style) instead of a plain `inset-x-0`/`w-full`.
   - Filters: All / SaaS / Client Projects / Hobby Projects, client-side, driven by the new `type` field.

6. **CLAUDE.md updated live during the session** (not deferred to End Today): Pages table (blog rows removed, `/projects` row now documents the filter bar), new "### Projects" pattern section documenting `type` and the `gitLink: null` convention, Testimonials section's stale "unlike projects.js/blogs" wording fixed.

7. **Outbound mail sent to both destinations** — `Client List Correction + Project Taxonomy.md` to `skillsUpdateMentor` and `jobCrackMentor`: corrects a fact from an earlier mail (Kabir was named as a real client; he no longer is), and shares the new `saas`/`clients-project`/`hobby-project` taxonomy. Judged relevant because it corrects previously-sent information, not just routine polish.

8. **"Everywhere's about" sync**: not run as a separate step — no new skill/stack piece was verified this session (this was reclassification + feature removal, not a new capability), so nothing there to sync beyond what's already covered by items 4 and 6 above.

## Immediate next step

Nothing code-blocking. Carried forward from prior sessions, still open:
- Add the six `S3_*` env vars to Vercel (testimonial uploads still won't work in prod without them).
- Keep or gut the dead `/register` route + mockup `/payment` surface?
- Icons for Testing & Tooling / CI/CD / Astro chips, or stay text-only permanently?
- `app/myself.js`'s Experience section says the freelance role started "Jan 2026," but `app/about/experiences.js` says "Oct 2025" — real discrepancy, still unfixed, noticed twice now.

## Open questions

None outstanding — both structural decisions this session (Kabir testimonial deletion, full vs. partial blog removal) were confirmed directly with Lawrence via AskUserQuestion before implementing.

## Blockers

None on my side. Lawrence needs to add the `S3_*` vars to Vercel for testimonial uploads to work in production (long-standing, unrelated to this session).

## Dev server

Not running — killed clean this session. See `co-founder/dev-server.md`.
