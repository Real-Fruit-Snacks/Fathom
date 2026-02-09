# git-commit

> Record changes to the repository.
> More information: <https://git-scm.com/docs/git-commit>.

- Commit staged files with a message:

`git commit -m "<message>"`

- Commit all modified files (skips untracked files):

`git commit [-a|--all] -m "<message>"`

- Commit with a multi-line message:

`git commit -m "<title>" -m "<body>"`

- Amend the last commit with new changes:

`git commit --amend`

- Amend the last commit message without changing files:

`git commit --amend -m "<new_message>"`

- Commit without running pre-commit and commit-msg hooks:

`git commit --no-verify -m "<message>"`

- Create a commit with a specific author:

`git commit --author "<name> <<email>>" -m "<message>"`

- Create an empty commit (useful for triggering CI):

`git commit --allow-empty -m "<message>"`

- Commit with GPG signing:

`git commit [-S|--gpg-sign] -m "<message>"`
