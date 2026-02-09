# docker-ps

> List Docker containers.
> More information: <https://docs.docker.com/engine/reference/commandline/ps/>.

- List running containers:

`docker ps`

- List all containers (running and stopped):

`docker ps -a`

- List containers with only numeric IDs:

`docker ps -q`

- List all containers with only numeric IDs:

`docker ps -aq`

- List the last N created containers:

`docker ps -n <number>`

- List containers with their sizes:

`docker ps -s`

- Filter containers by status:

`docker ps --filter "status=<running|exited|paused|created>"`

- Filter containers by name:

`docker ps --filter "name=<name>"`

- List containers with custom output format:

`docker ps --format "table {{.Names}}\t{{.Image}}\t{{.Status}}"`

- List containers by ancestor image:

`docker ps --filter "ancestor=<image>"`
