# svn

> Subversion command-line client for version control.
> More information: <https://subversion.apache.org/>.

- Check out a repository to a local directory:

`svn checkout <https://repo.url/path> [local_directory]`

- Update the working copy to the latest revision:

`svn update`

- Add a file or directory to version control:

`svn add <path/to/file_or_directory>`

- Commit changes with a log message:

`svn commit -m "<commit_message>"`

- Show the status of the working copy:

`svn status`

- Show the differences between local changes and repository:

`svn diff [path/to/file]`

- Show the commit history log:

`svn log [path/to/file_or_directory]`

- Revert local changes to a file:

`svn revert <path/to/file>`
