import type { CommandOptions } from '../types';

export class OptionsLoader {
  private loadedChunks: Set<string> = new Set();
  private options: Map<string, CommandOptions> = new Map();
  private loadingPromises: Map<string, Promise<void>> = new Map();
  private initialized = false;

  async init(): Promise<void> {
    if (this.initialized) return;

    // Load popular commands immediately
    await this.loadChunk('popular');
    this.initialized = true;
  }

  async getOptions(command: string): Promise<CommandOptions | null> {
    // Ensure initialized
    if (!this.initialized) {
      await this.init();
    }

    // Check if already loaded
    if (this.options.has(command)) {
      return this.options.get(command)!;
    }

    // Determine which chunk to load
    const firstLetter = command[0].toLowerCase();
    if (/[a-z]/.test(firstLetter)) {
      await this.loadChunk(firstLetter);
    }

    return this.options.get(command) || null;
  }

  async preloadChunk(letter: string): Promise<void> {
    // Preload in background without waiting
    this.loadChunk(letter).catch(() => {});
  }

  private async loadChunk(chunk: string): Promise<void> {
    if (this.loadedChunks.has(chunk)) return;

    // Prevent duplicate loads
    if (this.loadingPromises.has(chunk)) {
      return this.loadingPromises.get(chunk);
    }

    const loadPromise = this.fetchChunk(chunk);
    this.loadingPromises.set(chunk, loadPromise);

    try {
      await loadPromise;
    } finally {
      this.loadingPromises.delete(chunk);
    }
  }

  private async fetchChunk(chunk: string): Promise<void> {
    try {
      const base = import.meta.env.BASE_URL;
      const response = await fetch(`${base}data/options/${chunk}.json`);
      if (!response.ok) {
        console.warn(`Options chunk ${chunk} not found`);
        this.loadedChunks.add(chunk); // Mark as loaded to avoid retry
        return;
      }

      const data: Record<string, CommandOptions> = await response.json();

      for (const [command, options] of Object.entries(data)) {
        this.options.set(command, options);
      }

      this.loadedChunks.add(chunk);
    } catch (error) {
      console.error(`Failed to load options chunk ${chunk}:`, error);
    }
  }

  hasOptions(command: string): boolean {
    return this.options.has(command);
  }

  clear(): void {
    this.options.clear();
    this.loadedChunks.clear();
    this.initialized = false;
  }
}
