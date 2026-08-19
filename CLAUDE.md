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
models/           # Mongoose models (user-model.js, message.js)
db/queries.js     # All DB query functions
services/mongo.js # Mongoose connection helper (dbConnect)
utils/data-util.js # replaceMongoIdInObject / replaceMongoIdInArray helpers
```

### Pages

| Route | Purpose |
|---|---|
| `/` | Redirects client-side to `/home` (`app/page.js`) |
| `/home` | Landing page — About/Projects/Testimonials/Blogs/Stats sections |
| `/about` | About + skills (`app/about/skills.js`) + experience |
| `/projects` | Projects list |
| `/project/[urlTitle]` | Single project detail |
| `/blogs` | Blog list |
| `/blog/[urlTitle]` | Single blog detail |
| `/contact` | Contact form + Gemini chatbot + Cal.com booking embed |
| `/resume` | Resume viewer |
| `/testimonials` | Testimonials |
| `/thesis` | Thesis section (`page.jsx` — the one page not using `.js`) |
| `/profile` | User profile — **orphaned, see Known Gaps** |
| `/changePassword` | Change password — **orphaned, see Known Gaps** |
| `/login` | Hidden admin-only login — single "Log in with Google" button, restricted server-side to one email (`app/auth.js`). Reachable via the `©` in `Footer.jsx`'s copyright line. |
| `/admin` | Admin landing page, server-guarded — redirects to `/login` unless the session matches the admin email |
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
- `/login` is admin-only: `app/auth.js`'s `signIn` callback rejects any Google account except the hardcoded `ADMIN_EMAIL` (`amlangomes@gmail.com`). `/admin` (`app/admin/page.js`) enforces the same check server-side via `auth()` before rendering.
- The `useAuth` hook (`app/hooks/useAuth.js`) and `AuthContext`/`AuthProvider` are a **separate**, older DB-user auth system (unrelated to NextAuth sessions) — see Known Gaps, it's currently orphaned.

### Server Actions
- Mark files with `"use server"` at the top.
- Keep mutations in `app/actions/index.js`; keep the AI action in `app/server.js`.

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
```

EmailJS keys are also required for the contact form (see `.env.local`).

> `GOOGLE_CLIENT_ID`/`GOOGLE_CLIENT_SECRET` are set locally in `.env.local` and Google sign-in works in dev. **Vercel's production env vars still need Lawrence to update `GOOGLE_CLIENT_ID` and add `GOOGLE_CLIENT_SECRET` manually** (not synced automatically), and the Google Cloud Console OAuth client's authorized redirect URIs need the production domain added.

## Known Gaps / Incomplete Areas

These exist in the code as-is; know about them before touching auth or payments so you don't assume more is wired up than actually is.

- **No `/register` route exists** — `components/RegistrationForm.jsx` is fully built but never imported, and `registerUser` in `app/actions/index.js` redirects to `/login` after creating a user, but that redirect no longer makes sense now that `/login` is admin-only (see below).
- **`/profile` and `/changePassword` are orphaned** — both depend on `AuthContext`'s `auth` value (via `useAuth`), which used to get populated by `LoginForm.jsx`'s old email/password login and Google-matched-DB-user lookup. That logic was removed when `LoginForm.jsx` was rebuilt as an admin-only Google gate (2026-08-20), so nothing sets `auth` anymore — these two routes are permanently stuck showing "You have to login first." Fixing this means either wiring a real user-facing auth flow back in, or removing the routes.
- **`/payment` is a static mockup**, not a real payment flow — three pricing cards with no click handlers and no payment SDK in `package.json` (no Stripe/Paddle). The real Paddle integration referenced in Lawrence's bio/experience content belongs to the separate `mydailyroutine.app` product, not this repo.
- **Duplicate Google sign-in components**: `components/SignInWithGoogle.jsx` and `SingInGoogle.jsx` (typo'd filename) both exist, both mislabeled "Register", both unused and unrelated to the current admin-only `signIn("google")` flow in `LoginForm.jsx`.
- `db/queries.js` stores passwords in plaintext (`models/user-model.js`) with no hashing step — relevant only if a real user-facing login/register flow is ever built (the old email/password path in `LoginForm.jsx` no longer exists).
