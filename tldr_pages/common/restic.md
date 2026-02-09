# restic

> Fast, secure, and efficient backup program.
> Supports multiple backends (local, S3, SFTP, etc.).
> More information: <https://restic.readthedocs.io/>.

- Initialize a new backup repository:

`restic -r </path/to/repo> init`

- Create a backup of a directory:

`restic -r </path/to/repo> backup <path/to/directory>`

- List all snapshots:

`restic -r </path/to/repo> snapshots`

- Restore a snapshot to a directory:

`restic -r </path/to/repo> restore <snapshot_id> --target <path/to/restore>`

- Restore the latest snapshot:

`restic -r </path/to/repo> restore latest --target <path/to/restore>`

- Remove old snapshots (keep last 7 daily, 4 weekly):

`restic -r </path/to/repo> forget --keep-daily <7> --keep-weekly <4> --prune`

- Check repository integrity:

`restic -r </path/to/repo> check`

- Mount repository as a filesystem:

`restic -r </path/to/repo> mount </mnt/restic>`
