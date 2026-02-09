# head

> Output the first part of files.
> More information: <https://www.gnu.org/software/coreutils/head>.

- Output the first few lines of a file:

`head <-n> <count> <path/to/file>`

- Output the first few bytes of a file:

`head <-c> <size_in_bytes> <path/to/file>`

- Output everything but the last few lines of a file:

`head <-n> <-count> <path/to/file>`

- Output the first lines of multiple files:

`head <-n> <count> <path/to/file1> <path/to/file2>`

- Read from standard input:

`<command> | head <-n> <count>`

- Output the first 10 lines (default):

`head <path/to/file>`