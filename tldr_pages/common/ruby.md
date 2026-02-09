# ruby

> Ruby programming language interpreter.
> More information: <https://www.ruby-lang.org>.

- Start an interactive Ruby shell (IRB):

`ruby -e "require 'irb'; IRB.start"`

- Execute a Ruby script:

`ruby <path/to/script.rb>`

- Execute a Ruby script with arguments:

`ruby <path/to/script.rb> <arg1> <arg2> [arg3...]`

- Execute Ruby code from the command line:

`ruby -e "<code>"`

- Check syntax of a Ruby script without executing it:

`ruby -c <path/to/script.rb>`

- Show the installed Ruby version:

`ruby --version`

- Execute a script with warnings enabled:

`ruby -w <path/to/script.rb>`

- Run a one-liner with automatic line processing (like awk):

`ruby -n -e "puts $_ if /pattern/" <path/to/file>`
