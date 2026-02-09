# join

> Join lines from two sorted files on a common field.
> More information: <https://www.gnu.org/software/coreutils/join>.

- Join two files on the first (default) field:

`join <file1> <file2>`

- Join two files using a comma (instead of a space) as the field separator:

`join <-t','> <file1> <file2>`

- Join field 3 of file1 with field 1 of file2:

`join <-1 3 -2 1> <file1> <file2>`

- Produce a line for each unpairable line in file1:

`join <-a 1> <file1> <file2>`

- Produce a line for each unpairable line in both file1 and file2:

`join <-a 1 -a 2> <file1> <file2>`

- Display only the joined fields, and fields from file1:

`join <-o 0,1.2,1.3> <file1> <file2>`

- Join files treating the first line of each as headers:

`join <--header> <file1> <file2>`

- Join files ignoring case differences in the join fields:

`join <-i> <file1> <file2>`