# docker-container

> Manage Docker containers.
> More information: <https://docs.docker.com/engine/reference/commandline/container/>.

- List running containers:

`docker container ls`

- List all containers (running and stopped):

`docker container ls -a`

- Start one or more stopped containers:

`docker container start <container1> [container2 ...]`

- Stop one or more running containers:

`docker container stop <container1> [container2 ...]`

- Remove one or more containers:

`docker container rm <container1> [container2 ...]`

- Inspect detailed information about a container:

`docker container inspect <container>`

- Display container resource usage statistics:

`docker container stats`

- Prune all stopped containers:

`docker container prune`

- Export a container's filesystem as a tar archive:

`docker container export <container> -o <path/to/file.tar>`

- Create a new image from a container's changes:

`docker container commit <container> <image:tag>`
