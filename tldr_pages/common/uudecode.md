# uudecode

> Decode files that were encoded with uuencode.
> More information: <https://pubs.opengroup.org/onlinepubs/9699919799/utilities/uudecode.html>.

- Decode a uuencoded file (output filename is embedded in the file):

`uudecode <path/to/encoded_file>`

- Decode a file and specify output filename:

`uudecode -o <path/to/output_file> <path/to/encoded_file>`

- Decode from standard input:

`<command> | uudecode`

- Decode a base64-encoded file created with uuencode -m:

`uudecode <path/to/base64_encoded_file>`

- Decode and write to standard output:

`uudecode -o /dev/stdout <path/to/encoded_file>`

- Decode multiple encoded files concatenated together:

`uudecode <path/to/concatenated_encoded_file>`

- Decode a file received via email or network transfer:

`uudecode -o <path/to/output> <path/to/email_attachment.txt>`

- Decode with verbose output showing the embedded filename:

`uudecode -p <path/to/encoded_file> > <path/to/output>`
