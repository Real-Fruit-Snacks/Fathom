# qrencode

> Generate QR codes from text or data.
> More information: <https://fukuchi.org/works/qrencode/manual/index.html>.

- Create a QR code image from text:

`qrencode -o <output.png> "<text>"`

- Create a QR code with a specific size:

`qrencode -s <10> -o <output.png> "<text>"`

- Create a QR code to the terminal (text mode):

`qrencode -t ANSI "<text>"`

- Create a QR code from file content:

`qrencode -o <output.png> < <path/to/file.txt>`

- Create a QR code with error correction level:

`qrencode -l <H> -o <output.png> "<text>"`

- Create an SVG QR code:

`qrencode -t SVG -o <output.svg> "<text>"`

- Create a QR code with custom colors:

`qrencode --foreground=<000000> --background=<FFFFFF> -o <output.png> "<text>"`

- Encode a URL:

`qrencode -o <qrcode.png> "<https://example.com>"`
