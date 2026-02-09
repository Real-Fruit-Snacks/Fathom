# git-fetch

> Download objects and refs from a remote repository.
> More information: <https://git-scm.com/docs/git-fetch>.

- Fetch changes from the default remote (origin):

`git fetch`

- Fetch changes from a specific remote:

`git fetch <remote_name>`

- Fetch changes from all remotes:

`git fetch --all`

- Fetch a specific branch from a remote:

`git fetch <remote_name> <branch_name>`

- Fetch and prune deleted remote branches:

`git fetch --prune`

- Fetch tags from the remote:

`git fetch --tags`

- Fetch without tags:

`git fetch --no-tags`

- Fetch with limited depth (shallow fetch):

`git fetch --depth <depth>`
