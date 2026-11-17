# Rules for Claude

## No claims from memory (Kiko, 17 Nov 2026)

Kiko's words (17 Nov 2026): "yes. can that be added in all Claude.md", answering whether to add a
no-status-or-count-without-fresh-read rule. Source: task-observer findings 0023, 0059, 0064 and 0066 (Canvas repo,
`skill-observations/observation-log/`), where Claude stated a status, count or role from memory and was wrong.

- Never state a status, count, role, file or API fact from memory, an earlier session, a summary or a stale board.
  Each one needs a fresh read in this session.
- Every such claim cites that read: a `file:line`, the command and its output, or a link.
- If it can't be verified, say "unverified" and don't present it as fact.
- Before stating facts or claiming anything is done, use these skills (Kiko, 17 Nov 2026):
  `superpowers:verification-before-completion`, `agent-protocols:source-driven-development`,
  `caveman:investigate-first` and `verify-before-done`.
