# export

> Set environment variables for the current shell and its child processes.
> More information: <https://www.gnu.org/software/bash/manual/bash.html#index-export>.

- Set an environment variable:

`export <VARIABLE>=<value>`

- Set an environment variable with spaces in the value:

`export <VARIABLE>="<value with spaces>"`

- Append to the PATH environment variable:

`export PATH="$PATH:<path/to/directory>"`

- Export a variable that was already set:

`export <VARIABLE>`

- Remove an environment variable:

`export -n <VARIABLE>`

- List all exported environment variables:

`export -p`

- Set multiple environment variables at once:

`export <VAR1>=<value1> <VAR2>=<value2>`

- Export a function for use in subshells (Bash only):

`export -f <function_name>`
