# docker-push

> Push an image or repository to a registry.
> More information: <https://docs.docker.com/engine/reference/commandline/push/>.

- Push an image to Docker Hub:

`docker push <image>:<tag>`

- Push an image to a private registry:

`docker push <registry_host>/<image>:<tag>`

- Push all tags of an image:

`docker push -a <image>`

- Push an image quietly (suppress verbose output):

`docker push -q <image>:<tag>`

- Push an image and disable content trust:

`docker push --disable-content-trust <image>:<tag>`

- Tag and push an image to a registry:

`docker tag <local_image>:<tag> <registry_host>/<image>:<tag> && docker push <registry_host>/<image>:<tag>`

- Push an image to Amazon ECR:

`docker push <aws_account_id>.dkr.ecr.<region>.amazonaws.com/<repository>:<tag>`

- Push an image to Google Container Registry:

`docker push gcr.io/<project_id>/<image>:<tag>`
