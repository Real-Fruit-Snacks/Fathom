# false

> Returns an unsuccessful exit status code of 1.
> More information: <https://www.gnu.org/software/coreutils/false>.

- Return an unsuccessful exit code:

`false`

- Use in an if statement:

`<if ! false; then echo "hello world"; fi>`

- Use in logical operations (short-circuit evaluation):

`<false && echo "not printed">`

- Use as a placeholder for a command that should fail:

`false <|| echo "This runs because false failed">`