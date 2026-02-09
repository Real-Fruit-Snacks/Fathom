# install

> Copy files while setting file attributes.
> More information: <https://www.gnu.org/software/coreutils/install>.

- Copy a file to a destination, setting its permissions:

`install -m <755> <path/to/source_file> <path/to/destination>`

- Copy files to a destination, preserving their timestamps:

`install -p <path/to/source_file1 path/to/source_file2 ...> <path/to/destination>`

- Copy a file to a destination, setting its ownership:

`install -o <user> -g <group> <path/to/source_file> <path/to/destination>`

- Create directories including any missing parent directories:

`install -d <path/to/directory1 path/to/directory2 ...>`

- Copy a file and strip symbol tables from the installed binary:

`install -s <path/to/source_file> <path/to/destination>`

- Copy a file, setting permissions and ownership in one command:

`install -m <644> -o <user> -g <group> <path/to/source_file> <path/to/destination>`

- Copy a file and create a backup of any existing destination file:

`install -b <path/to/source_file> <path/to/destination>`

- Copy a file, comparing it to an existing destination and only installing if different:

`install -C <path/to/source_file> <path/to/destination>`
