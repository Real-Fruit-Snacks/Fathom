# cut

> Cut out fields from STDIN or files.
> More information: <https://www.gnu.org/software/coreutils/cut>.

- Print a specific character/field range of each line:

`<command> | cut <-c|-f> <1-10>`

- Print a specific field of each line, using a custom delimiter:

`<command> | cut <-d"<<,>"> <-f><2>`

- Print the first 16 characters of each line of the given file:

`cut <-c> <1-16> <path/to/file>`

- Print the first 16 characters of each line from STDIN:

`<command> | cut <-c> <1-16>`

- Print everything from the 3rd character to the end of each line:

`<command> | cut <-c> <3->`

- Print the 5th field split by ":" of each line:

`<command> | cut <-d":"> <-f5>`

- Print the 2nd and 10th fields of each line, using space as a delimiter:

`<command> | cut <-d" "> <-f2,10>`

- Print all fields except the first one:

`<command> | cut <-d" "> <-f2->`