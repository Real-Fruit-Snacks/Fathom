# atrm

> Remove jobs scheduled by `at` or `batch` commands.
> More information: <https://man7.org/linux/man-pages/man1/atrm.1.html>.

- Remove a scheduled job (use `atq` to find the job number):

`atrm <job_number>`

- Remove multiple scheduled jobs:

`atrm <job_number1> <job_number2>`

- Remove all jobs scheduled by the current user:

`atrm <$(atq -q a | cut -f1)>`