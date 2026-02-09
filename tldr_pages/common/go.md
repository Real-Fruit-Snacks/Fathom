# go

> Go programming language tool for managing source code.
> Build, test, and manage Go modules and packages.
> More information: <https://go.dev/doc/cmd/go>.

- Initialize a new Go module in the current directory:

`go mod init <module_name>`

- Download and install dependencies:

`go mod download`

- Build and install a Go package or command:

`go install <package_path>`

- Build the current package or project:

`go build`

- Run Go source files directly:

`go run <file.go>`

- Run all tests in the current package:

`go test`

- Format Go source files in the current directory and subdirectories:

`go fmt ./...`

- Add missing and remove unused module dependencies:

`go mod tidy`
