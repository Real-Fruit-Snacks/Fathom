# suspend

> Suspend the execution of the current shell.
> A shell builtin that stops the shell until it receives a SIGCONT signal.
> More information: <https://www.gnu.org/software/bash/manual/bash.html#index-suspend>.

- Suspend the current shell:

`suspend`

- Force suspend even if the shell is a login shell:

`suspend -f`

- Suspend a subshell:

`(sleep 10; suspend)`

- Suspend and later resume with fg:

`suspend  # Then use: fg`

- Suspend and later resume with kill:

`suspend  # Then use: kill -CONT $$`

- Check if shell can be suspended:

`[[ $- == *i* ]] && echo "Interactive shell"`

- Suspend in a script (non-login shell):

`#!/bin/bash
echo "Suspending..."
suspend`

- Alternative: Stop the shell process:

`kill -STOP $$`
