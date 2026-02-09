# faillog

> Display and manage the failure log database (/var/log/faillog).
> Track and limit failed login attempts per user.
> See also: `lastlog`, `last`, `pam_tally2`.
> More information: <https://manned.org/faillog>.

- Display failed login records for all users:

`sudo faillog`

- Display failed login record for a specific user:

`sudo faillog -u <username>`

- Set the maximum number of login failures before account is locked:

`sudo faillog -m <max_failures> -u <username>`

- Set the maximum failures for all users:

`sudo faillog -m <max_failures>`

- Reset the failure count for a specific user:

`sudo faillog -r -u <username>`

- Reset the failure count for all users:

`sudo faillog -r`

- Set the lockout time in seconds after max failures reached:

`sudo faillog -l <seconds> -u <username>`

- Display only users with failed login attempts:

`sudo faillog -a`
