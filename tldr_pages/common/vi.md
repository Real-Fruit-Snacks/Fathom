# vi

> Edit text files using a modal editor.
> See also: vim, nvim, vimtutor.
> More information: <https://pubs.opengroup.org/onlinepubs/9699919799/utilities/vi.html>.

- Open a file:

`vi <path/to/file>`

- Open a file at a specific line number:

`vi +<line_number> <path/to/file>`

- Open a file and position cursor at first occurrence of pattern:

`vi +/<pattern> <path/to/file>`

- Open multiple files:

`vi <file1> <file2> <file3>`

- Open a file in read-only mode:

`vi -R <path/to/file>`

- Recover a file after a crash:

`vi -r <path/to/file>`

- Enter command mode and quit without saving:

`:q!`

- Enter command mode and save then quit:

`:wq`
