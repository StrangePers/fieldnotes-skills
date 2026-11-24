# A checked filter still shows two rows

A Qt Widgets inventory screen has two fixture rows, one active and one archived. A headless test clicks **Active only** and passes because the checkbox is checked. The promised user action is to hide the archived row.

Start with the box unchecked and both rows visible. Observe the checkbox's `toggled(bool)` signal, click once, then wait for the proxy model's row count. In the failing fixture the observer records one `true` signal and the count stays at two until timeout.

**Expected finding.** The click reached the control. Inspect the connection between the checkbox and the filter. After repairing that connection, the same click should produce one signal and leave only the active row visible.
