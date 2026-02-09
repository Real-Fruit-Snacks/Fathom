# sort

> Sort lines of text files.
> More information: <https://www.gnu.org/software/coreutils/sort>.

- Sort a file in ascending order:

`sort <path/to/file>`

- Sort a file in descending order:

`sort <-r> <path/to/file>`

- Sort a file in case-insensitive way:

`sort <-f> <path/to/file>`

- Sort a file of numbers numerically (instead of lexicographically):

`sort <-n> <path/to/file>`

- Sort `/etc/passwd` by the 3rd field (user ID) numerically:

`sort <-t: -k 3 -n> </etc/passwd>`

- Sort a file preserving only unique lines:

`sort <-u> <path/to/file>`

- Sort a file, outputting to the specified output file (can be used to sort a file in-place):

`sort <-o> <path/to/file> <path/to/file>`

- Sort numbers with exponents:

`sort <-g> <path/to/file>`