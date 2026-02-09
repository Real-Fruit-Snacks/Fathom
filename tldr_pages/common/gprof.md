# gprof

> GNU profiler to display call graph profile data.
> More information: <https://sourceware.org/binutils/docs/gprof/>.

- Display profile data for a program (program must be compiled with `-pg`):

`gprof <program>`

- Display profile data with specific profile data file:

`gprof <program> <gmon.out>`

- Display the call graph:

`gprof <-q> <program>`

- Display the flat profile only:

`gprof <-p> <program>`

- Display profile data for specific functions only:

`gprof <-z -Z> <program>`

- Display profile data in a more compact format:

`gprof <-b> <program>`