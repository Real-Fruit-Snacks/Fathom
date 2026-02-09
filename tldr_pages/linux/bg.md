# bg

> Resume suspended jobs in the background.
> More information: <https://man7.org/linux/man-pages/man1/bg.1p.html>.

- Resume the most recently suspended job in the background:

`bg`

- Resume a specific job by job ID:

`bg %<job_id>`

- Resume a job by job specification:

`bg %<job_name>`

- Resume the job that was started first (oldest):

`bg %-`

- Resume the job that was started last (newest):

`bg %+`

- List current jobs before resuming:

`jobs && bg %<job_id>`

- Resume multiple jobs in background:

`bg %<job_id1> %<job_id2>`

- Resume job by partial command name match:

`bg %?<partial_name>`
