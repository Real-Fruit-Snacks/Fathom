# who

> Display who is logged in and related data (processes, boot time).
> More information: <https://www.gnu.org/software/coreutils/who>.

- Display the username, line, and time of all currently logged-in sessions:

`who`

- Display information only for the current terminal session:

`who <am i>`

- Display all available information:

`who <-a|--all>`

- Display all currently logged-in users and the number of sessions:

`who <-q|--count>`

- Display only the usernames of logged-in users:

`who <-q|--count> | head -n 1`

- Display users' message status as +, -, or ?:

`who <-T|-w|--mesg|--message|--writable>`

- Display the time of the last system boot:

`who <-b|--boot>`

- Display the current runlevel:

`who <-r|--runlevel>`