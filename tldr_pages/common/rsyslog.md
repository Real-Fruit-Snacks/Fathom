# rsyslog

> Reliable and extended syslogd - system logging daemon.
> More information: <https://www.rsyslog.com/doc/>.

- Start rsyslog daemon:

`sudo rsyslogd`

- Check configuration file syntax:

`rsyslogd -N 1`

- Start with debug output:

`rsyslogd -dn`

- Start with a specific configuration file:

`rsyslogd -f </path/to/rsyslog.conf>`

- Reload configuration without restart:

`sudo systemctl reload rsyslog`

- View rsyslog status:

`sudo systemctl status rsyslog`

- Test logging to syslog:

`logger "<Test message>"`

- View recent system logs:

`sudo tail -f /var/log/syslog`
