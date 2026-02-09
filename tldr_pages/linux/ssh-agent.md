# ssh-agent

> SSH authentication agent that holds private keys in memory.
> Start the agent before using `ssh-add` to add keys.
> More information: <https://man.openbsd.org/ssh-agent>.

- Start ssh-agent and output shell commands to set environment variables:

`eval $(ssh-agent)`

- Start ssh-agent with a specific shell type:

`eval $(ssh-agent -s)`

- Start ssh-agent with a csh/tcsh compatible output:

`eval $(ssh-agent -c)`

- Kill the currently running agent:

`ssh-agent -k`

- Start agent with a specific socket path:

`ssh-agent -a <path/to/socket>`

- Start agent with a maximum key lifetime:

`ssh-agent -t <lifetime_in_seconds>`

- Run a command with ssh-agent and terminate when command exits:

`ssh-agent <command>`

- Display the process ID of the running agent:

`echo $SSH_AGENT_PID`
