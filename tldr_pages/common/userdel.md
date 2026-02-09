# userdel

> Remove a user account or remove a user from a group.
> More information: <https://man7.org/linux/man-pages/man8/userdel.8.html>.

- Remove a user:

`userdel <username>`

- Remove a user in other root directory:

`userdel <-R> <path/to/chroot_directory> <username>`

- Remove a user along with the home directory and mail spool:

`userdel <-r> <username>`