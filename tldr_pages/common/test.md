# test

> Check file types and compare values.
> Returns 0 if the condition evaluates to true, 1 if it evaluates to false.
> More information: <https://www.gnu.org/software/coreutils/test>.

- Test if a given variable is equal to a given string:

`test "<$MY_VAR>" <==> "</bin/zsh>"`

- Test if a given variable is empty:

`test <-z> "<$GIT_BRANCH>"`

- Test if a file exists:

`test <-f> "<path/to/file_or_directory>"`

- Test if a directory exists:

`test <-d> "<path/to/directory>"`

- Test if a file or directory exists:

`test <-e> "<path/to/file_or_directory>"`

- Test if a variable is greater/less than/equal to the specified number:

`test "<$RESULT>" <-eq|-ne|-lt|-gt|-le|-ge> "<1>"`

- Test if the specified variable is greater than the specified number:

`test "<$1>" <-gt> "<1>"`