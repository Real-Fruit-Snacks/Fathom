# slabtop

> Display kernel slab cache information in real-time.
> Shows memory used by the kernel for caching data structures.
> More information: <https://manned.org/slabtop>.

- Display slab cache information interactively:

`sudo slabtop`

- Display once and exit (non-interactive):

`sudo slabtop <[-o|--once]>`

- Sort by number of objects:

`sudo slabtop <[-s|--sort]> o`

- Sort by cache size:

`sudo slabtop <[-s|--sort]> c`

- Sort by slabs:

`sudo slabtop <[-s|--sort]> s`

- Sort by objects per slab:

`sudo slabtop <[-s|--sort]> b`

- Update display every N seconds:

`sudo slabtop <[-d|--delay]> <seconds>`

- Sort by name:

`sudo slabtop <[-s|--sort]> n`
