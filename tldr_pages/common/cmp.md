# cmp

> Compare two files byte by byte.
> More information: <https://www.gnu.org/software/diffutils/manual/diffutils.html#Invoking-cmp>.

- Compare two files:

`cmp <path/to/file1> <path/to/file2>`

- Compare two files, and output detailed info for all differing bytes:

`cmp <-l> <path/to/file1> <path/to/file2>`

- Compare two files, and output detailed info for all differing bytes in octal format:

`cmp <-b> <path/to/file1> <path/to/file2>`

- Skip the first n bytes of the inputs before comparing:

`cmp <-i> <n> <path/to/file1> <path/to/file2>`

- Compare at most n bytes:

`cmp <-n> <n> <path/to/file1> <path/to/file2>`

- Compare files but only return the exit status (0 for identical, 1 for different, 2 for trouble):

`cmp <-s> <path/to/file1> <path/to/file2>`