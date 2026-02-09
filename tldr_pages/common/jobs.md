# jobs

> Display status of jobs in the current shell session.
> More information: <https://www.gnu.org/software/bash/manual/html_node/Job-Control-Builtins.html>.

- List all jobs:

`jobs`

- List all jobs with process IDs:

`jobs -l`

- List all jobs with process IDs only:

`jobs -p`

- List only running jobs:

`jobs -r`

- List only stopped jobs:

`jobs -s`

- Bring a background job to the foreground:

`fg %<job_number>`

- Resume a stopped job in the background:

`bg %<job_number>`

- Terminate a job by job number:

`kill %<job_number>`
