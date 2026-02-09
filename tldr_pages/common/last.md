# last

> View the last logged in users.
> More information: <https://man7.org/linux/man-pages/man1/last.1.html>.

- View last logins, their duration and other information as read from `/var/log/wtmp`:

`last`

- Specify how many of the last logins to show:

`last <-n login_count>`

- View full login and logout times and dates without truncation:

`last <-F>`

- View last logins for a specific user:

`last <username>`

- View last logins from a specific terminal:

`last <tty>`

- View last logins since a specific date (format: YYYY-MM-DD):

`last <-s YYYY-MM-DD>`

- View last logins until a specific date (format: YYYY-MM-DD):

`last <-t YYYY-MM-DD>`