# git-restore

> Restore working tree files (Git 2.23+).
> More information: <https://git-scm.com/docs/git-restore>.

- Restore a file to the state of the last commit:

`git restore <path/to/file>`

- Restore multiple files:

`git restore <path/to/file1> <path/to/file2>`

- Restore all files in the current directory:

`git restore .`

- Unstage a file (remove from staging area):

`git restore --staged <path/to/file>`

- Unstage all staged files:

`git restore --staged .`

- Restore a file to a specific commit:

`git restore --source <commit> <path/to/file>`

- Restore both working tree and staging area:

`git restore --staged --worktree <path/to/file>`

- Interactively select hunks to restore:

`git restore [-p|--patch] <path/to/file>`

- Restore files matching a pattern:

`git restore "*.txt"`
