# done

> A shell keyword that closes a loop body.
> Required to terminate for, while, until, and select loops.
> More information: <https://www.gnu.org/software/bash/manual/bash.html#index-for>.

- For loop with done:

`for <item> in <list>; do <command>; done`

- While loop with done:

`while [[ <condition> ]]; do <command>; done`

- Until loop with done:

`until [[ <condition> ]]; do <command>; done`

- Select loop with done:

`select <choice> in <options>; do <command>; break; done`

- Multi-line done:

`for <item> in <list>
do
    <command>
done`

- Done followed by more commands:

`for <item> in <list>; do <command>; done; echo "Loop finished"`

- Nested loops with done:

`for <i> in <list1>; do for <j> in <list2>; do <command>; done; done`

- Done with redirection:

`while read -r <line>; do echo "$<line>"; done < <input_file> > <output_file>`
