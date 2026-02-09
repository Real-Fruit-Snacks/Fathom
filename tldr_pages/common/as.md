# as

> Portable GNU assembler.
> Primarily intended to assemble output from GCC to be used by the linker.
> More information: <https://sourceware.org/binutils/docs/as/>.

- Assemble a file, writing the output to a.out:

`as <file.s>`

- Assemble the output to a given file:

`as <file.s> <-o> <out.o>`

- Generate output faster by skipping whitespace and comment preprocessing (should only be used for trusted compilers):

`as <-f> <file.s>`

- Include a given path in the list of directories to search for files specified in .include directives:

`as <-I> <path/to/directory> <file.s>`