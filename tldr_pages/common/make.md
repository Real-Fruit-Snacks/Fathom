# make

> Task runner for rules described in Makefile.
> Mostly used to control the compilation of an executable from source code.
> More information: <https://www.gnu.org/software/make/manual/make.html>.

- Call the first target specified in the Makefile (usually named "all"):

`make`

- Call a specific target:

`make <target>`

- Call a specific target, executing 4 jobs at a time in parallel:

`make <-j4> <target>`

- Use a specific Makefile:

`make <-f> <path/to/file>`

- Execute make from another directory:

`make <-C> <path/to/directory>`

- Force making of a target, even if source files are unchanged:

`make <-B> <target>`

- Override a variable defined in the Makefile:

`make <target> <variable>=<new_value>`

- Override variables defined in the Makefile by the environment:

`make <-e> <target>`