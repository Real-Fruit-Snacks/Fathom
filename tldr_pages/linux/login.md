# login

> Establish a new session with the system.
> More information: <https://man7.org/linux/man-pages/man1/login.1.html>.

- Log in as a specific user:

`login <username>`

- Log in as a specific user and preserve the current environment:

`login -p <username>`

- Log in as a specific user on a specific host:

`login -h <hostname> <username>`

- Log in as root:

`login root`

- Log in with a forced re-authentication:

`login -f <username>`

- Display version information:

`login --version`

- Display help information:

`login --help`
