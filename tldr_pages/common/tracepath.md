# tracepath

> Trace the path to a network host discovering MTU along the path.
> Unlike traceroute, does not require superuser privileges.
> More information: <https://man7.org/linux/man-pages/man8/tracepath.8.html>.

- Trace the path to a host:

`tracepath <hostname>`

- Trace the path using only IP addresses:

`tracepath -n <hostname>`

- Specify the initial destination port:

`tracepath -p <33434> <hostname>`

- Trace the path with a specific initial packet length:

`tracepath -l <1500> <hostname>`

- Set the maximum number of hops:

`tracepath -m <30> <hostname>`

- Trace using IPv4 only:

`tracepath -4 <hostname>`

- Trace using IPv6 only:

`tracepath -6 <hostname>`

- Print both hostnames and IP addresses:

`tracepath -b <hostname>`
