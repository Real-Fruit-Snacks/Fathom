# ulimit

> Get and set user limits for the shell and processes started by it.
> Limits can be set as soft (current) or hard (maximum) values.
> More information: <https://www.gnu.org/software/bash/manual/bash.html#index-ulimit>.

- Display all current limits:

`ulimit -a`

- Display the maximum number of open file descriptors:

`ulimit -n`

- Set the maximum number of open file descriptors (soft limit):

`ulimit -Sn <1024>`

- Set the maximum number of open file descriptors (hard limit):

`ulimit -Hn <4096>`

- Display the maximum size of core dump files:

`ulimit -c`

- Allow unlimited core dump file size:

`ulimit -c unlimited`

- Display the maximum stack size:

`ulimit -s`

- Set the maximum number of processes available to a single user:

`ulimit -u <512>`
