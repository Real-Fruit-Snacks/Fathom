# setfacl

> Set file access control lists (ACLs) for files and directories.
> More information: <https://man7.org/linux/man-pages/man1/setfacl.1.html>.

- Grant read permission to a specific user:

`setfacl -m u:<username>:r <path/to/file>`

- Grant read, write, and execute permissions to a user:

`setfacl -m u:<username>:rwx <path/to/file>`

- Grant permissions to a group:

`setfacl -m g:<group>:rw <path/to/file>`

- Set the default ACL for a directory (applied to new files created within):

`setfacl -d -m u:<username>:rwx <path/to/directory>`

- Remove all ACL entries for a user:

`setfacl -x u:<username> <path/to/file>`

- Remove all extended ACL entries:

`setfacl -b <path/to/file>`

- Apply ACLs recursively to a directory:

`setfacl -R -m u:<username>:rwx <path/to/directory>`

- Copy ACL from one file to another:

`getfacl <path/to/source_file> | setfacl --set-file=- <path/to/target_file>`
