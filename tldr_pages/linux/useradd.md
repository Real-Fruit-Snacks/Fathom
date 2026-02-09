# useradd

> Create a new user account.
> See also: `userdel`, `usermod`.
> More information: <https://man7.org/linux/man-pages/man8/useradd.8.html>.

- Create a new user:

`sudo useradd <username>`

- Create a user with a home directory:

`sudo useradd -m <username>`

- Create a user with a specific home directory:

`sudo useradd -m -d </path/to/home> <username>`

- Create a user with a specific shell:

`sudo useradd -s </bin/bash> <username>`

- Create a user and add to a group:

`sudo useradd -G <group_name> <username>`

- Create a user with a specific UID:

`sudo useradd -u <uid> <username>`

- Create a system user without a home directory:

`sudo useradd -r -s /usr/sbin/nologin <username>`

- Create a user with a comment (full name or description):

`sudo useradd -c "<Full Name>" <username>`
