# nproc

> Print the number of processing units available.
> More information: <https://www.gnu.org/software/coreutils/manual/html_node/nproc-invocation.html>.

- Display the number of available processing units:

`nproc`

- Display the number of installed processing units, including any inactive ones:

`nproc --all`

- Print the number of available processors minus a specified number:

`nproc --ignore=<count>`

- Use nproc to set the number of parallel jobs in make:

`make -j$(nproc)`

- Use nproc with xargs for parallel processing:

`<command> | xargs -P $(nproc) <another_command>`

- Reserve one processor and use the rest for a parallel task:

`parallel -j $(nproc --ignore=1) <command> ::: <arguments>`
