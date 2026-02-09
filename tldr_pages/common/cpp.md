# cpp

> The C preprocessor.
> Runs the C preprocessor on input files.
> More information: <https://gcc.gnu.org/onlinedocs/cpp/>.

- Run the preprocessor on a source file, outputting the result to stdout:

`cpp <path/to/file>`

- Run the preprocessor on a source file, outputting the result to a file:

`cpp <path/to/file> <path/to/output_file>`

- Run the preprocessor, defining a macro:

`cpp <-D><macro>=<value> <path/to/file>`

- Run the preprocessor, including an additional directory in the search path for header files:

`cpp <-I> <path/to/directory> <path/to/file>`

- Run the preprocessor, suppressing all warnings:

`cpp <-w> <path/to/file>`