# sshguard

> Protect hosts from brute-force attacks against SSH and other services.
> Monitors log files and blocks attackers using the system firewall.
> More information: <https://www.sshguard.net/>.

- Start sshguard with default configuration:

`sudo sshguard`

- Start sshguard with a specific configuration file:

`sudo sshguard -c <path/to/sshguard.conf>`

- Monitor specific log files:

`sudo sshguard -l <path/to/auth.log> -l <path/to/other.log>`

- Set the attack threshold (number of attacks before blocking):

`sudo sshguard -a <threshold>`

- Set the initial block time in seconds:

`sudo sshguard -p <seconds>`

- Whitelist specific IP addresses or networks:

`sudo sshguard -w <ip_address> -w <cidr_network>`

- Run in foreground mode for debugging:

`sudo sshguard -v`

- Use a specific backend (firewall):

`sudo sshguard -b <iptables|nftables|pf|ipfw|hosts>`
