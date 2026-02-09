# mktemp

> Create a temporary file or directory.
> More information: <https://manned.org/mktemp>.

- Create an empty temporary file and print its path:

`mktemp`

- Create a temporary directory and print its path:

`mktemp -d`

- Create a temporary file with a specific suffix:

`mktemp --suffix=<.txt>`

- Create a temporary file with a specific name template (X's are replaced with random alphanumeric characters):

`mktemp </tmp/my_temp_XXXXXX>`

- Create a temporary file in a specific directory:

`mktemp -p </path/to/directory>`

- Create a temporary file and open it with the default editor:

`$(mktemp) | xargs $EDITOR`

- Create a temporary file in /tmp with permissions 600:

`mktemp -t`