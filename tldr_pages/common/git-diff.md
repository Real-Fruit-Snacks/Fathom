# git-diff

> Show changes between commits, commit and working tree, etc.
> More information: <https://git-scm.com/docs/git-diff>.

- Show unstaged changes in the working directory:

`git diff`

- Show staged changes ready for commit:

`git diff --staged`

- Show changes in a specific file:

`git diff <path/to/file>`

- Show changes between two commits:

`git diff <commit1> <commit2>`

- Show changes between a commit and the working directory:

`git diff <commit>`

- Show changes between two branches:

`git diff <branch1>..<branch2>`

- Show only names of changed files:

`git diff --name-only`

- Show summary of changes (insertions, deletions):

`git diff --stat`

- Show word-level differences:

`git diff --word-diff`

- Ignore whitespace changes:

`git diff [-w|--ignore-all-space]`
