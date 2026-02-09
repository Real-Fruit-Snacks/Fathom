# runlevel

> Display the previous and current system runlevel.
> More information: <https://man7.org/linux/man-pages/man8/runlevel.8.html>.

- Display the current and previous runlevel:

`runlevel`

- Display only the current runlevel:

`who -r`

- Check the systemd equivalent of runlevels (targets):

`systemctl get-default`

- Change the default runlevel/target:

`sudo systemctl set-default <multi-user.target>`
