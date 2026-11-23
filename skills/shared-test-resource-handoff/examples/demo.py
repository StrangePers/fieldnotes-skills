"""Model a two-job handoff using a disposable SQLite database."""

from contextlib import closing
from multiprocessing import Event, Process
from pathlib import Path
import sqlite3
from tempfile import TemporaryDirectory


def migrate(database, acquired, finish):
    with closing(sqlite3.connect(database)) as connection:
        connection.execute("BEGIN IMMEDIATE")
        connection.execute("PRAGMA user_version = 2")
        acquired.set()
        if not finish.wait(20):
            raise RuntimeError("Timed out waiting to finish the fixture migration")
        connection.commit()


def main():
    with TemporaryDirectory() as directory:
        database = Path(directory) / "fixture.db"
        with closing(sqlite3.connect(database)) as setup:
            setup.execute("CREATE TABLE receipts (job TEXT)")
            setup.execute("PRAGMA user_version = 1")
            setup.commit()

        acquired, finish = Event(), Event()
        first = Process(target=migrate, args=(database, acquired, finish))
        first.start()
        try:
            if not acquired.wait(20):
                raise RuntimeError("Job A did not acquire the fixture")
            with closing(sqlite3.connect(database, timeout=0)) as probe:
                try:
                    probe.execute("BEGIN IMMEDIATE")
                except sqlite3.OperationalError as error:
                    if str(error) != "database is locked":
                        raise
                    print("B waiting for A")
                else:
                    raise RuntimeError("Unexpected concurrent writer")
        finally:
            finish.set()
            first.join()

        if first.exitcode != 0:
            raise RuntimeError("Check the migration outcome before handoff")
        with closing(sqlite3.connect(database, timeout=0)) as second:
            second.execute("BEGIN IMMEDIATE")
            version = second.execute("PRAGMA user_version").fetchone()[0]
            if version != 2:
                raise RuntimeError("Migration prerequisite missing")
            second.execute("INSERT INTO receipts VALUES (?)", ("B",))
            second.commit()
        print("B committed on schema 2")


if __name__ == "__main__":
    main()
