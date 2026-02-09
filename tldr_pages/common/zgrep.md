# zgrep

> Search patterns in gzip compressed files using grep.
> Decompresses files and searches them without extracting.
> More information: <https://www.gnu.org/software/gzip/manual/gzip.html>.

- Search for a pattern in a gzipped file:

`zgrep '<pattern>' <path/to/file.gz>`

- Search case-insensitively:

`zgrep -i '<pattern>' <path/to/file.gz>`

- Show line numbers with matches:

`zgrep -n '<pattern>' <path/to/file.gz>`

- Count matching lines:

`zgrep -c '<pattern>' <path/to/file.gz>`

- Search recursively in compressed files:

`zgrep -r '<pattern>' <path/to/directory>`

- Search in multiple compressed files:

`zgrep '<pattern>' <file1.gz> <file2.gz>`

- Use extended regular expressions:

`zgrep -E '<pattern1|pattern2>' <path/to/file.gz>`

- Show only filenames containing matches:

`zgrep -l '<pattern>' <*.gz>`
