# visudo

> Safely edit the sudoers file.
> More information: <https://man7.org/linux/man-pages/man8/visudo.8.html>.

- Edit the sudoers file:

`sudo visudo`

- Check the sudoers file for syntax errors:

`sudo visudo -c`

- Edit the sudoers file using a specific editor:

`sudo EDITOR=<editor> visudo`

- Edit a sudoers file at a specific location:

`sudo visudo -f <path/to/file>`

- Check a specific sudoers file for syntax errors:

`sudo visudo -c -f <path/to/file>`

- Display the visudo version:

`visudo -V`

- Enable strict mode (stricter syntax checking):

`sudo visudo -s`

- Edit a sudoers file in quiet mode (suppress prompts):

`sudo visudo -q`
