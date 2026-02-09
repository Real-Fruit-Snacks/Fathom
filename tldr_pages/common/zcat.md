# zcat

> Print data from gzip compressed files.
> Equivalent to gunzip -c for decompressing to stdout.
> More information: <https://www.gnu.org/software/gzip/manual/gzip.html>.

- Print the uncompressed contents of a gzipped file:

`zcat <path/to/file.gz>`

- Print the uncompressed contents of multiple gzipped files:

`zcat <file1.gz> <file2.gz>`

- Pipe uncompressed contents to another command:

`zcat <path/to/file.gz> | <grep pattern>`

- View compressed log files without extracting:

`zcat </var/log/syslog.1.gz>`

- Concatenate multiple compressed files and decompress:

`zcat <part1.gz> <part2.gz> > <combined_output>`

- Use with less for paging through compressed files:

`zcat <path/to/file.gz> | less`
