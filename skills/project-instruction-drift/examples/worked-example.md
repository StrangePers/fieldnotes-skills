# One test instruction, two projects

The shared guide says to run `npm test` from the package root. Compare these excerpts from two fictional checkouts. Each CI job runs a unit suite with at least one test.

| Checkout | package manager | package.json scripts | CI command |
| --- | --- | --- | --- |
| portal | npm | `{"test":"node --test"}` | `npm test` |
| catalog | pnpm | `{"test:unit":"node --test"}` | `pnpm test:unit` |

## Exercise

Identify which checkout has drifted from the common instruction. Decide what belongs in the shared guide and what should live alongside each package. Would changing the common command to `pnpm test:unit` fix both?

## Expected review

Portal provides the documented script. Catalog has no script named `test`, and portal has no script named `test:unit`. Keep the common intent (“run the unit suite from the package root”) and record each verified invocation in its project instructions. Review the regenerated instructions in both directories and confirm each command discovers the intended tests. Updating only catalog's generated copy would make the correction disappear on the next sync.
