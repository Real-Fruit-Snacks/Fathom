# git-tag

> Create, list, delete, or verify tags.
> More information: <https://git-scm.com/docs/git-tag>.

- List all tags:

`git tag`

- List tags matching a pattern:

`git tag -l "<pattern>"`

- Create a lightweight tag at the current commit:

`git tag <tag_name>`

- Create an annotated tag with a message:

`git tag [-a|--annotate] <tag_name> -m "<message>"`

- Create a tag at a specific commit:

`git tag <tag_name> <commit_hash>`

- Create a signed tag:

`git tag [-s|--sign] <tag_name> -m "<message>"`

- Delete a local tag:

`git tag [-d|--delete] <tag_name>`

- Delete a remote tag:

`git push <remote_name> --delete <tag_name>`

- Show information about a tag:

`git show <tag_name>`

- Push a tag to remote:

`git push <remote_name> <tag_name>`

- Push all tags to remote:

`git push <remote_name> --tags`
