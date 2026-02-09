# history

> Display or manipulate the command history list.
> More information: <https://www.gnu.org/software/bash/manual/html_node/Bash-History-Builtins.html>.

- Display the command history with line numbers:

`history`

- Display the last 20 commands:

`history <20>`

- Clear the command history:

`history -c`

- Append the current session history to the history file:

`history -a`

- Read the history file and append its contents to the history list:

`history -r`

- Delete a specific command from history by line number:

`history -d <line_number>`

- Execute a specific command from history by line number:

`!<line_number>`

- Search and execute the most recent command starting with a string:

`!<string>`
