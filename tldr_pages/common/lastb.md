# lastb

> Show the last bad login attempts.
> Like `last`, but for `/var/log/btmp`.
> More information: <https://man7.org/linux/man-pages/man1/lastb.1.html>.

- Show recent bad login attempts:

`lastb`

- Show a specific number of recent bad login attempts:

`lastb <-n number>`

- Show bad login attempts since a specific date:

`lastb <-s YYYY-MM-DD>`

- Show bad login attempts until a specific date:

`lastb <-t YYYY-MM-DD>`

- Show bad login attempts for a specific user:

`lastb <username>`