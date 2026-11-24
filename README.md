# Fieldnotes Skills

Thirty-five independently installable skills for everyday development, C++ and Qt, and Android reviews. Choose one for the task in front of you. Worked examples use fictional inputs and include an expected result.

For a ready-to-use C++ and Qt setup, [install the native profile](profiles/native/README.md). It selects nine skills from this library and seventeen from pinned sources. The guide includes OpenCode setup for an existing SVN working copy.

## Development workflows

| Skill | When to use it | Try it |
| --- | --- | --- |
| [change-evidence-review](skills/change-evidence-review/SKILL.md) | A PR changed after a passing check. Determine which behavior has evidence on the proposed revision. | [Review a parser that loses an old setting](skills/change-evidence-review/examples/worked-example.md) |
| [skill-visibility-check](skills/skill-visibility-check/SKILL.md) | A synced skill is missing in Codex. Trace it from the workspace selection to the project and client. | [Compare two sibling checkouts](skills/skill-visibility-check/examples/worked-example.md) |
| [remote-write-reconciliation](skills/remote-write-reconciliation/SKILL.md) | A remote write timed out. Find out whether it took effect before deciding on a retry. | [Recover a lost task receipt](skills/remote-write-reconciliation/examples/worked-example.md) |
| [benchmark-comparison-review](skills/benchmark-comparison-review/SKILL.md) | Decide whether a measured speedup holds under comparable conditions. | [Compare indexer runs with cold and warm caches](skills/benchmark-comparison-review/examples/worked-example.md) |
| [isolated-ui-smoke-check](skills/isolated-ui-smoke-check/SKILL.md) | Test a user action in a disposable profile and verify what happened behind the visible screen. | [Spot the failed request behind an empty list](skills/isolated-ui-smoke-check/examples/worked-example.md) |
| [analytics-event-validation](skills/analytics-event-validation/SKILL.md) | Check whether the recorded events can answer the question behind a dashboard metric. | [Measure import errors from synthetic events](skills/analytics-event-validation/examples/worked-example.md) |
| [quickstart-example-check](skills/quickstart-example-check/SKILL.md) | Check whether a new reader can reach the promised result using the published instructions. | [Find the setup step hidden by an SDK test](skills/quickstart-example-check/examples/worked-example.md) |
| [release-notes-coverage](skills/release-notes-coverage/SKILL.md) | Find user-visible changes and migration steps missing from a release announcement. | [Repair the upgrade note for a renamed CLI flag](skills/release-notes-coverage/examples/worked-example.md) |
| [shared-test-resource-handoff](skills/shared-test-resource-handoff/SKILL.md) | Decide when the next test job can safely take over a shared resource. | [Hand off a database between two local jobs](skills/shared-test-resource-handoff/examples/worked-example.md) |
| [project-instruction-drift](skills/project-instruction-drift/SKILL.md) | Find a shared command that has drifted in one checkout. | [One test instruction, two projects](skills/project-instruction-drift/examples/worked-example.md) |
| [dependency-conflict-triage](skills/dependency-conflict-triage/SKILL.md) | Find the dependency path responsible for a failed install. | [Resolve two incompatible Python requirements](skills/dependency-conflict-triage/examples/worked-example.md) |
| [regression-test-sensitivity](skills/regression-test-sensitivity/SKILL.md) | Check whether a passing test detects a known defect. | [Make a sorting regression visible](skills/regression-test-sensitivity/examples/worked-example.md) |
| [settings-recovery-check](skills/settings-recovery-check/SKILL.md) | Distinguish first use from corrupt or temporarily unreadable settings. | [Four reads, one dangerous fallback](skills/settings-recovery-check/examples/worked-example.md) |
| [pagination-continuity-check](skills/pagination-continuity-check/SKILL.md) | Detect duplicate pages and stale cursors after retrying or filtering. | [A retry and a new filter](skills/pagination-continuity-check/examples/worked-example.md) |
| [async-cancellation-check](skills/async-cancellation-check/SKILL.md) | Check that cancellation preserves the previous completed output. | [Cancel an export after its first chunk](skills/async-cancellation-check/examples/worked-example.md) |
| [component-boundary-trace](skills/component-boundary-trace/SKILL.md) | Find the first boundary at which a correct value disappears. | [Follow one time zone through a queue](skills/component-boundary-trace/examples/worked-example.md) |
| [keyboard-focus-path-check](skills/keyboard-focus-path-check/SKILL.md) | Trace keyboard focus into a dialog and back to its opener. | [Return to the opener after editing a label](skills/keyboard-focus-path-check/examples/worked-example.md) |
| [issue-readiness-check](skills/issue-readiness-check/SKILL.md) | Separate a genuine implementation blocker from a related open issue. | [A Ready export ticket with an unresolved format](skills/issue-readiness-check/examples/worked-example.md) |
| [skill-selection-evaluation](skills/skill-selection-evaluation/SKILL.md) | Measure missed, ambiguous and unwanted skill selections. | [Score two neighboring review skills](skills/skill-selection-evaluation/examples/worked-example.md) |
| [cli-output-contract-check](skills/cli-output-contract-check/SKILL.md) | Check machine-readable stdout, diagnostics and exit codes. | [A greeting breaks a JSON pipeline](skills/cli-output-contract-check/examples/worked-example.md) |
| [cross-platform-path-check](skills/cross-platform-path-check/SKILL.md) | Read foreign path syntax without losing the drive or coordinates. | [Read a Windows diagnostic on a POSIX runner](skills/cross-platform-path-check/examples/worked-example.md) |
| [package-contents-check](skills/package-contents-check/SKILL.md) | Find assets that exist in the checkout but disappear from the package. | [Find a template missing from an npm archive](skills/package-contents-check/examples/worked-example.md) |
| [consumer-api-compatibility](skills/consumer-api-compatibility/SKILL.md) | Rebuild an unchanged client against a candidate library. | [Compile the same Java client against two APIs](skills/consumer-api-compatibility/examples/worked-example.md) |
| [rollout-cohort-check](skills/rollout-cohort-check/SKILL.md) | Compare mature rollout cohorts before recommending expansion. | [Fewer failures during a smaller rollout](skills/rollout-cohort-check/examples/worked-example.md) |
| [offline-refresh-check](skills/offline-refresh-check/SKILL.md) | Verify cached content during a failed refresh and recovery. | [Keep the last list through a failed refresh](skills/offline-refresh-check/examples/worked-example.md) |
| [deep-link-resume-check](skills/deep-link-resume-check/SKILL.md) | Keep the requested object through cold startup and sign-in. | [Open the same order after session restoration](skills/deep-link-resume-check/examples/worked-example.md) |
| [responsive-container-check](skills/responsive-container-check/SKILL.md) | Test action reachability when a pane narrows inside a wide window. | [Save inside a narrow pane in a wide window](skills/responsive-container-check/examples/worked-example.md) |

## C++ and Qt

| Skill | When to use it | Try it |
| --- | --- | --- |
| [qt-headless-ui-check](skills/qt-headless-ui-check/SKILL.md) | Verify that a click on a virtual display changes application state. | [Trace a filter that still shows two rows](skills/qt-headless-ui-check/examples/worked-example.md) |
| [cpp-dll-abi-check](skills/cpp-dll-abi-check/SKILL.md) | Run a released Windows client with a replacement DLL and its runtime dependencies. | [Compare three Qt deployments](skills/cpp-dll-abi-check/examples/worked-example.md) |
| [native-decompiler-crosscheck](skills/native-decompiler-crosscheck/SKILL.md) | Resolve an ambiguous calculation in your own optimized binary. | [Check a sensor reading with its high bit set](skills/native-decompiler-crosscheck/examples/worked-example.md) |

## Android

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

The optional native profile also fetches Superpowers under MIT and two Fieldnotes Team skills under CC BY 4.0. Their license notices accompany the installed skills. [Pinned sources](profiles/native/sources.json)
