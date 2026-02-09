# fg

> Bring a suspended or background job to the foreground.
> See also: `bg`, `jobs`.
> More information: <https://manned.org/fg>.

- Bring the most recent background job to the foreground:

`fg`

- Bring a specific job to the foreground by job ID:

`fg %<job_id>`

- Bring the job whose command begins with a specific string to the foreground:

`fg %<string>`

- Bring the job whose command contains a specific string to the foreground:

`fg %?<string>`

- Bring the previous job to the foreground:

`fg %-`

- Bring the current job to the foreground (equivalent to no argument):

`fg %+`
