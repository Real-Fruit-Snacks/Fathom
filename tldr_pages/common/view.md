# view

> Opens vim in read-only mode to view files without modification.
> More information: <https://www.vim.org/>.

- Open a file in read-only mode:

`view <path/to/file>`

- Open a file at a specific line number:

`view +<line_number> <path/to/file>`

- Open a file and position cursor at first occurrence of pattern:

`view +/<pattern> <path/to/file>`

- Open multiple files in read-only mode:

`view <path/to/file1> <path/to/file2>`

- Search forward for a pattern (press `<n>` to find next):

`/<pattern>`

- Search backward for a pattern:

`?<pattern>`

- Go to a specific line number:

`:<line_number>`

- Exit view:

`:q`
