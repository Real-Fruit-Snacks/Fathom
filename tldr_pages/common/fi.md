# fi

> A shell keyword that closes an if statement.
> Required to terminate if, then, else, and elif blocks.
> More information: <https://www.gnu.org/software/bash/manual/bash.html#index-if>.

- Basic if-fi:

`if [[ <condition> ]]; then <command>; fi`

- If-else-fi:

`if [[ <condition> ]]; then <command1>; else <command2>; fi`

- If-elif-fi:

`if [[ <condition1> ]]; then <command1>; elif [[ <condition2> ]]; then <command2>; fi`

- Multi-line if-fi:

`if [[ <condition> ]]
then
    <command>
fi`

- Nested if-fi:

`if [[ <condition1> ]]; then if [[ <condition2> ]]; then <command>; fi; fi`

- Complete if-elif-else-fi:

`if [[ <condition1> ]]; then <command1>; elif [[ <condition2> ]]; then <command2>; else <command3>; fi`

- Fi with semicolon (inline):

`if [[ <condition> ]]; then <command>; fi; echo "Done"`

- Multiple statements before fi:

`if [[ <condition> ]]; then <command1>; <command2>; <command3>; fi`
