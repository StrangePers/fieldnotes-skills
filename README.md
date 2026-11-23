# Fieldnotes Skills

Two reusable agent skills for developers reviewing Android changes on a device. Each skill is a standalone Markdown file. Select only the one you need.

| Skill | When to use it | What the review produces |
| --- | --- | --- |
| [android-device-state-check](skills/android-device-state-check/SKILL.md) | A change looks correct in a preview and you need to check it on a real device while preserving existing user state. | A scoped pass, failure, or blocked result with an observable before/after condition. |
| [localized-screenshot-review](skills/localized-screenshot-review/SKILL.md) | You have screenshots of the same screen in several locales and need to check whether the set is comparable and ready to share. | A per-locale review that distinguishes a layout defect from differences in data, settings or navigation. |

## Use one skill

Copy its directory into your private Fieldnotes workspace under `skills/`. Add the directory name to the receiving project's `skills` list in `workspace.json` and sync. The rest of this library is optional.

To keep a versioned link to the collection, add this repository as a Git submodule under `packs/fieldnotes-skills` in your private workspace. Add `"skill_roots": ["packs/fieldnotes-skills/skills"]` at the top level of the manifest. Commit the submodule pointer and manifest together. On another machine run `git submodule update --init` before syncing. Update the pointer deliberately when adopting a new version.

## License

The collection is available under [CC BY 4.0](LICENSE). Suggested credit: Fieldnotes Skills by StrangePers. When sharing an adaptation, identify the changes and include a link to the license.
