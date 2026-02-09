# logger

> Add messages to syslog (/var/log/syslog).
> More information: <https://man7.org/linux/man-pages/man1/logger.1.html>.

- Log a message to syslog:

`logger "<message>"`

- Log a message with a specific tag:

`logger <-t "<<tag>"> "<message>"`

- Log a message with a specific facility and level:

`logger <-p> <user.notice> "<message>"`

- Log a message to a specific remote syslog server:

`logger <-n> <host> "<message>"`

- Log output from another command:

`<command> | logger`

- Log a message with specific priority (debug, info, notice, warning, error, crit, alert, emerg):

`logger <-p> <user.warning> "<Warning message>"`