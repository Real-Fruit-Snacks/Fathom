# elif

> A shell keyword for additional conditions in if statements.
> Short for "else if", used to chain multiple conditions.
> More information: <https://www.gnu.org/software/bash/manual/bash.html#index-if>.

- Basic elif usage:

`if [[ <condition1> ]]; then <command1>; elif [[ <condition2> ]]; then <command2>; fi`

- Multiple elif clauses:

`if [[ <condition1> ]]; then <command1>; elif [[ <condition2> ]]; then <command2>; elif [[ <condition3> ]]; then <command3>; fi`

- Elif with else fallback:

`if [[ <condition1> ]]; then <command1>; elif [[ <condition2> ]]; then <command2>; else <command3>; fi`

- Elif on multiple lines:

`if [[ <condition1> ]]
then
    <command1>
elif [[ <condition2> ]]
then
    <command2>
fi`

- Number comparison with elif:

`if [[ <$n> -lt 0 ]]; then echo "Negative"; elif [[ <$n> -eq 0 ]]; then echo "Zero"; else echo "Positive"; fi`

- String comparison with elif:

`if [[ "<$str>" == "yes" ]]; then echo "Yes"; elif [[ "<$str>" == "no" ]]; then echo "No"; else echo "Unknown"; fi`

- File type checking with elif:

`if [[ -f <$path> ]]; then echo "File"; elif [[ -d <$path> ]]; then echo "Directory"; elif [[ -L <$path> ]]; then echo "Symlink"; fi`

- Elif with command exit status:

`if grep -q "<pattern1>" <file>; then echo "Found 1"; elif grep -q "<pattern2>" <file>; then echo "Found 2"; fi`
