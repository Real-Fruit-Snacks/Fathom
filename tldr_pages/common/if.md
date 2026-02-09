# if

> Conditionally execute commands based on the exit status of a test.
> A shell keyword for conditional branching.
> More information: <https://www.gnu.org/software/bash/manual/bash.html#index-if>.

- Basic if statement:

`if [[ <condition> ]]; then <command>; fi`

- If-else statement:

`if [[ <condition> ]]; then <command1>; else <command2>; fi`

- If-elif-else statement:

`if [[ <condition1> ]]; then <command1>; elif [[ <condition2> ]]; then <command2>; else <command3>; fi`

- Check if a file exists:

`if [[ -f <path/to/file> ]]; then echo "File exists"; fi`

- Check if a directory exists:

`if [[ -d <path/to/directory> ]]; then echo "Directory exists"; fi`

- Check if a string is empty:

`if [[ -z "$<variable>" ]]; then echo "Variable is empty"; fi`

- Check command exit status:

`if <command>; then echo "Command succeeded"; else echo "Command failed"; fi`

- Compare numbers:

`if [[ <$a> -gt <$b> ]]; then echo "a is greater"; fi`
