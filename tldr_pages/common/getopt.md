# getopt

> Parse command-line options (external command).
> A more powerful alternative to getopts that supports long options.
> More information: <https://man7.org/linux/man-pages/man1/getopt.1.html>.

- Parse short options:

`getopt -o <ab:c> -- "$@"`

- Parse short and long options:

`getopt -o <h> --long <help,verbose,output:> -- "$@"`

- Parse options with error handling:

`getopt -o <ab:c> -n '<script_name>' -- "$@"`

- Use in a script with eval:

`<opts>=$(getopt -o <ab:c> -- "$@"); eval set -- "$<opts>"`

- Full parsing example:

`<opts>=$(getopt -o <h> --long <help,file:> -- "$@"); eval set -- "$<opts>"; while true; do case "$1" in -h|--help) echo "Help"; shift;; --file) <file>="$2"; shift 2;; --) shift; break;; esac; done`

- Allow optional arguments with double colon:

`getopt -o <a::> --long <arg::> -- "$@"`

- Specify alternative getopt program:

`getopt -a -o <abc> -- "$@"`

- Test if getopt is enhanced version:

`getopt -T; [[ $? -eq 4 ]] && echo "Enhanced getopt"`
