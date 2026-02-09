# seq

> Print a sequence of numbers.
> More information: <https://manned.org/seq>.

- Print a sequence from 1 to 10:

`seq 10`

- Print a sequence from 5 to 20:

`seq 5 20`

- Print a sequence from 1 to 100 with a step of 5:

`seq 1 5 100`

- Print a sequence from 20 to 10 (descending):

`seq 20 -1 10`

- Print a sequence with leading zeros:

`seq -w 001 010`

- Print a sequence with a specific format:

`seq -f "Number: %.2f" 1 0.5 5`

- Print a sequence separated by a specific string:

`seq -s "<, >" 1 10`

- Print a sequence of dates:

`seq -f "2023-01-%02g" 1 31`