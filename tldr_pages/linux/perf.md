# perf

> Linux profiling tool for performance analysis and tracing.
> Analyze CPU performance counters, tracepoints, and more.
> More information: <https://perf.wiki.kernel.org>.

- List all available performance events:

`perf list`

- Profile a command and show statistics:

`perf stat <command>`

- Record performance data for a command:

`perf record <command>`

- Record with call graph (stack traces):

`perf record <[-g|--call-graph]> <command>`

- Display recorded performance data:

`perf report`

- Show real-time system-wide profiling:

`sudo perf top`

- Profile a specific process by PID:

`sudo perf record <[-p|--pid]> <pid>`

- Trace system calls for a command:

`perf trace <command>`
