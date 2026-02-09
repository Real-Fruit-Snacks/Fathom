# unset

> Remove shell variables or functions.
> This is a shell builtin command available in bash, zsh, and other shells.
> More information: <https://www.gnu.org/software/bash/manual/bash.html#index-unset>.

- Remove a variable:

`unset <variable_name>`

- Remove multiple variables:

`unset <variable1> <variable2> <variable3>`

- Remove a function:

`unset -f <function_name>`

- Remove a variable (explicit):

`unset -v <variable_name>`

- Remove an element from an array (bash):

`unset <array_name>[<index>]`

- Remove an entire array:

`unset <array_name>`

- Remove an exported environment variable:

`unset <PATH>`
