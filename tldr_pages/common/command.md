# command

> Execute a command bypassing shell functions.
> Forces the shell to execute the program, ignoring any functions with the same name.
> More information: <https://www.gnu.org/software/bash/manual/bash.html#index-command>.

- Execute ls program, ignoring any ls function:

`command <ls>`

- Display the path to the executable:

`command -v <command_name>`

- Check if a command exists:

`command -v <command_name> >/dev/null && echo "Command exists"`

- Display a description of the command type:

`command -V <command_name>`

- Execute command in a function that overrides it:

`ls() { command ls --color=auto "$@"; }`

- Find all locations of a command:

`command -v -a <command_name>`

- Use in scripts to ensure external command runs:

`command grep "<pattern>" <file>`

- Check command availability before using:

`if command -v <git> &>/dev/null; then <git> status; fi`
