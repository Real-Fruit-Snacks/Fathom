# builtin

> Execute a shell builtin, bypassing any functions or aliases with the same name.
> Useful when a function shadows a builtin command.
> More information: <https://www.gnu.org/software/bash/manual/bash.html#index-builtin>.

- Run the builtin cd command (ignoring any cd function):

`builtin cd <path/to/directory>`

- Run builtin echo instead of /bin/echo or an alias:

`builtin echo "<message>"`

- Use builtin in a function that overrides a builtin:

`cd() { builtin cd "$@" && ls; }`

- Force use of builtin pwd:

`builtin pwd`

- Check if a command is a builtin:

`builtin <command> 2>/dev/null && echo "Is a builtin"`

- Run builtin test instead of /usr/bin/test:

`builtin test -f <path/to/file>`

- Use builtin read in a custom read function:

`read() { builtin read -p "Input: " "$@"; }`

- Run builtin type to check command types:

`builtin type <command>`
