# nohup

> Run a command that will continue after you log out.
> More information: <https://manned.org/nohup>.

- Run a command that will continue after logout:

`nohup <command> &`

- Run a command and write output to a specific file:

`nohup <command> > <path/to/output_file> &`

- Run a command and append output to a file:

`nohup <command> >> <path/to/output_file> &`

- Run a command and discard both stdout and stderr:

`nohup <command> > /dev/null 2>&1 &`

- Run a shell script that will continue after logout:

`nohup bash <path/to/script.sh> &`

- Run a command with specific arguments:

`nohup <command> <arg1> <arg2> &`

- Check if a nohup process is still running:

`jobs -l`