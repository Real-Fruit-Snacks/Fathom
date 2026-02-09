# ecryptfs

> Enterprise cryptographic filesystem for Linux (stacked filesystem encryption).
> Encrypts files individually, allowing per-file access without mounting entire volume.
> See also: `mount.ecryptfs`, `ecryptfs-setup-private`.
> More information: <https://ecryptfs.org/>.

- Mount an encrypted directory:

`sudo mount -t ecryptfs <path/to/source> <path/to/mountpoint>`

- Set up private encrypted home directory for current user:

`ecryptfs-setup-private`

- Mount the private encrypted directory:

`ecryptfs-mount-private`

- Unmount the private encrypted directory:

`ecryptfs-umount-private`

- Add a new passphrase to the keyring:

`ecryptfs-add-passphrase`

- Recover the mount passphrase (requires login passphrase):

`ecryptfs-unwrap-passphrase <path/to/wrapped-passphrase>`

- Migrate an existing home directory to encrypted format:

`sudo ecryptfs-migrate-home -u <username>`

- Check the status of the private directory:

`ecryptfs-verify --home`
