# docker-pull

> Pull an image or repository from a registry.
> More information: <https://docs.docker.com/engine/reference/commandline/pull/>.

- Pull an image from Docker Hub:

`docker pull <image>`

- Pull a specific version of an image:

`docker pull <image>:<tag>`

- Pull an image from a private registry:

`docker pull <registry_host>/<image>:<tag>`

- Pull all tags of an image:

`docker pull -a <image>`

- Pull an image for a specific platform:

`docker pull --platform <linux/amd64|linux/arm64> <image>`

- Pull an image by digest:

`docker pull <image>@<sha256:digest>`

- Pull an image quietly (suppress verbose output):

`docker pull -q <image>`

- Pull an image and disable content trust:

`docker pull --disable-content-trust <image>`
