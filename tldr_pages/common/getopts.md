# getopts

> Parse positional parameters as options (shell builtin).
> A portable way to parse short command-line options.
> More information: <https://www.gnu.org/software/bash/manual/bash.html#index-getopts>.

- Parse options in a while loop:

`while getopts "<abc>" <opt>; do case $<opt> in a) echo "Option a";; b) echo "Option b";; c) echo "Option c";; esac; done`

- Parse options with arguments (colon after letter):

`while getopts "<f:o:>" <opt>; do case $<opt> in f) <file>="$OPTARG";; o) <output>="$OPTARG";; esac; done`

- Handle invalid options:

`while getopts "<ab>" <opt>; do case $<opt> in \?) echo "Invalid option: -$OPTARG";; esac; done`

- Handle missing option arguments:

`while getopts ":<f:>" <opt>; do case $<opt> in :) echo "Option -$OPTARG requires an argument";; esac; done`

- Shift to remaining arguments after parsing:

`while getopts "<abc>" <opt>; do :; done; shift $((OPTIND-1))`

- Silent error reporting (leading colon):

`while getopts ":<ab:>" <opt>; do case $<opt> in a) echo "a";; b) <val>="$OPTARG";; :) echo "Missing arg";; \?) echo "Invalid";; esac; done`

- Reset OPTIND to parse again:

`OPTIND=1; while getopts "<abc>" <opt>; do echo "$<opt>"; done`

- Full script example with help:

`while getopts "<hf:v>" <opt>; do case $<opt> in h) echo "Usage: $0 [-h] [-f file] [-v]"; exit;; f) <file>="$OPTARG";; v) <verbose>=1;; esac; done`
