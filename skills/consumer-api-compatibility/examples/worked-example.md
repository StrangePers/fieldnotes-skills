# Compile the same Java client against two APIs

Use a Java development kit and an empty working directory. Create subdirectories `old` and `new`. Save the three one-line files below. Both versions use the same public class name.

| File | Source |
| --- | --- |
| old/Labels.java | `public class Labels { public static String title(String s) { return s.trim(); } }` |
| new/Labels.java | `public class Labels { public static String title(String s, boolean trim) { return trim ? s.trim() : s; } }` |
| Client.java | `public class Client { public static void main(String[] args) { System.out.println(Labels.title(" sample ")); } }` |

Compile the baseline with `javac -d old-out old/Labels.java Client.java` and run `java -cp old-out Client`. Compile the unchanged client against the candidate with `javac -d new-out new/Labels.java Client.java`. Which public call broke?

## Expected review

The baseline prints sample. The candidate compilation fails because the one-argument method is gone. In new/Labels.java, restore the overload `public static String title(String s) { return title(s, true); }` inside the class. Recompile into new-out and run `java -cp new-out Client`. It prints sample again. This exercise checks source compatibility and one trimming behavior. An existing compiled consumer would need a separate linkage check.
