# gcov

> Coverage testing tool for programs compiled with `gcc`.
> More information: <https://gcc.gnu.org/onlinedocs/gcc/Gcov.html>.

- Generate a coverage report named `file.c.gcov`:

`gcov <path/to/file.c>`

- Generate a coverage report with intermediate files kept:

`gcov <--preserve-paths> <path/to/file.c>`

- Generate a coverage report with unconditional branches counted:

`gcov <--unconditional-branches> <path/to/file.c>`

- Generate a coverage report with a specific object directory:

`gcov <--object-directory> <path/to/directory> <path/to/file.c>`

- Generate a coverage report excluding exception branches:

`gcov <--no-exception-branch> <path/to/file.c>`