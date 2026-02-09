# last

> Display a listing of last logged in users and system reboots.
> More information: <https://man7.org/linux/man-pages/man1/last.1.html>.

- Display the last logins:

`last`

- Display the last logins for a specific user:

`last <username>`

- Display the last N logins:

`last -n <number>`

- Display full login and logout times with year:

`last -F`

- Display system reboots:

`last reboot`

- Display system shutdowns:

`last shutdown`

- Display logins from a specific terminal:

`last <tty>`

- Display logins from a specific time period:

`last -s <yesterday> -t <today>`
