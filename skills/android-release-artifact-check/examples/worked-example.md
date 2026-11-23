# Two bundles share a version code

## Exercise

A fictional team selects build B for handoff. Both builds report application ID `org.example.notebook`, version name `1.4`, version code `14` and variant `release`. Can the team attach the existing smoke-test result to B?

| Artifact | SHA-256 | Build record |
| --- | --- | --- |
| A, original bundle | `fcd6d3dc0518ef3aac3dfce7a9a3e3bc2360a0e6301288278264f102fb4c1b57` | First build |
| B, selected bundle | `d3e3ed6b656de70d9a178852ba3cdc3965063f518fa80e12f72bf109e379f0c8` | Rebuild of the same revision |
| S, APK set | `2e8a254ff61c090350d0e6f061633c185abbf66eca3e99a07633eac279c51624` | Generated from the recorded digest of A |

The install receipt identifies S by its full digest. The test record for that install says that an API 35 emulator opened an existing notebook successfully. The records contain one APK-set build and one install.

To reproduce the table offline, hash the UTF-8 text `candidate-A`, `rebuild-B` and `apk-set-A` respectively, without a trailing newline. These byte strings stand in for binary artifacts in this exercise.

## Expected review

The notebook smoke test passed for A on the recorded emulator. Verification for B is pending. The first missing link is an APK set derived from B. The variant, version and revision match, but A and B have different digests.

To close the gap, verify B's digest, derive an APK set from those bytes, record the input and output digests, install that set on the intended test configuration and repeat the notebook check. Attach the resulting receipt to B. Hashing the old set again would only reconfirm the existing evidence for A.
