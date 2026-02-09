# zmore

> View gzip compressed files using more.
> Allows paging through compressed files without extracting.
> More information: <https://www.gnu.org/software/gzip/manual/gzip.html>.

- View a gzipped file page by page:

`zmore <path/to/file.gz>`

- View a compressed log file:

`zmore </var/log/syslog.1.gz>`

- View multiple compressed files:

`zmore <file1.gz> <file2.gz>`

- Display one screenful at a time (while viewing):

`Space`

- Display one line at a time (while viewing):

`Enter`

- Search for a pattern (while viewing):

`/<pattern>`

- Skip to the next file (when viewing multiple files):

`:n`

- Quit:

`q`
