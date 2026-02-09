# socat

> Multipurpose relay tool for bidirectional data transfer.
> More information: <https://linux.die.net/man/1/socat>.

- Create a TCP listener that echoes data:

`socat TCP-LISTEN:<8080>,fork EXEC:cat`

- Forward TCP port to another host:

`socat TCP-LISTEN:<8080>,fork TCP:<remote_host>:<80>`

- Create a simple TCP client:

`socat - TCP:<hostname>:<port>`

- Forward a Unix socket to TCP:

`socat TCP-LISTEN:<8080>,fork UNIX-CONNECT:</path/to/socket>`

- Create a virtual serial port pair:

`socat -d -d pty,raw,echo=0 pty,raw,echo=0`

- Transfer a file over TCP:

`socat TCP-LISTEN:<8080> FILE:<output.txt>,create`

- Connect to a serial port:

`socat - /dev/ttyUSB0,b115200,raw,echo=0`

- Create a TLS-encrypted connection:

`socat - OPENSSL:<hostname>:<443>`
