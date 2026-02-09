# systemctl

> Control the systemd system and service manager.
> More information: <https://man7.org/linux/man-pages/man1/systemctl.1.html>.

- Start a service:

`sudo systemctl start <service_name>`

- Stop a service:

`sudo systemctl stop <service_name>`

- Restart a service:

`sudo systemctl restart <service_name>`

- Check the status of a service:

`systemctl status <service_name>`

- Enable a service to start at boot:

`sudo systemctl enable <service_name>`

- Disable a service from starting at boot:

`sudo systemctl disable <service_name>`

- List all running services:

`systemctl list-units --type=service --state=running`

- Reload systemd manager configuration:

`sudo systemctl daemon-reload`
