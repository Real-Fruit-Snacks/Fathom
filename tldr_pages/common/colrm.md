# colrm

> Remove columns from lines of text.
> More information: <https://man7.org/linux/man-pages/man1/colrm.1.html>.

- Remove columns 3 to 5 from all lines:

`<command> | colrm <3> <5>`

- Remove all columns starting from column 6:

`<command> | colrm <6>`

- Remove columns 2 to 9 from a file:

`colrm <2> <9> <path/to/file>`