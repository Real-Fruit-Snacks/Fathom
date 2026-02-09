# rpm

> RPM Package Manager - low-level tool for managing Red Hat packages.
> For higher-level package management, use `yum` or `dnf` instead.
> More information: <https://rpm.org/>.

- Install a package from a local file:

`sudo rpm -i <path/to/package.rpm>`

- Install a package from a local file, upgrading if already installed:

`sudo rpm -U <path/to/package.rpm>`

- Remove a package:

`sudo rpm -e <package_name>`

- List all installed packages:

`rpm -qa`

- Query information about an installed package:

`rpm -qi <package_name>`

- List files installed by a package:

`rpm -ql <package_name>`

- Find which package owns a specific file:

`rpm -qf <path/to/file>`

- Verify the integrity of an installed package:

`rpm -V <package_name>`
