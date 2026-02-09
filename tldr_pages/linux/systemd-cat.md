# systemd-cat

> Connect a pipeline or command output with the journal.
> More information: <https://man7.org/linux/man-pages/man1/systemd-cat.1.html>.

- Send output of a command to the journal:

`systemd-cat <command>`

- Send output with a specific priority:

`systemd-cat -p <info> <command>`

- Send output with a custom identifier:

`systemd-cat -t <my-app> <command>`

- Pipe output to the journal:

`echo "<message>" | systemd-cat`

- Send output with both identifier and priority:

`systemd-cat -t <my-app> -p <warning> <command>`

- View entries from a specific identifier:

`journalctl -t <my-app>`

- Send multiple lines to the journal:

`cat <path/to/file> | systemd-cat -t <my-app>`
