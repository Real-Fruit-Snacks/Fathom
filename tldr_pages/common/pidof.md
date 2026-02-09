# pidof

> Find the process ID of a running program.
> More information: <https://manned.org/pidof>.

- Get PIDs of all processes with a specific name:

`pidof <program>`

- Get PIDs of all processes with any of the specified names:

`pidof <program1> <program2>`

- Get PIDs of all processes with a specific name, excluding a specific PID:

`pidof <program> -o <exclude_pid>`

- Get PIDs excluding those running from a specific directory:

`pidof <program> -o %PPID`

- Return only one PID:

`pidof -s <program>`

- Get PIDs of scripts (checks both process name and command line):

`pidof -x <script.sh>`