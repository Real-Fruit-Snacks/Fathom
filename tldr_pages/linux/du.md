# du

> Estimate and display disk space usage of files and directories.
> More information: <https://man7.org/linux/man-pages/man1/du.1.html>.

- Display disk usage of a directory:

`du <path/to/directory>`

- Display disk usage in human-readable format:

`du -h <path/to/directory>`

- Display total disk usage of a directory:

`du -sh <path/to/directory>`

- Display disk usage of all files and directories:

`du -ah <path/to/directory>`

- Display disk usage with a maximum depth:

`du -h --max-depth=<depth> <path/to/directory>`

- Display disk usage sorted by size:

`du -h <path/to/directory> | sort -h`

- Display disk usage excluding certain patterns:

`du -h --exclude=<pattern> <path/to/directory>`

- Display apparent size instead of disk usage:

`du -h --apparent-size <path/to/directory>`
