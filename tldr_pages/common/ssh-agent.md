# ssh-agent

> Authentication agent that holds private keys for SSH public key authentication.
> More information: <https://man.openbsd.org/ssh-agent>.

- Start ssh-agent and set environment variables:

`eval $(ssh-agent)`

- Start ssh-agent with a specific shell:

`ssh-agent <bash|zsh|csh>`

- Start ssh-agent in background with Bourne shell output:

`ssh-agent -s`

- Start ssh-agent with C shell output:

`ssh-agent -c`

- Kill the currently running agent:

`ssh-agent -k`

- Set a timeout in seconds for identities:

`ssh-agent -t <3600>`

- Start agent with debug output:

`ssh-agent -d`

- Bind the agent to a specific Unix socket:

`ssh-agent -a <path/to/socket>`
