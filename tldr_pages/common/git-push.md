# git-push

> Update remote refs along with associated objects.
> More information: <https://git-scm.com/docs/git-push>.

- Push changes to the default remote:

`git push`

- Push changes to a specific remote and branch:

`git push <remote_name> <branch_name>`

- Push and set the upstream branch:

`git push [-u|--set-upstream] <remote_name> <branch_name>`

- Push all local branches to remote:

`git push --all`

- Push tags to remote:

`git push --tags`

- Push a specific tag:

`git push <remote_name> <tag_name>`

- Delete a remote branch:

`git push <remote_name> --delete <branch_name>`

- Force push (use with caution):

`git push --force`

- Force push with lease (safer, fails if remote has new commits):

`git push --force-with-lease`
