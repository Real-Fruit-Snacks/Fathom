# telinit

> Change the SysV runlevel.
> Since most modern Linux distributions use systemd, this command mostly calls systemctl.
> More information: <https://man7.org/linux/man-pages/man8/telinit.8.html>.

- View the current runlevel:

`telinit`

- Change the current runlevel:

`telinit <runlevel>`

- Change to runlevel 1 (single-user mode):

`telinit <1>`

- Change to runlevel 3 (multi-user mode):

`telinit <3>`

- Change to runlevel 5 (multi-user mode with GUI):

`telinit <5>`

- Restart the system (runlevel 6):

`telinit <6>`

- Shut down the system (runlevel 0):

`telinit <0>`