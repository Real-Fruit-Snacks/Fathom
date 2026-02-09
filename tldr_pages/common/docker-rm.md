# docker-rm

> Remove one or more containers.
> More information: <https://docs.docker.com/engine/reference/commandline/rm/>.

- Remove a stopped container:

`docker rm <container>`

- Remove multiple containers:

`docker rm <container1> <container2> [container3 ...]`

- Force remove a running container:

`docker rm -f <container>`

- Remove a container and its associated volumes:

`docker rm -v <container>`

- Remove all stopped containers:

`docker rm $(docker ps -aq --filter "status=exited")`

- Remove all containers (including running ones):

`docker rm -f $(docker ps -aq)`

- Remove containers matching a name pattern:

`docker rm $(docker ps -aq --filter "name=<pattern>")`

- Remove a container and link it to another container:

`docker rm -l <link_name>`
