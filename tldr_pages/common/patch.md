# patch

> Apply a patch to files and directories.
> More information: <https://man7.org/linux/man-pages/man1/patch.1.html>.

- Apply a patch using a patch file (often named with `.patch` extension):

`patch <-i|--input> <path/to/patch.patch>`

- Apply a patch to a specific file:

`patch <path/to/file> << path/to/patch.patch>`

- Apply a patch to the current directory:

`patch <-p1 < path/to/patch.patch>`

- Apply the reverse of a patch (undo a patch):

`patch <-R|--reverse> <-i|--input> <path/to/patch.patch>`

- Apply a patch without backing up files that are changed:

`patch <--no-backup-if-mismatch> <-i|--input> <path/to/patch.patch>`

- Apply a patch and save backups of the original files to a specific directory:

`patch <-b|--backup> <-V|--version-control> <numbered> <-B|--prefix> <path/to/backup_directory/> <-i|--input> <path/to/patch.patch>`

- Apply a patch from stdin:

`<command> | patch`