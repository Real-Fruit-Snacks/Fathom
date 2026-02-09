# docker-volume

> Manage Docker volumes for persistent data storage.
> More information: <https://docs.docker.com/engine/reference/commandline/volume/>.

- List all volumes:

`docker volume ls`

- Create a new volume:

`docker volume create <volume_name>`

- Create a volume with a specific driver:

`docker volume create --driver <driver_name> <volume_name>`

- Display detailed information about a volume:

`docker volume inspect <volume_name>`

- Remove a volume:

`docker volume rm <volume_name>`

- Remove multiple volumes:

`docker volume rm <volume1> <volume2> [volume3 ...]`

- Remove all unused volumes:

`docker volume prune`

- Remove all unused volumes without prompting:

`docker volume prune -f`

- Create a volume with specific options:

`docker volume create --driver local --opt type=<nfs> --opt o=<addr=server,rw> --opt device=<:/path> <volume_name>`

- List volumes with a filter:

`docker volume ls --filter "dangling=true"`
