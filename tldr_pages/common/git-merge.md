# git-merge

> Join two or more development histories together.
> More information: <https://git-scm.com/docs/git-merge>.

- Merge a branch into the current branch:

`git merge <branch_name>`

- Merge a branch with a custom commit message:

`git merge <branch_name> -m "<message>"`

- Merge without fast-forwarding (always create a merge commit):

`git merge --no-ff <branch_name>`

- Merge using fast-forward only (fail if not possible):

`git merge --ff-only <branch_name>`

- Merge and squash all commits into one:

`git merge --squash <branch_name>`

- Abort an in-progress merge:

`git merge --abort`

- Continue a merge after resolving conflicts:

`git merge --continue`

- Merge a specific commit into the current branch:

`git merge <commit_hash>`
