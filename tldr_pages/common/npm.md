# npm

> JavaScript and Node.js package manager.
> Manage Node.js projects and their module dependencies.
> More information: <https://docs.npmjs.com/cli>.

- Initialize a new Node.js project in the current directory:

`npm init`

- Install all dependencies listed in `package.json`:

`npm install`

- Install a package and save it as a dependency in `package.json`:

`npm install <package_name>`

- Install a package as a development dependency:

`npm install --save-dev <package_name>`

- Install a package globally (often for CLI tools):

`npm install --global <package_name>`

- Uninstall a package and remove it from `package.json`:

`npm uninstall <package_name>`

- List installed packages (use `--global` for globally installed packages):

`npm list <[--global]>`

- Update all packages to the latest versions allowed by `package.json`:

`npm update`
