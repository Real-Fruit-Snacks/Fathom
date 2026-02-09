# wc

> Count lines, words, and bytes.
> More information: <https://www.gnu.org/software/coreutils/wc>.

- Count all lines, words and bytes for the given files:

`wc <path/to/file>`

- Count lines:

`wc <-l> <path/to/file>`

- Count words:

`wc <-w> <path/to/file>`

- Count bytes:

`wc <-c> <path/to/file>`

- Count characters (taking multi-byte characters into account):

`wc <-m> <path/to/file>`

- Count lines, words and bytes from standard input:

`<find . -name "*.txt"> | wc`

- Count the length of the longest line:

`wc <-L> <path/to/file>`