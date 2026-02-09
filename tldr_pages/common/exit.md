# exit

> Exit the shell with an optional exit status.
> A shell builtin that terminates the current shell session.
> More information: <https://www.gnu.org/software/bash/manual/bash.html#index-exit>.

- Exit the shell with the status of the last command:

`exit`

- Exit with a successful status (0):

`exit 0`

- Exit with an error status (1):

`exit 1`

- Exit with a custom status code:

`exit <status_code>`

- Exit from a script after an error:

`<command> || exit 1`

- Exit with the status of a specific command:

`<command>; exit $?`

- Exit a subshell with a specific status:

`(<command>; exit <status_code>)`

- Exit and run cleanup via trap:

`trap '<cleanup_command>' EXIT; exit`
