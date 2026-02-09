# snap

> Manage snap packages for any Linux distribution.
> Snap packages are containerized applications with automatic updates.
> More information: <https://snapcraft.io/docs/getting-started>.

- Search for a snap package:

`snap find <query>`

- Install a snap package:

`sudo snap install <package>`

- Install a snap package in classic confinement mode:

`sudo snap install --classic <package>`

- Remove a snap package:

`sudo snap remove <package>`

- List all installed snap packages:

`snap list`

- Display information about a snap package:

`snap info <package>`

- Update all snap packages:

`sudo snap refresh`

- Update a specific snap package:

`sudo snap refresh <package>`
