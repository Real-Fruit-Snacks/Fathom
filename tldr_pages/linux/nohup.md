# nohup

> Run a command immune to hangup signals, allowing it to continue after logout.
> More information: <https://man7.org/linux/man-pages/man1/nohup.1.html>.

- Run a command that continues after terminal closes:

`nohup <command>`

- Run a command in the background with nohup:

`nohup <command> &`

- Run a command and redirect output to a specific file:

`nohup <command> > <path/to/output.log> 2>&1 &`

- Run a command and append to an existing log file:

`nohup <command> >> <path/to/output.log> 2>&1 &`

- Run a command and discard all output:

`nohup <command> > /dev/null 2>&1 &`

- Run a script in the background:

`nohup <path/to/script.sh> &`

- Run a command with arguments:

`nohup <command> <arg1> <arg2> &`

- Run a long-running process that survives logout:

`nohup <command> > <path/to/output.log> 2>&1 & disown`
