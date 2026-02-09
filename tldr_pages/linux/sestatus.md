# sestatus

> Display comprehensive SELinux status information.
> Shows current mode, policy, and boolean settings.
> See also: `getenforce`, `setenforce`, `getsebool`.
> More information: <https://manned.org/sestatus>.

- Display basic SELinux status:

`sestatus`

- Display verbose status including process and file contexts:

`sestatus -v`

- Display status of all SELinux booleans:

`sestatus -b`

- Display both verbose information and boolean status:

`sestatus -bv`

- Check if SELinux is enabled (returns enabled/disabled):

`sestatus | grep "SELinux status"`

- Display the currently loaded policy name:

`sestatus | grep "Loaded policy name"`

- Check the current mode (enforcing, permissive, or disabled):

`sestatus | grep "Current mode"`

- Display the policy version:

`sestatus | grep "Policy"`
