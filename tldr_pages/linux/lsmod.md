# lsmod

> Show the status of Linux kernel modules.
> See also: `modprobe`, `modinfo`, `insmod`, `rmmod`.
> More information: <https://manned.org/lsmod>.

- List all currently loaded kernel modules:

`lsmod`

- Filter loaded modules by name:

`lsmod | grep <module_name>`

- Show modules with their sizes sorted by size:

`lsmod | sort -k 2 -n`

- Count the number of loaded modules:

`lsmod | wc -l`

- List modules and their dependencies:

`lsmod | awk '{print $1, $4}'`

- Check if a specific module is loaded:

`lsmod | grep -q <module_name> && echo "Loaded" || echo "Not loaded"`
