# rsnapshot

> Filesystem snapshot utility based on rsync.
> Creates incremental backups using hard links.
> More information: <https://rsnapshot.org/>.

- Test the configuration file:

`rsnapshot configtest`

- Run a backup at a specific interval:

`rsnapshot <hourly>`

- Run a backup with verbose output:

`rsnapshot -v <daily>`

- Run a backup in debug mode (no actual changes):

`rsnapshot -t <weekly>`

- Sync files without rotating:

`rsnapshot sync`

- Run a backup and delete oldest snapshots:

`rsnapshot <monthly>`

- Run with a custom configuration file:

`rsnapshot -c </path/to/rsnapshot.conf> <hourly>`
