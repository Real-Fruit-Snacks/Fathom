# modinfo

> Display information about a Linux kernel module.
> See also: `lsmod`, `modprobe`, `insmod`, `rmmod`.
> More information: <https://manned.org/modinfo>.

- Show all information about a module:

`modinfo <module_name>`

- Display only the module description:

`modinfo <[-d|--description]> <module_name>`

- Show the module author:

`modinfo <[-a|--author]> <module_name>`

- Display the module license:

`modinfo <[-l|--license]> <module_name>`

- Show module parameters and their descriptions:

`modinfo <[-p|--parameters]> <module_name>`

- Display the filename of the module:

`modinfo <[-n|--filename]> <module_name>`

- Show module dependencies:

`modinfo <[-F|--field]> depends <module_name>`

- Get information from a specific module file:

`modinfo <path/to/module.ko>`
