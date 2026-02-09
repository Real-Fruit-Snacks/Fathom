# shift

> Shift positional parameters to the left.
> A shell builtin that removes arguments from the beginning of the argument list.
> More information: <https://www.gnu.org/software/bash/manual/bash.html#index-shift>.

- Shift all positional parameters by one position:

`shift`

- Shift positional parameters by a specific number:

`shift <n>`

- Process all arguments in a loop:

`while [[ $# -gt 0 ]]; do echo "$1"; shift; done`

- Process arguments in pairs:

`while [[ $# -gt 1 ]]; do echo "$1 $2"; shift 2; done`

- Parse command-line options:

`while [[ $# -gt 0 ]]; do case "$1" in -f) <file>="$2"; shift 2 ;; *) shift ;; esac; done`

- Skip the first argument and process the rest:

`<first>="$1"; shift; for <arg> in "$@"; do echo "$<arg>"; done`

- Use shift with getopts:

`while getopts "<abc:>" <opt>; do case $<opt> in c) <value>="$OPTARG" ;; esac; done; shift $((OPTIND-1))`

- Shift until a specific argument is found:

`while [[ "$1" != "--" ]] && [[ $# -gt 0 ]]; do shift; done`
