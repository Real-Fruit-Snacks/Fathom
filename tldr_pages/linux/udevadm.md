# udevadm

> Manage the udev device manager.
> More information: <https://man7.org/linux/man-pages/man8/udevadm.8.html>.

- Display device information:

`udevadm info </dev/sda>`

- Display device information by path:

`udevadm info -p </sys/class/block/sda>`

- Monitor udev events:

`udevadm monitor`

- Monitor udev events with properties:

`udevadm monitor --property`

- Trigger device events:

`sudo udevadm trigger`

- Test a rule for a device:

`udevadm test </sys/class/block/sda>`

- Reload udev rules:

`sudo udevadm control --reload-rules`

- Force udev to reprocess device events:

`sudo udevadm trigger --action=change`
