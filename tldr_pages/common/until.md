# until

> Execute commands repeatedly until a condition becomes true.
> A shell keyword for conditional looping (opposite of while).
> More information: <https://www.gnu.org/software/bash/manual/bash.html#index-until>.

- Basic until loop:

`until [[ <condition> ]]; do <command>; done`

- Loop until a file exists:

`until [[ -f <path/to/file> ]]; do sleep 1; done`

- Loop until a command succeeds:

`until <command>; do echo "Waiting..."; sleep 1; done`

- Loop until a counter reaches a value:

`<i>=0; until [[ $<i> -ge 10 ]]; do echo "$<i>"; ((<i>++)); done`

- Wait until a service is available:

`until nc -z <localhost> <8080>; do sleep 1; done`

- Loop until a variable is set:

`until [[ -n "$<variable>" ]]; do read -p "Enter value: " <variable>; done`

- Wait until a process exits:

`until ! pgrep -x "<process_name>" > /dev/null; do sleep 1; done`

- Loop until user confirms:

`until [[ "$<answer>" == "yes" ]]; do read -p "Continue? " <answer>; done`
