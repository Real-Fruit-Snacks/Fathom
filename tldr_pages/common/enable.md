# enable

> Enable or disable shell builtins.
> A shell builtin for controlling which builtins are active.
> More information: <https://www.gnu.org/software/bash/manual/bash.html#index-enable>.

- List all enabled shell builtins:

`enable`

- List all disabled shell builtins:

`enable -n`

- Disable a shell builtin:

`enable -n <builtin_name>`

- Re-enable a disabled builtin:

`enable <builtin_name>`

- List all builtins with their enabled/disabled status:

`enable -a`

- Load a builtin from a shared object file:

`enable -f <path/to/shared_object> <builtin_name>`

- Delete a loaded builtin:

`enable -d <builtin_name>`

- Print builtin names without extra information:

`enable -p`
