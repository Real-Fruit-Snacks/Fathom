# pmap

> Report memory map of a process.
> Display information about the memory usage of a process.
> More information: <https://manned.org/pmap>.

- Show memory map of a process:

`pmap <pid>`

- Display extended information:

`pmap <[-x|--extended]> <pid>`

- Show device format (major:minor and inode):

`pmap <[-d|--device]> <pid>`

- Show everything the kernel provides:

`pmap <[-X]> <pid>`

- Display memory maps for multiple processes:

`pmap <pid1> <pid2> <pid3>`

- Show quiet output with only totals:

`pmap <[-q|--quiet]> <pid>`

- Display in a format suitable for parsing:

`pmap <[-x|--extended]> <[-q|--quiet]> <pid>`

- Repeat display every N seconds:

`watch -n <seconds> pmap <pid>`
