# eval

> Execute arguments as a shell command.
> A shell builtin that concatenates arguments and executes them as a command.
> More information: <https://www.gnu.org/software/bash/manual/bash.html#index-eval>.

- Execute a command stored in a variable:

`<cmd>="ls -la"; eval "$<cmd>"`

- Execute a dynamically constructed command:

`eval "<command> $<variable>"`

- Set a variable whose name is stored in another variable:

`<varname>="myvar"; eval "$<varname>=<value>"`

- Access a variable whose name is stored in another variable:

`<varname>="PATH"; eval "echo \$$<varname>"`

- Execute multiple commands:

`eval "<command1>; <command2>"`

- Process command output as shell commands:

`eval "$(ssh-agent -s)"`

- Build and execute complex commands:

`<files>="file1.txt file2.txt"; eval "cat $<files>"`

- Use with indirect variable references:

`<prefix>="MY"; <suffix>="VAR"; eval "echo \$${<prefix>}_${<suffix}}"`
