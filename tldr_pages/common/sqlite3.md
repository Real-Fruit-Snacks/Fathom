# sqlite3

> Command-line interface for SQLite databases.
> More information: <https://www.sqlite.org/cli.html>.

- Open a database file:

`sqlite3 <path/to/database.db>`

- Execute an SQL statement:

`sqlite3 <path/to/database.db> "<SELECT * FROM table_name;>"`

- Execute SQL from a file:

`sqlite3 <path/to/database.db> < <path/to/script.sql>`

- Export query results to CSV:

`sqlite3 -csv <path/to/database.db> "<SELECT * FROM table_name;>" > <output.csv>`

- Display table schema:

`sqlite3 <path/to/database.db> ".schema <table_name>"`

- List all tables:

`sqlite3 <path/to/database.db> ".tables"`

- Create a new database and table:

`sqlite3 <path/to/new.db> "<CREATE TABLE users (id INTEGER PRIMARY KEY, name TEXT);>"`

- Import CSV data into a table:

`sqlite3 <path/to/database.db> ".mode csv" ".import <path/to/data.csv> <table_name>"`
