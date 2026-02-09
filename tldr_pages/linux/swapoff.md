# swapoff

> Disable swap space on devices and files.
> More information: <https://man7.org/linux/man-pages/man8/swapoff.8.html>.

- Disable a swap partition:

`sudo swapoff </dev/sdXY>`

- Disable a swap file:

`sudo swapoff </path/to/swapfile>`

- Disable all swap spaces:

`sudo swapoff -a`

- Verbose output showing what is being done:

`sudo swapoff -v </dev/sdXY>`
