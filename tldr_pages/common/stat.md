# stat

> Display file or filesystem status.
> More information: <https://manned.org/stat>.

- Display file information:

`stat <path/to/file>`

- Display file information in brief format:

`stat -t <path/to/file>`

- Display filesystem information:

`stat -f <path/to/file>`

- Show octal file permissions:

`stat -c "%a %n" <path/to/file>`

- Show owner and group:

`stat -c "%U %G" <path/to/file>`

- Show file size in bytes:

`stat -c "%s" <path/to/file>`

- Show file modification time:

`stat -c "%y" <path/to/file>`

- Show file access rights in human-readable form:

`stat -c "%A" <path/to/file>`