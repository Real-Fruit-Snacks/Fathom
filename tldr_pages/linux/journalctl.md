# journalctl

> Query the systemd journal for system and service logs.
> More information: <https://man7.org/linux/man-pages/man1/journalctl.1.html>.

- View all logs:

`journalctl`

- View logs for a specific service:

`journalctl -u <service_name>`

- View logs since the last boot:

`journalctl -b`

- Follow new log entries in real-time:

`journalctl -f`

- View logs from a specific time period:

`journalctl --since "<2024-01-01 00:00:00>" --until "<2024-01-02 00:00:00>"`

- View only kernel messages:

`journalctl -k`

- View logs with a specific priority level:

`journalctl -p <emerg|alert|crit|err|warning|notice|info|debug>`

- Show the last N lines of logs:

`journalctl -n <number>`
