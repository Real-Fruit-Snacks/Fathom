# git-reset

> Reset current HEAD to a specified state.
> More information: <https://git-scm.com/docs/git-reset>.

- Unstage a file while keeping changes in the working directory:

`git reset <path/to/file>`

- Unstage all staged changes:

`git reset`

- Soft reset: move HEAD to a commit, keep changes staged:

`git reset --soft <commit>`

- Mixed reset: move HEAD, unstage changes, keep working directory:

`git reset --mixed <commit>`

- Hard reset: discard all changes and move HEAD to a commit:

`git reset --hard <commit>`

- Reset to the previous commit (HEAD~1):

`git reset --hard HEAD~1`

- Reset to match the remote branch:

`git reset --hard <remote_name>/<branch_name>`

- Interactively unstage hunks:

`git reset [-p|--patch]`

- Reset a file to a specific commit:

`git reset <commit> -- <path/to/file>`
