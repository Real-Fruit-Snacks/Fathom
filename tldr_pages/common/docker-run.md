# docker-run

> Run a command in a new container.
> More information: <https://docs.docker.com/engine/reference/commandline/run/>.

- Run a container from an image:

`docker run <image>`

- Run a container interactively with a shell:

`docker run -it <image> <shell>`

- Run a container in the background (detached mode):

`docker run -d <image>`

- Run a container with a custom name:

`docker run --name <container_name> <image>`

- Run a container with port mapping:

`docker run -p <host_port>:<container_port> <image>`

- Run a container with a volume mount:

`docker run -v <host_path>:<container_path> <image>`

- Run a container with environment variables:

`docker run -e <VAR>=<value> <image>`

- Run a container that automatically removes itself on exit:

`docker run --rm <image>`

- Run a container with resource limits:

`docker run --memory <512m> --cpus <1.5> <image>`

- Run a container connected to a specific network:

`docker run --network <network_name> <image>`

- Run a container with a restart policy:

`docker run --restart <always|unless-stopped|on-failure> <image>`

- Run a container with multiple options:

`docker run -d --name <name> -p <8080:80> -v <./data:/data> -e <ENV=prod> <image>`
