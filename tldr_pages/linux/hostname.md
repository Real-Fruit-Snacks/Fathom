# hostname

> Show or set the system hostname.
> More information: <https://man7.org/linux/man-pages/man1/hostname.1.html>.

- Display the current hostname:

`hostname`

- Set a new hostname (temporary, until reboot):

`sudo hostname <new_hostname>`

- Display the fully qualified domain name (FQDN):

`hostname -f`

- Display all IP addresses associated with the hostname:

`hostname -I`

- Display the short hostname:

`hostname -s`

- Display the DNS domain name:

`hostname -d`

- Display the NIS/YP domain name:

`hostname -y`

- Display the hostname alias:

`hostname -a`
