# docker-image

> Manage Docker images.
> More information: <https://docs.docker.com/engine/reference/commandline/image/>.

- List all local images:

`docker image ls`

- List all images including intermediate images:

`docker image ls -a`

- Remove one or more images:

`docker image rm <image1> [image2 ...]`

- Pull an image from a registry:

`docker image pull <image:tag>`

- Push an image to a registry:

`docker image push <image:tag>`

- Display detailed information about an image:

`docker image inspect <image>`

- Show image history and layers:

`docker image history <image>`

- Tag an image with a new name:

`docker image tag <source_image:tag> <new_image:tag>`

- Remove unused images:

`docker image prune`

- Remove all unused images (not just dangling ones):

`docker image prune -a`

- Save an image to a tar archive:

`docker image save <image> -o <path/to/file.tar>`

- Load an image from a tar archive:

`docker image load -i <path/to/file.tar>`
