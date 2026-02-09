# atq

> Show jobs scheduled by `at` or `batch` commands.
> More information: <https://man7.org/linux/man-pages/man1/atq.1.html>.

- Show the current user's scheduled jobs:

`atq`

- Show jobs from queue with a specified name (queues have single-character names):

`atq <-q> <queue_name>`

- Show jobs of all users (run as superuser):

`atq`