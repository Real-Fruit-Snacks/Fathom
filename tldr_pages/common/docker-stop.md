# docker-stop

> Stop one or more running containers.
> More information: <https://docs.docker.com/engine/reference/commandline/stop/>.

- Stop a running container:

`docker stop <container>`

- Stop multiple containers:

`docker stop <container1> <container2> [container3 ...]`

- Stop a container with a custom timeout (seconds before kill):

`docker stop -t <seconds> <container>`

- Stop all running containers:

`docker stop $(docker ps -q)`

- Stop containers matching a name pattern:

`docker stop $(docker ps -q --filter "name=<pattern>")`

- Stop containers by image name:

`docker stop $(docker ps -q --filter "ancestor=<image>")`

- Stop a container immediately (no graceful shutdown):

`docker stop -t 0 <container>`

- Stop containers older than a certain time:

`docker stop $(docker ps -q --filter "status=running")`
