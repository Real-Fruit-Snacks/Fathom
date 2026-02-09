# xz

> Compress or decompress files using LZMA/LZMA2 compression.
> More information: <https://man7.org/linux/man-pages/man1/xz.1.html>.

- Compress a file, replacing it with an xz archive:

`xz <path/to/file>`

- Decompress an xz archive, replacing it with the original file:

`xz -d <path/to/file.xz>`

- Compress a file, keeping the original:

`xz -k <path/to/file>`

- Compress a file to stdout:

`xz -c <path/to/file> > <path/to/file.xz>`

- Decompress an xz archive to stdout:

`xz -dc <path/to/file.xz> > <path/to/file>`

- Compress a file with maximum compression level (slowest but best ratio):

`xz -9 <path/to/file>`

- Compress a file with extreme compression (even slower, slightly better ratio):

`xz -9e <path/to/file>`

- Test the integrity of a compressed file:

`xz -t <path/to/file.xz>`
