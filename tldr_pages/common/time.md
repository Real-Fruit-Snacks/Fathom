# time

> Measure the execution time of a command.
> More information: <https://man7.org/linux/man-pages/man1/time.1.html>.

- Measure time to execute a command:

`time <command>`

- Measure time for a command with arguments:

`time <command> <arg1 arg2 ...>`

- Use the portable output format:

`time -p <command>`

- Display verbose output (GNU time):

`\time -v <command>`

- Write timing information to a file (GNU time):

`\time -o <path/to/output.txt> <command>`

- Append timing information to a file (GNU time):

`\time -a -o <path/to/output.txt> <command>`

- Use a custom output format (GNU time):

`\time -f "Real: %e User: %U System: %S" <command>`

- Measure time for a pipeline:

`time (<command1> | <command2>)`
