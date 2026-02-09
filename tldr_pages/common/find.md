# find

> Find files and directories under the given directory tree, recursively.
> More information: <https://manned.org/find>.

- List all files recursively:

`find <path/to/directory>`

- Find files by extension:

`find <path/to/directory> <-name> "<*.ext>"`

- Find files matching multiple path/name patterns:

`find <path/to/directory> <-path> "<**/path/**/*.ext>" <-or> <-name> "<*pattern*>"`

- Find directories matching a given name, in case-insensitive mode:

`find <path/to/directory> <-type> <d> <-iname> "<*lib*>"`

- Find files matching a given pattern, excluding specific paths:

`find <path/to/directory> <-name> "<*.py>" <-not> <-path> "<*/site-packages/*>"`

- Find files matching a given size range, limiting the recursive depth to "1":

`find <path/to/directory> <-maxdepth> <1> <-size> <+500k> <-size> <-10M>`

- Run a command for each file (use `{}` within the command to access the filename):

`find <path/to/directory> <-name> "<*.ext>" <-exec> <wc -l> <{>} <\;>`

- Find files modified in the last 7 days and delete them:

`find <path/to/directory> <-daystart> <-mtime> <-7> <-delete>`