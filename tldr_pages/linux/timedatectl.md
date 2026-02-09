# timedatectl

> Control the system time and date.
> More information: <https://manned.org/timedatectl>.

- Show current time and date configuration:

`timedatectl`

- Show current time and date in UTC:

`timedatectl --utc`

- List available time zones:

`timedatectl list-timezones`

- Set the system time zone:

`sudo timedatectl set-timezone <Europe/Berlin>`

- Enable Network Time Protocol (NTP) synchronization:

`sudo timedatectl set-ntp on`

- Set the system clock to a specific date and time:

`sudo timedatectl set-time "<2023-01-01 12:00:00>"`

- Set only the system date:

`sudo timedatectl set-time <2023-01-01>`

- Set only the system time:

`sudo timedatectl set-time <12:00:00>`