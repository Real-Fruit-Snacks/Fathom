# sha512sum

> Calculate SHA512 cryptographic checksums.
> More information: <https://www.gnu.org/software/coreutils/manual/html_node/sha2-utilities-invocation.html>.

- Calculate the SHA512 checksum of a file:

`sha512sum <path/to/file>`

- Calculate SHA512 checksums for multiple files:

`sha512sum <path/to/file1 path/to/file2 ...>`

- Calculate the SHA512 checksum from standard input:

`echo "<text>" | sha512sum`

- Read checksums from a file and verify them:

`sha512sum -c <path/to/checksums.sha512>`

- Verify checksums and only show failures:

`sha512sum -c --quiet <path/to/checksums.sha512>`

- Calculate checksums and save to a file:

`sha512sum <path/to/file1 path/to/file2> > <checksums.sha512>`

- Verify checksums with strict mode:

`sha512sum -c --strict <path/to/checksums.sha512>`

- Read files in binary mode:

`sha512sum -b <path/to/file>`
