# setenforce

> Set the mode of SELinux (Security-Enhanced Linux) at runtime.
> Changes are temporary and do not persist across reboots.
> See also: `getenforce`, `sestatus`.
> More information: <https://manned.org/setenforce>.

- Set SELinux to enforcing mode (policy violations are blocked and logged):

`sudo setenforce 1`

- Set SELinux to enforcing mode using the text argument:

`sudo setenforce Enforcing`

- Set SELinux to permissive mode (policy violations are logged but not blocked):

`sudo setenforce 0`

- Set SELinux to permissive mode using the text argument:

`sudo setenforce Permissive`

- Check the current SELinux mode before changing:

`getenforce && sudo setenforce <0|1>`

- Toggle between enforcing and permissive modes in a script:

`sudo setenforce $([ "$(getenforce)" = "Enforcing" ] && echo 0 || echo 1)`
