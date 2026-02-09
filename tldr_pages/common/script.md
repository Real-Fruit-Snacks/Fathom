# script

> Record a terminal session to a file.
> Useful for creating logs of terminal interactions.
> More information: <https://man7.org/linux/man-pages/man1/script.1.html>.

- Start recording a terminal session:

`script <path/to/output.txt>`

- Start recording with timing information:

`script -t=<path/to/timing.txt> <path/to/output.txt>`

- Append to an existing recording:

`script -a <path/to/output.txt>`

- Record without displaying the "Script started" message:

`script -q <path/to/output.txt>`

- Record and flush output after each write:

`script -f <path/to/output.txt>`

- Execute a command and exit:

`script -c "<command>" <path/to/output.txt>`

- Stop recording:

`exit`

- Replay a recorded session with timing:

`scriptreplay <path/to/timing.txt> <path/to/output.txt>`
