# pacman

> Package manager utility for Arch Linux and derivatives.
> Some operations require root privileges.
> For equivalent commands in other package managers, see <https://wiki.archlinux.org/title/Pacman/Rosetta>.
> More information: <https://man.archlinux.org/man/pacman.8>.

- Synchronize and update all packages:

`sudo pacman -Syu`

- Install a package:

`sudo pacman -S <package>`

- Remove a package and its dependencies not required by other packages:

`sudo pacman -Rs <package>`

- Search for packages in the database:

`pacman -Ss <search_pattern>`

- Display information about a package:

`pacman -Si <package>`

- List all installed packages:

`pacman -Q`

- Query information about an installed package:

`pacman -Qi <package>`

- List files owned by an installed package:

`pacman -Ql <package>`
