# npx

> Execute npm packages without installing them globally.
> More information: <https://docs.npmjs.com/cli/commands/npx>.

- Execute a package command (downloads if not installed):

`npx <package_name>`

- Execute a specific version of a package:

`npx <package_name>@<version>`

- Execute a package with arguments:

`npx <package_name> <arg1> <arg2> [arg3...]`

- Execute a package from a specific npm registry:

`npx --registry <https://registry.url> <package_name>`

- Execute a local package binary from node_modules:

`npx <local_binary>`

- Execute without prompting for package installation:

`npx --yes <package_name>`

- Create a new React application:

`npx create-react-app <app_name>`

- Initialize a new project with a template:

`npx degit <user/repo> <directory_name>`
