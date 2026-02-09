# dirname

> Extract the directory path from a given path.
> More information: <https://www.gnu.org/software/coreutils/dirname>.

- Get the directory path for a given file path:

`dirname <path/to/file_or_directory>`

- Get the directory path for multiple paths:

`dirname <path/to/file_a> <path/to/directory_b>`

- Delimit output with NUL instead of newlines (useful for paths with spaces):

`dirname <-z|--zero> <path/to/file>`

- Get the directory path from paths read from stdin:

`<command> | dirname`

- Get parent directory (equivalent to `..`):

`dirname <path/to/file/../..>`