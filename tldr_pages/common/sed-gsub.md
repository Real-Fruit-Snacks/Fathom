# sed (global substitution patterns)

> Common sed global substitution patterns for text processing.
> See also: `sed` for basic usage.
> More information: <https://www.gnu.org/software/sed/manual/sed.html>.

- Replace all occurrences on each line:

`sed 's/<find>/<replace>/g' <path/to/file>`

- Replace with case-insensitive matching:

`sed 's/<find>/<replace>/gi' <path/to/file>`

- Replace only the nth occurrence on each line:

`sed 's/<find>/<replace>/<2>' <path/to/file>`

- Replace from nth occurrence onwards:

`sed 's/<find>/<replace>/<2>g' <path/to/file>`

- Replace and print only modified lines:

`sed -n 's/<find>/<replace>/gp' <path/to/file>`

- Replace using captured groups:

`sed 's/\(<pattern>\)/\1<suffix>/g' <path/to/file>`

- Replace multiple patterns at once:

`sed -e 's/<find1>/<replace1>/g' -e 's/<find2>/<replace2>/g' <path/to/file>`

- Replace in-place with backup:

`sed -i.bak 's/<find>/<replace>/g' <path/to/file>`
