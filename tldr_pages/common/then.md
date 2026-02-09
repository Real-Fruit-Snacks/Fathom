# then

> A shell keyword that introduces the commands to execute when a condition is true.
> Used as part of if, elif, and case statements.
> More information: <https://www.gnu.org/software/bash/manual/bash.html#index-if>.

- Basic if-then statement:

`if [[ <condition> ]]; then <command>; fi`

- If-then on multiple lines:

`if [[ <condition> ]]
then
    <command>
fi`

- If-then-else:

`if [[ <condition> ]]; then <command1>; else <command2>; fi`

- If-then-elif-then:

`if [[ <condition1> ]]; then <command1>; elif [[ <condition2> ]]; then <command2>; fi`

- Then with multiple commands:

`if [[ <condition> ]]; then <command1>; <command2>; <command3>; fi`

- Then with command substitution:

`if <command>; then <result>=$(<another_command>); fi`

- Nested if-then:

`if [[ <condition1> ]]; then if [[ <condition2> ]]; then <command>; fi; fi`

- Then with logical operators:

`if [[ <condition1> ]] && [[ <condition2> ]]; then <command>; fi`
