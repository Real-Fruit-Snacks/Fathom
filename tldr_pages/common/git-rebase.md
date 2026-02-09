# git-rebase

> Reapply commits on top of another base tip.
> More information: <https://git-scm.com/docs/git-rebase>.

- Rebase the current branch onto another branch:

`git rebase <base_branch>`

- Rebase onto a specific commit:

`git rebase <commit_hash>`

- Continue a rebase after resolving conflicts:

`git rebase --continue`

- Abort a rebase and return to the original state:

`git rebase --abort`

- Skip the current commit during a rebase:

`git rebase --skip`

- Interactively rebase the last n commits:

`git rebase -i HEAD~<n>`

- Interactively rebase onto a branch:

`git rebase -i <base_branch>`

- Rebase and automatically stash/unstash changes:

`git rebase --autostash <base_branch>`

- Rebase while preserving merge commits:

`git rebase --rebase-merges <base_branch>`
