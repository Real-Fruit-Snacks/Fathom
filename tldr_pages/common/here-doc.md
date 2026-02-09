# here-doc

> A shell construct for providing multi-line input to commands.
> Also known as here document or heredoc.
> More information: <https://www.gnu.org/software/bash/manual/bash.html#Here-Documents>.

- Basic here-doc with variable expansion:

`cat <<EOF
Hello, $USER
Current directory: $PWD
EOF`

- Here-doc without variable expansion (quoted delimiter):

`cat <<'EOF'
Variables like $USER are not expanded
EOF`

- Here-doc with tab indentation removed:

`cat <<-EOF
	This line has leading tabs removed
	EOF`

- Redirect here-doc to a file:

`cat <<EOF > <path/to/file>
<content goes here>
EOF`

- Use here-doc with sudo:

`sudo tee </etc/config_file> <<EOF
<configuration content>
EOF`

- Pass here-doc to a command:

`<command> <<EOF
<input line 1>
<input line 2>
EOF`

- Here-doc in a script function:

`<my_function>() {
cat <<EOF
Function output
EOF
}`

- Here-string (single line variant):

`<command> <<< "<single line input>"`
