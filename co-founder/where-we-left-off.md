# Where We Left Off

_Owned by skillCoFounder.md — read this first on every session start, overwritten on every "End Today."_

## Current focus

Migration fully complete end to end. `lawrenceamlangomes.com` and `www` serve live from Vercel (confirmed via `server: Vercel` header, testimonials rendering, SSL working). Code committed as `8dfa2a1` and pushed to `main`, auto-deploy via GitHub confirmed working. The old Coolify application (`qkf3isdfpvtbagqodmpg52qy`) and its database (`mongodb-lawrence-amlan-gomes`, `eyco56dho6ac0cmlnldal7xl`) are both deleted — confirmed gone via the Coolify API (404 on the app, absent from both listings). My Daily Routine and Solvendix, which share the same Coolify instance, were verified live and untouched afterward.

## Immediate next step (ask/do first next session)

Nothing pending from this migration. Possible follow-ups if Lawrence wants them later:
1. The separate, unrelated dead subsystem found during this session (`/profile`, `/changePassword`, `RegistrationForm.jsx`, etc. — see below) is still in the repo; a full sweep was explicitly out of scope this session.
2. Older loose end, not rechecked recently: Fiverr's Mr. Kabir testimonial claim (now moot if review content is Solvendix-sourced only — recheck relevance).

## What happened this session

- **Architecture decision locked in with Lawrence**: testimonials are now fully static (no DB, no public submissions, no admin editing), sourced by manually re-running `node scripts/sync-testimonials-from-solvendix.mjs` whenever Lawrence says a new client was added in Solvendix's own DB. `/admin` and `/login` removed entirely (nothing left for admin to manage).
- Built `app/testimonials-data.js` (static data, 2 real testimonials — Mr. Musfiq/facelees, Mr. Zaman/cloud-flow-library) + the sync script (downloads photos to `public/`, validates `solvendixCaseStudyRef` against `app/projects/projects.js`'s real urlTitles and warns on drift — caught and fixed one real stale reference this run: Solvendix still said "library-management", current slug is "cloud-flow-library").
- Removed: dynamic testimonial CRUD/admin/upload stack (`app/actions/testimonials.js`, `TestimonialForm.jsx`, `AddTestimonialCard.jsx`, `AdminTestimonial*.jsx`, `DropzoneUpload.jsx`, `Admin.jsx`, `AdminShell.jsx`, `LoginForm.jsx`, `app/admin/*`, `app/login/*`, `testimonial-model.js`, `settings-model.js`, `services/s3.js`, `utils/upload-util.js`), trimmed `db/queries.js` and `package.json` (`@aws-sdk/*` gone) accordingly. Rewired `app/server.js` (chatbot's client-testimonial lookup), `app/page.js`, `app/testimonials/page.js`, `LandingPage.jsx`, `LandingTestimonials.jsx`, `Testimonials.jsx`, and removed the hidden `/login` easter-egg link from `Footer.jsx`.
- **Found but deliberately left untouched**: a separate, unrelated pre-existing dead subsystem (`/profile`, `/changePassword`, `RegistrationForm.jsx`, `ChangePassword.jsx`, `Profile.jsx`, `ProfileIcon.jsx`, `Comments.jsx`, `app/actions/index.js`) — orphaned since the very first project review (2026-07-23), never reachable from live nav. It's the only reason `next-auth`, `mongoose`, and `MONGODB_CONNECTION_STRING` are still in the project. Flagged to Lawrence; he can ask for a full sweep separately.
- Verified the full refactor with a clean `npm run build` + local dev server check (testimonials render, photos load, `/admin`+`/login` 404).
- **Vercel account mixup, corrected**: first created a project under the wrong, already-cached CLI account (`amlan100ai-4520`/`amlan-ais-projects`) — deleted that project immediately on Lawrence's instruction and confirmed (via `gh api` — invitations/installations/webhooks on the repo) that the failed GitHub auto-connect attempt left nothing behind. Logged out, then logged in fresh as the correct account (`lawrence-amlan-gomes` / team `lawrence-amlan-gomes-projects`) via the Vercel CLI device-auth flow — Lawrence approved it live in his browser.
- Created the real Vercel project (`lawrenceamlangomes`), GitHub repo connected cleanly this time (correct account has real write access), pushed production env vars (`GOOGLE_CLIENT_ID/SECRET`, `NEXTAUTH_SECRET`, `MONGODB_CONNECTION_STRING`, `GEMINI_API_KEY`, 3× `NEXT_PUBLIC_EMAILJS_*`), deployed to production, and verified live: testimonials render correctly, photos load, `/admin` 404s.
- Committed (`8dfa2a1`) and pushed to `main`; confirmed the GitHub push auto-triggered a fresh Vercel build and it went live correctly.
- **DNS cutover done**: attached `lawrenceamlangomes.com` + `www` to the Vercel project (ownership auto-verified). Lawrence generated Porkbun API credentials (`PORKBUN_API_KEY`/`PORKBUN_SECRET_API_KEY` in `.env.local`) and opted all domains into Porkbun API access. Read the live DNS zone first to map out every unrelated record (Coolify's own subdomain, `shortstack`/`n8n` subdomains, Brevo email DKIM/DMARC/SPF, MX, NS) before touching anything, then replaced only the two records that mattered: apex A record (was `185.201.8.71` → now `216.198.79.1` + `64.29.17.1`) and `www` (was an A record → now CNAME to `82bcd9b6bb6fb257.vercel-dns-017.com`). Verified both `vercel domains verify` and live `curl` against the real domain — propagated within seconds, `server: Vercel` confirmed, SSL already working.
- **Coolify + MinIO cleanup, done by me at Lawrence's explicit request**: deleted the 4 orphaned test-upload objects from MinIO (`testimonials/photos/*`, `testimonials/videos/*`) using a temporary `npm install @aws-sdk/client-s3 --no-save` (never touched package.json/lockfile). For Coolify, listed every application and database via the API first and matched by exact fqdn/connection-string-port before deleting anything — confirmed `qkf3isdfpvtbagqodmpg52qy` (fqdn `lawrenceamlangomes.com`/`www.`) and `eyco56dho6ac0cmlnldal7xl` (port 27018, matching `MONGODB_CONNECTION_STRING` exactly) were the only portfolio-owned resources, distinct from `My Daily Routine` (port 27017) and `solvendix` (port 27019). Deleted both with `delete_volumes=true`, polled until the app returned 404 and both vanished from their listings, then verified My Daily Routine and Solvendix were both still live and untouched.

## Blockers

None. Migration is fully complete — code, hosting, DNS, and old-infra cleanup are all done and verified.

## Dev server

Not running. Last cleared cleanly after verifying the testimonials refactor locally.
