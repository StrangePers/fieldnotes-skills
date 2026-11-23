---
name: android-release-artifact-check
description: Check whether Android release test evidence belongs to the exact candidate App Bundle (AAB) selected for handoff, including cases where a rebuild has the same version.
---

# Match test evidence to an Android release bundle

1. Identify the selected AAB in the release handoff. Compute SHA-256 over its bytes, for example with `sha256sum candidate.aab` or `Get-FileHash -Algorithm SHA256 candidate.aab`. Read the application ID, version code and version name from the bundle manifest using `bundletool dump manifest --bundle=candidate.aab --module=base`. Compare them with the intended release. Record the variant from the build record if available.
2. Trace the APKs exercised by the test back to that AAB. A saved build record can pair the input AAB digest with the output APK-set digest. If that record is missing, an authorized tester can generate a fresh set from the verified input with `bundletool build-apks --bundle=candidate.aab --output=candidate.apks`. Use a fresh output location and record both digests. The bundle and APK set are different files with separate hashes. [Android bundletool guide](https://developer.android.com/tools/bundletool)
3. Find the test record identifying the APK set actually installed on a compatible test device. Record the install outcome, device configuration relevant to the change, behavior exercised and result. An APK from a separate Gradle build or a matching version label alone leaves the chain incomplete. Local APK-set tests cover the recorded configuration and signing setup. Play delivery or Play signing needs its own evidence when it matters to the change.
4. Report the candidate identity, the evidence chain, the scope of the observed result and any missing link. If the candidate changed, point to the earliest step that needs repeating. Keep the handoff limited to verification and use only public certificate fingerprints if signing identity is relevant.

[Try matching a passing test to one of two bundles](examples/worked-example.md)
