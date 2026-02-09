# finger

> User information lookup program.
> More information: <https://man7.org/linux/man-pages/man1/finger.1.html>.

- Display information about currently logged in users:

`finger`

- Display information about a specific user:

`finger <username>`

- Display the user's login name, real name, terminal name, idle time, login time, office location and office phone number:

`finger <-s> <username>`

- Produce multi-line format with information described above as well as user's home directory, home phone number, login shell, mail status, etc.:

`finger <-l> <username>`

- Prevent matching against real names:

`finger <-m> <username>`