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

## Updated skills (Kiko saved 17 Nov 2026)

Kiko saved these skill updates on 17 Nov 2026 and asked for them in every CLAUDE.md ("please include the updated skills
... in all repos and in both computers"). Load the skill before the work it covers; the skill text wins over this summary.
Source: the skill observer cleanup, observations 0023 to 0106 in the task-observer log.

- **scope-then-design**: tables centre money, counts, percents, short columns and headers. Canvas and Cue screens use
  DM Sans; a newer design document that names other fonts does not replace that unless Kiko says so (0073). Before
  calling anything new or unbuilt, search the trackers and the live branch (0023, 0043).
- **mockup-review**: before drawing, read the source table and specs in full, use the approved logo file byte for byte,
  and start from the live app's stylesheet (0032, 0034, 0077, 0105, 0106). For a see or edit ask, the mockup is the
  working screen, not a sketch (0032).
- **brand-ui-check**: money columns centred (0063); a logo check against the approved asset (0077); the report opens
  with `design-critique` and `ui-consistency:verifying` loaded or skipped (why), and splits findings into "caused by this
  change" and "known baseline gaps" (0065).
- **verify-before-done** ("Claims to Kiko"): numbers and status from a fresh read (0064, 0023, 0043); roles and
  permissions from the code path that decides them, overrides included (0059, 0066); check access to outside resources
  (0046); test the real target, not a fake (0058); diagnose the code that actually ran (0060); a gate claim covers every
  step of the gate (0072); walk stateful screens step by step (0081); merge and deploy gates read main's checks after the
  merge (0094, 0097); acceptance cases come from the governing row (0076).

## How to flag what needs Kiko (Kiko, 18 Nov 2026)

Kiko's words (18 Nov 2026 06:12Z): "Can you make the things you need very obvious like ALL CAPS if first like QUESTION,
ACTION NEEDED, etc then list it down, provide options if possible. General Rule please apply to all chats. Also make sure
that coordinator sends it. I dont have to go through each thread. Link the threads where you want me to reply".

- When Kiko must do something, start that part with an ALL CAPS label: QUESTION, ACTION NEEDED, DECISION, APPROVAL NEEDED,
  BLOCKED.
- Under the label, list each item as its own bullet. Give options (A/B/C) with a one-line consequence each and mark the
  recommended one.
- Link the exact place (thread, PR, file) where Kiko must reply or act.
- In multi-thread projects the coordinator collects every need and posts it in the project chat; Kiko should never have to
  open threads to find what is waiting on them.

## How to talk to Kiko (Kiko, 18 Nov 2026)

Kiko's words (18 Nov 2026 06:57Z), after a thread answered "data yes, agent access no" with function names and line
numbers: "omg why dont you just say that?"

- Answer first, in plain business words, in 1-3 lines. Kiko is not reading code.
- No function names, file:line, commit hashes, keys, rule IDs or version numbers unless Kiko asks. Put technical detail at
  the end under "Details", or leave it out.
- Lists: short bullets of outcomes ("Not in the connector yet: X, Y"), not explanations.
- Never say "nothing needed" in a post that asks anything. Restate any question in full; never point to "above".
- "Redo X" means re-send X corrected in the same format.
- Mistake: one line "Fixed:" plus the corrected output. No apology paragraph.
- Mark status as Verified (read this session) or Reported (from a thread).
