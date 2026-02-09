# systemd-run

> Run a command as a transient systemd service or scope unit.
> More information: <https://man7.org/linux/man-pages/man1/systemd-run.1.html>.

- Run a command as a transient service:

`systemd-run <command>`

- Run a command with a specific unit name:

`systemd-run --unit=<my-service> <command>`

- Run a command with resource limits:

`systemd-run --property=MemoryLimit=<500M> <command>`

- Run a command as a specific user:

`systemd-run --uid=<username> <command>`

- Run a command in a transient scope (synchronously):

`systemd-run --scope <command>`

- Run a command with a description:

`systemd-run --description="<My task>" <command>`

- Run a command with a timer:

`systemd-run --on-active=<30s> <command>`

- Run a command and wait for it to finish:

`systemd-run --wait <command>`
