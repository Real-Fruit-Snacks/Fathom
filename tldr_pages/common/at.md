# at

> Execute commands once at a later time.
> Service atd (or atrun) should be running for the actual executions.
> More information: <https://man7.org/linux/man-pages/man1/at.1.html>.

- Execute commands from standard input in 5 minutes (press `Ctrl + D` when done):

`at <now + 5 minutes>`

- Execute a command from standard input at 10:00 AM today:

`echo "<command>" | at <1000>`

- Execute commands from a given file next Tuesday:

`at <-f> <path/to/file> <next tuesday>`

- Execute a command at 10:00 PM on the 31st of July:

`echo "<command>" | at <10pm jul 31>`

- Execute a command at 1:00 AM tomorrow:

`echo "<command>" | at <1am tomorrow>`

- Display scheduled jobs for the current user:

`at <-l>`

- Remove a scheduled job (use `at -l` to find the job number):

`at <-r> <job_number>`