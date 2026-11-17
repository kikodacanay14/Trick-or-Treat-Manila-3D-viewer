# Rules for Claude

## What this is

A static GitHub Pages site built on Google's `<model-viewer>` web component (`index.html`, `app.js`, `styles.css`). There
is no build step. Preview locally with `python3 -m http.server` in the repo root.
`.github/workflows/deploy-pages.yml` deploys the site live on every push to main (or a manual run). A merge to main is a live release.

## No claims from memory (Kiko, 17 Nov 2026)

Kiko's words (17 Nov 2026): "yes. can that be added in all Claude.md", answering whether to add a
no-status-or-count-without-fresh-read rule. Source: task-observer findings 0023, 0059, 0064 and 0066 (Canvas repo,
`skill-observations/observation-log/`), where Claude stated a status, count or role from memory and was wrong.

- Never state a status, count, role, file or API fact from memory, an earlier session, a summary or a stale board.
  Each one needs a fresh read in this session.
- Every such claim cites that read: a `file:line`, the command and its output, or a link.
- If it can't be verified, say "unverified" and don't present it as fact.

## Skills for facts, done and questions (Kiko, 17 Nov 2026)

Kiko named these on 17 Nov 2026 ("superpowers:verification-before-completion, agent-protocols:source-driven-development,
caveman:investigate-first, verify then done"; "and matt pockok skills"; "add ask-kiko and stories-and-rules").

- Before stating a fact or claiming anything is done: `superpowers:verification-before-completion`,
  `agent-protocols:source-driven-development`, `caveman:investigate-first` and `verify-before-done`.
- Matt Pocock skills (adapted from github.com/mattpocock/skills): `grill-me` to stress-test a plan or decision before
  acting on it, `improve-codebase-architecture` when reviewing a repo's architecture, and `setup-matt-pocock-skills` once
  per repo before the other two.
- `ask-kiko` for every question, choice or approval for Kiko.
- `stories-and-rules` to break an approved ask into Epics and User Stories and pull its business rules out for Kiko's
  approval before anything is built.
