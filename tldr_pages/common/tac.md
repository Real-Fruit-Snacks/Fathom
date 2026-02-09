# tac

> Display and concatenate files with lines in reverse order.
> See also: `cat`.
> More information: <https://www.gnu.org/software/coreutils/tac>.

- Concatenate specific files in reversed order:

`tac <path/to/file1> <path/to/file2 ...>`

- Display `stdin` reversed:

`<command> | tac`

- Use a specific separator:

`tac <-s> <separator> <path/to/file1> <path/to/file2 ...>`

- Use a specific regex as a separator:

`tac <-r> <-s> <separator> <path/to/file1> <path/to/file2 ...>`

- Apply the separator before each file:

`tac <-b> <path/to/file1> <path/to/file2 ...>`