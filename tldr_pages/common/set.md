# set

> Set or unset shell options and positional parameters.
> A shell builtin for controlling shell behavior and arguments.
> More information: <https://www.gnu.org/software/bash/manual/bash.html#index-set>.

- Exit immediately if a command fails:

`set -e`

- Treat unset variables as an error:

`set -u`

- Print commands before execution (debug mode):

`set -x`

- Disable globbing (filename expansion):

`set -f`

- Enable multiple options at once:

`set -euo pipefail`

- Disable an option:

`set +x`

- Set positional parameters:

`set -- <arg1> <arg2> <arg3>`

- Display all shell variables and functions:

`set`
