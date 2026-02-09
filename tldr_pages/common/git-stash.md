# git-stash

> Stash changes in a dirty working directory.
> More information: <https://git-scm.com/docs/git-stash>.

- Stash current changes:

`git stash`

- Stash with a descriptive message:

`git stash push -m "<message>"`

- Stash including untracked files:

`git stash [-u|--include-untracked]`

- Stash including ignored files:

`git stash --all`

- List all stashes:

`git stash list`

- Apply the most recent stash without removing it:

`git stash apply`

- Apply a specific stash:

`git stash apply stash@{<n>}`

- Apply the most recent stash and remove it:

`git stash pop`

- Drop a specific stash:

`git stash drop stash@{<n>}`

- Clear all stashes:

`git stash clear`

- Show the diff of a stash:

`git stash show [-p|--patch] [stash@{<n>}]`

- Create a branch from a stash:

`git stash branch <branch_name> [stash@{<n>}]`
