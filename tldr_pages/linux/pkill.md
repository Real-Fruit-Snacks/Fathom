# pkill

> Signal processes based on name and other attributes.
> More information: <https://man7.org/linux/man-pages/man1/pkill.1.html>.

- Terminate all processes matching a pattern:

`pkill <pattern>`

- Terminate processes using SIGKILL signal:

`pkill -9 <pattern>`

- Terminate processes owned by a specific user:

`pkill -u <username> <pattern>`

- Terminate processes running in a specific terminal:

`pkill -t <tty> <pattern>`

- Send a specific signal to matching processes:

`pkill -<signal> <pattern>`

- Terminate processes matching an exact command name:

`pkill -x <exact_name>`

- Terminate the newest process matching the pattern:

`pkill -n <pattern>`

- Terminate the oldest process matching the pattern:

`pkill -o <pattern>`
