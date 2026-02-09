# logrotate

> Rotate, compress, and manage log files automatically.
> Typically run as a cron job to prevent logs from consuming too much disk space.
> More information: <https://manned.org/logrotate>.

- Run logrotate with the default configuration:

`sudo logrotate /etc/logrotate.conf`

- Force rotation of all logs regardless of conditions:

`sudo logrotate <[-f|--force]> /etc/logrotate.conf`

- Test configuration without actually rotating (dry run):

`logrotate <[-d|--debug]> /etc/logrotate.conf`

- Run with verbose output:

`sudo logrotate <[-v|--verbose]> /etc/logrotate.conf`

- Rotate a specific configuration file:

`sudo logrotate <[-f|--force]> <path/to/logrotate.d/config>`

- Use an alternate state file:

`sudo logrotate <[-s|--state]> <path/to/state/file> /etc/logrotate.conf`

- Test a single log file configuration:

`logrotate <[-d|--debug]> <[-v|--verbose]> <path/to/logrotate.d/config>`

- Force rotation and create new log files:

`sudo logrotate <[-f|--force]> --create /etc/logrotate.conf`
