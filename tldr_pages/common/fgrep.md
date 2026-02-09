# fgrep

> Find patterns in files using fixed strings (no regular expressions).
> Equivalent to `grep -F`.
> More information: <https://www.gnu.org/software/grep/>.

- Search for an exact string in a file:

`fgrep "<exact_string>" <path/to/file>`

- Search case-insensitively:

`fgrep <-i> "<exact_string>" <path/to/file>`

- Search recursively in current directory for an exact string, excluding binary files:

`fgrep <-r> <-I> "<exact_string>" .`

- Use newline-separated patterns from a file:

`fgrep <-f> <path/to/patterns_file> <path/to/file>`

- Invert match (show lines that don't contain the pattern):

`fgrep <-v> "<exact_string>" <path/to/file>`

- Show only the count of matching lines:

`fgrep <-c> "<exact_string>" <path/to/file>`

- Show line numbers with output lines:

`fgrep <-n> "<exact_string>" <path/to/file>`