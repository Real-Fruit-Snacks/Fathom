# truncate

> Shrink or extend the size of a file to the specified size.
> More information: <https://www.gnu.org/software/coreutils/manual/html_node/truncate-invocation.html>.

- Set a file to a specific size (creates if it doesn't exist):

`truncate -s <10M> <path/to/file>`

- Extend a file by appending a specific amount:

`truncate -s +<100K> <path/to/file>`

- Shrink a file by removing a specific amount from the end:

`truncate -s -<50K> <path/to/file>`

- Empty a file (truncate to zero bytes):

`truncate -s 0 <path/to/file>`

- Set a file to the same size as a reference file:

`truncate -r <path/to/reference> <path/to/file>`

- Round up file size to the next multiple of a size:

`truncate -c -s %<1M> <path/to/file>`

- Truncate multiple files to the same size:

`truncate -s <1G> <path/to/file1 path/to/file2 ...>`
