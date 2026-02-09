# lsmem

> List available memory ranges and their online status.
> More information: <https://man7.org/linux/man-pages/man1/lsmem.1.html>.

- Display memory ranges:

`lsmem`

- Display memory with all available columns:

`lsmem -a`

- Display output in bytes:

`lsmem -b`

- Display output in JSON format:

`lsmem -J`

- Display output in parseable format:

`lsmem -P`

- Display a summary of memory:

`lsmem -s`

- Display specific output columns:

`lsmem -o <RANGE,SIZE,STATE,ZONES>`

- Display only online memory blocks:

`lsmem --online`
