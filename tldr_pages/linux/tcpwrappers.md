# tcpwrappers

> Access control for network services using /etc/hosts.allow and /etc/hosts.deny.
> Also known as TCP Wrappers. Configure via hosts.allow and hosts.deny files.
> More information: <https://manned.org/hosts_access>.

- Allow SSH connections from a specific IP in /etc/hosts.allow:

`sshd: <ip_address>`

- Allow SSH connections from a subnet in /etc/hosts.allow:

`sshd: <192.168.1.>`

- Allow all services from localhost in /etc/hosts.allow:

`ALL: 127.0.0.1`

- Allow a service from a domain in /etc/hosts.allow:

`sshd: .<example.com>`

- Deny all connections by default in /etc/hosts.deny:

`ALL: ALL`

- Deny a specific service from all hosts in /etc/hosts.deny:

`<service_name>: ALL`

- Test TCP wrappers configuration for a service and host:

`tcpdmatch <sshd> <client_hostname>`

- Allow with logging and spawn a command in /etc/hosts.allow:

`sshd: ALL: spawn /bin/echo "Connection from %c" >> /var/log/ssh_connections`
