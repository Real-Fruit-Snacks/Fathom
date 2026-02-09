# rmmod

> Remove a module from the Linux kernel.
> For automatic dependency handling, use `modprobe -r` instead.
> More information: <https://manned.org/rmmod>.

- Remove a kernel module:

`sudo rmmod <module_name>`

- Remove a module with verbose output:

`sudo rmmod <[-v|--verbose]> <module_name>`

- Force removal of a module (dangerous):

`sudo rmmod <[-f|--force]> <module_name>`

- Suppress error messages:

`sudo rmmod <[-s|--syslog]> <module_name>`

- Wait for the module to become unused before removing:

`sudo rmmod <[-w|--wait]> <module_name>`

- Remove multiple modules at once:

`sudo rmmod <module1> <module2> <module3>`
