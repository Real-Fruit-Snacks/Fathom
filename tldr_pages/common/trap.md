# trap

> Execute commands when the shell receives signals or other conditions.
> A shell builtin for signal handling in scripts.
> More information: <https://www.gnu.org/software/bash/manual/bash.html#index-trap>.

- List all signal names and their numbers:

`trap -l`

- Execute a command when a signal is received:

`trap '<command>' <SIGINT>`

- Clean up temporary files on script exit:

`trap 'rm -f </tmp/tempfile>' EXIT`

- Ignore a signal:

`trap '' <SIGTERM>`

- Reset signal handling to default:

`trap - <SIGINT>`

- Handle multiple signals with one command:

`trap '<echo "Signal received">' <SIGINT SIGTERM SIGHUP>`

- Display the current trap commands:

`trap -p`

- Run cleanup on both normal exit and errors:

`trap '<cleanup_function>' EXIT ERR`
