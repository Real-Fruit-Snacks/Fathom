# read

> Read a line from standard input and split it into fields.
> A shell builtin command commonly used in scripts for user input.
> More information: <https://www.gnu.org/software/bash/manual/bash.html#index-read>.

- Read a line into a variable:

`read <variable_name>`

- Read a line with a custom prompt:

`read -p "<Enter your name: >" <name>`

- Read a line silently (useful for passwords):

`read -s -p "<Password: >" <password>`

- Read a line with a timeout in seconds:

`read -t <5> <variable_name>`

- Read only a specific number of characters:

`read -n <10> <variable_name>`

- Read a line into an array, splitting on a delimiter:

`IFS='<:>' read -ra <array_name> <<< "<string>"`

- Read multiple values into separate variables:

`read <first> <second> <third>`

- Read a file line by line:

`while read -r <line>; do echo "$<line>"; done < <path/to/file>`
