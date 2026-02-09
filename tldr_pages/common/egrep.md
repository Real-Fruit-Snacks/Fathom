# egrep

> Find patterns in files using extended regular expressions (supports ?, +, {}, (), and |).
> More information: <https://www.gnu.org/software/grep/>.

- Search for a pattern in a file:

`egrep "<search_pattern>" <path/to/file>`

- Search for a pattern in multiple files:

`egrep "<search_pattern>" <path/to/file1> <path/to/file2>`

- Search for multiple patterns:

`egrep "<pattern1|pattern2>" <path/to/file>`

- Search for a pattern in all files recursively in a directory, ignoring binary files:

`egrep <-r> <-I> "<search_pattern>" <path/to/directory>`

- Use extended regular expressions (equivalent to `grep -E`):

`egrep "<^(start|end)>" <path/to/file>`

- Search only whole words:

`egrep <-w> "<search_pattern>" <path/to/file>`

- Search case-insensitively:

`egrep <-i> "<search_pattern>" <path/to/file>`