# restorecon

> Restore default SELinux security contexts for files and directories.
> Uses the file_contexts files to determine correct context labels.
> See also: `chcon`, `semanage`, `ls -Z`.
> More information: <https://manned.org/restorecon>.

- Restore the default context of a file:

`sudo restorecon <path/to/file>`

- Restore contexts recursively for a directory:

`sudo restorecon -R <path/to/directory>`

- Show what changes would be made without applying them (dry run):

`sudo restorecon -n -v <path/to/file>`

- Restore contexts and display verbose output:

`sudo restorecon -v <path/to/file>`

- Force reset of context even if it appears correct:

`sudo restorecon -F <path/to/file>`

- Restore contexts recursively with verbose output and progress:

`sudo restorecon -Rv <path/to/directory>`

- Restore contexts using a specific policy file:

`sudo restorecon -f <path/to/file_contexts> <path/to/file>`

- Restore contexts excluding specific directories:

`sudo restorecon -R -e <path/to/exclude> <path/to/directory>`
