# zdiff

> Compare gzip compressed files line by line.
> Decompresses files and passes them to diff.
> More information: <https://www.gnu.org/software/gzip/manual/gzip.html>.

- Compare two gzipped files:

`zdiff <path/to/file1.gz> <path/to/file2.gz>`

- Compare a gzipped file with an uncompressed file:

`zdiff <path/to/file.gz> <path/to/file>`

- Show side-by-side comparison:

`zdiff -y <path/to/file1.gz> <path/to/file2.gz>`

- Show only whether files differ:

`zdiff -q <path/to/file1.gz> <path/to/file2.gz>`

- Ignore whitespace differences:

`zdiff -w <path/to/file1.gz> <path/to/file2.gz>`

- Ignore case differences:

`zdiff -i <path/to/file1.gz> <path/to/file2.gz>`

- Show unified diff format with context lines:

`zdiff -u <path/to/file1.gz> <path/to/file2.gz>`

- Show context diff format:

`zdiff -c <path/to/file1.gz> <path/to/file2.gz>`
