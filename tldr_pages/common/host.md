# host

> DNS lookup utility for finding IP addresses and hostnames.
> More information: <https://linux.die.net/man/1/host>.

- Look up the IP address of a hostname:

`host <hostname>`

- Perform a reverse DNS lookup on an IP address:

`host <ip_address>`

- Query a specific DNS server:

`host <hostname> <dns_server>`

- Query for a specific DNS record type:

`host -t <A|AAAA|MX|NS|SOA|TXT|CNAME> <hostname>`

- Query for all DNS record types:

`host -a <hostname>`

- Enable verbose output:

`host -v <hostname>`

- Set the number of retries for failed queries:

`host -R <number> <hostname>`

- Set query timeout in seconds:

`host -W <seconds> <hostname>`
