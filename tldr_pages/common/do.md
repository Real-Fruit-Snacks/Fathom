# do

> A shell keyword that begins the body of a loop.
> Used with for, while, until, and select statements.
> More information: <https://www.gnu.org/software/bash/manual/bash.html#index-for>.

- For loop with do:

`for <item> in <list>; do <command>; done`

- While loop with do:

`while [[ <condition> ]]; do <command>; done`

- Until loop with do:

`until [[ <condition> ]]; do <command>; done`

- Select loop with do:

`select <item> in <options>; do <command>; break; done`

- Multi-line do block:

`for <item> in <list>
do
    <command1>
    <command2>
done`

- Do with multiple commands:

`for <item> in <list>; do <command1>; <command2>; <command3>; done`

- Nested loops with do:

`for <i> in <list1>; do for <j> in <list2>; do echo "$<i> $<j>"; done; done`

- C-style for with do:

`for ((<i>=0; <i><10; <i>++)); do echo "$<i>"; done`
