# return

> Return from a shell function or sourced script.
> A shell builtin that exits a function with an optional return status.
> More information: <https://www.gnu.org/software/bash/manual/bash.html#index-return>.

- Return from a function with the status of the last command:

`return`

- Return with a successful status (0):

`return 0`

- Return with an error status (1):

`return 1`

- Return with a custom status code:

`return <status_code>`

- Return early from a function on error:

`<command> || return 1`

- Define a function that returns a status:

`<function_name>() { <commands>; return <status_code>; }`

- Return from a sourced script:

`source <script.sh>  # script contains: return <status_code>`

- Use return value in conditional:

`if <function_name>; then echo "success"; fi`
