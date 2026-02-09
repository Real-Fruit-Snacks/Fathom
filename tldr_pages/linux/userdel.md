# userdel

> Delete a user account and related files.
> See also: `useradd`, `usermod`.
> More information: <https://man7.org/linux/man-pages/man8/userdel.8.html>.

- Delete a user:

`sudo userdel <username>`

- Delete a user and their home directory:

`sudo userdel -r <username>`

- Delete a user even if they are currently logged in:

`sudo userdel -f <username>`

- Delete a user, their home directory, and mail spool:

`sudo userdel -r -f <username>`

- Delete a user and remove them from all groups:

`sudo userdel <username>`

- Delete a user and specify an alternate chroot directory:

`sudo userdel -R <path/to/chroot> <username>`

- Delete a user and use a custom prefix directory:

`sudo userdel -P <path/to/prefix> <username>`

- Delete a user with SELinux user mapping removal:

`sudo userdel -Z <username>`
