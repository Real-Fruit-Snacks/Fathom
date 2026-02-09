# sshfs

> Mount remote filesystems over SSH using FUSE.
> More information: <https://github.com/libfuse/sshfs>.

- Mount a remote directory:

`sshfs <username>@<remote_host>:<remote_path> <local_mountpoint>`

- Mount with a specific SSH port:

`sshfs -p <port> <username>@<remote_host>:<remote_path> <local_mountpoint>`

- Mount using a specific SSH key:

`sshfs -o IdentityFile=<path/to/private_key> <username>@<remote_host>:<remote_path> <local_mountpoint>`

- Mount with reconnect on connection drop:

`sshfs -o reconnect <username>@<remote_host>:<remote_path> <local_mountpoint>`

- Mount allowing other users access:

`sshfs -o allow_other <username>@<remote_host>:<remote_path> <local_mountpoint>`

- Mount with compression:

`sshfs -C <username>@<remote_host>:<remote_path> <local_mountpoint>`

- Unmount a SSHFS mount:

`fusermount -u <local_mountpoint>`

- Mount with custom SSH options:

`sshfs -o ssh_command='ssh -o StrictHostKeyChecking=no' <username>@<remote_host>:<remote_path> <local_mountpoint>`
