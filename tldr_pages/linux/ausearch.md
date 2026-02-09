# ausearch

> Search the Linux audit daemon logs for specific events.
> Query audit records by user, time, event type, or other criteria.
> See also: `aureport`, `auditctl`, `auditd`.
> More information: <https://manned.org/ausearch>.

- Search for all audit events for a specific user:

`sudo ausearch -ua <username>`

- Search for events by user ID:

`sudo ausearch -ui <uid>`

- Search for events within a time range:

`sudo ausearch --start <today|yesterday|recent|this-week> --end <now>`

- Search for events by specific date and time:

`sudo ausearch --start <mm/dd/yyyy> <hh:mm:ss> --end <mm/dd/yyyy> <hh:mm:ss>`

- Search for events by message type (e.g., LOGIN, USER_AUTH, SYSCALL):

`sudo ausearch -m <message_type>`

- Search for file access events on a specific file:

`sudo ausearch -f <path/to/file>`

- Search for events by process ID:

`sudo ausearch -p <pid>`

- Search for events and interpret them in human-readable format:

`sudo ausearch -i -m <message_type>`
