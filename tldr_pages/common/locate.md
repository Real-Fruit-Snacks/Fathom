# locate

> Find filenames quickly using a pre-built database.
> More information: <https://manned.org/locate>.

- Search for a file by name:

`locate <filename>`

- Search for a file by name, case-insensitively:

`locate -i <filename>`

- Search for a file by pattern (glob wildcards):

`locate '<*.txt>'`

- Search using a regular expression:

`locate --regex '<pattern>'`

- Limit the number of results:

`locate -n <10> <filename>`

- Display only files that still exist:

`locate -e <filename>`

- Update the database (usually requires root privileges):

`sudo updatedb`

- Display database statistics:

`locate -S`
