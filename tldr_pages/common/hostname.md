# hostname

> Display or set the system hostname.
> More information: <https://man7.org/linux/man-pages/man1/hostname.1.html>.

- Display the current hostname:

`hostname`

- Display the network address of the hostname:

`hostname <-i|--ip-address>`

- Display the FQDN (Fully Qualified Domain Name):

`hostname <-f|--fqdn>`

- Display the short hostname (cut at the first dot):

`hostname <-s|--short>`

- Display the NIS domain name:

`hostname <-y|--yp|--nis>`

- Display the DNS domain name:

`hostname <-d|--domain>`

- Set the current hostname (requires root):

`hostname <new_hostname>`