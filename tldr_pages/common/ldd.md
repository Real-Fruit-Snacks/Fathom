# ldd

> Display shared library dependencies of a binary.
> Do not use ldd on untrusted binaries; use objdump or readelf instead.
> More information: <https://man7.org/linux/man-pages/man1/ldd.1.html>.

- Display shared library dependencies of a binary:

`ldd <path/to/binary>`

- Display all information including symbol versioning:

`ldd <-v> <path/to/binary>`

- Display unused direct dependencies:

`ldd <-u> <path/to/binary>`

- Report missing functions and objects:

`ldd <-d> <path/to/binary>`