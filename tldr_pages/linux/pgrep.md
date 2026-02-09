# pgrep

> Find process IDs matching specified criteria.
> More information: <https://man7.org/linux/man-pages/man1/pgrep.1.html>.

- Find PIDs matching a process name pattern:

`pgrep <pattern>`

- List PIDs and process names:

`pgrep -l <pattern>`

- Find processes owned by a specific user:

`pgrep -u <username> <pattern>`

- Find processes matching an exact command name:

`pgrep -x <exact_name>`

- Find the newest process matching the pattern:

`pgrep -n <pattern>`

- Find the oldest process matching the pattern:

`pgrep -o <pattern>`

- Count matching processes:

`pgrep -c <pattern>`

- Find processes running in a specific terminal:

`pgrep -t <tty> <pattern>`
