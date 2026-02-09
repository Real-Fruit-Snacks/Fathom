# typeset

> Declare variables and give them attributes (alias for declare).
> A shell builtin compatible with ksh for setting variable properties.
> More information: <https://www.gnu.org/software/bash/manual/bash.html#index-typeset>.

- Declare an integer variable:

`typeset -i <variable>=<value>`

- Declare a readonly variable:

`typeset -r <variable>=<value>`

- Declare an array:

`typeset -a <array>=(<element1> <element2> <element3>)`

- Declare an associative array:

`typeset -A <dict>; <dict>[<key>]=<value>`

- Declare a variable with lowercase conversion:

`typeset -l <variable>=<VALUE>`

- Declare a variable with uppercase conversion:

`typeset -u <variable>=<value>`

- Export a variable:

`typeset -x <variable>=<value>`

- Display the attributes of a variable:

`typeset -p <variable>`
