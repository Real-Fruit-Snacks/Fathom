# timeout

> Run a command with a time limit.
> More information: <https://www.gnu.org/software/coreutils/timeout>.

- Run a command and terminate it if it runs for more than 10 seconds:

`timeout <10s> <command>`

- Run a command and terminate it if it runs for more than 1 minute:

`timeout <1m> <command>`

- Run a command and terminate it if it runs for more than 1 hour:

`timeout <1h> <command>`

- Run a command and kill it with a specific signal if it runs too long:

`timeout <--signal=TERM> <10s> <command>`

- Run a command and send KILL signal if it doesn't terminate within the kill timeout after the initial signal:

`timeout <--kill-after=5s> <10s> <command>`

- Run a command in the foreground without altering the exit status:

`timeout <--foreground> <10s> <command>`

- Run a command and preserve its exit status:

`timeout <--preserve-status> <10s> <command>`