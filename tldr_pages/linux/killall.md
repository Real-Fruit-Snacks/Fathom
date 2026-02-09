# killall

> Send a signal to all processes running a specified command.
> More information: <https://man7.org/linux/man-pages/man1/killall.1.html>.

- Terminate all processes matching a name:

`killall <process_name>`

- Terminate all processes matching a name using SIGKILL:

`killall -9 <process_name>`

- Send a specific signal to processes:

`killall -<signal> <process_name>`

- Terminate processes owned by a specific user:

`killall -u <username> <process_name>`

- Ask for confirmation before killing:

`killall -i <process_name>`

- Terminate processes younger than a specified age:

`killall -y <1h|30m|60s> <process_name>`

- Terminate processes older than a specified age:

`killall -o <1h|30m|60s> <process_name>`

- List available signal names:

`killall -l`
