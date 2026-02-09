# sysctl

> Configure kernel parameters at runtime.
> More information: <https://man7.org/linux/man-pages/man8/sysctl.8.html>.

- Display all available kernel parameters:

`sysctl -a`

- Display a specific kernel parameter:

`sysctl <kernel.hostname>`

- Set a kernel parameter temporarily:

`sudo sysctl <kernel.hostname>=<new_value>`

- Set a kernel parameter using key=value syntax:

`sudo sysctl -w <net.ipv4.ip_forward>=<1>`

- Load settings from a configuration file:

`sudo sysctl -p </etc/sysctl.conf>`

- Load settings from all system configuration files:

`sudo sysctl --system`

- Display kernel parameters matching a pattern:

`sysctl -a --pattern <net.ipv4>`

- Display values without parameter names:

`sysctl -n <kernel.hostname>`
