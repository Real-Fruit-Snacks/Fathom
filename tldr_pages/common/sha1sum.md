# sha1sum

> Calculate SHA1 cryptographic checksums.
> Note: SHA1 is considered insecure for cryptographic purposes; use sha256sum for security.
> More information: <https://www.gnu.org/software/coreutils/manual/html_node/sha1sum-invocation.html>.

- Calculate the SHA1 checksum of a file:

`sha1sum <path/to/file>`

- Calculate SHA1 checksums for multiple files:

`sha1sum <path/to/file1 path/to/file2 ...>`

- Calculate the SHA1 checksum from standard input:

`echo "<text>" | sha1sum`

- Read checksums from a file and verify them:

`sha1sum -c <path/to/checksums.sha1>`

- Verify checksums and only show failures:

`sha1sum -c --quiet <path/to/checksums.sha1>`

- Calculate checksums and save to a file:

`sha1sum <path/to/file1 path/to/file2> > <checksums.sha1>`

- Verify checksums and warn about improperly formatted lines:

`sha1sum -c --warn <path/to/checksums.sha1>`

- Read files in binary mode:

`sha1sum -b <path/to/file>`
