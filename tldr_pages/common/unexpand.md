# unexpand

> Convert spaces to tabs.
> More information: <https://www.gnu.org/software/coreutils/unexpand>.

- Convert spaces in each file to tabs, writing to standard output:

`unexpand <path/to/file>`

- Convert spaces to tabs, reading from standard input:

`<command> | unexpand`

- Convert only leading blanks (spaces and/or tabs):

`unexpand <-t|--tabs> <path/to/file>`

- Have tabs a certain number of characters apart, not 8:

`unexpand <-t|--tabs=<<number> <path/to/file>`

- Use a comma separated list of explicit tab positions:

`unexpand <-t|--tabs=<<1,4,6> <path/to/file>`