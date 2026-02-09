# ld

> The GNU linker. Links object files together to build executables.
> More information: <https://sourceware.org/binutils/docs/ld/>.

- Link object files to build an executable:

`ld <path/to/file1.o> <path/to/file2.o> <-o> <path/to/output_executable>`

- Link with a specific library:

`ld <path/to/file.o> <-l><library_name> <-o> <path/to/output_executable>`

- Link with a library in a specific directory:

`ld <path/to/file.o> <-L><path/to/library_directory> <-l><library_name> <-o> <path/to/output_executable>`

- Create a shared library:

`ld <-shared> <path/to/file1.o> <path/to/file2.o> <-o> <path/to/output_library.so>`

- Set the entry point:

`ld <path/to/file.o> <-e> <entry_symbol> <-o> <path/to/output_executable>`

- Link statically (do not link against shared libraries):

`ld <-static> <path/to/file.o> <-o> <path/to/output_executable>`