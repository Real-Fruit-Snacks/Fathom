# renice

> Change the scheduling priority of running processes.
> Niceness values range from -20 (highest priority) to 19 (lowest priority).
> More information: <https://man7.org/linux/man-pages/man1/renice.1.html>.

- Change priority of a process by PID:

`renice -n <niceness> -p <pid>`

- Change priority of all processes owned by a user:

`renice -n <niceness> -u <username>`

- Change priority of all processes in a process group:

`renice -n <niceness> -g <pgid>`

- Increase priority of a process (requires root):

`sudo renice -n -10 -p <pid>`

- Lower priority of a process:

`renice -n 15 -p <pid>`

- Set lowest priority for a CPU-intensive process:

`renice -n 19 -p <pid>`

- Change priority of multiple processes:

`renice -n <niceness> -p <pid1> -p <pid2>`

- Set highest priority for a critical process:

`sudo renice -n -20 -p <pid>`
