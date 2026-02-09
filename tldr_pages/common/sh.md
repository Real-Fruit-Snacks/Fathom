# sh

> Execute commands in a POSIX-compliant shell interpreter.
> The default shell on most Unix-like systems.
> More information: <https://man7.org/linux/man-pages/man1/sh.1p.html>.

- Start an interactive shell:

`sh`

- Execute a command:

`sh -c "<command>"`

- Execute a script file:

`sh <path/to/script.sh>`

- Execute a script file with arguments:

`sh <path/to/script.sh> <arg1 arg2 ...>`

- Read commands from standard input:

`echo "<command>" | sh`

- Execute a script in debug mode (print each command):

`sh -x <path/to/script.sh>`

- Execute a script and exit on first error:

`sh -e <path/to/script.sh>`

- Check a script for syntax errors without executing:

`sh -n <path/to/script.sh>`
