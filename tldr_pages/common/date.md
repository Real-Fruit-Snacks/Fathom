# date

> Display or set the system date.
> More information: <https://www.gnu.org/software/coreutils/date>.

- Display the current date using the default locale's format:

`date`

- Display the current date in UTC and ISO 8601 format:

`date <-u|--utc> <-I|--iso-8601>`

- Display the current date as a Unix timestamp (seconds since the Unix epoch):

`date <+%s>`

- Convert a Unix timestamp to date (macOS and BSD date):

`date <-r 1234567890>`

- Convert a Unix timestamp to date (GNU coreutils date):

`date <-d @1234567890>`

- Display the date 1 week ago:

`date <-d "1 week ago">`

- Set the date (requires root):

`date <-s "<<2020-10-05 18:45:00>">`

- Display the current date in a custom format:

`date "<+%A, %B %d, %Y>"`