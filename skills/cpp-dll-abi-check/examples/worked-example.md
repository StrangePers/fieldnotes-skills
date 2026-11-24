# A Qt DLL loads with the wrong runtime beside it

A Windows x64 dashboard built with Qt 5.15.1 changes its title after a card is clicked. Keep its EXE and fixture data fixed. Compare three deployment directories.

| Deployment | Observation |
| --- | --- |
| Complete Qt 5.15.1 | The process loads the 5.15.1 modules and platform plugin. One click changes the title. |
| QtWidgets 5.15.2 with the remaining 5.15.1 runtime | Qt reports incompatible library versions before the click. |
| Complete Qt 5.15.2 | The process loads the 5.15.2 modules and platform plugin. The same click changes the title. |

**Expected finding.** The complete upgrade preserves the tested interaction. The failure belongs to the mixed deployment. Record the EXE hash once, the loaded module paths and versions for the successful runs, and the startup diagnostic for the failed run. Other client operations still need their own evidence.
