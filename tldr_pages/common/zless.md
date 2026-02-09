# zless

> View gzip compressed files using less.
> Allows scrolling through compressed files without extracting.
> More information: <https://www.gnu.org/software/gzip/manual/gzip.html>.

- View a gzipped file with scrolling:

`zless <path/to/file.gz>`

- View a compressed log file:

`zless </var/log/syslog.1.gz>`

- View multiple compressed files sequentially:

`zless <file1.gz> <file2.gz>`

- Search forward for a pattern (while viewing):

`/<pattern>`

- Search backward for a pattern (while viewing):

`?<pattern>`

- Go to the next file (when viewing multiple files):

`:n`

- Go to the previous file:

`:p`

- Quit:

`q`
