# sdiff

> Show two files side by side with differences highlighted.
> More information: <https://www.gnu.org/software/diffutils/manual/diffutils.html#Invoking-sdiff>.

- Compare two files side by side:

`sdiff <path/to/file1> <path/to/file2>`

- Compare two files side by side, ignoring all whitespace:

`sdiff <-W|--ignore-all-space> <path/to/file1> <path/to/file2>`

- Compare two files side by side, ignoring whitespace at the end of lines:

`sdiff <-Z|--ignore-trailing-space> <path/to/file1> <path/to/file2>`

- Compare two files side by side, ignoring case differences:

`sdiff <-i|--ignore-case> <path/to/file1> <path/to/file2>`

- Compare two files side by side using a specific width:

`sdiff <-w|--width> <120> <path/to/file1> <path/to/file2>`

- Compare two files side by side and generate a merged output file:

`sdiff <-o|--output> <path/to/merged_file> <path/to/file1> <path/to/file2>`