# aureport

> Generate summary reports from the Linux audit system logs.
> Provides statistics and summaries of various audit events.
> See also: `ausearch`, `auditctl`, `auditd`.
> More information: <https://manned.org/aureport>.

- Generate a summary report of all audit events:

`sudo aureport`

- Generate a report of authentication attempts:

`sudo aureport -au`

- Generate a report of failed authentication attempts:

`sudo aureport -au --failed`

- Generate a report of all login events:

`sudo aureport -l`

- Generate a report of user modifications:

`sudo aureport -m`

- Generate a report of file access events:

`sudo aureport -f`

- Generate a report of executable runs:

`sudo aureport -x`

- Generate a report for a specific time range:

`sudo aureport --start <mm/dd/yyyy> <hh:mm:ss> --end <mm/dd/yyyy> <hh:mm:ss>`
