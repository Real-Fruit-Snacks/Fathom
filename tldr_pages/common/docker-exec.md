# docker-exec

> Execute a command in a running container.
> More information: <https://docs.docker.com/engine/reference/commandline/exec/>.

- Execute a command in a running container:

`docker exec <container> <command>`

- Execute an interactive shell in a container:

`docker exec -it <container> /bin/bash`

- Execute a command as a specific user:

`docker exec -u <user> <container> <command>`

- Execute a command in a specific working directory:

`docker exec -w <path/to/directory> <container> <command>`

- Execute a command with environment variables:

`docker exec -e <VAR>=<value> <container> <command>`

- Execute a command in detached mode:

`docker exec -d <container> <command>`

- Execute a command with elevated privileges:

`docker exec --privileged <container> <command>`

- Execute an interactive shell with a pseudo-TTY:

`docker exec -it <container> sh`
