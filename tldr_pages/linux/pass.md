# pass

> Unix password manager using GPG encryption and Git for version control.
> Stores passwords in a directory tree at ~/.password-store.
> More information: <https://www.passwordstore.org/>.

- Initialize the password store with a GPG key:

`pass init <gpg_key_id>`

- Insert a new password into the store:

`pass insert <path/to/password_name>`

- Generate a new random password of specified length:

`pass generate <path/to/password_name> <length>`

- Show a stored password (copies to clipboard for 45 seconds with -c):

`pass show <path/to/password_name>`

- Copy a password to the clipboard:

`pass -c <path/to/password_name>`

- List all stored passwords:

`pass`

- Remove a password from the store:

`pass rm <path/to/password_name>`

- Edit an existing password using the default editor:

`pass edit <path/to/password_name>`
