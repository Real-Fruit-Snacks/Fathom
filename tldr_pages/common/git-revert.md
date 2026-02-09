# git-revert

> Create new commits that undo the changes of previous commits.
> More information: <https://git-scm.com/docs/git-revert>.

- Revert the most recent commit:

`git revert HEAD`

- Revert a specific commit:

`git revert <commit_hash>`

- Revert multiple commits:

`git revert <commit1> <commit2>`

- Revert a range of commits:

`git revert <older_commit>..<newer_commit>`

- Revert without automatically committing:

`git revert --no-commit <commit_hash>`

- Revert a merge commit (specify parent number, usually 1):

`git revert -m <1> <merge_commit_hash>`

- Continue a revert after resolving conflicts:

`git revert --continue`

- Abort a revert operation:

`git revert --abort`

- Skip the current commit during a revert:

`git revert --skip`
