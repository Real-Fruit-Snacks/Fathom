# runlevel

> Display the current and previous system runlevel.
> More information: <https://man7.org/linux/man-pages/man8/runlevel.8.html>.

- Display the current and previous runlevel:

`runlevel`

- Display the current runlevel in a machine-readable format:

`runlevel | awk '{print $2}'`