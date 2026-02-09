# gdisk

> Interactive GPT partition table manipulator.
> A GPT-aware alternative to `fdisk` for creating and modifying partition tables.
> More information: <https://man7.org/linux/man-pages/man8/gdisk.8.html>.

- Start the partition manipulator on a disk:

`sudo gdisk </dev/sdX>`

- List partitions on a disk:

`sudo gdisk -l </dev/sdX>`

- Once partitioning a disk, create a new partition:

`<n>`

- Once partitioning a disk, delete a partition:

`<d>`

- Once partitioning a disk, print the partition table:

`<p>`

- Once partitioning a disk, write changes and exit:

`<w>`

- Once partitioning a disk, exit without saving changes:

`<q>`

- Once partitioning a disk, change a partition's type code:

`<t>`
