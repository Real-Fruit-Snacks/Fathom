# su

> Switch to another user.
> More information: <https://man7.org/linux/man-pages/man1/su.1.html>.

- Switch to superuser (requires the root password):

`su`

- Switch to a given user (requires the user's password):

`su <username>`

- Switch to a given user and simulate a full login shell:

`su <-> <username>`

- Execute a command as another user:

`su <-c> "<command>" <username>`

- Switch to another user and load their environment:

`su <-> <username>`