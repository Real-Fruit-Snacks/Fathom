# nice

> Execute a command with a modified niceness (scheduling priority).
> Niceness values range from -20 (most favorable) to 19 (least favorable).
> More information: <https://www.gnu.org/software/coreutils/nice>.

- Execute a command with the default niceness (10):

`nice <command>`

- Execute a command with a specific niceness:

`nice <-n|-><niceness_value> <command>`

- Execute a command with a high priority (requires root):

`nice <-n -10> <command>`

- Execute a command with a low priority:

`nice <-n 15> <command>`

- Print the current niceness:

`nice`