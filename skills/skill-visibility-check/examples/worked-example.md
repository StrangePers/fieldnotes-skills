# One workspace, two checkouts

## Exercise

A developer selects `change-evidence-review` for a checkout named `api`. A teammate opens Codex in its sibling `docs` and reports that the skill is missing. Both projects use the same Fieldnotes workspace. These are the relevant observations, with paths shortened to the checkout name.

| Observation | api | docs |
| --- | --- | --- |
| Workspace profile selects the skill | Yes | No |
| Project contains `.agents/skills/change-evidence-review/SKILL.md` | Yes | No |
| Fresh Codex skill list for this directory | Enabled entry under the checkout | No matching entry |
| Discovery errors | None | None |

A fresh Fieldnotes sync preview reports zero files to change. Explain how this is possible and what to do if the teammate wants to review a change in `api`.

## Expected diagnosis

The files and client list match both profiles. The teammate is inspecting `docs`, while the selected skill belongs to `api`. Open `api` in Codex and confirm the entry resolves under that checkout. Running sync again with the same selection would leave both projects as shown.

If the teammate also wants the skill in `docs`, add its name to that project's selection, preview and apply the sync, then check the client list from `docs`. That is a separate change to what the team shares.

## Reproduce the contrast

Register two disposable Git checkouts named `api` and `docs` with Fieldnotes. Add this collection as a skill root and select `change-evidence-review` only for `api`. Apply sync and run a second preview. Inspect each checkout with Codex. The client listing in this example was checked with Codex CLI 0.166.0 using the app server's `skills/list` method.
