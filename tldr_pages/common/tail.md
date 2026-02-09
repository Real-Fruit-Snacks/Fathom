# tail

> Display the last part of a file.
> See also: `head`.
> More information: <https://www.gnu.org/software/coreutils/tail>.

- Show last 'count' lines of file:

`tail <-n> <count> <path/to/file>`

- Print a file from a specific line number:

`tail <-n> <+count> <path/to/file>`

- Print a specific count of bytes from the end of a given file:

`tail <-c> <count> <path/to/file>`

- Print the last lines of a given file and keep reading it until `Ctrl + C`:

`tail <-f> <path/to/file>`

- Keep reading file until `Ctrl + C`, even if the file is rotated:

`tail <-F> <path/to/file>`

- Show last 'count' lines of file and refresh every 'seconds' seconds:

`tail <-n> <count> <-s> <seconds> <-f> <path/to/file>`