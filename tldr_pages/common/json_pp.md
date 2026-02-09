# json_pp

> Perl-based JSON pretty printer and validator.
> More information: <https://perldoc.perl.org/json_pp>.

- Pretty-print JSON from standard input:

`<command> | json_pp`

- Pretty-print a JSON file:

`json_pp < <path/to/file.json>`

- Convert JSON to a different format:

`json_pp -f json -t <json|dumper> < <path/to/file.json>`

- Validate JSON without pretty-printing:

`json_pp -json_opt relaxed < <path/to/file.json>`

- Pretty-print with sorted keys:

`json_pp -json_opt canonical < <path/to/file.json>`

- Pretty-print with custom indentation:

`json_pp -json_opt indent < <path/to/file.json>`

- Convert from relaxed JSON (allows trailing commas, comments):

`json_pp -json_opt relaxed < <path/to/file.json>`

- Output compact JSON without whitespace:

`json_pp -json_opt canonical,ascii < <path/to/file.json>`
