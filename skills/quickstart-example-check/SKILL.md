---
name: quickstart-example-check
description: Verify that a new user can follow a published quickstart from its stated prerequisites to the promised result, including setup that tests or a maintainer's environment may supply implicitly.
---

# Try the quickstart as its reader

1. Identify the intended reader, documentation revision, package version and first observable success. Read the rendered instructions. Check what the reader can actually copy, including working directories, imports and the order of commands.
2. Start in a disposable project with the stated prerequisites. Use the documented installation path. Keep existing project files, cached configuration, credentials and test fixtures out of that environment unless the guide explicitly requires them.
3. Follow the visible instructions literally. At the first divergence, record the step, the observed output and the missing prerequisite or incorrect assumption. If the failure occurs before reaching the guide, report what prevented the check.
4. Propose the smallest correction that gets the reader to the promised result. Replay the corrected instructions from another fresh start and verify the resulting behavior. A successful rerun in the original directory can conceal a file created during diagnosis.

[Find a configuration file that only the SDK test creates](examples/worked-example.md)
