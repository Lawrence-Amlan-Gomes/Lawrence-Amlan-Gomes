# Where We Left Off

_Owned by skillCoFounder.md — read this first on every session start, overwritten on every "End Today."_

## Current focus

Long session (2026-08-27 into 2026-08-28): locked down the shared-database mess from before, shipped real testimonial features (hide/show, in-place add/edit, responsive form layout), fixed a live production caching bug, and wrote two full architecture specs for Solvendix's Claude to build their own equivalents (testimonial UI, AI chatbot).

## Immediate next step

**Nothing blocking.** Two real loose ends carried forward, both need Lawrence's hands, not code:

1. **Rotate the `root` MongoDB password** on the old shared instance (`185.201.8.71:27018`) — this is the actual step that revokes anyone still holding the old root credential (Solvendix, if any old copy of it still exists anywhere). Deliberately held back until Lawrence confirms production is stable on the new scoped `lawrenceapp` credential first — do this only after that confirmation, so a mid-flight rotation can't take the live site down.
2. **Switch production's `MONGODB_CONNECTION_STRING` to the internal Coolify address** instead of the public one — dev should stay on the public address (a local machine isn't on Coolify's internal Docker network), production doesn't need to be. An internal connection string (with the new scoped credential) was already handed to Lawrence; whether it actually works can't be tested from this session (no access to Coolify's internal network) — needs his confirmation after he pastes it in and redeploys.

## What actually shipped this session (code, not just talk)

- **Fixed a real live bug**: `/` and `/testimonials` were statically cached pages — a testimonial added via the dev server never showed up on production because `revalidatePath()` only refreshes the cache of whatever process ran it. Forced both routes dynamic (`export const dynamic = "force-dynamic"`) so they always query fresh. Pushed (`1e22e2b`).
- **Database credential hardening**: created a database-scoped MongoDB user (`lawrenceapp`, readWrite on `lawrenceAmlanGomes` only, verified it can't touch `admin`), migrated dev and handed Lawrence the production connection string to use in Coolify. Confirmed Solvendix has since stood up its own fully separate MongoDB server (different host/port) — no longer shares this database at all. Saved a new read-only `SOLVENDIX_MONGODB_CONNECTION_STRING` (into `.env.local` only, not yet wired to any code) for a future one-way sync of Solvendix reviews into this app's testimonials — **that sync is not built, only the credential is saved.**
- **Real testimonial hide/show**: `getPublicTestimonials()` (approved-only) now powers every visitor-facing surface (`/`, `/testimonials`, the AI chatbot); `getAllTestimonials()` (unfiltered) stays admin-only. A Hide/Show button per testimonial in `/admin/testimonials` flips `status` between `approved`/`rejected`. Pushed (`085e70d`).
- **In-place add/edit**: clicking the dashed "Add" card or a testimonial's "Edit" link now swaps that exact card, in its own position, into the form — on both the landing row and the full grid page — instead of the form floating elsewhere. Also brought full add/edit to the landing page, which previously just linked out to `/testimonials`. Fixed a related bug: the visitor-facing refresh after save was pulling the unfiltered admin list. Pushed (`9e460bf`).
- **Testimonial form polish**: photo/video upload boxes are icon-only now (no label text), smaller and side-by-side; the form goes two-column landscape on wide screens (≥768px on landing, ≥1024px on `/testimonials`, spanning the full grid row once it goes two-up). Removed the landing card's click-to-navigate-away (it fought with inline editing). Rebuilt the theme toggle from a pill switch into one small square icon button (sun/moon shows the *destination* state, not current). Pushed (`dc05308`).
- Wrote two full structural/architecture specs directly in-chat for Lawrence to paste to Solvendix's Claude: the testimonial add/edit UI (grid/row layout, in-place swap behavior, upload flow, business rules), and the AI chatbot system (Gemini function-calling pattern, system prompt structure, tool design, floating widget UI). Neither is code in this repo — pure documentation handed to Lawrence.
- `CLAUDE.md` kept accurate live throughout (Database section rewritten for the new credential + Solvendix split, three new Known Gaps entries for the two pending loose ends above plus the unsync'd Solvendix credential, Testimonials section documents the show/hide wiring).

## Open questions

- Cross-linking (solvendix.com ↔ lawrenceamlangomes.com) — still not implemented, still a confirmed real requirement, untouched this session.
- Case study client consent (Zaman, Musfiq) for Solvendix — still not done.
- `skillsUpdateMentor` mail destination is still broken (see `mail-relay.md`) — needs Lawrence to confirm the real current path.
- If Lawrence wants the Solvendix-review sync actually built (reading their DB, writing new testimonials into ours), that's a real next task — he explicitly declined it this session ("I don't want" mid-message), so don't build it unprompted.

## Blockers

None — both loose ends above are waiting on Lawrence's confirmation, not on any unresolved technical question.

## Dev server

Not running — killed clean at End Today. Note: a foreign, untouched process was still sitting on port 3002 this whole session (not started by me, never touched, unrelated to anything above).
