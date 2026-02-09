# reset

> Reinitialize the terminal.
> Useful when terminal output becomes garbled or after displaying binary data.
> More information: <https://man7.org/linux/man-pages/man1/reset.1.html>.

- Reset the terminal to default settings:

`reset`

- Reset the terminal and specify a terminal type:

`reset <xterm>`

- Reset the terminal quietly (suppress output):

`reset -q`

- Print the terminal type being used:

`reset -`

- Reset terminal and initialize it for a specific shell:

`reset -s <bash>`

- Display what would be done without making changes:

`reset -n`
