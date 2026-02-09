# git-branch

> List, create, rename, and delete branches.
> More information: <https://git-scm.com/docs/git-branch>.

- List all local branches:

`git branch`

- List all local and remote branches:

`git branch [-a|--all]`

- List branches with additional information:

`git branch [-v|--verbose]`

- Create a new branch from the current HEAD:

`git branch <branch_name>`

- Create a new branch from a specific commit:

`git branch <branch_name> <commit_hash>`

- Rename a branch:

`git branch [-m|--move] <old_branch_name> <new_branch_name>`

- Delete a local branch:

`git branch [-d|--delete] <branch_name>`

- Force delete a local branch (even if not merged):

`git branch -D <branch_name>`

- Set the upstream remote branch for a local branch:

`git branch [-u|--set-upstream-to] <remote_name>/<remote_branch>`
