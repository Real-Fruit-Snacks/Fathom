# od

> Display file contents in octal, decimal or hexadecimal format.
> Optionally display the byte offset for each line and/or printable representation.
> More information: <https://www.gnu.org/software/coreutils/od>.

- Display file using default settings: octal format, 8 bytes per line, byte offsets in octal, and duplicate lines replaced with "*":

`od <path/to/file>`

- Display file in hexadecimal format (2-byte units), with byte offsets in decimal format:

`od <-x -A d> <path/to/file>`

- Display file in hexadecimal format (1-byte units), and 4 bytes per line:

`od <-t x1 -w4> <path/to/file>`

- Display file in hexadecimal format along with its character representation, and do not print byte offsets:

`od <-t x1z -A n> <path/to/file>`

- Display only first 100 bytes of file in decimal format:

`od <-t d> <-N 100> <path/to/file>`