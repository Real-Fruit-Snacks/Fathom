# jobs

> Display status of jobs in the current shell session.
> More information: <https://man7.org/linux/man-pages/man1/jobs.1p.html>.

- List all jobs:

`jobs`

- List all jobs with process IDs:

`jobs -l`

- List only running jobs:

`jobs -r`

- List only stopped (suspended) jobs:

`jobs -s`

- Display only process IDs:

`jobs -p`

- Display status of a specific job:

`jobs %<job_id>`

- Display the most recently suspended or backgrounded job:

`jobs %+`

- Display the previous job:

`jobs %-`
