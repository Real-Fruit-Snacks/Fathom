# w

> Show who is logged on and what they are doing.
> Print user login, TTY, remote host, login time, idle time, JCPU, PCPU, and the current process.
> More information: <https://man7.org/linux/man-pages/man1/w.1.html>.

- Show logged-in users info:

`w`

- Show logged-in users info without a header:

`w <-h>`

- Show information for a specific user:

`w <username>`

- Show information without displaying the login, JCPU and PCPU columns:

`w <-s>`

- Show information including the IP address instead of hostname:

`w <-i>`