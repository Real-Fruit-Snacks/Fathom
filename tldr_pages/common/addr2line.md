# addr2line

> Convert addresses of a binary into file names and line numbers.
> More information: <https://sourceware.org/binutils/docs/binutils/addr2line.html>.

- Display the filename and line number for an address in an executable:

`addr2line <-e> <path/to/executable> <address>`

- Display the function name, filename and line number:

`addr2line <-f> <-e> <path/to/executable> <address>`

- Display addresses from stdin:

`addr2line <-e> <path/to/executable>`

- Display the filename and line number for an address in a shared library:

`addr2line <-e> <path/to/library.so> <address>`