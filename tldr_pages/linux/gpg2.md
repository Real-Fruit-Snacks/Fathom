# gpg2

> GNU Privacy Guard 2 - encrypt and sign data and communications.
> Successor to `gpg` with improved agent handling and smartcard support.
> More information: <https://gnupg.org/documentation/manuals/gnupg/>.

- Generate a new GPG key pair interactively:

`gpg2 --full-generate-key`

- List all public keys in your keyring:

`gpg2 --list-keys`

- List all secret keys in your keyring:

`gpg2 --list-secret-keys`

- Encrypt a file for a specific recipient:

`gpg2 --encrypt --recipient <recipient_email> <path/to/file>`

- Decrypt a file:

`gpg2 --decrypt <path/to/file.gpg> --output <path/to/decrypted_file>`

- Sign a file with your default key:

`gpg2 --sign <path/to/file>`

- Verify a signed file:

`gpg2 --verify <path/to/file.sig>`

- Export a public key to a file:

`gpg2 --export --armor <key_id> > <path/to/public_key.asc>`
