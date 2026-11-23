# Fieldnotes Skills

Five independently installable skills for Android developers. Choose one for the review in front of you. The worked examples include fictional inputs and an expected review you can compare with your own.

| Skill | When to use it | What the review produces |
| --- | --- | --- |
| [android-device-state-check](skills/android-device-state-check/SKILL.md) | A change looks correct in a preview and you need to check it on a real device while preserving existing user state. | A scoped pass, failure, or blocked result with an observable before/after condition. |
| [localized-screenshot-review](skills/localized-screenshot-review/SKILL.md) | You have screenshots of the same screen in several locales and need to check whether the set is comparable and ready to share. | A per-locale review that distinguishes a layout defect from differences in data, settings or navigation. |
| [android-localization-resource-review](skills/android-localization-resource-review/SKILL.md) | A change touches translated strings or plurals. | Sample inputs that expose a missing argument or a wrong quantity form. [Review a Slovak translation diff](skills/android-localization-resource-review/examples/worked-example.md). |
| [android-release-artifact-check](skills/android-release-artifact-check/SKILL.md) | A release bundle was rebuilt and you need to know which artifact passed testing. | A trace from the selected AAB to the tested APK set, or the specific step to repeat. [Compare two bundles with the same version](skills/android-release-artifact-check/examples/worked-example.md). |
| [android-anr-triage](skills/android-anr-triage/SKILL.md) | An Android Application Not Responding report arrives with partial thread or rollout evidence. | A bounded diagnosis and one measurement that could resolve it. [Investigate a late thread sample](skills/android-anr-triage/examples/worked-example.md). |

## Use one skill

Copy the whole skill directory, including its `examples/` folder when present, into your private Fieldnotes workspace under `skills/`. Add the directory name to the receiving project's `skills` list in `workspace.json` and sync. The rest of this library is optional.

To keep a versioned link to the collection, add this repository as a Git submodule under `packs/fieldnotes-skills` in your private workspace. Add `"skill_roots": ["packs/fieldnotes-skills/skills"]` at the top level of the manifest. Commit the submodule pointer and manifest together. On another machine run `git submodule update --init` before syncing. Update the pointer deliberately when adopting a new version.

## License

The collection is available under [CC BY 4.0](LICENSE). Suggested credit: Fieldnotes Skills by StrangePers. When sharing an adaptation, identify the changes and include a link to the license.
