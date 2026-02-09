# nftables

> Modern Linux kernel packet filtering framework replacing iptables.
> Use `nft` command to interact with nftables. See also: `nft`.
> More information: <https://wiki.nftables.org/>.

- List all tables and rules:

`sudo nft list ruleset`

- List rules in a specific table:

`sudo nft list table <inet|ip|ip6|arp|bridge> <table_name>`

- Create a new table:

`sudo nft add table <inet|ip|ip6> <table_name>`

- Create a new chain in a table:

`sudo nft add chain <inet|ip|ip6> <table_name> <chain_name> '{ type filter hook input priority 0; policy accept; }'`

- Add a rule to accept traffic on a specific port:

`sudo nft add rule <inet> <table_name> <chain_name> tcp dport <port> accept`

- Add a rule to drop traffic from a specific IP:

`sudo nft add rule <inet> <table_name> <chain_name> ip saddr <ip_address> drop`

- Delete a table and all its chains:

`sudo nft delete table <inet|ip|ip6> <table_name>`

- Save the current ruleset to a file:

`sudo nft list ruleset > <path/to/nftables.conf>`
