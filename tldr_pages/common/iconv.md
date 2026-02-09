# iconv

> Convert text from one character encoding to another.
> More information: <https://www.gnu.org/software/libc/manual/html_node/iconv-Implementation.html>.

- Convert file encoding and print to stdout:

`iconv -f <from_encoding> -t <to_encoding> <input_file>`

- Convert file encoding and write to output file:

`iconv -f <from_encoding> -t <to_encoding> <input_file> -o <output_file>`

- Convert from ISO-8859-1 to UTF-8:

`iconv -f ISO-8859-1 -t UTF-8 <input_file> -o <output_file>`

- List all known encodings:

`iconv -l`

- Convert UTF-8 to ASCII, transliterating characters when possible:

`iconv -f UTF-8 -t ASCII//TRANSLIT <input_file>`

- Convert and ignore characters that cannot be represented:

`iconv -f UTF-8 -t ASCII//IGNORE <input_file>`

- Convert Windows encoding to UTF-8:

`iconv -f CP1252 -t UTF-8 <input_file> -o <output_file>`

- Convert with verbose output showing conversion progress:

`iconv -f <from_encoding> -t <to_encoding> --verbose <input_file>`
