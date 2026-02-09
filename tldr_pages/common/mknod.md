# mknod

> Create block or character device special files.
> More information: <https://www.gnu.org/software/coreutils/manual/html_node/mknod-invocation.html>.

- Create a block device:

`sudo mknod <path/to/device> b <major> <minor>`

- Create a character device:

`sudo mknod <path/to/device> c <major> <minor>`

- Create a named pipe (FIFO):

`mknod <path/to/pipe> p`

- Create a block device with specific permissions:

`sudo mknod <[-m|--mode]> <660> <path/to/device> b <major> <minor>`

- Create a character device for a null device (major 1, minor 3):

`sudo mknod </dev/null> c 1 3`

- Create a character device for a random device (major 1, minor 8):

`sudo mknod </dev/random> c 1 8`

- Create a block device for the first hard drive (major 8, minor 0):

`sudo mknod </dev/sda> b 8 0`
