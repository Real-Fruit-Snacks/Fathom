# column

> Format input into multiple columns.
> More information: <https://man7.org/linux/man-pages/man1/column.1.html>.

- Format the output of a command for a 30 characters wide display:

`<printf "header1 header2\nbar foo\n"> | column <-c 30>`

- Split columns automatically and auto-align them in a tabular format:

`<printf "header1 header2\nbar foo\n"> | column <-t>`

- Specify column delimiters (use with `--table`):

`<printf "header1,header2\nbar,foo\n"> | column <-t -s ,>`

- Fill columns before filling rows:

`<printf "header1\nbar\nfoobar\n"> | column <-c 30 -x>`