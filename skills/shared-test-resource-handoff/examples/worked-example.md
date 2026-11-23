# A disconnected job can still hold the database

## Exercise

Two CI jobs use the same test database. Job A starts a schema migration. Its progress stops appearing in CI. Job B wants to start its setup. Decide what job B should check before it changes anything.

Run `python demo.py` from this example directory with Python 3. The [demo](demo.py) creates a new temporary SQLite database. A child process holds a write transaction while the parent attempts to acquire it as job B. The pause models a job whose coordinator has stopped receiving progress. Once A commits, B acquires a write transaction, checks the schema marker and records its own operation.

## Expected review

| Evidence at the point of decision | Decision |
| --- | --- |
| The first acquisition attempt reports a locked database. | B waits. A still controls the shared writer. |
| A commits and exits successfully. | B may attempt to acquire ownership. |
| B acquires its transaction and reads schema version 2 inside it. | B can proceed with its fixture write and commit. |

The final output is `B committed on schema 2`. If A had rolled back, the lock could still become available. B's schema check would then block the handoff. This exercise models resource coordination locally. It uses no CI service or live database.
