# batch

> Execute commands when system load levels permit.
> Service atd (or atrun) should be running for the actual executions.
> More information: <https://man7.org/linux/man-pages/man1/batch.1.html>.

- Execute commands from standard input (press `Ctrl + D` when done):

`batch`

- Execute a command:

`echo "<command>" | batch`

- Execute commands from a file:

`batch <-f> <path/to/file>`