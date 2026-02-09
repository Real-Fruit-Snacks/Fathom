# sftp

> Secure file transfer over SSH.
> Interactive program for transferring files to and from a remote machine.
> More information: <https://man.openbsd.org/sftp>.

- Connect to a remote server:

`sftp <username>@<remote_host>`

- Connect using a specific port:

`sftp -P <port> <username>@<remote_host>`

- Connect using a specific SSH key:

`sftp -i <path/to/private_key> <username>@<remote_host>`

- Download a remote file to local directory:

`get <remote_path/to/file>`

- Upload a local file to remote directory:

`put <local_path/to/file>`

- Download a directory recursively:

`get -r <remote_path/to/directory>`

- Upload a directory recursively:

`put -r <local_path/to/directory>`

- List files on the remote server:

`ls`
