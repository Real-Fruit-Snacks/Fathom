# renice

> Alter the scheduling priority of running processes.
> Priority values range from -20 (highest priority) to 19 (lowest priority).
> More information: <https://man7.org/linux/man-pages/man1/renice.1.html>.

- Change the priority of a running process:

`renice -n <priority> -p <pid>`

- Change the priority of all processes owned by a user:

`renice -n <priority> -u <username>`

- Change the priority of all processes in a process group:

`renice -n <priority> -g <process_group_id>`

- Increase priority (requires root for negative values):

`sudo renice -n <-10> -p <pid>`

- Lower priority of a CPU-intensive process:

`renice -n <15> -p <pid>`

- Change priority of multiple processes at once:

`renice -n <priority> -p <pid1> -p <pid2>`
