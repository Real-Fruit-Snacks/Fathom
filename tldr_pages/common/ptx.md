# ptx

> Generate a permuted index of words from one or more text files.
> More information: <https://www.gnu.org/software/coreutils/ptx>.

- Generate a permuted index where the location of each word is preceded by the filename:

`ptx <path/to/file>`

- Generate a permuted index with automatically generated references:

`ptx <-A> <path/to/file>`

- Generate a permuted index with a custom auto reference format:

`ptx <-A -S "<<separator>"> <path/to/file>`

- Generate a permuted index with custom filtering (only letters, apostrophes, and underscores are included in words):

`ptx <-W "<<[a-zA-Z_']>"> <path/to/file>`

- Generate a permuted index that ignores a custom list of common words:

`ptx <-f> <path/to/ignore_file> <path/to/file>`