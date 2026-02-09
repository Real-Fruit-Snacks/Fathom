# bunzip2

> Decompress files compressed with bzip2.
> More information: <https://manned.org/bunzip2>.

- Decompress a file:

`bunzip2 <path/to/file.bz2>`

- Decompress a file to stdout:

`bunzip2 -c <path/to/file.bz2>`

- Decompress a file and keep the original compressed file:

`bunzip2 -k <path/to/file.bz2>`

- Decompress multiple files:

`bunzip2 <path/to/file1.bz2 path/to/file2.bz2 ...>`

- Force decompression, overwriting existing files:

`bunzip2 -f <path/to/file.bz2>`

- Test the integrity of a compressed file without decompressing:

`bunzip2 -t <path/to/file.bz2>`

- Show verbose output during decompression:

`bunzip2 -v <path/to/file.bz2>`
