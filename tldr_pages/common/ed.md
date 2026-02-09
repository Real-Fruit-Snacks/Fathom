# ed

> The standard line-oriented text editor.
> See also: `sed`, `vi`.
> More information: <https://www.gnu.org/software/ed/manual/ed_manual.html>.

- Start ed with an empty buffer:

`ed`

- Start ed and open a file for editing:

`ed <path/to/file>`

- Start ed with a custom prompt string:

`ed <-p|--prompt> "<> >" <path/to/file>`

- Start ed in restricted mode (disables shell commands):

`ed <-r|--restricted> <path/to/file>`

- Print the entire buffer contents with line numbers:

`,n`

- Substitute the first occurrence of a string on the current line:

`s/<old>/<new>/`

- Substitute all occurrences of a string on all lines:

`,s/<old>/<new>/g`

- Write the buffer to a file and quit:

`wq`
