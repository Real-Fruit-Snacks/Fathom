# look

> Display lines beginning with a given string.
> More information: <https://man7.org/linux/man-pages/man1/look.1.html>.

- Look for lines beginning with a specific string in a sorted file:

`look <string> <path/to/file>`

- Look case-insensitively (matching both upper and lower case characters):

`look <-f> <string> <path/to/file>`

- Specify a string termination character (space by default):

`look <-t> <,> <string> <path/to/file>`

- Look in `/usr/share/dict/words` (`-d` flag specifies dictionary character set and order):

`look <-d> <string>`

- Use case insensitive matching, only alphanumeric characters are compared:

`look <-df> <string>`