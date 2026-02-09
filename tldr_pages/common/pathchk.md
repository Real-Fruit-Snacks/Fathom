# pathchk

> Check the validity and portability of pathnames.
> More information: <https://www.gnu.org/software/coreutils/manual/html_node/pathchk-invocation.html>.

- Check whether a path is valid and portable across POSIX systems:

`pathchk <path/to/file>`

- Check multiple paths for validity:

`pathchk <path/to/file1 path/to/file2 ...>`

- Check for portability on older (traditional) POSIX systems:

`pathchk <[-p|--portability]> <path/to/file>`

- Check if a path component is empty or uses a leading hyphen:

`pathchk <[-P]> <path/to/file>`

- Check both traditional POSIX portability and leading hyphen issues:

`pathchk <[-p|--portability]> <[-P]> <path/to/file>`

- Check for portability to all POSIX file systems (most restrictive):

`pathchk <[-p|--portability]> <path/to/file>`

- Validate a path and check the exit status:

`pathchk <path/to/file> && echo "Path is valid" || echo "Path has issues"`
