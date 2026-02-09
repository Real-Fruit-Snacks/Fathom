# gcc

> Preprocesses and compiles C and C++ source files, then assembles and links them together.
> More information: <https://gcc.gnu.org>.

- Compile multiple source files into an executable:

`gcc <path/to/source1.c> <path/to/source2.c> <-o> <path/to/output_executable>`

- Show common warnings, output debug symbols in the compilation (useful for debugging with `gdb`), and optimize:

`gcc <path/to/source.c> <-Wall -g -O> <-o> <path/to/output_executable>`

- Include libraries from a different path:

`gcc <path/to/source.c> <-o> <path/to/output_executable> <-I><path/to/header> <-L><path/to/library> <-l><library_name>`

- Compile source code into assembly instructions (Intel syntax):

`gcc <-S> <-masm=intel> <path/to/source.c>`

- Compile source code into an object file without linking:

`gcc <-c> <path/to/source.c>`

- Optimize the compiled program for performance:

`gcc <path/to/source.c> <-O1|O2|O3|Os|Ofast|Og> <-o> <path/to/output_executable>`