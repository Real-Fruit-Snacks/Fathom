# usermod

> Modify a user account.
> More information: <https://man7.org/linux/man-pages/man8/usermod.8.html>.

- Change a username:

`usermod <-l> <new_username> <username>`

- Change a user ID:

`usermod <-u> <id> <username>`

- Change a user shell:

`usermod <-s> <path/to/shell> <username>`

- Add a user to supplementary groups (mind the lack of whitespace):

`usermod <-a> <-G> <group1,group2,...> <username>`

- Change a user home directory:

`usermod <-d> <path/to/new_home> <username>`

- Move the contents of the home directory to the new location (only use with -d):

`usermod <-d> <path/to/new_home> <-m> <username>`

- Create a new home directory for the user (only use with -d):

`usermod <-d> <path/to/new_home> <-m> <username>`