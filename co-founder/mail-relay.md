# Mail Relay — async mail exchange with sibling projects' Claude cofounders

_Owned by skillCoFounder.md. Outbound activated by "send the mails" (typically said together with "End Today"). Inbound checked automatically on every session start (see `skillCoFounder.md` Startup behavior)._

## Purpose

Unlike **Chat Relay** (`chat-relay.md`), which is a live, synchronous back-and-forth that Lawrence manually copy-pastes between two open sessions, Mail Relay is async and file-based in both directions:

- **Outbound**: at end of session, I write detailed mail files describing what happened in *this* session into a mailbox folder that belongs to another cofounder project. That other project's Claude reads them whenever its own session starts, syncs the information, and deletes the files once absorbed. I never read or delete files from a destination mailbox myself — only write into it. See **Outbound** section below.
- **Inbound**: sibling projects' Claude cofounders write mail files into *my own* mailbox — `mail-box/` at this project's root. On every session start, I read whatever's sitting there, absorb anything valuable into my own state, and delete each file once processed. This is the mirror image of Outbound and uses the same mail format, just addressed to me instead of from me. See **Inbound** section below.

## Outbound

### Trigger

- **Automatic, every "End Today" — no trigger phrase needed anymore.** As of 2026-07-29, sending mail is a default step of every End Today, the same way `skillGit` auto-chains at the end of it. Lawrence no longer has to say "send the mails" — it happens by default, unless he says something specific before/with that End Today prompt to vary it (narrow to one destination, skip it this time, etc.).
- **Order matters**: send the mails FIRST (this file's protocol), THEN run the standard End Today sequence from `skillCoFounder.md`. Mail content should describe this session's work, so it must be written before `where-we-left-off.md` / `session-log.md` get overwritten for the *next* session — write mail first, then do End Today bookkeeping.
- "send the mails" can still be said standalone mid-session (not paired with End Today) if Lawrence wants an ad hoc sync sent early — treat it the same way, just skip the subsequent End Today steps.
- **Default fan-out: send to ALL configured destinations, every time.** Plain "End Today" with no further qualifier means every folder in the Destinations list gets this session's relevant mail(s) — don't ask which ones, don't guess a subset. Only narrow to specific destinations if Lawrence explicitly says so in or before that prompt (e.g. "send the mails to just the mydailyroutine one," or "skip the mail today").
- If a given destination has nothing relevant to this session (nothing this project's work would matter to that sibling), it's fine to skip writing a mail to it — "send to all" means all destinations get considered, not that every destination must always receive a file regardless of relevance.

### Destinations

A list of mailbox folder paths, one per sibling project, that Lawrence provides. Each path is a folder (e.g. `something/path/mail-box/folderName`) that the sibling project's own Claude watches/reads from.

```
destinations:
  - name: skillsUpdateMentor
    path: /Users/lawrencealangomes/Documents/MySelf/mail-box/skillsUpdateMentor/
    scope: full session summary (not limited to skills topics, despite the folder name)
  - name: jobCrackMentor
    path: /Users/lawrencealangomes/Documents/JobCrack/mail-box/
    scope: full session summary (unconfirmed — assumed same as skillsUpdateMentor until Lawrence narrows it)
    note: folder already contains non-mail files (about.md, education.md, experiences.md, hero.md, projects.md) as of 2026-07-23 — left untouched, additive-only
```

Update this list whenever Lawrence gives a new path, or says a destination has moved/should be removed. Keep it as the durable source of truth — don't ask him to repeat it every session.

### Protocol when triggered

1. Review this session — same material End Today would summarize: decisions, code shipped, blockers, things ruled out. Pull from what actually happened, not assumptions.
2. Decide how many mail files to write and about what — split by topic/theme, not one giant dump. Simple sessions may warrant just one mail; a session with several distinct threads (e.g. a feature shipped + an architecture decision + an open question for them) can warrant several.
3. For each configured destination folder, write one `.md` file per topic: filename is the topic in Title Case with spaces, e.g. `Skills Section Sync.md`. Content should be a genuinely detailed mail — enough that the receiving Claude doesn't need to ask follow-up questions:
   - **A `From:` line identifying who I am**: the sending project's name (e.g. `Lawrence Amlan Gomes` portfolio repo) and that I'm its Claude Code cofounder — so the receiving side always knows which sibling project a mail came from without guessing.
   - **A `Date:` line with both the date AND time the mail was written** (get the real current timestamp — e.g. via a `date` shell call — don't just use today's date with no time). This matters because multiple mails can go out in a single day across sessions, and the receiving side needs to tell them apart / know how fresh one is.
   - What happened / what shipped, with enough specifics (file names, decisions, numbers) to be useful, not just a vague summary.
   - Why it matters to the sibling project specifically (only include what's actually relevant to them — don't dump irrelevant local detail).
   - Anything the sibling project's Claude should do, verify, or weigh in on, if applicable.
   - Open questions directed at them, if any.
4. **Do not delete or overwrite existing mail files already sitting in a destination folder** that I didn't just write — those may be undelivered mail from a previous session that the sibling Claude hasn't read yet. Only add new files.
5. **Never read a destination folder's contents as if they were addressed to me** — a destination mailbox is one-directional outbound from my side; I only write there. Mail addressed *to* this project shows up in my own `mail-box/` instead — see Inbound below.
6. After writing, tell Lawrence briefly what was sent (file names + destinations), then proceed into the standard End Today sequence if that's the paired trigger.

### Open design notes (outbound)

- Filename convention assumed: Title Case with spaces (per Lawrence's own example: `<mail1's TopicName.md>`). Adjust if he corrects this.
- No confirmation step before writing — mails are additive/non-destructive to the destination, so no need to pause and ask "should I send this," just send and report after.

## Inbound

### My mailbox

`mail-box/` at this project's root (sibling relative to `co-founder/`, `app/`, etc — not inside `co-founder/`, since other projects' Claudes need a predictable, project-root path to write into). Sibling cofounders write mail files there the same way I write into their destination folders: one `.md` per topic, Title Case filename, with a `From:` line and a `Date:` (date + time) line at the top.

### Trigger

Automatic — checked at the start of **every** session, as a startup step (see `skillCoFounder.md` Startup behavior), not on a spoken trigger phrase. No need for Lawrence to say anything.

### Protocol on every session start

1. List `mail-box/`. If empty, skip silently — don't report "no mail" every time, that's noise.
2. For each mail file found:
   - Read it in full. Note the `From:` and `Date:` so I know which sibling project it's from and how fresh it is.
   - Judge what's actually valuable — same bar as any other memory/context update: durable facts, decisions, or state that should change what I know about the sibling project or about shared concerns, not just "content exists." Don't dump the raw mail into memory verbatim.
   - Fold anything valuable into the right place: a cross-session memory file (`~/.claude/projects/.../memory/`) if it's the kind of fact worth recalling in future sessions, `co-founder/where-we-left-off.md` / this project's own state files if it's more like current working context, or just mention it to Lawrence directly if it's a one-off FYI that doesn't need persisting anywhere.
   - Once absorbed, **delete the mail file** — a mailbox with stale, already-read mail sitting in it is clutter, not an archive. The mail's content now lives wherever I just filed it, not in the file itself.
3. If a mail file has nothing valuable in it (pure noise, or something already known), still delete it after reading — read-and-decide is enough, it doesn't need to linger just because nothing came of it.
4. Briefly tell Lawrence what came in and what changed, if anything did. If the mailbox was empty, no need to mention it at all.

### Open design notes (inbound)

- Unlike destination mailboxes (never touched but for writing), my own `mail-box/` is fully mine to read and delete from — that's the whole point of it being *my* inbox.
- If a file in `mail-box/` doesn't look like mail (no `From:`/`Date:` header, e.g. a stray non-mail file placed there for some other reason), leave it alone and flag it to Lawrence rather than guessing and deleting something that wasn't meant for this protocol.
