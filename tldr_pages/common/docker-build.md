# docker-build

> Build an image from a Dockerfile.
> More information: <https://docs.docker.com/engine/reference/commandline/build/>.

- Build an image from the Dockerfile in the current directory:

`docker build .`

- Build an image with a specific tag:

`docker build -t <name:tag> .`

- Build an image from a Dockerfile at a specified path:

`docker build -f <path/to/Dockerfile> .`

- Build an image without using cached layers:

`docker build --no-cache -t <name:tag> .`

- Build an image with build arguments:

`docker build --build-arg <key>=<value> -t <name:tag> .`

- Build an image for a specific platform:

`docker build --platform <linux/amd64> -t <name:tag> .`

- Build an image and remove intermediate containers:

`docker build --rm -t <name:tag> .`

- Build an image with a specific target stage from a multi-stage Dockerfile:

`docker build --target <stage_name> -t <name:tag> .`
