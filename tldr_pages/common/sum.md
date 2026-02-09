# sum

> Compute checksums and the number of blocks in a file.
> More information: <https://www.gnu.org/software/coreutils/sum>.

- Compute a checksum with BSD-compatible algorithm and 1024-byte blocks:

`sum <path/to/file>`

- Compute a checksum with System V-compatible algorithm and 512-byte blocks:

`sum <--sysv> <path/to/file>`

- Compute checksums for multiple files:

`sum <path/to/file1> <path/to/file2>`

- Read file list from stdin:

`<command> | sum`