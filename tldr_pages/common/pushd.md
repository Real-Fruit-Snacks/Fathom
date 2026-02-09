# pushd

> Push a directory onto the directory stack and change to it.
> See also: `popd`, `dirs`.
> More information: <https://www.gnu.org/software/bash/manual/bash.html#index-pushd>.

- Push a directory onto the stack and change to it:

`pushd <path/to/directory>`

- Push the current directory and switch to another:

`pushd <path/to/directory>`

- Swap the top two directories on the stack:

`pushd`

- Rotate the stack to bring the nth directory to the top:

`pushd +<n>`

- Rotate the stack to bring the nth directory from the bottom:

`pushd -<n>`

- Push directory without changing to it (with cd -):

`pushd -n <path/to/directory>`

- Push and change to the home directory:

`pushd ~`

- View the current directory stack:

`dirs -v`
