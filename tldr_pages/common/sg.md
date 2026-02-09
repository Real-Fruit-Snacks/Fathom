# sg

> Execute commands as a different group.
> More information: <https://man7.org/linux/man-pages/man1/sg.1.html>.

- Execute a command as a member of the specified group:

`sg <group> <command>`

- Execute a command as a member of the specified group with a login shell:

`sg <group> <-c> <command>`

- Get an interactive shell as a member of the specified group:

`sg <group>`