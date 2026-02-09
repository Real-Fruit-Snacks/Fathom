# depmod

> Generate modules.dep and map files for kernel modules.
> Creates dependency files used by modprobe to load modules in the correct order.
> More information: <https://manned.org/depmod>.

- Generate module dependency files for the running kernel:

`sudo depmod`

- Generate dependencies for a specific kernel version:

`sudo depmod <kernel_version>`

- Show verbose output while generating dependencies:

`sudo depmod <[-v|--verbose]>`

- Quick update, only process new modules:

`sudo depmod <[-A|--quick]>`

- Show dependencies without writing to files (dry run):

`depmod <[-n|--show]>`

- Force regeneration of all module dependency files:

`sudo depmod <[-a|--all]>`

- Specify an alternate module directory:

`sudo depmod <[-b|--basedir]> <path/to/directory>`

- Generate dependencies for a specific module:

`depmod <[-n|--show]> <module_name>`
