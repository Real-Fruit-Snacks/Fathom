# modprobe

> Add or remove modules from the Linux kernel.
> Automatically handles module dependencies.
> More information: <https://manned.org/modprobe>.

- Load a kernel module:

`sudo modprobe <module_name>`

- Remove a kernel module:

`sudo modprobe <[-r|--remove]> <module_name>`

- Load a module with specific parameters:

`sudo modprobe <module_name> <parameter>=<value>`

- Show what would happen without actually loading:

`modprobe <[-n|--dry-run]> <[-v|--verbose]> <module_name>`

- Remove a module and its dependencies if unused:

`sudo modprobe <[-r|--remove]> --remove-dependencies <module_name>`

- List all available modules matching a pattern:

`modprobe <[-l|--list]> '<pattern>*'`

- Show module dependencies:

`modprobe --show-depends <module_name>`

- Force load a module ignoring version checks:

`sudo modprobe --force <module_name>`
