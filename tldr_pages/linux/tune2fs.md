# tune2fs

> Adjust tunable parameters on ext2/ext3/ext4 filesystems.
> More information: <https://man7.org/linux/man-pages/man8/tune2fs.8.html>.

- Display filesystem parameters:

`sudo tune2fs -l </dev/sdXY>`

- Set the volume label:

`sudo tune2fs -L <label> </dev/sdXY>`

- Set the maximum mount count before a filesystem check is forced:

`sudo tune2fs -c <count> </dev/sdXY>`

- Disable mount-count-based filesystem checks:

`sudo tune2fs -c 0 </dev/sdXY>`

- Set the interval between filesystem checks (e.g., 1w for weekly, 1m for monthly):

`sudo tune2fs -i <interval> </dev/sdXY>`

- Disable time-based filesystem checks:

`sudo tune2fs -i 0 </dev/sdXY>`

- Set reserved blocks percentage for root:

`sudo tune2fs -m <percent> </dev/sdXY>`

- Enable or disable a filesystem feature:

`sudo tune2fs -O <[+|-]feature> </dev/sdXY>`

- Set a new UUID for the filesystem:

`sudo tune2fs -U <uuid> </dev/sdXY>`
