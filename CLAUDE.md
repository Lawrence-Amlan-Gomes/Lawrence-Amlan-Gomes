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
| `/` | Landing page |
| `/home` | Home section components |
| `/about` | About + experience |
| `/projects` | Projects list |
| `/project/[urlTitle]` | Single project detail |
| `/blogs` | Blog list |
| `/blog/[urlTitle]` | Single blog detail |
| `/contact` | Contact form |
| `/resume` | Resume viewer |
| `/testimonials` | Testimonials |
| `/thesis` | Thesis section |
| `/profile` | User profile (auth required) |
| `/changePassword` | Change password (auth required) |
| `/payment` | Payment page |
| `/color` | (dev) color reference |

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
- Use the `useAuth` hook (`app/hooks/useAuth.js`) in client components to read session state.

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
NEXTAUTH_SECRET=
GEMINI_API_KEY=
```

EmailJS keys are also required for the contact form (see `.env.local`).
