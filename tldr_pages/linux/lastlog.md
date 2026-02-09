# lastlog

> Display the most recent login information for all users.
> Reads from /var/log/lastlog database.
> See also: `last`, `lastb`, `faillog`, `who`.
> More information: <https://manned.org/lastlog>.

- Display last login information for all users:

`lastlog`

- Display last login for a specific user:

`lastlog -u <username>`

- Display users who have never logged in:

`lastlog | grep "Never logged in"`

- Display users who logged in before a specific number of days ago:

`lastlog -b <days>`

- Display users who logged in within the last N days:

`lastlog -t <days>`

- Clear the lastlog entry for a specific user (root only):

`sudo lastlog -C -u <username>`

- Set the lastlog entry for a user to current time:

`sudo lastlog -S -u <username>`

- Display lastlog in a specific time format:

`lastlog -u <username> | awk '{print $1, $4, $5, $6, $7}'`
