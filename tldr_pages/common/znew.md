# znew

> Recompress files from .Z (compress) format to .gz (gzip) format.
> Converts old Unix compress files to the more efficient gzip format.
> More information: <https://www.gnu.org/software/gzip/manual/gzip.html>.

- Convert a .Z file to .gz format:

`znew <path/to/file.Z>`

- Convert multiple .Z files:

`znew <file1.Z> <file2.Z> <file3.Z>`

- Use the slowest but best compression:

`znew -9 <path/to/file.Z>`

- Keep the original .Z file if it is smaller:

`znew -K <path/to/file.Z>`

- Use pipes for conversion (slower but uses less disk space):

`znew -P <path/to/file.Z>`

- Convert all .Z files in the current directory:

`znew *.Z`

- Convert with faster but less compression:

`znew -f <path/to/file.Z>`
