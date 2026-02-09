# htop

> An interactive process viewer with a visual interface.
> More information: <https://htop.dev/>.

- Start htop:

`htop`

- Start htop displaying processes owned by a specific user:

`htop -u <username>`

- Sort processes by a specific column:

`htop -s <PERCENT_CPU|PERCENT_MEM|TIME|PID>`

- Start htop with a specific update delay in tenths of seconds:

`htop -d <delay>`

- Display only processes containing a specific string:

`htop -F <search_string>`

- Start htop in tree view mode:

`htop -t`

- Display processes in monochrome mode:

`htop -C`

- Start htop and highlight a specific PID:

`htop -p <pid>`
