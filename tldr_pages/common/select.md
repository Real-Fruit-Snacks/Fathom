# select

> Create a numbered menu for user selection.
> A shell keyword for building interactive menus.
> More information: <https://www.gnu.org/software/bash/manual/bash.html#index-select>.

- Create a simple selection menu:

`select <choice> in <option1> <option2> <option3>; do echo "You chose: $<choice>"; break; done`

- Create a menu with quit option:

`select <choice> in <option1> <option2> "Quit"; do [[ "$<choice>" == "Quit" ]] && break; echo "$<choice>"; done`

- Create a menu from an array:

`<options>=(<opt1> <opt2> <opt3>); select <choice> in "${<options>[@]}"; do echo "$<choice>"; break; done`

- Handle invalid selection:

`select <choice> in <option1> <option2>; do [[ -n "$<choice>" ]] && echo "$<choice>" && break || echo "Invalid"; done`

- Use REPLY variable for the number selected:

`select <choice> in <option1> <option2>; do echo "Option $REPLY: $<choice>"; break; done`

- Create a file selection menu:

`select <file> in *; do [[ -n "$<file>" ]] && echo "Selected: $<file>" && break; done`

- Custom prompt with PS3:

`PS3="Choose an option: "; select <choice> in <option1> <option2>; do echo "$<choice>"; break; done`

- Process selection with case:

`select <choice> in "Start" "Stop" "Quit"; do case $<choice> in Start) <start_cmd>;; Stop) <stop_cmd>;; Quit) break;; esac; done`
