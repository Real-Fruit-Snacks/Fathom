# git-clone

> Clone a repository into a new directory.
> More information: <https://git-scm.com/docs/git-clone>.

- Clone a repository:

`git clone <https://github.com/user/repository.git>`

- Clone a repository into a specific directory:

`git clone <https://github.com/user/repository.git> <path/to/directory>`

- Clone a repository with submodules:

`git clone --recurse-submodules <https://github.com/user/repository.git>`

- Shallow clone with limited history depth:

`git clone --depth <1> <https://github.com/user/repository.git>`

- Clone a specific branch only:

`git clone --branch <branch_name> <https://github.com/user/repository.git>`

- Clone using SSH:

`git clone <git@github.com:user/repository.git>`

- Clone only a single branch (no other branch references):

`git clone --single-branch --branch <branch_name> <repository_url>`

- Clone a repository without checking out the working tree:

`git clone --no-checkout <repository_url>`
