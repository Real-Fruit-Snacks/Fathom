# stty

> Print or change terminal line settings.
> More information: <https://www.gnu.org/software/coreutils/manual/html_node/stty-invocation.html>.

- Print all current terminal settings:

`stty -a`

- Print terminal settings in a form that can be reused:

`stty -g`

- Set terminal baud rate:

`stty <9600>`

- Enable echoing of input characters:

`stty echo`

- Disable echoing of input characters (useful for passwords):

`stty -echo`

- Set the number of rows and columns:

`stty rows <40> cols <80>`

- Change the character to send interrupt signal (default: Ctrl+C):

`stty intr <^X>`

- Reset terminal to sane default values:

`stty sane`
