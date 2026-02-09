# yum

> Package management utility for RHEL, CentOS, and older Fedora versions.
> For newer systems, `dnf` is the recommended replacement.
> For equivalent commands in other package managers, see <https://wiki.archlinux.org/title/Pacman/Rosetta>.
> More information: <https://man7.org/linux/man-pages/man8/yum.8.html>.

- Install a package:

`sudo yum install <package>`

- Install a package and assume yes to all prompts:

`sudo yum install -y <package>`

- Remove a package:

`sudo yum remove <package>`

- Upgrade all installed packages to the newest available versions:

`sudo yum update`

- Upgrade a specific package:

`sudo yum update <package>`

- Search for a package by name or description:

`yum search <keyword>`

- Display information about a package:

`yum info <package>`

- List all installed packages:

`yum list installed`
