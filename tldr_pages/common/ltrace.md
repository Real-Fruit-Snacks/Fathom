# ltrace

> Display dynamic library calls of a process.
> More information: <https://man7.org/linux/man-pages/man1/ltrace.1.html>.

- Print (trace) library calls of a program binary:

`ltrace <./program>`

- Count library calls. Print a handy summary at the bottom:

`ltrace <-c> <./program>`

- Trace calls to malloc and free, omit those to other functions:

`ltrace <-e malloc+free> <./program>`

- Write the trace output to a file instead of stderr:

`ltrace <-o> <file> <./program>`

- Trace a process that is already running:

`ltrace <-p> <pid>`