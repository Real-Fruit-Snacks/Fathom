# local

> Declare local variables within a function.
> A shell builtin that limits variable scope to the function.
> More information: <https://www.gnu.org/software/bash/manual/bash.html#index-local>.

- Declare a local variable in a function:

`<function_name>() { local <variable>=<value>; echo "$<variable>"; }`

- Declare multiple local variables:

`<function_name>() { local <var1>=<value1> <var2>=<value2>; }`

- Declare a local integer variable:

`<function_name>() { local -i <count>=0; }`

- Declare a local array:

`<function_name>() { local -a <array>=(<item1> <item2>); }`

- Declare a local readonly variable:

`<function_name>() { local -r <constant>=<value>; }`

- Local variable shadows global variable:

`<var>="global"; <func>() { local <var>="local"; echo "$<var>"; }; <func>`

- Initialize local from argument:

`<function_name>() { local <input>="$1"; echo "$<input>"; }`

- Declare local with nameref (reference to another variable):

`<function_name>() { local -n <ref>="$1"; <ref>=<new_value>; }`
