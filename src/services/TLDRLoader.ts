import { LRUCache } from './LRUCache';

export interface TLDRPage {
  command: string;
  content: string;
  examples: Array<{ description: string; code: string }>;
}

export class TLDRLoader {
  private cache: LRUCache<TLDRPage>;
  private index: { common: string[]; linux: string[] } | null = null;
  private indexPromise: Promise<void> | null = null;

  constructor() {
    this.cache = new LRUCache<TLDRPage>(50, 10 * 60 * 1000);
  }

  async loadIndex(): Promise<void> {
    if (this.index) return;
    if (this.indexPromise) return this.indexPromise;

    this.indexPromise = (async () => {
      try {
        const base = import.meta.env.BASE_URL;
        // Try JSON format first (in tldr_pages directory)
        let response = await fetch(`${base}tldr_pages/tldr_index.json`);
        if (response.ok) {
          this.index = await response.json();
          return;
        }

        // Fall back to JS format in data directory
        response = await fetch(`${base}data/tldr_index.js`);
        if (response.ok) {
          const jsContent = await response.text();
          const match = jsContent.match(/(?:window\.)?tldrIndex\s*=\s*(\{[\s\S]*\});?\s*$/m);
          if (match) {
            this.index = JSON.parse(match[1]);
          }
        }
      } catch (e) {
        console.error('Failed to load TLDR index:', e);
        this.index = { common: [], linux: [] };
      }
    })();

    return this.indexPromise;
  }

  async hasPage(command: string): Promise<boolean> {
    await this.loadIndex();
    if (!this.index) return false;

    const normalizedCmd = command.toLowerCase();
    return this.index.common.includes(normalizedCmd) ||
           this.index.linux.includes(normalizedCmd);
  }

  async load(command: string): Promise<TLDRPage | null> {
    const normalizedCmd = command.toLowerCase();

    // Check cache
    const cached = this.cache.get(normalizedCmd);
    if (cached) return cached;

    await this.loadIndex();
    if (!this.index) return null;

    // Determine which directory to look in
    let platform = '';
    if (this.index.common.includes(normalizedCmd)) {
      platform = 'common';
    } else if (this.index.linux.includes(normalizedCmd)) {
      platform = 'linux';
    } else {
      return null;
    }

    try {
      const base = import.meta.env.BASE_URL;
      const url = `${base}tldr_pages/${platform}/${normalizedCmd}.md`;
      const response = await fetch(url);
      if (!response.ok) return null;

      const content = await response.text();
      const page = this.parseMarkdown(normalizedCmd, content);
      this.cache.set(normalizedCmd, page);
      return page;
    } catch (e) {
      console.error(`Failed to load TLDR for ${command}:`, e);
      return null;
    }
  }

  private parseMarkdown(command: string, content: string): TLDRPage {
    const examples: Array<{ description: string; code: string }> = [];
    const lines = content.split('\n');

    let currentDescription = '';

    for (const line of lines) {
      if (line.startsWith('- ')) {
        // Description line
        currentDescription = line.slice(2).trim();
      } else if (line.startsWith('`') && line.endsWith('`')) {
        // Code line
        if (currentDescription) {
          examples.push({
            description: currentDescription,
            code: line.slice(1, -1)
          });
          currentDescription = '';
        }
      }
    }

    return { command, content, examples };
  }
}
