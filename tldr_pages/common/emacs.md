# emacs

> The extensible, customizable, self-documenting text editor.
> More information: <https://www.gnu.org/software/emacs/>.

- Open Emacs in GUI mode:

`emacs`

- Open a file in Emacs:

`emacs <path/to/file>`

- Open a file at a specific line number:

`emacs +<line_number> <path/to/file>`

- Open Emacs in terminal mode (no GUI):

`emacs -nw <path/to/file>`

- Start Emacs without loading the init file:

`emacs -q <path/to/file>`

- Evaluate an Emacs Lisp expression and exit:

`emacs --batch --eval "<expression>"`

- Open multiple files in Emacs:

`emacs <path/to/file1> <path/to/file2> [path/to/file3...]`

- Start Emacs as a daemon (background server):

`emacs --daemon`
