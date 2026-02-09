# useradd

> Add a user account.
> More information: <https://man7.org/linux/man-pages/man8/useradd.8.html>.

- Create a new user:

`useradd <username>`

- Create a new user with a specific user ID:

`useradd <-u> <id> <username>`

- Create a new user with a specific group ID:

`useradd <-g> <id> <username>`

- Create a new user with a specific shell:

`useradd <-s> <path/to/shell> <username>`

- Create a new user belonging to additional groups (mind the lack of whitespace):

`useradd <-G> <group1,group2,...> <username>`

- Create a new user with a home directory:

`useradd <-m> <username>`

- Create a new user with a home directory and copy skeleton files:

`useradd <-m> <-k> <path/to/skeleton_directory> <username>`

- Create a new user with a specific comment:

`useradd <-c> "<comment>" <username>`