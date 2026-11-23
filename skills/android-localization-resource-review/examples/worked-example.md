# A destination disappears and a file count reads incorrectly

## Exercise

A fictional file organizer changes two entries in `res/values-sk/strings.xml`. The default English text for `saved_to` is `Saved to %1$s`. The screen calls `getString(R.string.saved_to, "Inbox")` and `getQuantityString(R.plurals.files, count, count)`. The destination should remain visible in both locales.

```diff
 <resources>
-    <string name="saved_to">Uložené do priečinka %1$s</string>
+    <string name="saved_to">Uložené do priečinka</string>
     <plurals name="files">
         <item quantity="one">%1$d súbor</item>
         <item quantity="few">%1$d súbory</item>
-        <item quantity="other">%1$d súborov</item>
+        <item quantity="other">%1$d súbory</item>
     </plurals>
 </resources>
```

Review the destination and predict what a Slovak reader will see at counts 1, 2, 5 and 21. Which cases would a test limited to 1 and 2 miss?

## Expected review

| Input | Selected resource or form | Predicted text | Expected text |
| --- | --- | --- | --- |
| Inbox | saved_to | Uložené do priečinka | Uložené do priečinka Inbox |
| 1 | one | 1 súbor | 1 súbor |
| 2 | few | 2 súbory | 2 súbory |
| 5 | other | 5 súbory | 5 súborov |
| 21 | other | 21 súbory | 21 súborov |

Restore `%1$s` in `saved_to` so the user can find the destination. Restore `%1$d súborov` in the `other` entry. Testing counts 1 and 2 exercises neither the broken plural form nor the destination message. These are predictions from the resource change. A device check would select Slovak, save to Inbox and exercise a count of 5.
