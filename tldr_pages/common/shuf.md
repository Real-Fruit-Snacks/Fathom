# shuf

> Generate random permutations.
> More information: <https://www.gnu.org/software/coreutils/shuf>.

- Randomize the order of lines in a file and output the result:

`shuf <path/to/file>`

- Only output the first n lines of the result:

`shuf <-n 10> <path/to/file>`

- Output random numbers in the range 1-10 (one per line):

`shuf <-i 1-10>`

- Output 5 random numbers in the range 1-10:

`shuf <-i 1-10 -n 5>`

- Output multiple random lines with repetition allowed:

`shuf <-r -n 10> <path/to/file>`

- Use a custom random seed:

`shuf <--random-source=/dev/urandom> <path/to/file>`

- Randomize lines from stdin:

`<command> | shuf`