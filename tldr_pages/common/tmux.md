# tmux

> Terminal multiplexer for managing multiple terminal sessions.
> More information: <https://github.com/tmux/tmux/wiki>.

- Start a new session:

`tmux`

- Start a new named session:

`tmux new -s <session_name>`

- List all sessions:

`tmux ls`

- Attach to the most recently used session:

`tmux attach`

- Attach to a specific session:

`tmux attach -t <session_name>`

- Detach from the current session:

`Ctrl + B, D`

- Create a new window:

`Ctrl + B, C`

- Switch between windows:

`Ctrl + B, <0-9>`
