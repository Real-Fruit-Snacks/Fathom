# realpath

> Display the resolved absolute path of files and directories.
> More information: <https://manned.org/realpath>.

- Display the absolute path of a file or directory:

`realpath <path/to/file_or_directory>`

- Require all path components to exist:

`realpath -e <path/to/file_or_directory>`

- Resolve ".." and "." components before symlinks:

`realpath -s <path/to/file_or_directory>`

- Suppress error messages:

`realpath -q <path/to/file_or_directory>`

- Print the resolved path relative to a directory:

`realpath --relative-to=<path/to/directory> <path/to/file>`

- Print the resolved path relative to the current directory:

`realpath --relative-base=. <path/to/file>`