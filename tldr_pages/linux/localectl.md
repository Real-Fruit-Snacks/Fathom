# localectl

> Control the system locale and keyboard layout settings.
> More information: <https://www.freedesktop.org/software/systemd/man/localectl.html>.

- Show current locale and keyboard settings:

`localectl`

- List available locales:

`localectl list-locales`

- Set the system locale:

`sudo localectl set-locale LANG=<en_US.UTF-8>`

- Set multiple locale variables:

`sudo localectl set-locale LANG=<en_US.UTF-8> LC_TIME=<de_DE.UTF-8>`

- List available keyboard layouts:

`localectl list-keymaps`

- Set the console keyboard layout:

`sudo localectl set-keymap <us>`

- Set the X11 keyboard layout:

`sudo localectl set-x11-keymap <us>`

- Set X11 keyboard layout with model, variant, and options:

`sudo localectl set-x11-keymap <layout> [model] [variant] [options]`
