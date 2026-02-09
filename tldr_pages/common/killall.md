# killall

> Send kill signal to all instances of a process by name.
> More information: <https://manned.org/killall>.

- Kill all processes named "firefox":

`killall firefox`

- Kill a process using the SIGTERM (terminate) signal:

`killall -<TERM> <process_name>`

- Kill a process using the SIGKILL (force kill) signal:

`killall -<KILL> <process_name>`

- Kill a process using a numeric signal:

`killall -<9> <process_name>`

- Kill a process by user:

`killall -u <username> <process_name>`

- List available signal names:

`killall -l`

- Interactively ask for confirmation before killing:

`killall -i <process_name>`

- Kill a process and all its children:

`killall -g <process_name>`