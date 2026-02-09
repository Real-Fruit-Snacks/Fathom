# javac

> Java compiler - compiles Java source files to bytecode.
> More information: <https://docs.oracle.com/en/java/javase/>.

- Compile a Java source file:

`javac <path/to/file.java>`

- Compile multiple Java source files:

`javac <path/to/file1.java> <path/to/file2.java> [path/to/file3.java...]`

- Compile all Java files in a directory:

`javac <path/to/directory>/*.java`

- Compile with a specific output directory for class files:

`javac -d <path/to/output_directory> <path/to/file.java>`

- Compile with additional classpath:

`javac -cp <path/to/classes> <path/to/file.java>`

- Compile with a specific Java version target:

`javac --release <version> <path/to/file.java>`

- Compile with all warnings enabled:

`javac -Xlint:all <path/to/file.java>`

- Compile and generate debugging information:

`javac -g <path/to/file.java>`
