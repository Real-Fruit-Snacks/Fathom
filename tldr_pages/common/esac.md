# esac

> A shell keyword that closes a case statement.
> Required to terminate case pattern matching blocks.
> More information: <https://www.gnu.org/software/bash/manual/bash.html#index-case>.

- Basic case-esac:

`case <$variable> in <pattern>) <command>;; esac`

- Case with multiple patterns:

`case <$variable> in <pattern1>) <command1>;; <pattern2>) <command2>;; esac`

- Case with default pattern:

`case <$variable> in <pattern1>) <command1>;; *) <default_command>;; esac`

- Multi-line case-esac:

`case <$variable> in
    <pattern1>)
        <command1>
        ;;
    <pattern2>)
        <command2>
        ;;
esac`

- Case with OR patterns:

`case <$variable> in <pattern1>|<pattern2>) <command>;; esac`

- Case with glob patterns:

`case <$filename> in *.txt) echo "Text file";; *.sh) echo "Shell script";; esac`

- Case with fall-through (;&):

`case <$variable> in <pattern1>) <command1>;& <pattern2>) <command2>;; esac`

- Case with continue matching (;;&):

`case <$variable> in <pattern1>) <command1>;& <pattern2>) <command2>;; esac`
