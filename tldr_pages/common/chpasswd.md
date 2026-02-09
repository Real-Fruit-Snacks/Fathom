# chpasswd

> Change user passwords in a batch.
> More information: <https://man7.org/linux/man-pages/man8/chpasswd.8.html>.

- Change passwords for multiple users (reads username:password pairs from stdin):

`chpasswd`

- Change passwords using a password file:

`chpasswd << path/to/password_file>`

- Change passwords with encrypted passwords (from crypt):

`chpasswd <-e>`

- Change passwords using MD5 encryption:

`chpasswd <-m>`

- Change passwords using SHA512 encryption:

`chpasswd <-c> <SHA512>`