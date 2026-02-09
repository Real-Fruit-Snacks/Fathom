# env

> Show the environment or run a program in a modified environment.
> More information: <https://www.gnu.org/software/coreutils/env>.

- Display all environment variables:

`env`

- Clear the environment and run a program:

`env <-i|--ignore-environment> <program>`

- Remove variable from the environment and run a program:

`env <-u|--unset> <variable> <program>`

- Set a variable and run a program:

`env <variable>=<value> <program>`

- Set multiple variables and run a program:

`env <variable1>=<value> <variable2>=<value> <program>`

- Change to a specific directory and run a program:

`env <-C|--chdir> <path/to/directory> <program>`

- Search for program in the current environment's PATH and run it:

`env <program>`

- Display usage and environment information:

`env <--help>`