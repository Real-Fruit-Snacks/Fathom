# quota

> Display disk usage and quotas for a user or group.
> More information: <https://man7.org/linux/man-pages/man1/quota.1.html>.

- Display disk quota for the current user:

`quota`

- Display disk quota for a specific user:

`quota -u <username>`

- Display disk quota for a specific group:

`quota -g <groupname>`

- Display quota in human-readable format:

`quota -s`

- Display quota including filesystems where no storage is allocated:

`quota -v`

- Display quota as quiet output (only over-limit filesystems):

`quota -q`

- Display raw quota values without headers:

`quota -p`
