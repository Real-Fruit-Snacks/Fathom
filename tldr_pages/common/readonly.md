# readonly

> Mark variables or functions as read-only.
> A shell builtin that prevents modification of values.
> More information: <https://www.gnu.org/software/bash/manual/bash.html#index-readonly>.

- Make a variable read-only:

`readonly <variable>=<value>`

- Make an existing variable read-only:

`<variable>=<value>; readonly <variable>`

- Make multiple variables read-only:

`readonly <var1>=<value1> <var2>=<value2>`

- Make a function read-only:

`readonly -f <function_name>`

- List all read-only variables:

`readonly -p`

- List all read-only functions:

`readonly -f`

- Make an array read-only:

`readonly -a <array>=(<item1> <item2>)`

- Make an associative array read-only:

`declare -A <dict>; <dict>[<key>]=<value>; readonly -A <dict>`
