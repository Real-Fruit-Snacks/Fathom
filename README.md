<div align="center">

<picture>
  <source media="(prefers-color-scheme: dark)" srcset="assets/banner.svg">
  <source media="(prefers-color-scheme: light)" srcset="assets/banner.svg">
  <img alt="Fathom" src="assets/banner.svg" width="800">
</picture>

<br>

**Lightning-fast offline Linux man pages browser**

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0%2B-blue.svg)](https://typescriptlang.org)
[![Man Pages](https://img.shields.io/badge/Man_Pages-10%2C301-brightgreen.svg)](#features)
[![TLDR](https://img.shields.io/badge/TLDR_Summaries-1%2C578-brightgreen.svg)](#features)

<br>

Fathom indexes 10,301 Linux man pages and 1,578 TLDR summaries into a single offline-capable PWA. Search uses a Web Worker with a Trie and Inverted Index for sub-50ms results. Point your browser at it, type a command, and get instant documentation with syntax-highlighted examples — no internet required after first load.

</div>

<br>

## Table of Contents

- [Highlights](#highlights)
- [Quick Start](#quick-start)
- [Usage](#usage)
- [Architecture](#architecture)
- [Themes](#themes)
- [Features](#features)
- [Configuration](#configuration)
- [Contributing](#contributing)

---

## Highlights

<table>
<tr>
<td width="50%">

### Web Worker Search
All search runs off the main thread in a dedicated Web Worker. A Trie handles O(k) prefix matching, an Inverted Index provides O(1) keyword lookups, and a Soundex-based FuzzyMatcher catches typos. The UI never blocks.

</td>
<td width="50%">

### Instant Documentation
10,301 man pages parsed into navigable sections with collapsible headers and cross-reference links. 1,578 TLDR summaries provide quick examples with syntax highlighting for commands, flags, and placeholders.

</td>
</tr>
<tr>
<td width="50%">

### Offline First
Service Worker caches everything after first visit. Install as a native app via PWA. Zero external requests, zero analytics, zero tracking. Works in air-gapped environments.

</td>
<td width="50%">

### Smart Caching
Three-layer caching strategy — LRU caches with TTL for man pages and search results in memory, IndexedDB for persistent storage, and Service Worker for network-level caching. StaleWhileRevalidate keeps content fresh.

</td>
</tr>
<tr>
<td width="50%">

### Catppuccin Themes
Four Catppuccin flavors — Mocha, Latte, Frappe, and Macchiato. Click the logo to cycle through them. Theme selection persists in localStorage. All colors use CSS custom properties for instant switching.

</td>
<td width="50%">

### Copy to Clipboard
Every TLDR code example has a one-click copy button. Commands are syntax-highlighted with distinct colors for the command name, flags, placeholders, and operators.

</td>
</tr>
<tr>
<td width="50%">

### Sub-Second Load
Critical CSS inlined in the HTML shell. Search index split into core (top commands) and full (complete index) for progressive loading. Vite code splitting ensures only what's needed loads first.

</td>
<td width="50%">

### Cross-References
Man pages automatically detect references like `grep(1)` or `awk(1)` and render them as clickable links. Navigate between related commands without touching the search bar.

</td>
</tr>
</table>

---

## Quick Start

### Prerequisites

| Requirement | Version |
|-------------|---------|
| Node.js | >= 18 |
| npm | Latest |

### Install & Launch

```bash
git clone https://github.com/Real-Fruit-Snacks/Fathom.git
cd Fathom
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) — works offline after first load.

### Build for Production

```bash
npm run build
# Deploy the dist/ folder to any static host
```

### Deploy to GitHub/GitLab Pages

```bash
# Push to GitHub — automatic deployment via GitHub Actions
# Push to GitLab — automatic deployment via .gitlab-ci.yml
```

### From Online

Visit the hosted version — it caches itself as a PWA after first visit.

---

## Usage

### Keyboard Shortcuts

| Key | Action |
|-----|--------|
| `/` | Focus search bar |
| `Up` / `Down` | Navigate search results |
| `Enter` | Open selected command |
| `Escape` | Clear search and return home |

### URL Routing

Hash-based routing — bookmark or share any command directly:

```
#grep.1        → grep(1) man page
#awk.1         → awk(1) man page
#ssh.1         → ssh(1) man page
```

### Tabs

Each command page has two tabs:
- **Man Page** — full man page with collapsible sections
- **TLDR** — quick examples with copy buttons (available for 1,578 commands)

---

## Architecture

Fathom is a vanilla TypeScript application built with Vite. No framework — plain DOM manipulation with manual rendering. All search happens in a Web Worker to keep the UI responsive.

```
src/
├── index.html              # HTML shell with critical CSS inlined
├── main.ts                 # Entry point — instantiates App
├── app.ts                  # Main application class, DOM interactions, routing
├── services/
│   ├── SearchManager.ts    # Web Worker coordinator, debounce, LRU result cache
│   ├── ManPageLoader.ts    # Fetches/parses man pages, extracts cross-refs
│   ├── TLDRLoader.ts       # Loads TLDR index + markdown, parses examples
│   ├── ThemeEngine.ts      # CSS variable theme switching (4 Catppuccin flavors)
│   ├── LRUCache.ts         # Generic doubly-linked-list LRU cache with TTL
│   ├── CacheManager.ts     # IndexedDB wrapper for persistent storage
│   └── OptionsLoader.ts    # Lazy-loads command option data from JSON chunks
├── workers/
│   └── search.worker.ts    # Off-thread search — Trie, Inverted Index, FuzzyMatcher
└── types/
    └── index.ts            # TypeScript interfaces
```

### Static Data (copied to dist/ during CI)

```
man_pages/                  # 10,301 plain text man page files
tldr_pages/                 # 1,578 TLDR markdown files
├── common/                 # Cross-platform commands
└── linux/                  # Linux-specific commands
data/
├── search-index-core.json  # Top commands for fast initial load
├── search-index-full.json  # Complete search index
└── options/                # Command option data in letter-chunked JSON
```

### Search Flow

```
User types query
      |
      v
+-------------------+
|  SearchManager    |----> debounce (150ms), check LRU cache
+--------+----------+
         |
         v  postMessage
+-------------------+
|   Web Worker      |
|                   |
|  1. Trie          |----> prefix matching (score: 90)
|  2. Inverted Idx  |----> keyword/description search (score: 70)
|  3. Substring     |----> fallback substring match (score: 60)
|  4. FuzzyMatcher  |----> Soundex-based fuzzy match (score: 30)
|  5. Merge + Sort  |----> deduplicate, sort by score
+--------+----------+
         |
         v  postMessage
+-------------------+
|  Render Results   |----> sidebar list, click to load man page
+-------------------+
```

---

## Themes

Four Catppuccin flavors. Click the logo to cycle through them.

| Theme | Type | Background | Accent |
|-------|------|:----------:|:------:|
| **Mocha** | Dark | `#1e1e2e` | Mauve |
| **Latte** | Light | `#eff1f5` | Mauve |
| **Frappe** | Dark | `#303446` | Mauve |
| **Macchiato** | Dark | `#24273a` | Mauve |

Theme selection persists in `localStorage`. CSS custom properties enable instant switching with no page reload.

---

## Features

| Feature | Description |
|---------|-------------|
| **Web Worker search** | Off-thread Trie + Inverted Index + Soundex fuzzy matching |
| **10,301 man pages** | Every standard Linux command, parsed into navigable sections |
| **1,578 TLDR summaries** | Quick examples with syntax highlighting and copy buttons |
| **Catppuccin themes** | 4 flavors (Mocha, Latte, Frappe, Macchiato), click logo to cycle |
| **Offline PWA** | Service Worker caches everything, installable as native app |
| **Cross-references** | Man page references like `grep(1)` rendered as clickable links |
| **LRU caching** | In-memory caches with TTL for man pages (50 entries) and search results |
| **IndexedDB storage** | Persistent cache layer for search index and page data |
| **Progressive loading** | Core search index loads first, full index follows |
| **Syntax highlighting** | Commands, flags, placeholders, and operators in distinct colors |
| **Hash routing** | Bookmarkable URLs — `#command.section` format |
| **Responsive design** | Collapsible sidebar on mobile, works on all screen sizes |
| **Zero tracking** | No analytics, no external requests, no cookies |
| **Compression** | Gzip + Brotli via Vite plugins for minimal transfer size |
| **Custom scrollbars** | Themed scrollbars matching the active color scheme |

---

## Configuration

Fathom uses sensible defaults with no config file required. Build-time options:

| Option | Default | Description |
|--------|---------|-------------|
| `BASE_URL` | `/Pages/` | Base path for all fetch calls and routing |

```bash
# Deploy under a custom base path
BASE_URL=/docs/ npm run build

# Default — deploys to /Pages/
npm run build
```

### PWA Caching Strategy

| Content | Strategy | Cache TTL |
|---------|----------|-----------|
| Man pages | StaleWhileRevalidate | 30 days |
| TLDR pages | StaleWhileRevalidate | 7 days |
| Options data | CacheFirst | 7 days |

---

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/my-feature`)
3. Make your changes
4. Test with `npm run dev` and `npm run build`
5. Commit with a descriptive message
6. Open a Pull Request

---

<div align="center">

**Built for the terminal-minded.**

[GitHub](https://github.com/Real-Fruit-Snacks/Fathom) | [License (MIT)](LICENSE) | [Report Issue](https://github.com/Real-Fruit-Snacks/Fathom/issues)

*Fathom — dive into the docs*

</div>
