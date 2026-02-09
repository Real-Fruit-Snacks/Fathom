# factor

> Print the prime factorization of a number.
> More information: <https://www.gnu.org/software/coreutils/factor>.

- Display the prime factorization of a number:

`factor <1201>`

- Display the prime factorization of multiple numbers:

`factor <1201> <1024> <255>`

- Take the numbers from standard input:

`echo <1201> | factor`

- Factor all numbers from 1 to 100:

`seq 100 | factor`