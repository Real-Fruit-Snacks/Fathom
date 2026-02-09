# hexdump

> An ASCII, decimal, hexadecimal, octal dump.
> More information: <https://man7.org/linux/man-pages/man1/hexdump.1.html>.

- Print the hexadecimal representation of a file, replacing duplicate lines by '*':

`hexdump <path/to/file>`

- Display the input offset in hexadecimal and its ASCII representation only:

`hexdump <-C> <path/to/file>`

- Display the hexadecimal representation of a file, but interpret only n bytes of it:

`hexdump <-C> <-n> <number_of_bytes> <path/to/file>`

- Don't replace duplicate lines by '*':

`hexdump <-v> <path/to/file>`