# gdb

> The GNU Debugger.
> More information: <https://www.gnu.org/software/gdb>.

- Debug an executable:

`gdb <executable>`

- Attach gdb to a running process:

`gdb <-p> <process_id>`

- Debug with a core file:

`gdb <-c> <core> <executable>`

- Execute given GDB commands upon start:

`gdb <-ex> "<command>" <executable>`

- Start gdb and pass arguments to the executable:

`gdb <--args> <executable> <argument1> <argument2>`