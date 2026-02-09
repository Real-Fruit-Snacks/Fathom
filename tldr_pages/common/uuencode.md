# uuencode

> Encode binary files into ASCII text for transmission over text-only channels.
> More information: <https://pubs.opengroup.org/onlinepubs/9699919799/utilities/uuencode.html>.

- Encode a file and print to standard output:

`uuencode <path/to/input_file> <output_filename>`

- Encode a file and save to a specific output file:

`uuencode <path/to/input_file> <output_filename> > <path/to/encoded.txt>`

- Encode using base64 instead of traditional uuencoding:

`uuencode -m <path/to/input_file> <output_filename>`

- Encode from standard input:

`<command> | uuencode <output_filename>`

- Encode a binary file for email attachment:

`uuencode <path/to/file.zip> <file.zip> | mail -s "<subject>" <user@example.com>`

- Encode with base64 and save to file:

`uuencode -m <path/to/binary_file> <binary_file> > <path/to/encoded.b64>`

- Encode multiple files by concatenating:

`cat <path/to/file1> | uuencode <file1> && cat <path/to/file2> | uuencode <file2>`
