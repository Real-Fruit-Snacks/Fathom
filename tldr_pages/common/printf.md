# printf

> Print formatted text.
> More information: <https://www.gnu.org/software/coreutils/printf>.

- Print a text message:

`printf "<%s\n>" "<Hello world>"`

- Print an integer in bold blue:

`printf "<\e[1;34m%.3d\e[0m\n>" <42>`

- Print a float number with the European number format (comma as decimal separator):

`printf "<%.*f\n>" <2> <3,1416>`

- Print a date in ISO 8601 format:

`printf "<%(%Y-%m-%d)T\n>" <-1>`

- Print a string with a specific width:

`printf "<%10s\n>" "<Hello>"`

- Print a left-aligned string with a specific width:

`printf "<%-10s\n>" "<Hello>"`

- Print a hexadecimal number:

`printf "<%x\n>" <255>`

- Print text without a trailing newline:

`printf "<%s>" "<Hello world>"`