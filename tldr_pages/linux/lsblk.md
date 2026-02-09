# lsblk

> List information about block devices.
> More information: <https://man7.org/linux/man-pages/man8/lsblk.8.html>.

- List all block devices:

`lsblk`

- List all block devices including empty ones:

`lsblk -a`

- List devices with filesystem information:

`lsblk -f`

- List devices with full device paths:

`lsblk -p`

- List devices with size in bytes:

`lsblk -b`

- List specific columns:

`lsblk -o <NAME,SIZE,TYPE,MOUNTPOINT,FSTYPE>`

- List devices in JSON format:

`lsblk -J`

- List devices with topology information:

`lsblk -t`
