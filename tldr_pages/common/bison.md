# bison

> GNU parser generator (yacc replacement).
> Given a description of a context-free grammar, generates a C parser.
> More information: <https://www.gnu.org/software/bison/>.

- Generate a C parser from a grammar file:

`bison <path/to/file.y>`

- Generate a parser with debug information:

`bison <--debug> <path/to/file.y>`

- Generate a parser and create the header file:

`bison <--defines> <path/to/file.y>`

- Generate a parser with a custom header file name:

`bison <--defines=<<path/to/header.h> <path/to/file.y>`

- Generate a parser with verbose output:

`bison <--verbose> <path/to/file.y>`

- Generate a C++ parser:

`bison <--language=c++> <path/to/file.ypp>`