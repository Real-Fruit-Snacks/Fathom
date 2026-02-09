# swapon

> Enable swap space on devices and files.
> More information: <https://man7.org/linux/man-pages/man8/swapon.8.html>.

- Enable a swap partition:

`sudo swapon </dev/sdXY>`

- Enable a swap file:

`sudo swapon </path/to/swapfile>`

- Enable all swap spaces from `/etc/fstab`:

`sudo swapon -a`

- Show current swap status and usage:

`swapon --show`

- Show swap summary (total, used, free):

`swapon -s`

- Enable swap with a specific priority (higher values are used first):

`sudo swapon -p <priority> </dev/sdXY>`

- Verbose output showing what is being done:

`sudo swapon -v </dev/sdXY>`
