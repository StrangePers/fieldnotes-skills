---
name: package-contents-check
description: Verify that an installable package includes the resources, executable files or native assets that its consumer actually needs outside the source checkout.
---

# Inspect and install the built package

1. Pick a consumer operation that needs a packaged resource. Record the package format, target platform and exact candidate archive. Identify what file the installed code will look for and how it derives the path.
2. Build using the release packaging command. Inspect the archive's actual file list against the required code and assets. A checkout test can find files that the packaging rules exclude.
3. Install the exact archive into a fresh consumer outside the source tree. Use the public entry point, a clean working directory and the intended target runtime. Verify the resulting content or behavior.
4. If a resource is missing, fix the package inputs or the runtime lookup as indicated by the evidence, rebuild and repeat the consumer test. Report the archive tested and any untested targets.

[Find a template missing from an npm archive](examples/worked-example.md)
