# wait

> Wait for processes to complete and return their exit status.
> This is a shell builtin command.
> More information: <https://manned.org/wait.1>.

- Wait for all background processes to complete:

`wait`

- Wait for a specific process by PID:

`wait <pid>`

- Wait for multiple processes:

`wait <pid1> <pid2> <pid3>`

- Wait for a background job by job specification:

`wait %<job_number>`

- Wait for any background job to complete and return its status (bash 4.3+):

`wait -n`

- Wait for the most recently started background process:

`wait $!`

- Start a command in background and wait for it:

`<command> & wait $!`

- Run multiple commands in parallel and wait for all:

`<command1> & <command2> & wait`
