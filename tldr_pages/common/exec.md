# exec

> Replace the current shell process with a command.
> A shell builtin that can also manipulate file descriptors.
> More information: <https://www.gnu.org/software/bash/manual/bash.html#index-exec>.

- Replace the current shell with a command:

`exec <command>`

- Replace shell with a login shell:

`exec -l <bash>`

- Redirect all subsequent stdout to a file:

`exec > <output.log>`

- Redirect all subsequent stderr to a file:

`exec 2> <error.log>`

- Redirect both stdout and stderr to a file:

`exec > <output.log> 2>&1`

- Open a file for reading on file descriptor 3:

`exec 3< <input.txt>`

- Open a file for writing on file descriptor 4:

`exec 4> <output.txt>`

- Close a file descriptor:

`exec 3>&-`
