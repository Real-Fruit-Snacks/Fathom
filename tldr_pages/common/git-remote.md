# git-remote

> Manage set of tracked repositories.
> More information: <https://git-scm.com/docs/git-remote>.

- List all remotes:

`git remote`

- List remotes with their URLs:

`git remote [-v|--verbose]`

- Add a new remote:

`git remote add <remote_name> <remote_url>`

- Remove a remote:

`git remote remove <remote_name>`

- Rename a remote:

`git remote rename <old_name> <new_name>`

- Show information about a remote:

`git remote show <remote_name>`

- Change the URL of a remote:

`git remote set-url <remote_name> <new_url>`

- Add a push URL to a remote (allows pushing to multiple URLs):

`git remote set-url --add --push <remote_name> <url>`

- Prune stale tracking branches for a remote:

`git remote prune <remote_name>`
