# ssh-copy-id

> Install your public key in a remote machine's authorized_keys.
> More information: <https://man.openbsd.org/ssh-copy-id>.

- Copy the default identity key to a remote host:

`ssh-copy-id <username>@<remote_host>`

- Copy a specific public key to a remote host:

`ssh-copy-id -i <path/to/public_key> <username>@<remote_host>`

- Copy the key to a remote host on a non-standard port:

`ssh-copy-id -p <port> <username>@<remote_host>`

- Copy a key using a specific SSH option:

`ssh-copy-id -o <StrictHostKeyChecking=no> <username>@<remote_host>`

- Force copying of keys (even if they already exist on remote):

`ssh-copy-id -f <username>@<remote_host>`

- Dry run to show what would be done without actually copying:

`ssh-copy-id -n <username>@<remote_host>`

- Copy key and specify the identity file location:

`ssh-copy-id -i <~/.ssh/id_ed25519.pub> -p <22> <username>@<remote_host>`
