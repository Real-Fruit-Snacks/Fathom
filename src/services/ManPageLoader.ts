import type { ManPage, ManSection } from '../types';
import { LRUCache } from './LRUCache';

export class ManPageLoader {
  private cache: LRUCache<ManPage>;
  private loadingPromises: Map<string, Promise<ManPage | null>> = new Map();

  constructor() {
    this.cache = new LRUCache<ManPage>(50, 10 * 60 * 1000);
  }

  async load(command: string, section: number): Promise<ManPage | null> {
    const key = `${command}.${section}`;

    // Check cache first
    const cached = this.cache.get(key);
    if (cached) return cached;

    // Check if already loading
    if (this.loadingPromises.has(key)) {
      return this.loadingPromises.get(key)!;
    }

    // Start loading
    const loadPromise = this.fetchAndParse(command, section);
    this.loadingPromises.set(key, loadPromise);

    try {
      const page = await loadPromise;
      if (page) {
        this.cache.set(key, page);
      }
      return page;
    } finally {
      this.loadingPromises.delete(key);
    }
  }

  private async fetchAndParse(command: string, section: number): Promise<ManPage | null> {
    try {
      const base = import.meta.env.BASE_URL;
      const response = await fetch(`${base}man_pages/${command}.${section}.txt`);
      if (!response.ok) return null;

      const raw = await response.text();
      return this.parseManPage(command, section, raw);
    } catch (error) {
      console.error(`Failed to load man page ${command}(${section}):`, error);
      return null;
    }
  }

  private parseManPage(command: string, section: number, raw: string): ManPage {
    const sections = this.parseSections(raw);
    const crossRefs = this.extractCrossRefs(raw);

    return {
      command,
      section,
      raw,
      sections,
      crossRefs
    };
  }

  private parseSections(raw: string): ManSection[] {
    const sections: ManSection[] = [];
    const lines = raw.split('\n');

    // Section headers are typically ALL CAPS at the start of a line
    const sectionPattern = /^([A-Z][A-Z\s]+)$/;
    let currentSection: ManSection | null = null;
    let contentLines: string[] = [];

    for (const line of lines) {
      const match = line.match(sectionPattern);

      if (match) {
        // Save previous section
        if (currentSection) {
          currentSection.content = contentLines.join('\n').trim();
          sections.push(currentSection);
        }

        // Start new section
        currentSection = {
          name: match[1].trim(),
          id: this.slugify(match[1].trim()),
          content: ''
        };
        contentLines = [];
      } else if (currentSection) {
        contentLines.push(line);
      } else {
        // Content before first section header
        contentLines.push(line);
      }
    }

    // Don't forget the last section
    if (currentSection) {
      currentSection.content = contentLines.join('\n').trim();
      sections.push(currentSection);
    }

    // If no sections found, create a single "CONTENT" section
    if (sections.length === 0) {
      sections.push({
        name: 'CONTENT',
        id: 'content',
        content: raw.trim()
      });
    }

    return sections;
  }

  private extractCrossRefs(raw: string): Array<{ command: string; section: number }> {
    const refs: Array<{ command: string; section: number }> = [];
    const seen = new Set<string>();

    // Match patterns like "command(1)" or "command (1)"
    const pattern = /\b([a-z][a-z0-9_.-]*)\s*\(([1-9])\)/gi;
    let match;

    while ((match = pattern.exec(raw)) !== null) {
      const command = match[1].toLowerCase();
      const section = parseInt(match[2], 10);
      const key = `${command}.${section}`;

      if (!seen.has(key)) {
        seen.add(key);
        refs.push({ command, section });
      }
    }

    return refs;
  }

  private slugify(text: string): string {
    return text
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-|-$/g, '');
  }

  clearCache(): void {
    this.cache.clear();
  }
}
