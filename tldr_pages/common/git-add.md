# git-add

> Stage files for commit in a Git repository.
> More information: <https://git-scm.com/docs/git-add>.

- Stage a specific file:

`git add <path/to/file>`

- Stage multiple files:

`git add <path/to/file1> <path/to/file2>`

- Stage all changed files in the current directory:

`git add .`

- Stage all changed files in the entire repository:

`git add [-A|--all]`

- Stage only tracked files that have been modified or deleted:

`git add [-u|--update]`

- Interactively select hunks to stage:

`git add [-p|--patch]`

- Interactively select files to stage:

`git add [-i|--interactive]`

- Stage files matching a pattern:

`git add "*.txt"`
