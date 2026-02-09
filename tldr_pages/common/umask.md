# umask

> Manage the read/write/execute permissions that are masked out for newly created files.
> The mask is subtracted from the default permissions (666 for files, 777 for directories).
> More information: <https://manned.org/umask>.

- Display the current mask in octal notation:

`umask`

- Display the current mask in symbolic notation:

`umask -S`

- Set the mask to a specific octal value (common restrictive setting):

`umask <077>`

- Set the mask to allow group read/execute and no other permissions:

`umask <027>`

- Set the mask to allow all permissions for owner, group read for others:

`umask <037>`

- Set the mask using symbolic notation:

`umask <u=rwx,g=rx,o=>`

- Reset to default permissive mask:

`umask <022>`
