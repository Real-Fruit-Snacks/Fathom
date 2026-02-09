# kill

> Send a signal to a process, usually to terminate it.
> More information: <https://man7.org/linux/man-pages/man1/kill.1.html>.

- Terminate a process using the default SIGTERM signal:

`kill <pid>`

- Terminate a process using the SIGKILL signal (forceful):

`kill -9 <pid>`

- Send a specific signal to a process:

`kill -<signal> <pid>`

- List available signal names:

`kill -l`

- Terminate multiple processes:

`kill <pid1> <pid2> <pid3>`

- Send the SIGHUP signal to reload a process configuration:

`kill -HUP <pid>`

- Terminate all background jobs:

`kill $(jobs -p)`

- Send signal 0 to check if a process is running:

`kill -0 <pid>`
