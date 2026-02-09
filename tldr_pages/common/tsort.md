# tsort

> Perform a topological sort. A common use is to show the dependency order of nodes in a directed acyclic graph.
> More information: <https://www.gnu.org/software/coreutils/tsort>.

- Perform a topological sort consistent with a partial ordering per line of input:

`tsort <path/to/file>`

- Read from stdin and perform topological sort:

`<command> | tsort`