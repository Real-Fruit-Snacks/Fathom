# systemd-analyze

> Analyze and debug systemd manager performance.
> More information: <https://man7.org/linux/man-pages/man1/systemd-analyze.1.html>.

- Display boot time summary:

`systemd-analyze`

- Display time taken by each service during boot:

`systemd-analyze blame`

- Display critical chain of services during boot:

`systemd-analyze critical-chain`

- Display critical chain for a specific unit:

`systemd-analyze critical-chain <unit_name.service>`

- Generate an SVG graph of boot sequence:

`systemd-analyze plot > <boot.svg>`

- Display security analysis of units:

`systemd-analyze security`

- Display security analysis of a specific unit:

`systemd-analyze security <unit_name.service>`

- Verify unit file syntax:

`systemd-analyze verify <path/to/unit.service>`
