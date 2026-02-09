# nmcli

> Command-line client for NetworkManager.
> More information: <https://networkmanager.dev/docs/api/latest/nmcli.html>.

- List all network connections:

`nmcli connection show`

- Show active connections only:

`nmcli connection show --active`

- List available Wi-Fi networks:

`nmcli device wifi list`

- Connect to a Wi-Fi network:

`nmcli device wifi connect <ssid> password <password>`

- Connect to a hidden Wi-Fi network:

`nmcli device wifi connect <ssid> password <password> hidden yes`

- Disconnect a specific interface:

`nmcli device disconnect <interface>`

- Show all network devices and their state:

`nmcli device status`

- Show detailed information about a connection:

`nmcli connection show <connection_name>`

- Enable or disable networking:

`nmcli networking <on|off>`

- Create a new connection profile:

`nmcli connection add type <ethernet|wifi> con-name <name> ifname <interface>`

- Delete a connection profile:

`nmcli connection delete <connection_name>`

- Modify connection settings:

`nmcli connection modify <connection_name> <setting> <value>`
