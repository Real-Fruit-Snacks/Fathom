# bg

> Resume suspended jobs and run them in the background.
> Use Ctrl+Z to suspend a foreground job, then bg to continue it in background.
> More information: <https://www.gnu.org/software/bash/manual/bash.html#index-bg>.

- Resume the most recently suspended job in the background:

`bg`

- Resume a specific job by job number:

`bg %<job_number>`

- Resume a job whose command starts with a string:

`bg %<string>`

- Resume a job whose command contains a string:

`bg %?<string>`

- Resume the previous job:

`bg %-`

- Resume the current job (same as no argument):

`bg %+`

- Suspend then background a long-running command:

`<command>  # Press Ctrl+Z, then: bg`

- View background jobs after resuming:

`bg; jobs`
