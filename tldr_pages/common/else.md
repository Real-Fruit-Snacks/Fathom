# else

> A shell keyword that introduces commands to execute when a condition is false.
> Used as part of if statements.
> More information: <https://www.gnu.org/software/bash/manual/bash.html#index-if>.

- Basic if-else statement:

`if [[ <condition> ]]; then <command1>; else <command2>; fi`

- If-else on multiple lines:

`if [[ <condition> ]]
then
    <command1>
else
    <command2>
fi`

- Else with multiple commands:

`if [[ <condition> ]]; then <command1>; else <command2>; <command3>; fi`

- Check file existence with else:

`if [[ -f <path/to/file> ]]; then echo "Exists"; else echo "Not found"; fi`

- Command success/failure with else:

`if <command>; then echo "Success"; else echo "Failed"; fi`

- Else clause with exit:

`if [[ <condition> ]]; then <command>; else echo "Error" >&2; exit 1; fi`

- Nested else:

`if [[ <condition1> ]]; then <command1>; else if [[ <condition2> ]]; then <command2>; else <command3>; fi; fi`

- One-liner with else:

`[[ <condition> ]] && <true_command> || <false_command>`
