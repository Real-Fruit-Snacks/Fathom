# mkfs

> Create a filesystem on a partition or device.
> More information: <https://man7.org/linux/man-pages/man8/mkfs.8.html>.

- Create an ext4 filesystem on a partition:

`sudo mkfs -t ext4 </dev/sda1>`

- Create an ext4 filesystem (alternative syntax):

`sudo mkfs.ext4 </dev/sda1>`

- Create an XFS filesystem:

`sudo mkfs -t xfs </dev/sda1>`

- Create a FAT32 filesystem:

`sudo mkfs -t vfat </dev/sda1>`

- Create an ext4 filesystem with a volume label:

`sudo mkfs -t ext4 -L <label> </dev/sda1>`

- Create a filesystem and check for bad blocks:

`sudo mkfs -t ext4 -c </dev/sda1>`

- Create an NTFS filesystem:

`sudo mkfs -t ntfs </dev/sda1>`

- Perform a dry run without creating filesystem:

`sudo mkfs -t ext4 -n </dev/sda1>`
