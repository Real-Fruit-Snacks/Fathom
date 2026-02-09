# git-checkout

> Switch branches or restore working tree files.
> More information: <https://git-scm.com/docs/git-checkout>.

- Switch to an existing branch:

`git checkout <branch_name>`

- Create and switch to a new branch:

`git checkout -b <new_branch_name>`

- Create and switch to a new branch based on a specific reference:

`git checkout -b <new_branch_name> <reference>`

- Discard changes in a file and restore it to the last commit:

`git checkout -- <path/to/file>`

- Discard all local changes in the working directory:

`git checkout .`

- Switch to a specific commit (detached HEAD state):

`git checkout <commit_hash>`

- Switch to the previous branch:

`git checkout -`

- Checkout a file from a specific branch or commit:

`git checkout <branch_name_or_commit> -- <path/to/file>`
