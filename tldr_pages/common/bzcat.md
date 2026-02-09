# bzcat

> Decompress bzip2 files to stdout.
> More information: <https://manned.org/bzcat>.

- Decompress a file to stdout:

`bzcat <path/to/file.bz2>`

- Decompress multiple files to stdout:

`bzcat <path/to/file1.bz2 path/to/file2.bz2 ...>`

- Decompress a file and pipe to another command:

`bzcat <path/to/file.bz2> | <command>`

- View the contents of a compressed text file:

`bzcat <path/to/file.txt.bz2>`

- Decompress from stdin:

`<command> | bzcat`

- Decompress and search for a pattern:

`bzcat <path/to/file.bz2> | grep <pattern>`
