# pstree

> Display a tree of processes.
> More information: <https://man7.org/linux/man-pages/man1/pstree.1.html>.

- Display a tree of all processes:

`pstree`

- Display a tree with process IDs:

`pstree <[-p|--show-pids]>`

- Display a tree for a specific process by PID:

`pstree <pid>`

- Display a tree for all processes owned by a specific user:

`pstree <username>`

- Highlight the current process and its ancestors:

`pstree <[-h|--highlight-all]>`

- Display command line arguments for each process:

`pstree <[-a|--arguments]>`

- Show processes in a compact form by merging identical branches:

`pstree <[-c|--compact-not]>`

- Display the tree with long lines (don't truncate):

`pstree <[-l|--long]>`
