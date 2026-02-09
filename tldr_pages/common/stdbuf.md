# stdbuf

> Run a command with modified buffering for its standard streams.
> Useful for forcing line-buffered output from programs.
> More information: <https://www.gnu.org/software/coreutils/manual/html_node/stdbuf-invocation.html>.

- Run a command with line-buffered stdout:

`stdbuf -oL <command>`

- Run a command with unbuffered stdout:

`stdbuf -o0 <command>`

- Run a command with line-buffered stdout and stderr:

`stdbuf -oL -eL <command>`

- Run a command with a specific buffer size for stdout:

`stdbuf -o<1M> <command>`

- Force tail -f to output immediately in a pipeline:

`tail -f <file> | stdbuf -oL grep <pattern>`

- Run a command with fully buffered stdout:

`stdbuf -oF <command>`

- Unbuffer all streams:

`stdbuf -i0 -o0 -e0 <command>`
