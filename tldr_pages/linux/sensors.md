# sensors

> Display current readings of CPU temperature, voltage, and fan speed from hardware sensors.
> Part of the lm-sensors package.
> More information: <https://manned.org/sensors>.

- Display all sensor readings:

`sensors`

- Display temperatures in Fahrenheit:

`sensors --fahrenheit`

- Display output in raw format (useful for scripting):

`sensors <[-u|--raw]>`

- Display output in JSON format:

`sensors <[-j|--json]>`

- Show only sensor readings for a specific chip:

`sensors <chip_name>`

- List all detected sensor chips:

`sensors --bus-list`

- Continuously monitor sensors with 2-second updates:

`watch -n 2 sensors`

- Display verbose output with all available sensor data:

`sensors <[-A|--no-adapter]>`
