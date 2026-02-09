# anacron

> Run commands periodically with a frequency specified in days.
> Unlike cron, anacron does not assume the system runs continuously and will run missed jobs when the system starts.
> More information: <https://manned.org/anacron>.

- Run all jobs that are due:

`sudo anacron`

- Run jobs without checking timestamps (force run):

`sudo anacron <[-f|--force]>`

- Test which jobs would run without executing them:

`anacron <[-T|--test]>`

- Update timestamps without running jobs:

`sudo anacron <[-u|--update]>`

- Run jobs in the foreground (don't fork):

`sudo anacron <[-d|--dont-fork]>`

- Use an alternate anacrontab file:

`sudo anacron <[-t|--tab]> <path/to/anacrontab>`

- Use an alternate spool directory for timestamps:

`sudo anacron <[-S|--spooldir]> <path/to/spool/directory>`

- Serialize job execution (run one at a time):

`sudo anacron <[-s|--serialize]>`
