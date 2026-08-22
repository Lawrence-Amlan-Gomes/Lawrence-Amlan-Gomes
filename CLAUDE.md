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
**Database**: MongoDB via Mongoose — connection in `services/mongo.js`  
**Auth**: NextAuth v5 beta with Google OAuth (`app/auth.js`)  
**AI**: Google Gemini 2.5 Flash via `@google/genai` (`app/server.js`)  
**Email**: EmailJS (`@emailjs/browser`)

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
| `/` | Redirects client-side to `/home` (`app/page.js`) |
| `/home` | Landing page — About/Projects/Testimonials/Stats sections |
| `/about` | About + skills (`app/about/skills.js`) + experience |
| `/projects` | Projects list — sticky secondary filter bar (`components/Projects.jsx`) below the main navbar, filters client-side by each project's `type` (`saas` / `clients-project` / `hobby-project`) |
| `/project/[urlTitle]` | Single project detail |
| `/contact` | Contact form + Gemini chatbot + Cal.com booking embed |
| `/resume` | Resume viewer |
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

### Testimonials
- DB-backed (`models/testimonial-model.js`), not a static file — unlike `projects.js`, which stays static. Query/mutation functions live in `db/queries.js`; all actions in `app/actions/testimonials.js`.
- `models/settings-model.js` holds a singleton toggle (`testimonialSubmissionsOpen`) that gates public create/edit — checked server-side inside the actions, not just hidden in the UI.
- Photo (1:1) and video (2:3) upload direct from the browser to MinIO via a presigned POST (`services/s3.js`, `requestUploadUrl` action) — never routed through a server action's body, to avoid Vercel's request size limits. Framing (which portion of the source shows) is non-destructive: the original file is stored as-is, and an `{x, y}` object-position is saved and applied via CSS at render time — there's no real image/video cropping or re-encoding anywhere in this flow.
- `projectUrlTitle` on a testimonial just stores a string validated against `app/projects/projects.js` at write time — no separate DB collection for projects; that static file stays the single source of truth.
- `order` (Number) drives display order, admin-reorderable via drag-and-drop in `/admin/testimonials` (`adminReorderTestimonialsAction`, bulk-writes the whole order in one call).

### AI Chatbot
- `app/server.js` — `response(prompt, inputOutputPair)` builds a conversation history string and calls Gemini. The chatbot's persona and constraints come from `app/myself.js`.
- The `[/n]` tokens in AI responses are intentional formatting markers parsed by the Chat component.

## Environment Variables

```
MONGODB_CONNECTION_STRING=
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

EmailJS keys are also required for the contact form (see `.env.local`).

> Google sign-in works in both dev and production as of 2026-08-20 — Vercel's `GOOGLE_CLIENT_ID`/`GOOGLE_CLIENT_SECRET` are set, and Google Cloud Console's authorized redirect URIs include the `www.lawrenceamlangomes.com` production domain (the bare apex alone wasn't enough — it threw `redirect_uri_mismatch` until the `www` variant was added).
>
> **`S3_*` vars are local-only so far** — set in `.env.local`, not yet added to Vercel. Testimonial photo/video uploads will fail in production until Lawrence adds all six to Vercel's env vars.

## Known Gaps / Incomplete Areas

These exist in the code as-is; know about them before touching auth or payments so you don't assume more is wired up than actually is.

- **No `/register` route exists** — `components/RegistrationForm.jsx` is fully built but never imported, and `registerUser` in `app/actions/index.js` redirects to `/login` after creating a user, but that redirect no longer makes sense now that `/login` is admin-only (see below).
- **`/profile` and `/changePassword` are orphaned** — both depend on `AuthContext`'s `auth` value (via `useAuth`), which used to get populated by `LoginForm.jsx`'s old email/password login and Google-matched-DB-user lookup. That logic was removed when `LoginForm.jsx` was rebuilt as an admin-only Google gate (2026-08-20), so nothing sets `auth` anymore — these two routes are permanently stuck showing "You have to login first." Fixing this means either wiring a real user-facing auth flow back in, or removing the routes.
- **`/payment` is a static mockup**, not a real payment flow — three pricing cards with no click handlers and no payment SDK in `package.json` (no Stripe/Paddle). The real Paddle integration referenced in Lawrence's bio/experience content belongs to the separate `mydailyroutine.app` product, not this repo.
- **Duplicate Google sign-in components**: `components/SignInWithGoogle.jsx` and `SingInGoogle.jsx` (typo'd filename) both exist, both mislabeled "Register", both unused and unrelated to the current admin-only `signIn("google")` flow in `LoginForm.jsx`.
- `db/queries.js` stores passwords in plaintext (`models/user-model.js`) with no hashing step — relevant only if a real user-facing login/register flow is ever built (the old email/password path in `LoginForm.jsx` no longer exists).
