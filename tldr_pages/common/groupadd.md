# groupadd

> Add user groups to the system.
> More information: <https://man7.org/linux/man-pages/man8/groupadd.8.html>.

- Create a new group:

`groupadd <group_name>`

- Create a new group with a specific group ID:

`groupadd <-g> <group_id> <group_name>`

- Create a new system group:

`groupadd <-r> <group_name>`

- Create a new group and allow duplicate group IDs:

`groupadd <-o> <-g> <group_id> <group_name>`