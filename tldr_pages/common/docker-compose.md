# docker-compose

> Define and run multi-container Docker applications.
> More information: <https://docs.docker.com/compose/reference/>.

- Start all services defined in a compose file:

`docker-compose up`

- Start services in detached mode:

`docker-compose up -d`

- Stop and remove all containers, networks, and volumes:

`docker-compose down`

- Build or rebuild services:

`docker-compose build`

- View logs from all running services:

`docker-compose logs`

- Follow logs from all running services:

`docker-compose logs -f`

- List running containers:

`docker-compose ps`

- Execute a command in a running service container:

`docker-compose exec <service_name> <command>`

- Pull images for services defined in compose file:

`docker-compose pull`

- Use a specific compose file:

`docker-compose -f <path/to/docker-compose.yml> up`
