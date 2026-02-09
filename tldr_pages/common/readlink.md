# readlink

> Print the resolved symbolic link or canonical file name.
> More information: <https://www.gnu.org/software/coreutils/manual/html_node/readlink-invocation.html>.

- Print the value of a symbolic link:

`readlink <path/to/symlink>`

- Print the absolute path of a file or directory:

`readlink -f <path/to/file>`

- Print the canonical path, requiring all components to exist:

`readlink -e <path/to/file>`

- Print the canonical path, without requiring the last component to exist:

`readlink -m <path/to/file>`

- Suppress error messages:

`readlink -q <path/to/file>`

- Print the resolved path without trailing newline:

`readlink -n <path/to/symlink>`

- Print verbose output:

`readlink -v <path/to/symlink>`
