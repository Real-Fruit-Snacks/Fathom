# groups

> Display group memberships for a user.
> More information: <https://man7.org/linux/man-pages/man1/groups.1.html>.

- Display groups for the current user:

`groups`

- Display groups for a specific user:

`groups <username>`

- Display groups for multiple users:

`groups <user1> <user2> <user3>`

- Display groups without the username prefix:

`groups <username> | cut -d: -f2`

- Count the number of groups for a user:

`groups <username> | wc -w`

- Check if a user belongs to a specific group:

`groups <username> | grep -w <group_name>`

- Display primary group for current user:

`id -gn`

- List all available groups on the system:

`getent group | cut -d: -f1`
