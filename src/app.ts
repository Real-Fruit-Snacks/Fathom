import { SearchManager } from './services/SearchManager';
import { ManPageLoader } from './services/ManPageLoader';
import { ThemeEngine } from './services/ThemeEngine';
import { TLDRLoader, TLDRPage } from './services/TLDRLoader';
import type { SearchResult, ManPage } from './types';

export class App {
  private searchManager: SearchManager;
  private manPageLoader: ManPageLoader;
  private themeEngine: ThemeEngine;
  private tldrLoader: TLDRLoader;

  // DOM elements
  private searchInput: HTMLInputElement;
  private resultsHeader: HTMLElement;
  private resultsList: HTMLElement;
  private content: HTMLElement;
  private sidebar: HTMLElement;
  private clearBtn: HTMLButtonElement;

  // State
  private currentCommand: string | null = null;
  private currentSection: number | null = null;
  private selectedIndex = -1;
  private results: SearchResult[] = [];
  private currentTab: 'man' | 'tldr' = 'man';
  private currentManPage: ManPage | null = null;
  private currentTLDR: TLDRPage | null = null;

  constructor() {
    // Initialize services
    this.searchManager = new SearchManager();
    this.manPageLoader = new ManPageLoader();
    this.themeEngine = new ThemeEngine();
    this.tldrLoader = new TLDRLoader();

    // Get DOM elements
    this.searchInput = document.getElementById('search-input') as HTMLInputElement;
    this.resultsHeader = document.getElementById('results-header') as HTMLElement;
    this.resultsList = document.getElementById('results-list') as HTMLElement;
    this.content = document.getElementById('content') as HTMLElement;
    this.sidebar = document.getElementById('sidebar') as HTMLElement;
    this.clearBtn = document.getElementById('clear-btn') as HTMLButtonElement;

    // Set up event listeners
    this.setupEventListeners();

    // Handle initial URL hash
    this.handleHashChange();
  }

  private setupEventListeners(): void {
    // Search input
    this.searchInput.addEventListener('input', () => {
      this.handleSearch(this.searchInput.value);
      this.updateClearButton();
    });

    // Keyboard navigation
    this.searchInput.addEventListener('keydown', (e) => {
      this.handleSearchKeydown(e);
    });

    // Global keyboard shortcuts
    document.addEventListener('keydown', (e) => {
      this.handleGlobalKeydown(e);
    });

    // Hash changes (for direct links)
    window.addEventListener('hashchange', () => {
      this.handleHashChange();
    });

    // Result clicks (event delegation)
    this.resultsList.addEventListener('click', (e) => {
      const item = (e.target as HTMLElement).closest('.result-item');
      if (item) {
        const command = item.getAttribute('data-command');
        const section = parseInt(item.getAttribute('data-section') || '1', 10);
        if (command) {
          this.loadManPage(command, section);
        }
      }
    });

    // Click logo to cycle themes
    document.querySelector('.logo')?.addEventListener('click', (e) => {
      e.preventDefault();
      this.cycleTheme();
    });

    // Clear button clears search and goes home
    this.clearBtn.addEventListener('click', (e) => {
      e.preventDefault();
      this.goHome();
    });
  }

  private updateClearButton(): void {
    const hasContent = this.searchInput.value.trim() !== '' || this.currentCommand !== null;
    this.clearBtn.classList.toggle('visible', hasContent);
  }

  private goHome(): void {
    history.pushState('', document.title, window.location.pathname);
    this.currentCommand = null;
    this.currentSection = null;

    // Clear search
    this.searchInput.value = '';
    this.resultsHeader.textContent = '';
    this.results = [];
    this.selectedIndex = -1;

    // Show categorized browse in sidebar
    this.resultsList.innerHTML = `
      <div class="sidebar-section">
        <div class="sidebar-section-title">File Operations</div>
        <a class="sidebar-link" href="#ls.1">ls <span>list directory</span></a>
        <a class="sidebar-link" href="#cp.1">cp <span>copy files</span></a>
        <a class="sidebar-link" href="#mv.1">mv <span>move / rename</span></a>
        <a class="sidebar-link" href="#rm.1">rm <span>remove files</span></a>
        <a class="sidebar-link" href="#chmod.1">chmod <span>change permissions</span></a>
        <a class="sidebar-link" href="#chown.1">chown <span>change owner</span></a>
      </div>
      <div class="sidebar-section">
        <div class="sidebar-section-title">Text Processing</div>
        <a class="sidebar-link" href="#grep.1">grep <span>search patterns</span></a>
        <a class="sidebar-link" href="#sed.1">sed <span>stream editor</span></a>
        <a class="sidebar-link" href="#awk.1">awk <span>text processing</span></a>
        <a class="sidebar-link" href="#sort.1">sort <span>sort lines</span></a>
        <a class="sidebar-link" href="#cut.1">cut <span>extract columns</span></a>
        <a class="sidebar-link" href="#wc.1">wc <span>word count</span></a>
      </div>
      <div class="sidebar-section">
        <div class="sidebar-section-title">Networking</div>
        <a class="sidebar-link" href="#ssh.1">ssh <span>remote login</span></a>
        <a class="sidebar-link" href="#curl.1">curl <span>transfer URLs</span></a>
        <a class="sidebar-link" href="#wget.1">wget <span>download files</span></a>
        <a class="sidebar-link" href="#ip.8">ip <span>network config</span></a>
        <a class="sidebar-link" href="#ss.8">ss <span>socket stats</span></a>
        <a class="sidebar-link" href="#nmap.1">nmap <span>port scanner</span></a>
      </div>
      <div class="sidebar-section">
        <div class="sidebar-section-title">System</div>
        <a class="sidebar-link" href="#ps.1">ps <span>process status</span></a>
        <a class="sidebar-link" href="#top.1">top <span>task manager</span></a>
        <a class="sidebar-link" href="#kill.1">kill <span>signal process</span></a>
        <a class="sidebar-link" href="#systemctl.1">systemctl <span>service manager</span></a>
        <a class="sidebar-link" href="#journalctl.1">journalctl <span>view logs</span></a>
        <a class="sidebar-link" href="#df.1">df <span>disk usage</span></a>
      </div>
    `;

    // Hide clear button
    this.updateClearButton();

    this.content.innerHTML = `
      <div class="welcome">
        <h1>Fathom</h1>
        <p class="tagline">Lightning-fast documentation browser</p>
        <div class="stats">
          <div class="stat">
            <div class="stat-value">10,301</div>
            <div class="stat-label">Man pages</div>
          </div>
          <div class="stat">
            <div class="stat-value">1,578</div>
            <div class="stat-label">TLDR summaries</div>
          </div>
        </div>
        <p class="hint">Press <kbd>/</kbd> to search &middot; click logo to change theme</p>
        <div class="quick-links">
          <a class="quick-link" href="#grep.1"><div><div class="quick-link-name">grep</div><div class="quick-link-desc">Search text with patterns</div></div></a>
          <a class="quick-link" href="#awk.1"><div><div class="quick-link-name">awk</div><div class="quick-link-desc">Pattern scanning &amp; processing</div></div></a>
          <a class="quick-link" href="#find.1"><div><div class="quick-link-name">find</div><div class="quick-link-desc">Search for files in directories</div></div></a>
          <a class="quick-link" href="#ssh.1"><div><div class="quick-link-name">ssh</div><div class="quick-link-desc">Remote login program</div></div></a>
          <a class="quick-link" href="#curl.1"><div><div class="quick-link-name">curl</div><div class="quick-link-desc">Transfer data from URLs</div></div></a>
          <a class="quick-link" href="#git.1"><div><div class="quick-link-name">git</div><div class="quick-link-desc">Distributed version control</div></div></a>
          <a class="quick-link" href="#docker.1"><div><div class="quick-link-name">docker</div><div class="quick-link-desc">Container runtime</div></div></a>
          <a class="quick-link" href="#tar.1"><div><div class="quick-link-name">tar</div><div class="quick-link-desc">Archive files</div></div></a>
        </div>
      </div>
    `;
  }

  private cycleTheme(): void {
    const themes = this.themeEngine.getThemes();
    const current = this.themeEngine.getCurrentTheme();
    const currentIndex = themes.findIndex(t => t.name === current.name);
    const nextIndex = (currentIndex + 1) % themes.length;
    this.themeEngine.setTheme(themes[nextIndex].name);
  }

  private async handleSearch(query: string): Promise<void> {
    if (!query.trim()) {
      this.resultsHeader.textContent = '';
      this.resultsList.innerHTML = '';
      this.results = [];
      this.selectedIndex = -1;
      return;
    }

    this.resultsHeader.textContent = 'Searching...';

    await this.searchManager.searchDebounced(query, (results) => {
      this.results = results;
      this.selectedIndex = -1;
      this.renderResults(results);
    });
  }

  private renderResults(results: SearchResult[]): void {
    this.resultsHeader.textContent = results.length
      ? `${results.length} result${results.length === 1 ? '' : 's'}`
      : 'No results found';

    this.resultsList.innerHTML = results
      .map((result, index) => `
        <div class="result-item${index === this.selectedIndex ? ' active' : ''}"
             data-command="${this.escapeHtml(result.command)}"
             data-section="${result.section}"
             data-index="${index}">
          <div>
            <span class="result-name">${this.escapeHtml(result.command)}</span>
            <span class="result-section">(${result.section})</span>
          </div>
          <div class="result-desc">${this.escapeHtml(result.description)}</div>
        </div>
      `)
      .join('');
  }

  private handleSearchKeydown(e: KeyboardEvent): void {
    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault();
        this.selectResult(this.selectedIndex + 1);
        break;

      case 'ArrowUp':
        e.preventDefault();
        this.selectResult(this.selectedIndex - 1);
        break;

      case 'Enter':
        e.preventDefault();
        if (this.selectedIndex >= 0 && this.results[this.selectedIndex]) {
          const result = this.results[this.selectedIndex];
          this.loadManPage(result.command, result.section);
        } else if (this.results.length > 0) {
          const result = this.results[0];
          this.loadManPage(result.command, result.section);
        }
        break;

      case 'Escape':
        this.goHome();
        this.searchInput.blur();
        break;
    }
  }

  private selectResult(index: number): void {
    if (this.results.length === 0) return;

    // Clamp index
    this.selectedIndex = Math.max(0, Math.min(index, this.results.length - 1));

    // Update active state
    this.resultsList.querySelectorAll('.result-item').forEach((item, i) => {
      item.classList.toggle('active', i === this.selectedIndex);
    });

    // Scroll into view
    const activeItem = this.resultsList.querySelector('.result-item.active');
    activeItem?.scrollIntoView({ block: 'nearest' });
  }

  private handleGlobalKeydown(e: KeyboardEvent): void {
    // Don't handle if typing in an input
    if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) {
      return;
    }

    switch (e.key) {
      case '/':
        e.preventDefault();
        this.searchInput.focus();
        this.searchInput.select();
        break;
    }
  }

  private handleHashChange(): void {
    const hash = window.location.hash.slice(1);
    if (!hash) return;

    // Parse command and section from hash
    const match = hash.match(/^([^.]+)(?:\.(\d+))?$/);
    if (match) {
      const command = decodeURIComponent(match[1]);
      const section = match[2] ? parseInt(match[2], 10) : 1;
      this.loadManPage(command, section);
    }
  }

  private async loadManPage(command: string, section: number): Promise<void> {
    // Update URL
    window.location.hash = `${command}.${section}`;

    // Show loading state
    this.content.innerHTML = `
      <div class="loading">
        <div class="skeleton skeleton-title"></div>
        <div class="skeleton skeleton-line"></div>
        <div class="skeleton skeleton-line"></div>
        <div class="skeleton skeleton-line"></div>
        <div class="skeleton skeleton-line"></div>
      </div>
    `;

    // Load man page and TLDR in parallel
    const [page, tldr] = await Promise.all([
      this.manPageLoader.load(command, section),
      this.tldrLoader.load(command)
    ]);

    if (!page) {
      this.content.innerHTML = `
        <div class="welcome">
          <h1>Man page not found</h1>
          <p>Could not find ${this.escapeHtml(command)}(${section})</p>
        </div>
      `;
      return;
    }

    this.currentCommand = command;
    this.currentSection = section;
    this.currentManPage = page;
    this.currentTLDR = tldr;
    this.currentTab = 'man'; // Default to man page

    // Show clear button since we have a page loaded
    this.updateClearButton();

    // Render page with tabs
    this.renderPageWithTabs();
  }

  private renderPageWithTabs(): void {
    if (!this.currentManPage) return;

    const page = this.currentManPage;
    const hasTLDR = this.currentTLDR !== null;

    const html = `
      <div class="page-container">
        <h1 class="man-title">${this.escapeHtml(page.command)}(${page.section})</h1>
        ${hasTLDR ? `
          <div class="tabs">
            <button class="tab ${this.currentTab === 'man' ? 'active' : ''}" data-tab="man">Man Page</button>
            <button class="tab ${this.currentTab === 'tldr' ? 'active' : ''}" data-tab="tldr">TLDR</button>
          </div>
        ` : ''}
        <div class="tab-content" id="tab-content">
          ${this.currentTab === 'tldr' && this.currentTLDR
            ? this.renderTLDRContent(this.currentTLDR)
            : this.renderManContent(page)}
        </div>
      </div>
    `;

    this.content.innerHTML = html;

    // Add tab click handlers
    this.content.querySelectorAll('.tab').forEach(tab => {
      tab.addEventListener('click', () => {
        const tabName = tab.getAttribute('data-tab') as 'man' | 'tldr';
        this.switchTab(tabName);
      });
    });

    // Add click handlers for section headers (collapse/expand)
    this.content.querySelectorAll('.man-section-header').forEach(header => {
      header.addEventListener('click', () => {
        header.parentElement?.classList.toggle('collapsed');
      });
    });
  }

  private switchTab(tab: 'man' | 'tldr'): void {
    this.currentTab = tab;

    // Update tab buttons
    this.content.querySelectorAll('.tab').forEach(t => {
      t.classList.toggle('active', t.getAttribute('data-tab') === tab);
    });

    // Update content
    const tabContent = this.content.querySelector('#tab-content');
    if (tabContent) {
      if (tab === 'tldr' && this.currentTLDR) {
        tabContent.innerHTML = this.renderTLDRContent(this.currentTLDR);
      } else if (this.currentManPage) {
        tabContent.innerHTML = this.renderManContent(this.currentManPage);
        // Re-add section header handlers
        this.content.querySelectorAll('.man-section-header').forEach(header => {
          header.addEventListener('click', () => {
            header.parentElement?.classList.toggle('collapsed');
          });
        });
      }
    }
  }

  private renderTLDRContent(tldr: TLDRPage): string {
    const html = `
      <div class="tldr-page">
        ${tldr.examples.map((ex, i) => `
          <div class="tldr-example">
            <div class="tldr-description">${this.escapeHtml(ex.description)}</div>
            <div class="tldr-code-wrapper">
              <code class="tldr-code">${this.highlightCommand(ex.code)}</code>
              <button class="copy-btn" data-code="${this.escapeHtml(ex.code)}" title="Copy to clipboard">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                  <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                </svg>
              </button>
            </div>
          </div>
        `).join('')}
      </div>
    `;

    // Add copy button handlers after render
    setTimeout(() => this.setupCopyButtons(), 0);

    return html;
  }

  private highlightCommand(code: string): string {
    // Escape HTML first
    let highlighted = this.escapeHtml(code);

    // Highlight placeholders: <placeholder> in accent color
    highlighted = highlighted.replace(/&lt;([^&>]+)&gt;/g, '<span class="hl-placeholder">&lt;$1&gt;</span>');

    // Highlight optional args: [optional] in secondary color
    highlighted = highlighted.replace(/\[([^\]]+)\]/g, '<span class="hl-optional">[$1]</span>');

    // Highlight flags: -f, --flag in accent-secondary color
    highlighted = highlighted.replace(/(\s)(--?[\w-]+)/g, '$1<span class="hl-flag">$2</span>');

    // Highlight the command itself (first word)
    highlighted = highlighted.replace(/^([\w-]+)/, '<span class="hl-command">$1</span>');

    // Highlight pipes and redirects
    highlighted = highlighted.replace(/(\s)(\||&gt;|&lt;|&amp;&amp;)(\s)/g, '$1<span class="hl-operator">$2</span>$3');

    return highlighted;
  }

  private setupCopyButtons(): void {
    this.content.querySelectorAll('.copy-btn').forEach(btn => {
      btn.addEventListener('click', async (e) => {
        const button = e.currentTarget as HTMLButtonElement;
        const code = button.getAttribute('data-code') || '';

        try {
          await navigator.clipboard.writeText(code);
          button.classList.add('copied');
          button.innerHTML = `
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
          `;

          setTimeout(() => {
            button.classList.remove('copied');
            button.innerHTML = `
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
              </svg>
            `;
          }, 2000);
        } catch (err) {
          console.error('Failed to copy:', err);
        }
      });
    });
  }

  private renderManContent(page: ManPage): string {
    const sectionsToRender = page.sections.filter(s =>
      s.name.toUpperCase() !== 'SEE ALSO'
    );

    return `
      <div class="man-page">
        ${sectionsToRender.map(section => `
          <div class="man-section" id="${section.id}">
            <div class="man-section-header" data-section="${section.id}">
              ${this.escapeHtml(section.name)}
            </div>
            <div class="man-section-content">${this.escapeHtml(section.content)}</div>
          </div>
        `).join('')}
        ${page.crossRefs.length > 0 ? `
          <div class="man-section" id="see-also">
            <div class="man-section-header">SEE ALSO</div>
            <div class="man-section-content cross-refs">
              ${page.crossRefs.map(ref =>
                `<a href="#${ref.command}.${ref.section}" class="cross-ref">${this.escapeHtml(ref.command)}(${ref.section})</a>`
              ).join(', ')}
            </div>
          </div>
        ` : ''}
      </div>
    `;
  }

  private escapeHtml(text: string): string {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
  }

}
