# pr

> Paginate or columnate files for printing.
> More information: <https://www.gnu.org/software/coreutils/pr>.

- Print multiple files with a default header and footer:

`pr <path/to/file1> <path/to/file2> <path/to/file3>`

- Print with a custom centered header:

`pr <-h "<<header>"> <path/to/file>`

- Print with numbered lines and a custom date format:

`pr <-n> <-D "<<format>"> <path/to/file>`

- Print all files together, one in each column, without a header or footer:

`pr <-m -t> <path/to/file1> <path/to/file2> <path/to/file3>`

- Print, beginning at page 2 up to page 5, with a given page length (default is 66):

`pr <+2:5 -l 50> <path/to/file>`

- Print with columns having a specific width:

`pr <-W 72> <path/to/file>`