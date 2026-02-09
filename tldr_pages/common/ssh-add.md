# ssh-add

> Add SSH private keys to the running ssh-agent.
> More information: <https://man.openbsd.org/ssh-add>.

- Add the default identity keys to the agent:

`ssh-add`

- Add a specific key to the agent:

`ssh-add <path/to/private_key>`

- List fingerprints of all loaded keys:

`ssh-add -l`

- List public keys of all loaded keys:

`ssh-add -L`

- Remove a specific key from the agent:

`ssh-add -d <path/to/private_key>`

- Remove all keys from the agent:

`ssh-add -D`

- Add a key with a timeout in seconds:

`ssh-add -t <3600> <path/to/private_key>`

- Lock the agent with a password:

`ssh-add -x`

- Unlock the agent:

`ssh-add -X`

- Add a key and confirm before each use:

`ssh-add -c <path/to/private_key>`
