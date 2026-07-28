# skillGit

## Trigger

User says `@skillGit.md`, or any equivalent that means: check the build, fix errors, then commit and push to main.

## What it does

Run the build check, fix whatever's broken, then commit and push everything to `main` on the remote. Handles first-time repo setup automatically if this project isn't a git repo yet.

## Behavior

When triggered:

### 0. First-time setup (only if `.git` doesn't exist yet)

1. Run `git init`.
2. Ask Lawrence for the remote repo URL.
3. `git remote add origin <url>`.
4. Ask Lawrence what the default branch should be called (default to `main` if he has no preference).
5. Make sure a `.gitignore` exists (should already cover `node_modules/`, `.next/`, `.env*` — check, don't assume).
6. Continue to step 1 below.

Skip this whole section silently if `.git` already exists.

### 1. Build check

1. Run `npm run build` and capture the output.
2. If it passes clean → go to step 2.
3. If it errors → fix every error in source files, then re-run `npm run build` to confirm clean. Repeat until clean. Fix only what's needed to make the build pass — no unrelated refactors.

### 2. Commit and push

1. `git status` first — review what's actually changed. If anything looks like it shouldn't be committed (secrets, `.env` files, stray build artifacts), flag it to Lawrence before staging rather than committing it silently.
2. `git add -A` (stage everything) — standing instruction from Lawrence as of 2026-07-29. The step 1 review is the safeguard: if it surfaced anything secret-looking, stop and flag it instead of staging blindly.
3. Write a professional commit message summarizing the actual changes made — what changed and why, not generic boilerplate.
4. `git commit -m "<message>"`.
5. `git push origin main` (or the tracked branch).
6. Report: build status, what was fixed (if anything), and the commit message used.

## Scope

- Touches: any source file with a build error; git config only during first-time setup
- Off-limits: no logic/feature/content changes beyond what's needed to fix build errors

## Edge cases

- **Build passes first try**: skip straight to the git steps, no "nothing to fix" filler.
- **Multiple errors**: fix all of them in one pass before re-checking the build.
- **Push rejected (branch behind remote)**: tell Lawrence — don't force push.
- **Nothing to commit (clean working tree)**: tell Lawrence, skip commit/push.
- **`.env` or secret-looking file staged**: stop and flag it before committing, even if the filename looks innocuous.
- **First-time setup but repo already has a remote convention Lawrence expects** (e.g. GitHub org): ask rather than guessing the URL.

## Boundaries

- Never force push to main.
- Never skip the build check.
- Never commit while the build is still failing.
- Never skip hooks (`--no-verify`) unless Lawrence explicitly asks.
- Commit message must reflect actual changes, never a placeholder like "update files."
