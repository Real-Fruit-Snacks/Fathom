# sync

> Flush file system buffers to disk.
> More information: <https://www.gnu.org/software/coreutils/sync>.

- Flush all pending writes to disk:

`sync`

- Flush writes for a specific file to disk:

`sync <path/to/file>`

- Flush writes for specific files to disk:

`sync <path/to/file1> <path/to/file2>`

- Flush writes for a filesystem to disk:

`sync <-f|--file-system> <path/to/file>`