# mtr

> Network diagnostic tool combining ping and traceroute functionality.
> More information: <https://www.bitwizard.nl/mtr/>.

- Run mtr to a destination host:

`mtr <hostname>`

- Run in report mode (non-interactive):

`mtr -r <hostname>`

- Run a specific number of pings and generate a report:

`mtr -r -c <count> <hostname>`

- Use TCP instead of ICMP:

`mtr --tcp <hostname>`

- Use UDP instead of ICMP:

`mtr --udp <hostname>`

- Specify the destination port for TCP/UDP:

`mtr --tcp -P <port> <hostname>`

- Show IP addresses only (no hostname resolution):

`mtr -n <hostname>`

- Generate wide report with all available data:

`mtr -rw <hostname>`

- Set the packet size in bytes:

`mtr -s <packet_size> <hostname>`

- Output results in JSON format:

`mtr --json <hostname>`
