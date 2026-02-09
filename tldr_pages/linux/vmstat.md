# vmstat

> Report virtual memory statistics, processes, CPU activity, and more.
> More information: <https://man7.org/linux/man-pages/man8/vmstat.8.html>.

- Display virtual memory statistics:

`vmstat`

- Display statistics every N seconds:

`vmstat <seconds>`

- Display statistics N times with a delay:

`vmstat <delay> <count>`

- Display memory statistics in megabytes:

`vmstat -S M`

- Display disk statistics:

`vmstat -d`

- Display statistics for a specific partition:

`vmstat -p </dev/sda1>`

- Display slab information:

`vmstat -m`

- Display a timestamp with each update:

`vmstat -t <delay>`
