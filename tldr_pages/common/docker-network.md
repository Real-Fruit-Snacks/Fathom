# docker-network

> Manage Docker networks.
> More information: <https://docs.docker.com/engine/reference/commandline/network/>.

- List all networks:

`docker network ls`

- Create a new network:

`docker network create <network_name>`

- Create a network with a specific driver:

`docker network create --driver <bridge|host|overlay|macvlan> <network_name>`

- Create a network with a custom subnet:

`docker network create --subnet <192.168.0.0/16> <network_name>`

- Connect a container to a network:

`docker network connect <network_name> <container>`

- Disconnect a container from a network:

`docker network disconnect <network_name> <container>`

- Display detailed information about a network:

`docker network inspect <network_name>`

- Remove a network:

`docker network rm <network_name>`

- Remove all unused networks:

`docker network prune`

- Create a network with a specific IP range and gateway:

`docker network create --subnet <10.0.0.0/24> --gateway <10.0.0.1> <network_name>`
