# taskset

> Set or retrieve a process's CPU affinity.
> More information: <https://man7.org/linux/man-pages/man1/taskset.1.html>.

- Display the CPU affinity of a process:

`taskset -p <pid>`

- Set a process to run on CPU 0:

`taskset -p <0x1> <pid>`

- Set a process to run on CPUs 0 and 1:

`taskset -p <0x3> <pid>`

- Start a new command on specific CPUs using a list:

`taskset -c <0,1> <command>`

- Start a new command on a range of CPUs:

`taskset -c <0-3> <command>`

- Display CPU affinity in list format:

`taskset -cp <pid>`

- Set affinity using a CPU list:

`taskset -cp <0,2,4> <pid>`

- Start a command with all-CPUs affinity:

`taskset -c <0-7> <command>`
