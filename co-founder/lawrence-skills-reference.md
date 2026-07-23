# Lawrence's Technical Skills — Reference

_Owned by skillCoFounder.md. Source of truth for what Lawrence actually knows, so this never has to be re-derived or re-asked. Verified via a chat-relay sync (2026-07-23) with the Claude Code cofounder on Lawrence's other project (`mydailyroutine.app` / "My Daily Routine"), which maintains its own exhaustive internal Skills Tracker (`SkillsTrackerUI.tsx`) for interview prep._

**Important:** this file and `app/about/skills.js` are deliberately NOT the same thing and should stay independent — see "Portfolio vs. full inventory" below. Don't try to make the portfolio chip grid match this file 1:1.

## Full verified inventory (from the sync)

Languages: TypeScript, JavaScript, SQL

Frontend: React, Next.js (App Router), Redux Toolkit, Tailwind CSS, Framer Motion

Backend: Node.js, Express (4 & 5), REST API design, WebSockets/real-time (Socket.io), background jobs & queues (BullMQ), microservices patterns, GraphQL & tRPC

Databases & Caching: PostgreSQL, MongoDB (Mongoose), Redis (caching, rate limiting, distributed locks)

Auth & Security: JWT, sessions/cookies, NextAuth, OAuth (Google), bcrypt, OTP verification, OWASP API security, HMAC webhook verification, CSP/security headers

Infrastructure & DevOps: Docker (multi-stage builds), Nginx, Traefik, self-hosted Coolify VPS deployment, Vercel, Netlify, Cloudflare, CI/CD pipelines, S3-compatible storage (AWS S3, MinIO) with sharp image processing

Payments: Paddle integration (one-time & subscription checkout, signed webhooks)

AI Integration: Google Gemini API for in-app conversational/agentic features — confirmed shipped/live (My Daily Routine's AI Routine Builder), not just "familiar with"

Testing & Tooling: Jest, Supertest, Playwright, structured logging (pino), ESLint, TypeScript strict mode

CS Fundamentals: Data structures & algorithms (50 problems solved as of the sync date), system design (caching, sharding, consistent hashing, CAP theorem, load balancing, CDN, distributed systems — plus 4 practice designs: URL shortener, rate limiter, WhatsApp-style chat, Ticketmaster-style booking)

### Sourcing notes (per-item verification from the sync, not guesses)

- SQL/PostgreSQL — real, via ShortStack (raw SQL/pg, no ORM) and the Node/Express sibling project (Prisma+Postgres, EXPLAIN ANALYZE indexing work).
- Express — Express 5 specifically, confirmed in ShortStack and the backend sibling project.
- WebSockets — confirmed via the Node/Express sibling project (full polling → SSE → Socket.io progression, measured).
- Auth & Security — My Daily Routine ships dual auth (NextAuth Google OAuth + custom jose-signed JWT), bcrypt, OTP verification.
- Testing & Tooling — confirmed (Jest/Supertest/Playwright).

## Portfolio vs. full inventory

`app/about/skills.js` (the public `/about` chip grid) is a **deliberately trimmed, different-altitude artifact** — built for recruiters/clients skimming, not a resume. As of 2026-07-23 it includes, grouped by category:
- Frontend: Next.js, React, TypeScript, JavaScript, Tailwind CSS, Redux Toolkit, Framer Motion
- Backend & Data: Node.js, Express, MongoDB, PostgreSQL/SQL, Redis, WebSockets, AWS S3
- Practices & Integrations: Auth & Security, Testing & Tooling, AI Integration (Gemini) — kept as broad single chips per the sync, not itemized into NextAuth/JWT/OAuth/bcrypt/OTP etc.
- Tools & Deployment: Git/GitHub, Vercel, Netlify, Coolify, Paddle, CI/CD

**Intentionally excluded from the portfolio** (confirmed correct call, not an oversight): the DSA problem count and named system-design practice list, GraphQL/tRPC, microservices patterns, and granular security items (HMAC webhook verification, CSP headers, distributed locks, OWASP specifics). Those are interview-prep/resume altitude, not skim-format altitude — they'd fight the chip-grid's job.

If Lawrence ever asks to expand the portfolio Skills section, check this file first for what's actually verified before adding anything, and re-apply the same altitude filter rather than dumping the full inventory in.

## Not a shared source of truth

Per the other Claude explicitly: this project's Skills Tracker and this portfolio's Skills section are allowed to diverge in category names, wording, and altitude. "Sync" here means checking facts once, not keeping the two artifacts textually identical going forward.
