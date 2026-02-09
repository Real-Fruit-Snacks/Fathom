# comm

> Compare two sorted files line by line.
> More information: <https://www.gnu.org/software/coreutils/comm>.

- Produce three tab-separated columns: lines only in first file, lines only in second file and common lines:

`comm <path/to/file1> <path/to/file2>`

- Print only lines common to both files:

`comm <-12> <path/to/file1> <path/to/file2>`

- Print only lines found in the first file:

`comm <-23> <path/to/file1> <path/to/file2>`

- Print only lines found in the second file:

`comm <-13> <path/to/file1> <path/to/file2>`

- Read one of the inputs from stdin:

`<command> | comm <-> <path/to/file>`

- Produce human readable output:

`comm <--output-delimiter=> <word> <path/to/file1> <path/to/file2>`