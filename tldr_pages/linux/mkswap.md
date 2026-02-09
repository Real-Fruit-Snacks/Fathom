# mkswap

> Set up a Linux swap area on a device or file.
> More information: <https://man7.org/linux/man-pages/man8/mkswap.8.html>.

- Set up a swap area on a partition:

`sudo mkswap </dev/sdXY>`

- Set up a swap area with a specific label:

`sudo mkswap -L <label> </dev/sdXY>`

- Set up a swap area with a specific UUID:

`sudo mkswap -U <uuid> </dev/sdXY>`

- Create a swap file of a specific size (e.g., 4G):

`sudo dd if=/dev/zero of=</path/to/swapfile> bs=1G count=<4> && sudo mkswap </path/to/swapfile>`

- Check a partition for bad blocks before setting up swap:

`sudo mkswap -c </dev/sdXY>`

- Force creation even if the device contains a filesystem:

`sudo mkswap -f </dev/sdXY>`
