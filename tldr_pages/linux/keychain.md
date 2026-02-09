# keychain

> SSH and GPG key manager that keeps agents running across logins.
> Front-end to ssh-agent and ssh-add with caching capabilities.
> More information: <https://www.funtoo.org/Funtoo:Keychain>.

- Start keychain and add the default SSH key:

`keychain ~/.ssh/id_rsa`

- Add multiple SSH keys:

`keychain <path/to/key1> <path/to/key2>`

- Add SSH and GPG keys:

`keychain <path/to/ssh_key> --gpg <gpg_key_id>`

- Source the keychain environment variables in your shell:

`eval $(keychain --eval <path/to/key>)`

- Clear all cached keys from the agent:

`keychain --clear`

- Stop all running agents:

`keychain --stop all`

- List fingerprints of all keys managed by keychain:

`keychain --list`

- Start keychain in quiet mode (no output except errors):

`keychain --quiet <path/to/key>`
