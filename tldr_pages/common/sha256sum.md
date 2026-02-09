# sha256sum

> Calculate SHA256 cryptographic checksums.
> More information: <https://www.gnu.org/software/coreutils/manual/html_node/sha2-utilities-invocation.html>.

- Calculate the SHA256 checksum of a file:

`sha256sum <path/to/file>`

- Calculate SHA256 checksums for multiple files:

`sha256sum <path/to/file1 path/to/file2 ...>`

- Calculate the SHA256 checksum from standard input:

`echo "<text>" | sha256sum`

- Read checksums from a file and verify them:

`sha256sum -c <path/to/checksums.sha256>`

- Verify checksums and only show failures:

`sha256sum -c --quiet <path/to/checksums.sha256>`

- Calculate checksums and save to a file:

`sha256sum <path/to/file1 path/to/file2> > <checksums.sha256>`

- Verify checksums with strict mode (exit non-zero for improperly formatted lines):

`sha256sum -c --strict <path/to/checksums.sha256>`

- Read files in binary mode:

`sha256sum -b <path/to/file>`
