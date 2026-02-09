# screen

> Manage multiple terminal sessions within a single window.
> See also: `tmux` for a more modern alternative.
> More information: <https://www.gnu.org/software/screen/manual/screen.html>.

- Start a new screen session:

`screen`

- Start a named screen session:

`screen -S <session_name>`

- Reattach to an existing screen session:

`screen -r <session_name>`

- List all screen sessions:

`screen -ls`

- Detach from the current session:

`Ctrl + A, D`

- Create a new window within a session:

`Ctrl + A, C`

- Switch between windows:

`Ctrl + A, <0-9>`

- Kill the current window:

`Ctrl + A, K`
