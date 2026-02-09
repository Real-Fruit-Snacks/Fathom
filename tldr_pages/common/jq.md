# jq

> Command-line JSON processor with a domain-specific language for filtering and transforming JSON.
> More information: <https://jqlang.github.io/jq/manual/>.

- Pretty-print a JSON file:

`jq . <file.json>`

- Pretty-print JSON from stdin:

`<command> | jq .`

- Extract a specific field from JSON:

`jq '.<field>' <file.json>`

- Extract a nested field:

`jq '.<parent>.<child>' <file.json>`

- Get array element by index:

`jq '.[<index>]' <file.json>`

- Get all elements from an array:

`jq '.[]' <file.json>`

- Filter array elements based on a condition:

`jq '[.[] | select(.<field> == "<value>")]' <file.json>`

- Map array elements extracting specific fields:

`jq '[.[] | {<key1>: .<field1>, <key2>: .<field2>}]' <file.json>`

- Output raw strings without JSON quotes:

`jq -r '.<field>' <file.json>`

- Compact output instead of pretty-print:

`jq -c . <file.json>`

- Combine multiple filters with pipe:

`jq '.<array> | .[] | .<field>' <file.json>`

- Use variables from shell in jq:

`jq --arg name "<value>" '.[] | select(.name == $name)' <file.json>`
