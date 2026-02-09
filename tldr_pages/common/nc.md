# nc

> Netcat - read and write data across network connections.
> More information: <https://manned.org/nc>.

- Listen on a specific port:

`nc -l <port>`

- Connect to a specific host and port:

`nc <host> <port>`

- Send a file over the network:

`nc -l <port> < <path/to/file>`

- Receive a file over the network:

`nc <host> <port> > <path/to/received_file>`

- Port scan a host:

`nc -zv <host> <start_port>-<end_port>`

- Keep listening after client disconnects:

`nc -k -l <port>`

- Use UDP instead of TCP:

`nc -u <host> <port>`

- Execute a command upon connection:

`nc -l <port> -e </bin/bash>`