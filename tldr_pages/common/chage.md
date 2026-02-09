# chage

> Change user password expiry information.
> More information: <https://man7.org/linux/man-pages/man1/chage.1.html>.

- List password expiry information for the current user:

`chage <-l> <username>`

- Enable password expiry in 10 days:

`chage <-M> <10> <username>`

- Disable password expiry:

`chage <-M> <-1> <username>`

- Set account expiry date:

`chage <-E> <YYYY-MM-DD> <username>`

- Force password change on next login:

`chage <-d> <0> <username>`

- Set minimum days between password changes:

`chage <-m> <days> <username>`

- Set warning period before password expiry:

`chage <-W> <days> <username>`