# popd

> Remove directories from the directory stack and change to them.
> See also: `pushd`, `dirs`.
> More information: <https://www.gnu.org/software/bash/manual/bash.html#index-popd>.

- Pop the top directory from the stack and change to the new top:

`popd`

- Remove the nth directory from the stack (counting from zero):

`popd +<n>`

- Remove the nth directory from the bottom of the stack:

`popd -<n>`

- Remove a directory without changing the current directory:

`popd -n`

- Pop multiple directories from the stack:

`popd; popd`

- Pop and display the remaining stack:

`popd && dirs -v`

- Pop all directories until empty:

`while popd 2>/dev/null; do :; done`

- Pop the second directory from the stack:

`popd +1`
