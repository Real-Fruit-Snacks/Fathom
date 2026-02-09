# smem

> Report memory usage with shared memory divided proportionally.
> Provides more accurate memory reporting than traditional tools by calculating PSS (Proportional Set Size).
> More information: <https://www.selenic.com/smem/>.

- Show memory usage by process:

`smem`

- Display memory usage with percentage:

`smem <[-p|--percent]>`

- Show system-wide memory totals:

`smem <[-t|--totals]>`

- Display memory usage for a specific user:

`smem <[-u|--userfilter]> <username>`

- Show memory usage with human-readable sizes:

`smem <[-k|--abbreviate]>`

- Sort output by PSS (proportional set size):

`smem <[-s|--sort]> pss`

- Generate a bar chart of memory usage:

`smem --bar pid <[-c|--columns]> "pss uss"`

- Show memory usage for a specific process by name:

`smem <[-P|--processfilter]> <process_name>`
