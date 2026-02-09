# dirs

> Display the directory stack.
> See also: `pushd`, `popd`.
> More information: <https://www.gnu.org/software/bash/manual/bash.html#index-dirs>.

- Display the directory stack:

`dirs`

- Display the stack with one directory per line:

`dirs -p`

- Display the stack with indices:

`dirs -v`

- Display only the nth directory from the left:

`dirs +<n>`

- Display only the nth directory from the right:

`dirs -<n>`

- Clear the directory stack:

`dirs -c`

- Display the stack without tilde abbreviation:

`dirs -l`

- Show stack size (count directories):

`dirs -v | wc -l`
