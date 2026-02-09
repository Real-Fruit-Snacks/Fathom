# docker-start

> Start one or more stopped containers.
> More information: <https://docs.docker.com/engine/reference/commandline/start/>.

- Start a stopped container:

`docker start <container>`

- Start multiple containers:

`docker start <container1> <container2> [container3 ...]`

- Start a container and attach to it:

`docker start -a <container>`

- Start a container with interactive mode:

`docker start -ai <container>`

- Start all stopped containers:

`docker start $(docker ps -aq --filter "status=exited")`

- Start a container and follow its output:

`docker start -a <container> && docker logs -f <container>`

- Start containers matching a name pattern:

`docker start $(docker ps -aq --filter "name=<pattern>" --filter "status=exited")`
