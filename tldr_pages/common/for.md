# for

> Execute commands for each item in a list.
> A shell keyword for iterating over sequences.
> More information: <https://www.gnu.org/software/bash/manual/bash.html#index-for>.

- Iterate over a list of items:

`for <item> in <item1> <item2> <item3>; do echo "$<item>"; done`

- Iterate over a range of numbers:

`for <i> in {1..10}; do echo "$<i>"; done`

- Iterate over a range with a step:

`for <i> in {0..100..5}; do echo "$<i>"; done`

- Iterate over files in a directory:

`for <file> in <path/to/directory>/*; do echo "$<file>"; done`

- Iterate over command output:

`for <line> in $(<command>); do echo "$<line>"; done`

- C-style for loop:

`for ((<i>=0; <i><10; <i>++)); do echo "$<i>"; done`

- Iterate over positional arguments:

`for <arg> in "$@"; do echo "$<arg>"; done`

- Iterate over array elements:

`for <element> in "${<array>[@]}"; do echo "$<element>"; done`
