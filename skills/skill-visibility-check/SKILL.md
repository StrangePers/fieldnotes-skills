---
name: skill-visibility-check
description: Diagnose a Fieldnotes skill missing from a Codex project by tracing the selected workspace profile, installed skill directory and effective Codex skill list.
---

# Find where a skill stops being visible

1. Record the expected skill name, the checkout actually open in Codex, the Fieldnotes workspace that manages it and the Codex version. Two sibling checkouts can select different skills.
2. In that workspace's `workspace.json`, inspect the registered project's `skills` selection and the configured skill roots. Follow the selected name to its source. From the Fieldnotes tool directory, run `python fieldnotes.py sync --workspace WORKSPACE --check`, substituting the actual workspace path. Inspect the preview for the intended checkout.
3. In that checkout, inspect `.agents/skills/NAME/SKILL.md`. Compare the YAML name and file contents with the selected source. If the preview calls for a copy, delivery is pending. A clear preview means the checkout matches its selection, which may omit this skill.
4. Inspect the skill list for the same checkout in a fresh Codex session. When using the Codex app server, request `skills/list` with the checkout's absolute path in `cwds` and `forceReload` set to true. Check the returned directory, matching entry's path, enabled state and discovery errors. A same-named user skill can mask a missing project copy. If listing fails, report client visibility as unknown.
5. Report the first discrepancy you observed and the smallest correction that follows from it. Opening the intended checkout, selecting a skill for another project and fixing a malformed entry solve different problems.

[Diagnose two sibling projects with different selections](examples/worked-example.md)
