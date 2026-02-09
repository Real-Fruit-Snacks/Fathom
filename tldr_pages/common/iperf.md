# iperf

> Network bandwidth measurement tool for TCP and UDP.
> More information: <https://iperf.fr/iperf-doc.php>.

- Start a server to listen for connections:

`iperf -s`

- Start a server on a specific port:

`iperf -s -p <port>`

- Connect to a server as a client:

`iperf -c <server_ip>`

- Connect to a server on a specific port:

`iperf -c <server_ip> -p <port>`

- Run test for a specific duration in seconds:

`iperf -c <server_ip> -t <seconds>`

- Test UDP bandwidth instead of TCP:

`iperf -c <server_ip> -u`

- Set target bandwidth for UDP test:

`iperf -c <server_ip> -u -b <bandwidth>`

- Run bidirectional test:

`iperf -c <server_ip> -d`

- Use multiple parallel streams:

`iperf -c <server_ip> -P <num_streams>`

- Output results in JSON format (iperf3):

`iperf3 -c <server_ip> --json`
