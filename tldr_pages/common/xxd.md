# xxd

> Create a hexdump from a file, or convert a hexdump back to its original binary form.
> More information: <https://man7.org/linux/man-pages/man1/xxd.1.html>.

- Generate a hexdump from a binary file:

`xxd <input_file>`

- Generate a hexdump from a binary file and display only the first N bytes:

`xxd <-l> <bytes> <input_file>`

- Generate a hexdump and display the output in postscript format:

`xxd <-ps> <input_file>`

- Reverse a hexdump back into binary and save it in a file:

`xxd <-r> <input_file> <output_file>`

- Display help:

`xxd <-h>`