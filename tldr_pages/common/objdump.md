# objdump

> View information about object files.
> More information: <https://sourceware.org/binutils/docs/binutils/objdump.html>.

- Display the file header information:

`objdump <-f> <binary>`

- Display the disassembled output of executable sections:

`objdump <-d> <binary>`

- Display the disassembled output of all sections:

`objdump <-D> <binary>`

- Display both the source code and disassembled output (requires the binary to be compiled with debug information):

`objdump <-S> <binary>`

- Display a complete binary hex dump of all sections:

`objdump <-s> <binary>`

- Display all headers:

`objdump <-x> <binary>`

- Display the dynamic symbol table:

`objdump <-T> <binary>`