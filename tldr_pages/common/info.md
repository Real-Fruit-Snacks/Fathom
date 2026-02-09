# info

> Read GNU Info documentation files.
> More information: <https://www.gnu.org/software/texinfo/manual/info-stnd/>.

- Start the info browser:

`info`

- Read the info documentation for a specific command:

`info <command>`

- Read a specific info manual node:

`info <command> <node_name>`

- Go to a specific menu item in a manual:

`info <command> --node="<node_name>"`

- Read info documentation and go to index entry:

`info <command> --index-search="<search_term>"`

- Show all matching entries for a search term:

`info --apropos="<search_term>"`

- Output info documentation to stdout (for piping):

`info <command> -o -`

- Show info documentation in a specific file:

`info -f <path/to/file.info>`
