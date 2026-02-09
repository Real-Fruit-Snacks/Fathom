# disown

> Remove jobs from the shell's job table.
> Prevents jobs from receiving SIGHUP when the shell exits.
> More information: <https://www.gnu.org/software/bash/manual/bash.html#index-disown>.

- Disown the most recent background job:

`disown`

- Disown a specific job by job number:

`disown %<job_number>`

- Disown all background jobs:

`disown -a`

- Disown running jobs only:

`disown -r`

- Disown and suppress SIGHUP on shell exit:

`disown -h %<job_number>`

- Start a process and immediately disown it:

`<command> & disown`

- Disown multiple jobs:

`disown %<job1> %<job2>`

- Start a long-running process that survives logout:

`nohup <command> & disown`
