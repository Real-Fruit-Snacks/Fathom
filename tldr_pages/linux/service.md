# service

> Manage system services (SysVinit and Upstart).
> For systemd, use `systemctl` instead.
> More information: <https://man7.org/linux/man-pages/man8/service.8.html>.

- Start a service:

`sudo service <service_name> start`

- Stop a service:

`sudo service <service_name> stop`

- Restart a service:

`sudo service <service_name> restart`

- Check the status of a service:

`service <service_name> status`

- Reload a service configuration:

`sudo service <service_name> reload`

- List all services and their status:

`service --status-all`

- Force reload a service:

`sudo service <service_name> force-reload`

- Restart a service if it is running:

`sudo service <service_name> condrestart`
