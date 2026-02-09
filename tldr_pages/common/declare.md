# declare

> Declare variables and give them attributes.
> A shell builtin for setting variable properties.
> More information: <https://www.gnu.org/software/bash/manual/bash.html#index-declare>.

- Declare an integer variable:

`declare -i <variable>=<value>`

- Declare a readonly variable:

`declare -r <variable>=<value>`

- Declare an array:

`declare -a <array>=(<element1> <element2> <element3>)`

- Declare an associative array (dictionary):

`declare -A <dict>; <dict>[<key>]=<value>`

- Declare a variable with lowercase conversion:

`declare -l <variable>=<VALUE>`

- Declare a variable with uppercase conversion:

`declare -u <variable>=<value>`

- Export a variable to child processes:

`declare -x <variable>=<value>`

- Display all variables with a specific attribute:

`declare -p`
