# rustc

> Rust compiler - compiles Rust source files to executables.
> More information: <https://doc.rust-lang.org/rustc/>.

- Compile a Rust source file:

`rustc <path/to/file.rs>`

- Compile with a specific output filename:

`rustc <path/to/file.rs> -o <path/to/output>`

- Compile with optimizations (release mode):

`rustc -O <path/to/file.rs>`

- Compile with maximum optimizations:

`rustc -C opt-level=3 <path/to/file.rs>`

- Compile with debugging information:

`rustc -g <path/to/file.rs>`

- Compile and show all warnings:

`rustc -W warnings <path/to/file.rs>`

- Show the installed Rust compiler version:

`rustc --version`

- Compile to a specific target architecture:

`rustc --target <x86_64-unknown-linux-gnu> <path/to/file.rs>`
