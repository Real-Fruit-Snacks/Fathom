# yacc

> Generate LALR parsers in C.
> Given a description of a context-free grammar, generates C parser.
> More information: <https://pubs.opengroup.org/onlinepubs/9699919799/utilities/yacc.html>.

- Generate a C parser from a grammar file:

`yacc <path/to/grammar.y>`

- Generate a parser with a custom prefix for all global variables and functions:

`yacc <-p> <prefix> <path/to/grammar.y>`

- Generate a parser with debugging information:

`yacc <-t> <path/to/grammar.y>`

- Generate a parser with a header file containing token definitions:

`yacc <-d> <path/to/grammar.y>`

- Generate a parser with verbose information written to y.output:

`yacc <-v> <path/to/grammar.y>`