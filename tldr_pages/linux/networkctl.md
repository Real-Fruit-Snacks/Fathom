# networkctl

> Query and control the status of network links with systemd-networkd.
> More information: <https://www.freedesktop.org/software/systemd/man/networkctl.html>.

- List all network interfaces:

`networkctl list`

- Show detailed status of all network interfaces:

`networkctl status`

- Show status of a specific interface:

`networkctl status <interface>`

- Bring a network interface up:

`sudo networkctl up <interface>`

- Bring a network interface down:

`sudo networkctl down <interface>`

- Renew dynamic configuration (DHCP lease, etc.):

`sudo networkctl renew <interface>`

- Force reconfiguration of an interface:

`sudo networkctl reconfigure <interface>`

- Reload network configuration files:

`sudo networkctl reload`

- Show LLDP neighbor information:

`networkctl lldp`

- Delete all dynamic network configuration:

`sudo networkctl delete <interface>`
