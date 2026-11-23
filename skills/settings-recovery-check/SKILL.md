---
name: settings-recovery-check
description: Review settings recovery when a missing file, malformed data or a transient read failure might silently overwrite an existing configuration.
---

# Preserve settings when a read fails

1. Define the recovery contract for each condition. First use, invalid content, permission errors and transient I/O failures can look identical if the loader catches every exception and supplies defaults.
2. In a disposable store, exercise an absent file, a valid file, malformed bytes and an injected read failure. Record the returned state, any warning, and the bytes before and after a later save. Check startup and shutdown because either may persist defaults.
3. Choose recovery based on the product's policy. If the cause is uncertain, preserve the original data and surface the error. For an approved repair, verify the backup or recovery copy before replacing anything.
4. Repeat the load after the fault clears. Report which settings survived, whether a write occurred, and whether the application recovered without manual reconstruction.

[Four reads, one dangerous fallback](examples/worked-example.md)
