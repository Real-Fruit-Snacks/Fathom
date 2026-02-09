# perl

> Perl programming language interpreter.
> More information: <https://www.perl.org>.

- Execute a Perl script:

`perl <path/to/script.pl>`

- Execute a Perl script with arguments:

`perl <path/to/script.pl> <arg1> <arg2> [arg3...]`

- Execute Perl code from the command line:

`perl -e "<code>"`

- Check syntax of a Perl script without executing it:

`perl -c <path/to/script.pl>`

- Execute a one-liner to search and replace in a file (in-place):

`perl -pi -e "s/<search>/<replace>/g" <path/to/file>`

- Execute with automatic line processing (like awk):

`perl -n -e "print if /<pattern>/" <path/to/file>`

- Show the installed Perl version:

`perl --version`

- Print lines matching a pattern with line numbers:

`perl -ne "print \"$.: $_\" if /<pattern>/" <path/to/file>`
