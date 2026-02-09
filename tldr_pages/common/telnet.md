# telnet

> Connect to a remote host using the Telnet protocol.
> Note: Telnet is unencrypted; use SSH for secure connections.
> More information: <https://man7.org/linux/man-pages/man1/telnet.1.html>.

- Connect to a host on the default port (23):

`telnet <hostname>`

- Connect to a host on a specific port:

`telnet <hostname> <port>`

- Test if a port is open on a remote host:

`telnet <hostname> <80>`

- Connect with escape character disabled:

`telnet -e '' <hostname>`

- Connect with a specific escape character:

`telnet -e <^X> <hostname> <port>`

- Connect with automatic login as a user:

`telnet -l <username> <hostname>`

- Exit a telnet session:

`Ctrl + ], then type 'quit'`

- Send a break signal:

`Ctrl + ], then type 'send brk'`
