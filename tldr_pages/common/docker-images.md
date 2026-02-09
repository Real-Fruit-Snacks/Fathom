# docker-images

> List Docker images on the local machine.
> More information: <https://docs.docker.com/engine/reference/commandline/images/>.

- List all local images:

`docker images`

- List all images including intermediate images:

`docker images -a`

- List images with only numeric IDs:

`docker images -q`

- List images matching a specific repository name:

`docker images <repository>`

- List images matching a specific repository and tag:

`docker images <repository:tag>`

- Filter images by a specific criteria:

`docker images --filter <key>=<value>`

- List dangling images (images without a tag):

`docker images --filter "dangling=true"`

- List images with custom output format:

`docker images --format "table {{.Repository}}\t{{.Tag}}\t{{.Size}}"`

- List images sorted by size:

`docker images --format "{{.Size}}\t{{.Repository}}:{{.Tag}}" | sort -h`

- List images and show digests:

`docker images --digests`
