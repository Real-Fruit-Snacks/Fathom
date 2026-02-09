# unalias

> Remove alias definitions.
> See also: `alias`.
> More information: <https://www.gnu.org/software/bash/manual/bash.html#index-unalias>.

- Remove a specific alias:

`unalias <alias_name>`

- Remove multiple aliases:

`unalias <alias1> <alias2> <alias3>`

- Remove all aliases:

`unalias -a`

- Remove an alias and verify it's gone:

`unalias <alias_name>; alias <alias_name>`

- Remove common safety aliases:

`unalias rm cp mv`

- Check if alias exists before removing:

`alias <alias_name> && unalias <alias_name>`

- Remove alias in a script to ensure command runs directly:

`unalias ls 2>/dev/null; ls`

- Temporarily remove an alias:

`unalias <alias_name>; <command>; alias <alias_name>="<definition>"`
