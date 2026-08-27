# Lawrence Amlan Gomes — Portfolio

Personal portfolio and full-stack web application for Lawrence Amlan Gomes, a Dhaka-based Full-Stack Developer. Built with Next.js App Router, MongoDB, NextAuth v5, and Google Gemini AI.

## Commands

```bash
npm run dev      # development server (localhost:3000)
npm run build    # production build
npm run start    # start production server
npm run lint     # ESLint
```

## Architecture

**Framework**: Next.js 14 App Router (JavaScript, not TypeScript)  
**Styling**: Tailwind CSS + Framer Motion  
**Database**: MongoDB via Mongoose — connection in `services/mongo.js`. Self-hosted MongoDB on the same Coolify/Hostinger VPS as production (migrated off Atlas 2026-08-27). This app connects with a database-scoped credential (`lawrenceapp`, readWrite on `lawrenceAmlanGomes` only) rather than the instance's `root` user. Dev (`.env.local`) uses the public address (`185.201.8.71:27018`) since a local machine isn't on Coolify's internal Docker network; production is intended to switch to Coolify's internal hostname instead once Lawrence confirms it works (internal networking can't be tested from this session — see Known Gaps).

Earlier the same day (2026-08-27), this database was briefly **shared** with the sibling business site **Solvendix** — their app connected directly into this app's own database using the `root` credential, giving them full read/write on every collection here. Lawrence reversed that later the same day. **Solvendix has since stood up its own fully separate MongoDB server** (different host/port, its own `solvendix` database) — no longer touching this project's database at all. `SOLVENDIX_MONGODB_CONNECTION_STRING` (see Environment Variables) is a new connection this app holds *into* Solvendix's database, one-directional by intent: the plan is that when a new client leaves a review on Solvendix, this app reads it and adds it to its own testimonials. **That sync is not built yet** — only the credential is saved so far, nothing reads it automatically. See Known Gaps for the loose end still open on the lockout itself (root password rotation).  
**Auth**: NextAuth v5 beta with Google OAuth (`app/auth.js`)  
**AI**: Google Gemini 2.5 Flash via `@google/genai` (`app/server.js`)  
**Email**: none — the contact form (and its EmailJS integration) was removed 2026-08-24; `@emailjs/browser` is now an unused dependency left in `package.json`

### Directory layout

```
app/              # Next.js App Router pages and server logic
  actions/        # Server actions (use server) — DB mutations, auth calls
  api/auth/       # NextAuth route handler
  color/color.js  # Central color/theme token definitions
  contexts/       # React contexts (Auth, Theme, Response)
  hooks/          # Custom React hooks (useAuth, useTheme, useResponse)
  providers/      # Context providers (wrap ClientLayout)
  server.js       # Gemini AI server action
  myself.js       # Lawrence's bio/context string fed to the AI chatbot
  services.js     # Productized services offered to clients/businesses — source for LandingServices.jsx and the chatbot
  layout.js       # Root layout — calls dbConnect() on every request
  ClientLayout.js # Client wrapper with providers + navbar/footer

components/       # Shared UI components (all .jsx)
models/           # Mongoose models (user-model.js, message.js, testimonial-model.js, settings-model.js)
db/queries.js     # All DB query functions
services/mongo.js # Mongoose connection helper (dbConnect) — caches the connection promise so concurrent calls (e.g. a page firing several server actions in parallel) don't race
services/s3.js    # S3-compatible (MinIO) blob storage — presigned uploads, delete, public URL builder
utils/data-util.js # replaceMongoIdInObject / replaceMongoIdInArray helpers
```

### Pages

| Route | Purpose |
|---|---|
| `/` | Landing page — About/Stats/Projects/Services/Testimonials sections (`app/page.js`). There is no separate `/home` route — it was merged into root 2026-08-26. |
| `/about` | About + skills (`app/about/skills.js`) + experience |
| `/projects` | Projects list — sticky secondary filter bar (`components/Projects.jsx`) below the main navbar, filters client-side by each project's `type` (`saas` / `clients-project` / `hobby-project`) |
| `/project/[urlTitle]` | Single project detail |
| `/case-studies` | Case studies list — client-work deep dives (see Case Studies pattern below) |
| `/case-study/[urlTitle]` | Single case study detail |
| `/contact` | Contact icon grid (X/LinkedIn/GitHub/Email/Fiverr/Contra/YouTube) + Cal.com booking embed. No contact form, no page-specific chatbot — the AI chatbot is now a global floating widget (see AI Chatbot pattern below) |
| `/testimonials` | Testimonials — DB-backed (see Testimonials pattern below), not a static file. Includes a public add/edit form, shown only when the admin toggle is on. |
| `/thesis` | Thesis section (`page.jsx` — the one page not using `.js`) |
| `/profile` | User profile — **orphaned, see Known Gaps** |
| `/changePassword` | Change password — **orphaned, see Known Gaps** |
| `/login` | Hidden admin-only login — single "Log in with Google" button, restricted server-side to one email (`app/auth.js`). Reachable via the `©` in `Footer.jsx`'s copyright line. |
| `/admin` | Admin dashboard, sidebar layout (`app/admin/layout.js` + `components/AdminShell.jsx`) — the layout guards the whole `/admin/*` subtree server-side via `auth()`, redirecting to `/login` unless the session matches the admin email. Individual pages under it don't re-guard themselves. |
| `/admin/testimonials` | Admin CRUD for testimonials — list, edit (with photo/video framing via `components/MediaFramer.jsx`), lock/delete, drag-to-reorder, and the public-submissions toggle. |
| `/payment` | Pricing page (UI only — see Known Gaps) |
| `/color` | (dev) color reference |
| `/error` | Error boundary page (`components/ErrorComponent.jsx`) |

## Key Patterns

### Database
- Always call `await dbConnect()` at the top of every server action before any query.
- Never expose raw `_id` fields — use `replaceMongoIdInObject` / `replaceMongoIdInArray` from `utils/data-util.js` before returning data to the client.
- All queries go through `db/queries.js`; server actions in `app/actions/index.js` call those query functions.

### Theming
- Color tokens live in `app/color/color.js` (dark/light variants, card styles, key color).
- Always import from `color.js` rather than writing raw hex values or one-off Tailwind colors.
- The active theme is managed by `ThemeContext` / `ThemeProvider`.

### Auth
- NextAuth v5 beta — import `{ auth, signIn, signOut }` from `app/auth.js`, not from `next-auth` directly.
- `/login` is admin-only: `app/auth.js`'s `signIn` callback rejects any Google account except the hardcoded `ADMIN_EMAIL` (`amlangomes@gmail.com`). The whole `/admin/*` subtree enforces the same check server-side via `app/admin/layout.js` (not individual pages) before rendering.
- Admin-only server actions must re-check `auth()` against `ADMIN_EMAIL` themselves too (e.g. every `admin*Action` in `app/actions/testimonials.js`) — a server action is a public HTTP endpoint regardless of what the UI shows, so the layout guard alone doesn't protect it.
- The `useAuth` hook (`app/hooks/useAuth.js`) and `AuthContext`/`AuthProvider` are a **separate**, older DB-user auth system (unrelated to NextAuth sessions) — see Known Gaps, it's currently orphaned.

### Server Actions
- Mark files with `"use server"` at the top.
- Keep mutations in `app/actions/index.js`; keep the AI action in `app/server.js`.

### Projects
- Every entry in `app/projects/projects.js` has a `type` field: `"saas"`, `"clients-project"`, or `"hobby-project"` — drives the filter bar on `/projects` (`components/Projects.jsx`) and is the single source of truth for that classification (no separate DB field or list elsewhere).
- `clients-project` and `saas` entries set `gitLink: null` — those projects intentionally show no GitHub link in the UI (client work and shipped SaaS products aren't public repos). `ProjectCard.jsx` / `ProjectCardDetailed.jsx` / `SingleProject.jsx` already render the GitHub button conditionally on `gitLink` being truthy, so this is enforced purely by the data, not by extra UI logic.
- `type: "saas"` entries show "See Live" instead of "Live Demo" as their live-link label (`ProjectCard.jsx`, `ProjectCardDetailed.jsx`) — every other type keeps "Live Demo".

### Case Studies
- `app/case-studies/case-studies.js` is a separate static file (not fields on `projects.js`) holding longer-form client-work narratives — `client`, `industry`, `timeline`, `heroImg`, `summary`, `challenge`, `approach` (array of `{title, description}` steps), `results` (array of strings). Linked to a project by `projectUrlTitle`, matched against `app/projects/projects.js`'s `urlTitle`.
- Scoped to `type: "clients-project"` entries only (Facelees, Library Management as of 2026-08-26) — `saas`/`hobby-project` entries don't get one.
- Rendered at `/case-studies` (`components/CaseStudies.jsx`, list) and `/case-study/[urlTitle]` (`components/SingleCaseStudy.jsx`, detail).
- Anywhere a project or testimonial links out, it checks `caseStudies` for a match and swaps the label/destination: client project cards (`ProjectCard.jsx`, `ProjectCardDetailed.jsx`) show an extra "Case Study" link, `SingleProject.jsx`'s floating action buttons add a case-study button, and `TestimonialCard.jsx`'s project link becomes "View Case Studies" pointing at `/case-study/[urlTitle]` instead of "View Project" pointing at `/project/[urlTitle]`. Add a new case study only in `case-studies.js` — these surfaces pick it up automatically via the `projectUrlTitle` match, no extra wiring needed.

### Services
- `app/services.js` is the single source of truth for the productized services Lawrence offers to clients/businesses (Custom Web/Mobile App, Embedded AI Chatbot, Automated Meeting Scheduler, Lead Magnet & Email Capture) — distinct from `app/projects/projects.js`, which lists things he's already shipped, not offerings for hire. Each entry has `title`, `implementation`, `outcome`, and an optional `proof` (a factual note when the service is demonstrable on this very site, e.g. the floating chatbot or Cal.com booking).
- Rendered on `/` via `components/LandingServices.jsx` (between Projects and Testimonials in `components/LandingPage.jsx`) and fed to the AI chatbot via `app/server.js`'s `buildServicesBlock()`. Add a new service only here — it then appears on the site and in chatbot answers automatically.

### Testimonials
- DB-backed (`models/testimonial-model.js`), not a static file — unlike `projects.js`, which stays static. Query/mutation functions live in `db/queries.js`; all actions in `app/actions/testimonials.js`.
- `models/settings-model.js` holds a singleton toggle (`testimonialSubmissionsOpen`) that gates public create/edit — checked server-side inside the actions, not just hidden in the UI.
- Photo (1:1) and video (2:3) upload direct from the browser to MinIO via a presigned POST (`services/s3.js`, `requestUploadUrl` action) — never routed through a server action's body, to avoid Vercel's request size limits. Framing (which portion of the source shows) is non-destructive: the original file is stored as-is, and an `{x, y}` object-position is saved and applied via CSS at render time — there's no real image/video cropping or re-encoding anywhere in this flow.
- `projectUrlTitle` on a testimonial just stores a string validated against `app/projects/projects.js` at write time — no separate DB collection for projects; that static file stays the single source of truth.
- `order` (Number) drives display order, admin-reorderable via drag-and-drop in `/admin/testimonials` (`adminReorderTestimonialsAction`, bulk-writes the whole order in one call).
- `app/page.js` (`/`) and `app/testimonials/page.js` (`/testimonials`) both export `const dynamic = "force-dynamic"` — added 2026-08-27 after a real bug: these pages used to be statically prerendered, and `revalidatePath()` only refreshes the cache of the Next.js process that ran the mutating action. Adding/editing a testimonial via the dev server never showed up on production (a separate running process with its own stale cached HTML) until production's own cache happened to revalidate. Forcing both routes dynamic means they query MongoDB fresh on every request instead, so this can't happen again — the tradeoff is no static caching on these two routes (fine at this site's traffic level; don't revert without solving the cross-process cache problem some other way).
- **Cross-site sharing with Solvendix (in progress, 2026-08-27)**: testimonials are becoming a genuinely shared collection between this site and Solvendix (both apps reading/writing the same documents, not an API-proxied setup) — see the Database section above for the connection-sharing decision. `visibleOn: string[]` and `solvendixCaseStudyRef: string | null` are on `models/testimonial-model.js` but not yet used by any query — don't assume filtering by them exists without checking. Full context: `co-founder/session-log.md`, 2026-08-27 entry.
- **Admin show/hide (2026-08-27)**: `status: enum["pending","approved","rejected"]` on the model now drives real visibility. `getPublicTestimonials()` (`db/queries.js`) returns only `status: "approved"` and is what every visitor-facing surface uses — `app/page.js`, `app/testimonials/page.js`, and the chatbot's `getProjectDetails()` in `app/server.js`. `getAllTestimonials()` (unfiltered, all statuses) is still what `/admin/testimonials` uses, so admins see everything including hidden ones. Admin flips visibility via a "Hide"/"Show" button per testimonial in `components/AdminTestimonials.jsx`, calling `adminSetTestimonialStatusAction(id, status)` — toggles only between `approved`/`rejected`; `pending` exists in the enum but nothing sets it today, since public submissions still default straight to `approved` (no real moderation queue yet, same as before).

### AI Chatbot
- `app/server.js` — `response(prompt, inputOutputPair)` calls Gemini (`gemini-2.5-flash`) via `@google/genai`, using its native **function calling** (tool use), not a single giant context dump. The system prompt (`buildSystemInstruction()`, passed as `config.systemInstruction`) contains: the hand-written About Me / Experience / Education narrative from `app/myself.js`, the full Skills list from `app/about/skills.js`, and a **lightweight Table of Contents** — one line per project (`urlTitle`, title, type, date, `shortDescription` only) built from `app/projects/projects.js`. It deliberately does NOT include each project's full `longDescription`, feature breakdown, or client testimonials up front.
- A `get_project_details` tool is declared alongside it. When a visitor asks something that needs real depth — a project's full description, its feature-by-feature breakdown, its tech stack, or a client's actual testimonial — the model calls this tool with a `urlTitle` from the table of contents; `getProjectDetails()` looks up that one project's full data (including a live `getAllTestimonials()` MongoDB query via `db/queries.js`, matched by `projectUrlTitle`) and the result is fed back to the model in a follow-up turn before it answers. `response()` loops this tool-call round-trip up to `MAX_TOOL_ROUNDS` (3) using the `createUserContent`/`createModelContent`/`createPartFromFunctionCall`/`createPartFromFunctionResponse` helpers from `@google/genai`. Broad questions (which SaaS products exist, how many projects, etc.) are answered straight from the table of contents with no tool call.
- This keeps the per-request context small and roughly constant as more projects/features are added over time (the table of contents grows by one line per project; the tool call only pulls in the one project actually being asked about), rather than growing every project's full detail into every single prompt. Do not revert this to dumping full project detail into the system instruction — extend `getProjectDetails()`'s returned fields instead if the model needs more per-project data.
- `app/myself.js` still only holds the hand-written, low-churn About Me / Experience / Education narrative — do not add project/skill/client facts back into it; add them to the real data source (`projects.js`, `skills.js`, a testimonial) so both the chatbot and the rest of the site pick them up automatically.
- Rendered globally as a floating widget (`components/FloatingChat.jsx`, mounted in `app/ClientLayout.js`) — not page-specific. `components/Chat.jsx` is the panel body (message list + input), reused as-is inside the floating panel.
- The `[/n]` tokens in AI responses are intentional formatting markers parsed by `EachInputOutput.jsx`.

## Environment Variables

```
MONGODB_CONNECTION_STRING=
SOLVENDIX_MONGODB_CONNECTION_STRING=
GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=
NEXTAUTH_URL=
NEXTAUTH_SECRET=
GEMINI_API_KEY=
S3_ENDPOINT=
S3_REGION=
S3_ACCESS_KEY=
S3_SECRET_KEY=
S3_BUCKET=
S3_PUBLIC_URL=
```

> **Production hosting moved from Vercel to self-hosted Coolify (Hostinger VPS, `185.201.8.71`) on 2026-08-27.** All production env vars now live in that Coolify app resource's Environment Variables panel, not Vercel's — Vercel is no longer in use for this project. `MONGODB_CONNECTION_STRING` needed its "Available at Buildtime" toggle enabled in Coolify, since `app/layout.js`'s `dbConnect()` call runs during Next.js's static prerendering of several pages (`/about`, `/admin`, `/admin/testimonials`, `/case-studies`, `/changePassword`) — without it the build fails with `MongooseError: uri ... got "undefined"`. The connection string must also include the target database name in its path (e.g. `.../lawrenceAmlanGomes?...`) — omitting it silently connects to Mongo's default `test` database instead, which looks like "no data" rather than an error.
>
> Google sign-in worked in both dev and production as of 2026-08-20 on Vercel — Google Cloud Console's authorized redirect URIs include the `www.lawrenceamlangomes.com` production domain (the bare apex alone wasn't enough — it threw `redirect_uri_mismatch` until the `www` variant was added). Not yet re-verified against the new Coolify deployment as of 2026-08-27; the domain itself is unchanged so it should still hold, but confirm before relying on it.
>
> **`S3_*` vars** were local-only through 2026-08-26; added to Coolify's env vars as part of the 2026-08-27 hosting migration alongside the rest of the production env vars.
>
> **GitHub → Coolify auto-deploy required a manual webhook as of 2026-08-27** — this app was connected to Coolify as a plain repository, not through Coolify's GitHub App integration, so no webhook was ever auto-created (unlike `mydailyroutine.app`, which does auto-deploy, likely because it's connected via the GitHub App). Fixed by copying Coolify's GitHub webhook URL + secret (app → Webhooks tab) into the GitHub repo's own Settings → Webhooks, push events only. If auto-deploy silently stops working again, check whether the webhook is still registered in GitHub's repo settings before assuming anything else is wrong.

## Known Gaps / Incomplete Areas

These exist in the code as-is; know about them before touching auth or payments so you don't assume more is wired up than actually is.

- **Database lockout is incomplete as of 2026-08-27.** This app now connects with a scoped `lawrenceapp` credential instead of `root` (both dev and the connection string handed to Lawrence for Coolify), but the `root` password on the shared instance (`185.201.8.71:27018`) has **not** been rotated yet — that's the actual step that revokes anyone still holding the old root credential. It was deliberately deferred until Lawrence confirms production is live and working on the new scoped credential, to avoid breaking production before that's verified. Don't assume the old root credential is dead until this is done.
- **Production hasn't switched to Coolify's internal MongoDB address yet.** Lawrence wants production (not dev) to connect over Coolify's internal Docker hostname instead of the public IP, once verified — a `lawrenceapp`-credentialed internal connection string was handed to him, but whether it works can't be tested from this session (no access to Coolify's internal network) and hasn't been confirmed live.
- **Solvendix testimonial sync is a saved credential, not a built feature.** `SOLVENDIX_MONGODB_CONNECTION_STRING` (see Environment Variables / Database above) exists in `.env.local` but nothing in the codebase reads it — no cron, no action, no admin button. Don't assume new Solvendix reviews show up here automatically; that has to be built.
- **No `/register` route exists** — `components/RegistrationForm.jsx` is fully built but never imported, and `registerUser` in `app/actions/index.js` redirects to `/login` after creating a user, but that redirect no longer makes sense now that `/login` is admin-only (see below).
- **`/profile` and `/changePassword` are orphaned** — both depend on `AuthContext`'s `auth` value (via `useAuth`), which used to get populated by `LoginForm.jsx`'s old email/password login and Google-matched-DB-user lookup. That logic was removed when `LoginForm.jsx` was rebuilt as an admin-only Google gate (2026-08-20), so nothing sets `auth` anymore — these two routes are permanently stuck showing "You have to login first." Fixing this means either wiring a real user-facing auth flow back in, or removing the routes.
- **`/payment` is a static mockup**, not a real payment flow — three pricing cards with no click handlers and no payment SDK in `package.json` (no Stripe/Paddle). The real Paddle integration referenced in Lawrence's bio/experience content belongs to the separate `mydailyroutine.app` product, not this repo.
- **Duplicate Google sign-in components**: `components/SignInWithGoogle.jsx` and `SingInGoogle.jsx` (typo'd filename) both exist, both mislabeled "Register", both unused and unrelated to the current admin-only `signIn("google")` flow in `LoginForm.jsx`.
- `db/queries.js` stores passwords in plaintext (`models/user-model.js`) with no hashing step — relevant only if a real user-facing login/register flow is ever built (the old email/password path in `LoginForm.jsx` no longer exists).
