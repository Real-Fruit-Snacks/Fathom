# su

> Switch to another user account or become the superuser.
> More information: <https://man7.org/linux/man-pages/man1/su.1.html>.

- Switch to the root user (requires root password):

`su`

- Switch to a specific user:

`su <username>`

- Switch to a user with a login shell (loads user's environment):

`su - <username>`

- Switch to root with a login shell:

`su -`

- Run a single command as another user:

`su -c "<command>" <username>`

- Run a command as root:

`su -c "<command>"`

- Start a shell as another user with a specific shell:

`su -s </bin/zsh> <username>`

- Preserve the current environment when switching:

`su -p <username>`
