# shred

> Securely overwrite files to hide their contents and optionally delete them.
> More information: <https://www.gnu.org/software/coreutils/manual/html_node/shred-invocation.html>.

- Overwrite a file to hide its contents:

`shred <path/to/file>`

- Overwrite a file and remove it:

`shred -u <path/to/file>`

- Overwrite a file with a specific number of iterations:

`shred -n <25> <path/to/file>`

- Overwrite and add a final overwrite with zeros:

`shred -z <path/to/file>`

- Overwrite with verbose output:

`shred -v <path/to/file>`

- Overwrite only the first bytes of a file:

`shred -s <1M> <path/to/file>`

- Shred multiple files:

`shred -u <path/to/file1 path/to/file2 ...>`

- Overwrite, zero, and remove with verbose output:

`shred -vzu <path/to/file>`
