# Find a template missing from an npm archive

With Node.js and npm, create sibling directories named `producer` and `consumer` inside a disposable directory. In producer, create these three files.

| File | Contents |
| --- | --- |
| package.json | `{"name":"sample-template","version":"1.0.0","main":"index.cjs","files":["index.cjs"]}` |
| index.cjs | `module.exports = () => require("node:fs").readFileSync(require("node:path").join(__dirname, "template.txt"), "utf8").trim();` |
| template.txt | `Hello sample` |

From producer, run `node -p "require('./')()"` and then `npm pack --ignore-scripts`. Inspect the file list. From consumer, run `npm init -y`, install the archive with `npm install --offline --ignore-scripts --no-audit --no-fund ../producer/sample-template-1.0.0.tgz`, then run `node -p "require('sample-template')()"`.

## Expected review

The checkout prints Hello sample. The archive includes the entry point but omits template.txt, and the installed call fails while opening the template. Add `template.txt` to the producer's files list, repack, and repeat the install in a second fresh consumer. The installed call now prints Hello sample. The working directory can be anywhere because the lookup is relative to the installed module.
