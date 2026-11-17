# Rules for Claude

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
