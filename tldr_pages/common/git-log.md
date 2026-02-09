# git-log

> Show commit history.
> More information: <https://git-scm.com/docs/git-log>.

- Show the commit history:

`git log`

- Show condensed history (one line per commit):

`git log --oneline`

- Show history with a graph of branches:

`git log --oneline --graph`

- Show the last n commits:

`git log -n <number>`

- Show commits by a specific author:

`git log --author "<author_name>"`

- Show commits that modified a specific file:

`git log -- <path/to/file>`

- Show commits with the diff of each change:

`git log [-p|--patch]`

- Show commits since a specific date:

`git log --since "<date>"`

- Show commits between two references:

`git log <commit1>..<commit2>`

- Show commits with stats (files changed, insertions, deletions):

`git log --stat`

- Search commit messages for a pattern:

`git log --grep "<pattern>"`

- Custom format output:

`git log --pretty=format:"%h %an %s"`
