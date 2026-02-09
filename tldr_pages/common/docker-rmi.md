# docker-rmi

> Remove one or more images.
> More information: <https://docs.docker.com/engine/reference/commandline/rmi/>.

- Remove an image:

`docker rmi <image>`

- Remove multiple images:

`docker rmi <image1> <image2> [image3 ...]`

- Force remove an image (even if used by containers):

`docker rmi -f <image>`

- Remove an image by ID:

`docker rmi <image_id>`

- Remove all dangling images (untagged):

`docker rmi $(docker images -qf "dangling=true")`

- Remove all unused images:

`docker rmi $(docker images -q)`

- Remove images matching a repository pattern:

`docker rmi $(docker images <repository> -q)`

- Remove all images without prompting:

`docker rmi -f $(docker images -aq)`

- Remove images older than a certain age:

`docker image prune -a --filter "until=<24h>"`
