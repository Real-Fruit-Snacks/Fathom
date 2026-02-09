# docker-logs

> Fetch the logs of a container.
> More information: <https://docs.docker.com/engine/reference/commandline/logs/>.

- View logs of a container:

`docker logs <container>`

- Follow log output in real-time:

`docker logs -f <container>`

- Show timestamps with log entries:

`docker logs -t <container>`

- Show the last N lines of logs:

`docker logs --tail <number> <container>`

- Show logs since a specific timestamp:

`docker logs --since <timestamp> <container>`

- Show logs since a relative time:

`docker logs --since <10m> <container>`

- Show logs until a specific timestamp:

`docker logs --until <timestamp> <container>`

- Follow logs and show only the last 100 lines:

`docker logs -f --tail 100 <container>`

- Show both stdout and stderr:

`docker logs <container> 2>&1`
