# type

> Display the type of a command (alias, function, builtin, file, or keyword).
> More information: <https://www.gnu.org/software/bash/manual/bash.html#index-type>.

- Display the type of a command:

`type <command>`

- Display all locations of a command:

`type -a <command>`

- Display only the type (alias, function, builtin, file, keyword):

`type -t <command>`

- Display the path to the command (if it's a file):

`type -p <command>`

- Display the function definition if command is a function:

`type -f <function_name>`

- Check if a command is a shell builtin:

`type <cd>`

- Check multiple commands at once:

`type <ls> <cd> <echo> <grep>`
