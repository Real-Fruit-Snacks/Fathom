# rg

> Ripgrep - a fast recursive search tool similar to grep.
> More information: <https://github.com/BurntSushi/ripgrep>.

- Search for a pattern recursively in the current directory:

`rg <pattern>`

- Search for a pattern in specific files:

`rg <pattern> <path/to/file>`

- Search case-insensitively:

`rg -i <pattern>`

- Search for an exact string (no regex):

`rg -F "<exact string>"`

- Search only in specific file types:

`rg -t <py> <pattern>`

- Show line numbers and context:

`rg -n -C <3> <pattern>`

- Search for files matching a pattern:

`rg --files | rg <pattern>`

- Search and replace in place:

`rg <pattern> -r <replacement> --passthru`
