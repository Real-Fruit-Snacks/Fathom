# reboot

> Restart the system.
> More information: <https://man7.org/linux/man-pages/man8/reboot.8.html>.

- Reboot the system immediately:

`sudo reboot`

- Reboot the system immediately without graceful shutdown:

`sudo reboot -f`

- Power off instead of rebooting:

`sudo reboot -p`

- Halt the system instead of rebooting:

`sudo reboot --halt`

- Reboot with a wall message to users:

`sudo shutdown -r now "<System rebooting for maintenance>"`

- Schedule a reboot in a specific number of minutes:

`sudo shutdown -r +<10>`

- Cancel a scheduled reboot:

`sudo shutdown -c`
