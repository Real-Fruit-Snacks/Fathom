# sloccount

> Count source lines of code in a directory tree.
> More information: <https://dwheeler.com/sloccount/>.

- Count lines of code in a directory:

`sloccount <path/to/directory>`

- Count lines with detailed output:

`sloccount --details <path/to/directory>`

- Count lines in multiple directories:

`sloccount <path/to/dir1> <path/to/dir2>`

- Count lines and show person-months estimate:

`sloccount --personcost <path/to/directory>`

- Count lines with a specific cost per person-year:

`sloccount --effort <2.4> --schedule <2.5> <path/to/directory>`

- Count lines and duplicate to a data directory:

`sloccount --datadir </tmp/slocdata> <path/to/directory>`

- Show only summary without file details:

`sloccount <path/to/directory> | tail -20`
