# scriptreplay

> Replay a terminal session recorded with the script command.
> More information: <https://man7.org/linux/man-pages/man1/scriptreplay.1.html>.

- Replay a recorded session:

`scriptreplay <timing_file> <typescript_file>`

- Replay at double speed:

`scriptreplay -d <2> <timing_file> <typescript_file>`

- Replay at half speed:

`scriptreplay -d <0.5> <timing_file> <typescript_file>`

- Replay with a maximum delay between updates:

`scriptreplay -m <1> <timing_file> <typescript_file>`

- Replay using the default filenames:

`scriptreplay timing typescript`

- Replay a session recorded with script -t:

`scriptreplay -t <timing_file> <typescript_file>`
