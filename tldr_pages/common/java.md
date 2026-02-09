# java

> Java application launcher.
> More information: <https://docs.oracle.com/en/java/javase/>.

- Run a Java application by class name (class must have main method):

`java <ClassName>`

- Run a Java application from a JAR file:

`java -jar <path/to/application.jar>`

- Run a Java application with additional classpath:

`java -cp <path/to/classes> <ClassName>`

- Run a Java application with JVM memory settings:

`java -Xms<512m> -Xmx<2g> <ClassName>`

- Run a Java application with system properties:

`java -D<property>=<value> <ClassName>`

- Run a Java source file directly (Java 11+):

`java <path/to/file.java>`

- Show the installed Java version:

`java --version`

- Run with garbage collection logging enabled:

`java -Xlog:gc* <ClassName>`
