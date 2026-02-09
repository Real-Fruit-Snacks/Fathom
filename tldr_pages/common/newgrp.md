# newgrp

> Switch to a different primary group.
> More information: <https://man7.org/linux/man-pages/man1/newgrp.1.html>.

- Switch to a specific group (requires group membership):

`newgrp <group_name>`

- Switch to the default group specified in `/etc/passwd`:

`newgrp`

- Start a new shell with a different group ID:

`exec newgrp <group_name>`