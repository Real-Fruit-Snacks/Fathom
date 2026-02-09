# loginctl

> Control the systemd login manager.
> More information: <https://www.freedesktop.org/software/systemd/man/loginctl.html>.

- List current sessions:

`loginctl list-sessions`

- List currently logged in users:

`loginctl list-users`

- Show status of a specific session:

`loginctl session-status <session_id>`

- Show properties of a session:

`loginctl show-session <session_id>`

- Show status of a specific user:

`loginctl user-status <username>`

- Terminate a session:

`sudo loginctl terminate-session <session_id>`

- Terminate all sessions of a user:

`sudo loginctl terminate-user <username>`

- Lock a session:

`loginctl lock-session <session_id>`

- Unlock a session:

`loginctl unlock-session <session_id>`

- Enable linger for a user (allow user services without login):

`sudo loginctl enable-linger <username>`

- Disable linger for a user:

`sudo loginctl disable-linger <username>`

- List available seats:

`loginctl list-seats`
