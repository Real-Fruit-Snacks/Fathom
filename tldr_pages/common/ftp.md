# ftp

> File Transfer Protocol client for transferring files to and from remote servers.
> More information: <https://linux.die.net/man/1/ftp>.

- Connect to an FTP server:

`ftp <host>`

- Connect to an FTP server on a specific port:

`ftp <host> <port>`

- Connect with a specific username:

`ftp -n <host>`

- Enable passive mode (useful behind firewalls):

`ftp -p <host>`

- Run FTP in verbose mode showing server responses:

`ftp -v <host>`

- Execute FTP commands from a script file:

`ftp -s:<script_file> <host>`

- Download a file after connecting (interactive):

`get <remote_file> [local_file]`

- Upload a file after connecting (interactive):

`put <local_file> [remote_file]`
