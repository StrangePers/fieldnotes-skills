---
name: project-instruction-drift
description: Audit shared repository instructions when a documented command, directory or convention may have diverged across projects.
---

# Check shared instructions against each checkout

1. Pick one instruction and identify who receives it. Locate the editable source and the project-specific instructions that also apply. Record the checkout and revision for each observation.
2. Test the instruction's assumptions against each project's manifest, lockfile, scripts and CI entry point. When safe, run the documented command in its stated directory and confirm it exercises the intended behavior. A successful command that discovers zero tests leaves coverage open.
3. Identify the part that is true across the receiving projects. Put a different command or prerequisite in the narrowest applicable source. Regenerate managed copies using the project's normal sync procedure.
4. Recheck both the affected project and a project that previously worked. Report the obsolete instruction, the source that should own the correction and the evidence for each checkout.

[One test instruction, two projects](examples/worked-example.md)
