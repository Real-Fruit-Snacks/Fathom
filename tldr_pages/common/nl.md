# nl

> Number lines of files.
> More information: <https://www.gnu.org/software/coreutils/nl>.

- Number non-blank lines in a file:

`nl <path/to/file>`

- Read from standard input:

`<command> | nl`

- Number [a]ll lines (including blank lines) or number [t] non-empty lines only:

`nl <-b a> <path/to/file>`

- Number only the lines that contain text matching the basic regular expression (BRE) pattern:

`nl <-b p'FooBar[0-9]'> <path/to/file>`

- Use a specific increment for line numbering:

`nl <-i> <increment> <path/to/file>`

- Specify the line numbering format to right or left justified, keeping leading zeros or not:

`nl <-n> <rz> <path/to/file>`

- Specify the string used to separate the line number and the line content:

`nl <-s> "<: >" <path/to/file>`