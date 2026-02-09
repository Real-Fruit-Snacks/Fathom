# tshark

> Network protocol analyzer - command-line version of Wireshark.
> More information: <https://www.wireshark.org/docs/man-pages/tshark.html>.

- Capture packets on an interface:

`tshark -i <eth0>`

- Capture packets and save to a file:

`tshark -i <eth0> -w <capture.pcap>`

- Read packets from a capture file:

`tshark -r <capture.pcap>`

- Capture packets with a display filter:

`tshark -i <eth0> -Y "<http.request>"`

- Capture only a specific number of packets:

`tshark -i <eth0> -c <100>`

- Display specific fields:

`tshark -r <capture.pcap> -T fields -e ip.src -e ip.dst -e tcp.port`

- Capture packets on a specific port:

`tshark -i <eth0> -f "port <80>"`

- List available interfaces:

`tshark -D`
