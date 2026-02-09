# nice

> Run a command with a modified scheduling priority (niceness).
> Niceness values range from -20 (highest priority) to 19 (lowest priority).
> More information: <https://man7.org/linux/man-pages/man1/nice.1.html>.

- Run a command with default niceness increment (+10):

`nice <command>`

- Run a command with a specific niceness value:

`nice -n <niceness> <command>`

- Run a command with lower priority (higher niceness):

`nice -n 19 <command>`

- Run a command with higher priority (requires root):

`sudo nice -n -20 <command>`

- Run a CPU-intensive task with low priority:

`nice -n 15 <make -j4>`

- Run a background process with reduced priority:

`nice -n 10 <command> &`

- Display the default niceness value:

`nice`

- Run a command with slightly elevated priority:

`sudo nice -n -5 <command>`
