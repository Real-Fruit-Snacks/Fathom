# git-switch

> Switch between branches (Git 2.23+).
> More information: <https://git-scm.com/docs/git-switch>.

- Switch to an existing branch:

`git switch <branch_name>`

- Create and switch to a new branch:

`git switch [-c|--create] <new_branch_name>`

- Create and switch based on a specific reference:

`git switch -c <new_branch_name> <reference>`

- Switch to the previous branch:

`git switch -`

- Force switch, discarding local changes:

`git switch --discard-changes <branch_name>`

- Switch to a branch, creating it if it does not exist:

`git switch -c <branch_name> [-t|--track] <remote_name>/<branch_name>`

- Switch to a detached HEAD at a specific commit:

`git switch --detach <commit_hash>`

- Force create a new branch, resetting if it exists:

`git switch -C <branch_name>`
