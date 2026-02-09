# rmdir

> Remove empty directories.
> See also: `rm` for removing directories with contents.
> More information: <https://www.gnu.org/software/coreutils/manual/html_node/rmdir-invocation.html>.

- Remove an empty directory:

`rmdir <path/to/directory>`

- Remove multiple empty directories:

`rmdir <path/to/directory1 path/to/directory2 ...>`

- Remove empty directories and their empty parent directories:

`rmdir -p <path/to/directory1/directory2>`

- Remove empty directories with verbose output:

`rmdir -v <path/to/directory>`

- Remove parent directories if they become empty:

`rmdir -p <path/to/directory/subdirectory>`

- Ignore failures on non-empty directories:

`rmdir --ignore-fail-on-non-empty <path/to/directory>`
