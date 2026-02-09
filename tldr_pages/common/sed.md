# sed

> Edit text in a scriptable manner.
> More information: <https://www.gnu.org/software/sed/manual/sed.html>.

- Replace the first occurrence of a regular expression in each line of a file, and print the result:

`sed <-E> '<s/regular_expression/replace/>' <path/to/file>`

- Replace all occurrences of an extended regular expression in a file, and print the result:

`sed <-E> '<s/regular_expression/replace/g>' <path/to/file>`

- Replace all occurrences of a string in a file, overwriting the file (i.e. in-place):

`sed <-i> '<s/find/replace/g>' <path/to/file>`

- Replace only on lines matching the line pattern:

`sed <-E> '</line_pattern/s/find/replace/>' <path/to/file>`

- Delete lines matching the line pattern:

`sed '</line_pattern/d>' <path/to/file>`

- Print the first 11 lines of a file:

`sed '<11q>' <path/to/file>`

- Apply multiple find-replace expressions to a file:

`sed <-e> '<s/find/replace/>' <-e> '<s/find2/replace2/>' <path/to/file>`

- Replace separator `/` by any other character not used in the find or replace patterns, e.g., `#`:

`sed '<s#find#replace#>' <path/to/file>`