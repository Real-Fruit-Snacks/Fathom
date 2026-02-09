# size

> Display the size of sections in object files.
> More information: <https://sourceware.org/binutils/docs/binutils/size.html>.

- Display the size of sections in the given object file:

`size <path/to/file>`

- Display the size of sections in multiple object files:

`size <path/to/file1> <path/to/file2>`

- Display sizes in a more detailed format:

`size <-A> <path/to/file>`

- Display sizes in Berkeley format (default):

`size <-B> <path/to/file>`

- Display sizes using hexadecimal numbers:

`size <-x> <path/to/file>`

- Display total size only:

`size <-t> <path/to/file>`