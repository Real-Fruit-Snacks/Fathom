# yq

> Command-line YAML, JSON, XML, CSV, and properties processor using jq-like syntax.
> More information: <https://mikefarah.gitbook.io/yq/>.

- Pretty-print a YAML file:

`yq . <file.yaml>`

- Extract a specific field from YAML:

`yq '.<field>' <file.yaml>`

- Extract a nested field:

`yq '.<parent>.<child>' <file.yaml>`

- Get array element by index:

`yq '.[<index>]' <file.yaml>`

- Update a field value in-place:

`yq -i '.<field> = "<new_value>"' <file.yaml>`

- Add a new field to the YAML file:

`yq -i '.<new_field> = "<value>"' <file.yaml>`

- Delete a field from YAML:

`yq -i 'del(.<field>)' <file.yaml>`

- Convert YAML to JSON:

`yq -o=json . <file.yaml>`

- Convert JSON to YAML:

`yq -P . <file.json>`

- Merge multiple YAML files:

`yq eval-all '. as $item ireduce ({}; . * $item)' <file1.yaml> <file2.yaml>`

- Read from stdin:

`<command> | yq '.<field>'`

- Output with custom indentation:

`yq --indent <number> . <file.yaml>`

- Evaluate expression for all documents in multi-document YAML:

`yq eval '.<field>' <file.yaml>`
