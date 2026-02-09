# source

> Execute commands from a file in the current shell environment.
> Also available as the `.` (dot) command.
> More information: <https://www.gnu.org/software/bash/manual/bash.html#index-source>.

- Execute a shell script in the current shell:

`source <path/to/script.sh>`

- Source a script using the dot notation:

`. <path/to/script.sh>`

- Source a script with arguments:

`source <path/to/script.sh> <arg1 arg2 ...>`

- Load environment variables from a file:

`source <.env>`

- Reload shell configuration after changes:

`source <~/.bashrc>`

- Source a script and use its exported functions:

`source <path/to/functions.sh> && <function_name>`

- Source multiple configuration files:

`source <file1.sh> && source <file2.sh>`
