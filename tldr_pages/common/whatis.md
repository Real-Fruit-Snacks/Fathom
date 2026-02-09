# whatis

> Display one-line manual page descriptions.
> Searches the manual page names and displays the description for matching commands.
> More information: <https://man7.org/linux/man-pages/man1/whatis.1.html>.

- Display a brief description of a command:

`whatis <command>`

- Display descriptions for multiple commands:

`whatis <command1> <command2> <command3>`

- Search in a specific manual section:

`whatis --section=<1> <command>`

- Use wildcard matching:

`whatis --wildcard '<ls*>'`

- Search using regular expressions:

`whatis --regex '<^ls>'`

- Search in a specific directory of man pages:

`whatis --manpath=</usr/share/man> <command>`

- Update the whatis database (requires root):

`sudo mandb`
