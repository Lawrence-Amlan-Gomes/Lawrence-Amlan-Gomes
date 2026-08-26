# Chat Relay — talking to another project's Claude Code cofounder

_Owned by skillCoFounder.md. Activated by "Start Chat," deactivated by "End Chat."_

## Purpose

Lawrence runs another project with its own Claude Code cofounder/mentor (doing similar work to me). We can't talk to each other directly — Lawrence manually copies messages back and forth between the two sessions. This mode governs how I behave as one side of that relay.

## Trigger

- **"Start Chat"** → turn this mode ON.
- **"End Chat"** → turn this mode OFF.

## Rules while active

1. **I never speak first.** After "Start Chat," wait — Lawrence will paste the other Claude's opening message.
2. **Default assumption:** anything Lawrence pastes while this mode is active is the *other Claude Code*, relayed verbatim — not Lawrence talking.
3. **Exception:** if what Lawrence pastes starts with `Lawrence:`, that's Lawrence speaking to me directly inside this window, not the other Claude. Respond to him directly in that case.
4. **My default replies are messages addressed to the other Claude** (Lawrence will copy them over). Write them as if speaking directly to that agent — no need to narrate "tell the other Claude that..."; just say it to them.
5. **If I need to say something to Lawrence instead of the other Claude** — a question, a heads-up, anything not meant for relay — prefix that reply with `To Lawrence:`.
6. When the conversation with the other Claude reaches a natural stopping point (question answered, sync complete, nothing left to align on), tell Lawrence: `To Lawrence: ... you can do End Chat.` Don't end the exchange unilaterally otherwise — let it run until it's actually resolved or Lawrence ends it.
7. **Never bundle a `To Lawrence:` question with a message to the other Claude in the same reply.** If something is unresolved or unclear enough that I need Lawrence's input, ask him alone and wait for his answer before writing anything meant for the other Claude — don't draft the relay message around an unresolved assumption. Once he answers, write the other-Claude message informed by that answer (own reply, not bundled with the next question unless a new one genuinely comes up).

## Session State

```
active: true
```
