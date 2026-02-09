# qemu

> Generic machine emulator and virtualizer.
> Supports emulating various CPU architectures.
> More information: <https://www.qemu.org/docs/master/>.

- Boot a disk image with default settings:

`qemu-system-x86_64 <path/to/image.qcow2>`

- Boot with a specific amount of RAM:

`qemu-system-x86_64 -m <2G> <path/to/image.qcow2>`

- Boot from a CD-ROM ISO:

`qemu-system-x86_64 -cdrom <path/to/installer.iso>`

- Boot with KVM hardware acceleration:

`qemu-system-x86_64 -enable-kvm <path/to/image.qcow2>`

- Boot with multiple CPU cores:

`qemu-system-x86_64 -smp <4> <path/to/image.qcow2>`

- Create a new disk image:

`qemu-img create -f qcow2 <path/to/image.qcow2> <20G>`

- Boot with network forwarding (SSH on port 2222):

`qemu-system-x86_64 -nic user,hostfwd=tcp::2222-:22 <path/to/image.qcow2>`

- Boot in headless mode with VNC:

`qemu-system-x86_64 -vnc :0 -daemonize <path/to/image.qcow2>`
