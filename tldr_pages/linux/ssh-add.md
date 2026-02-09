# ssh-add

> Add SSH private keys to the ssh-agent for authentication.
> Requires ssh-agent to be running. See also: `ssh-agent`, `ssh-keygen`.
> More information: <https://man.openbsd.org/ssh-add>.

- Add the default identity keys (~/.ssh/id_rsa, id_ecdsa, id_ed25519):

`ssh-add`

- Add a specific private key to the agent:

`ssh-add <path/to/private_key>`

- List fingerprints of all identities currently stored in the agent:

`ssh-add -l`

- List public keys of all identities currently stored in the agent:

`ssh-add -L`

- Delete a specific key from the agent:

`ssh-add -d <path/to/private_key>`

- Delete all keys from the agent:

`ssh-add -D`

- Add a key with a maximum lifetime (seconds or time format like 1h, 30m):

`ssh-add -t <lifetime> <path/to/private_key>`

- Lock the agent with a password:

`ssh-add -x`
