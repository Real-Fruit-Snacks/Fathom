# lsattr

> List file attributes on a Linux ext2/ext3/ext4 filesystem.
> Shows special attributes like immutable, append-only, and secure deletion.
> See also: `chattr`.
> More information: <https://manned.org/lsattr>.

- List attributes of files in the current directory:

`lsattr`

- List attributes of a specific file:

`lsattr <path/to/file>`

- List attributes recursively in a directory:

`lsattr -R <path/to/directory>`

- List attributes of all files including hidden files:

`lsattr -a`

- List attributes of directories themselves (not their contents):

`lsattr -d <path/to/directory>`

- List only files with attributes set:

`lsattr -a | grep -v "^--------------"`

- List attributes with long output format:

`lsattr -l <path/to/file>`

- List attributes recursively including hidden files:

`lsattr -Ra <path/to/directory>`
