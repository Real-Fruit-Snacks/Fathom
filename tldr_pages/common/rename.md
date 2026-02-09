# rename

> Rename files using Perl regular expressions.
> Note: This is the Perl version (prename), not the util-linux version.
> More information: <https://metacpan.org/pod/File::Rename>.

- Rename files using a Perl expression:

`rename '<s/old/new/>' <*.txt>`

- Preview changes without renaming (dry run):

`rename -n '<s/old/new/>' <*>`

- Rename files with verbose output:

`rename -v '<s/old/new/>' <*>`

- Replace spaces with underscores in filenames:

`rename 's/ /_/g' <*>`

- Convert filenames to lowercase:

`rename 'y/A-Z/a-z/' <*>`

- Remove a specific extension from files:

`rename 's/\.bak$//' <*.bak>`

- Add a prefix to all files:

`rename 's/^/<prefix_>/' <*>`

- Rename files matching a pattern, forcing overwrite:

`rename -f '<s/old/new/>' <*>`
