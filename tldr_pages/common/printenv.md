# printenv

> Print values of environment variables.
> More information: <https://www.gnu.org/software/coreutils/printenv>.

- Display all environment variables:

`printenv`

- Display the value of a specific environment variable:

`printenv <HOME>`

- Display the values of multiple environment variables:

`printenv <HOME> <USER> <SHELL>`

- Display environment variables ending with "PATH":

`printenv | grep <PATH>`