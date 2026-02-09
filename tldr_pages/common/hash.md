# hash

> Manage the hash table of remembered command locations.
> A shell builtin that caches command paths for faster lookup.
> More information: <https://www.gnu.org/software/bash/manual/bash.html#index-hash>.

- Display all cached command paths:

`hash`

- Forget the cached location of a command:

`hash -d <command>`

- Clear the entire hash table:

`hash -r`

- Add a command to the hash table:

`hash <command>`

- Manually set a command's path in the hash table:

`hash -p <path/to/command> <command_name>`

- Display the path of a specific hashed command:

`hash -t <command>`

- List hashed commands with hit counts:

`hash -l`

- Refresh hash after installing new software:

`hash -r; <command>`
