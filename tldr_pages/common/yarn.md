# yarn

> JavaScript and Node.js package manager alternative to npm.
> Manage Node.js project dependencies with deterministic installs.
> More information: <https://yarnpkg.com>.

- Initialize a new project and create `package.json`:

`yarn init`

- Install all dependencies from `package.json`:

`yarn install`

- Add a package as a project dependency:

`yarn add <package_name>`

- Add a package as a development dependency:

`yarn add --dev <package_name>`

- Add a package globally:

`yarn global add <package_name>`

- Remove a package from the project:

`yarn remove <package_name>`

- Upgrade all dependencies to their latest versions:

`yarn upgrade`

- Run a script defined in `package.json`:

`yarn run <script_name>`
