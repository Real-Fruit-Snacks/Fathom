# expr

> Evaluate expressions and manipulate strings.
> More information: <https://www.gnu.org/software/coreutils/expr>.

- Get the length of a specific string:

`expr length "<string>"`

- Get the substring of a string with a specific length:

`expr substr "<string>" <position> <length>`

- Match a specific substring/regular expression in a string:

`expr "<string>" : '<.*\([0-9]*\)>'`

- Get the first char position of a specific substring in a string:

`expr index "<string>" "<substring>"`

- Calculate simple mathematical expressions:

`expr <2> <+> <3>`

- Get the first element of a path:

`expr "</path/to/file>" : '</\([^/]*\)>'`

- Get the last element of a path:

`expr "</path/to/file>" : '.*/\(<[^/]*>\)'`

- Extract filename from path:

`expr "</path/to/file.ext>" : '.*/\(<.*>\)'`