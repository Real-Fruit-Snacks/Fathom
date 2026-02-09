# while

> Execute commands repeatedly while a condition is true.
> A shell keyword for conditional looping.
> More information: <https://www.gnu.org/software/bash/manual/bash.html#index-while>.

- Basic while loop:

`while [[ <condition> ]]; do <command>; done`

- Infinite loop:

`while true; do <command>; done`

- Read a file line by line:

`while IFS= read -r <line>; do echo "$<line>"; done < <path/to/file>`

- Loop with a counter:

`<i>=0; while [[ $<i> -lt 10 ]]; do echo "$<i>"; ((<i>++)); done`

- Loop until a command succeeds:

`while ! <command>; do sleep 1; done`

- Process command output line by line:

`<command> | while IFS= read -r <line>; do echo "$<line>"; done`

- Loop with timeout:

`<timeout>=10; while [[ $<timeout> -gt 0 ]]; do <command>; ((<timeout>--)); sleep 1; done`

- Loop while a file exists:

`while [[ -f <path/to/file> ]]; do <command>; sleep 1; done`
