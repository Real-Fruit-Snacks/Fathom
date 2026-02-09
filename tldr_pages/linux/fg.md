# fg

> Bring a background or suspended job to the foreground.
> More information: <https://man7.org/linux/man-pages/man1/fg.1p.html>.

- Bring the most recent background job to foreground:

`fg`

- Bring a specific job to foreground by job ID:

`fg %<job_id>`

- Bring a job to foreground by job name:

`fg %<job_name>`

- Bring the previous job to foreground:

`fg %-`

- Bring the current (most recent) job to foreground:

`fg %+`

- List jobs before bringing one to foreground:

`jobs && fg %<job_id>`

- Bring job matching a partial command name to foreground:

`fg %?<partial_name>`

- Bring a job to foreground and then suspend it again:

`fg %<job_id>` (then press `Ctrl+Z`)
