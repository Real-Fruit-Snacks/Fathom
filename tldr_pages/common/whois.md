# whois

> Query domain registration and IP address allocation information.
> More information: <https://linux.die.net/man/1/whois>.

- Look up domain registration information:

`whois <domain.com>`

- Query IP address allocation information:

`whois <ip_address>`

- Query a specific WHOIS server:

`whois -h <whois_server> <domain.com>`

- Disable recursive lookups (query referred servers):

`whois -r <domain.com>`

- Query for a specific port:

`whois -p <port> <domain.com>`

- Show raw WHOIS output without parsing:

`whois --raw <domain.com>`

- Query with a specific referral depth:

`whois --verbose <domain.com>`

- Look up AS number information:

`whois AS<number>`
