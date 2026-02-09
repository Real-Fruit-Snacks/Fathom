# wall

> Write a message on the terminals of all logged-in users.
> More information: <https://man7.org/linux/man-pages/man1/wall.1.html>.

- Send a message to all users:

`wall "<message>"`

- Send a message from a file to all users:

`wall <path/to/file>`

- Send a message to all users except those whose terminals are configured to refuse messages:

`wall <-n> "<message>"`

- Send a message with a specific timeout (in seconds):

`wall <-t> <timeout> "<message>"`