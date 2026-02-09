# mkfifo

> Create named pipes (FIFOs) for interprocess communication.
> More information: <https://www.gnu.org/software/coreutils/manual/html_node/mkfifo-invocation.html>.

- Create a named pipe at a specific path:

`mkfifo <path/to/pipe>`

- Create a named pipe with specific permissions (e.g., read/write for owner only):

`mkfifo <[-m|--mode]> <600> <path/to/pipe>`

- Create multiple named pipes:

`mkfifo <path/to/pipe1 path/to/pipe2 ...>`

- Create a named pipe with read/write permissions for all users:

`mkfifo <[-m|--mode]> <666> <path/to/pipe>`

- Create a pipe and use it to pass data between two processes:

`mkfifo <path/to/pipe> && <producer_command> > <path/to/pipe> & <consumer_command> < <path/to/pipe>`

- Create a named pipe with verbose output:

`mkfifo <[-v|--verbose]> <path/to/pipe>`
