# c++filt

> Demangle C++ and Java symbols.
> More information: <https://sourceware.org/binutils/docs/binutils/c_002b_002bfilt.html>.

- Demangle C++ symbols:

`c++filt <_ZN3foo3barEv>`

- Demangle C++ symbols from stdin:

`<command> | c++filt`

- Demangle C++ symbols from object file symbol table:

`objdump <-t> <path/to/binary> | c++filt`

- Demangle symbols in assembly source:

`objdump <-d> <path/to/binary> | c++filt`