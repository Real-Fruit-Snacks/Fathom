# ar

> Create, modify, and extract from archives.
> More information: <https://sourceware.org/binutils/docs/binutils/ar.html>.

- Extract all members from an archive:

`ar <-x> <path/to/archive.a>`

- List the members of an archive:

`ar <-t> <path/to/archive.a>`

- Replace or add files to an archive:

`ar <-r> <path/to/archive.a> <path/to/file1> <path/to/file2>`

- Insert an object file index (equivalent to running `ranlib`):

`ar <-s> <path/to/archive.a>`

- Create an archive with files and an object file index:

`ar <-rs> <path/to/archive.a> <path/to/file1> <path/to/file2>`

- Show detailed information about the contents of an archive:

`ar <-tv> <path/to/archive.a>`

- Delete files from an archive:

`ar <-d> <path/to/archive.a> <path/to/file1> <path/to/file2>`