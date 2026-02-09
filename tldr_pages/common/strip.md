# strip

> Remove symbols from executables or object files.
> More information: <https://sourceware.org/binutils/docs/binutils/strip.html>.

- Replace the original file with the stripped version:

`strip <path/to/file>`

- Strip a file and save the result to a specific file:

`strip <path/to/input_file> <-o> <path/to/output_file>`

- Strip only debug symbols:

`strip <--strip-debug> <path/to/file>`

- Strip all symbols but keep debug symbols:

`strip <--strip-unneeded> <path/to/file>`

- Strip specific sections:

`strip <--remove-section> <.comment> <path/to/file>`

- Preserve the original file's modification time:

`strip <--preserve-dates> <path/to/file>`