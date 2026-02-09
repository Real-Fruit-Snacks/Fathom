# usermod

> Modify an existing user account.
> See also: `useradd`, `userdel`.
> More information: <https://man7.org/linux/man-pages/man8/usermod.8.html>.

- Change a user's login name:

`sudo usermod -l <new_username> <username>`

- Change a user's home directory:

`sudo usermod -d </path/to/new_home> <username>`

- Move a user's home directory to a new location:

`sudo usermod -d </path/to/new_home> -m <username>`

- Add a user to supplementary groups:

`sudo usermod -aG <group1,group2> <username>`

- Change a user's default shell:

`sudo usermod -s </bin/zsh> <username>`

- Lock a user account:

`sudo usermod -L <username>`

- Unlock a user account:

`sudo usermod -U <username>`

- Set an account expiration date:

`sudo usermod -e <YYYY-MM-DD> <username>`
