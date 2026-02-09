import type { SearchEntry, SearchResult, SearchQuery, SearchMessage } from '../types';
import { LRUCache } from './LRUCache';

export class SearchManager {
  private worker: Worker | null = null;
  private searchCache: LRUCache<SearchResult[]>;
  private requestId = 0;
  private pendingRequests: Map<number, {
    resolve: (results: SearchResult[]) => void;
    reject: (error: Error) => void;
  }> = new Map();
  private isReady = false;
  private readyPromise: Promise<void>;
  private resolveReady!: () => void;
  private debounceTimer: ReturnType<typeof setTimeout> | null = null;
  private currentQuery = '';

  constructor() {
    this.searchCache = new LRUCache<SearchResult[]>(100, 5 * 60 * 1000);
    this.readyPromise = new Promise(resolve => {
      this.resolveReady = resolve;
    });
    this.initWorker();
  }

  private async initWorker(): Promise<void> {
    try {
      this.worker = new Worker(
        new URL('../workers/search.worker.ts', import.meta.url),
        { type: 'module' }
      );

      this.worker.onmessage = (e: MessageEvent<SearchMessage>) => {
        this.handleMessage(e.data);
      };

      this.worker.onerror = (error) => {
        console.error('Search worker error:', error);
      };

      // Try to load JSON files first, fall back to legacy JS file
      let searchIndex: SearchEntry[] = [];

      try {
        // Try new JSON format first
        const base = import.meta.env.BASE_URL;
        const [coreIndex, fullIndex] = await Promise.all([
          fetch(`${base}data/search-index-core.json`).then(r => r.ok ? r.json() : []).catch(() => []),
          fetch(`${base}data/search-index-full.json`).then(r => r.ok ? r.json() : []).catch(() => [])
        ]);

        if (coreIndex.length > 0 || fullIndex.length > 0) {
          const coreCommands = new Set(coreIndex.map((e: SearchEntry) => `${e.command}.${e.section}`));
          searchIndex = [
            ...coreIndex,
            ...fullIndex.filter((e: SearchEntry) => !coreCommands.has(`${e.command}.${e.section}`))
          ];
        }
      } catch {
        // JSON files not available
      }

      // Fall back to legacy JS file if JSON not available
      if (searchIndex.length === 0) {
        try {
          const base = import.meta.env.BASE_URL;
          const response = await fetch(`${base}data/index.js`);
          if (response.ok) {
            const jsContent = await response.text();
            // Find the start of the array
            const arrayStart = jsContent.indexOf('[');
            const arrayEnd = jsContent.lastIndexOf(']');

            if (arrayStart !== -1 && arrayEnd !== -1) {
              const jsonStr = jsContent.substring(arrayStart, arrayEnd + 1);
              searchIndex = JSON.parse(jsonStr);
              console.log(`Loaded ${searchIndex.length} entries from legacy index.js`);
            }
          }
        } catch (e) {
          console.error('Failed to load search index:', e);
        }
      }

      const mergedIndex = searchIndex;

      this.worker.postMessage({
        type: 'INIT',
        payload: { searchIndex: mergedIndex }
      });
    } catch (error) {
      console.error('Failed to initialize search worker:', error);
      // Fallback: mark as ready anyway for graceful degradation
      this.isReady = true;
      this.resolveReady();
    }
  }

  private handleMessage(message: SearchMessage): void {
    switch (message.type) {
      case 'READY':
        this.isReady = true;
        this.resolveReady();
        break;

      case 'RESULTS':
        if (message.requestId !== undefined) {
          const pending = this.pendingRequests.get(message.requestId);
          if (pending) {
            pending.resolve(message.payload as SearchResult[]);
            this.pendingRequests.delete(message.requestId);
          }
        }
        break;

      case 'ERROR':
        if (message.requestId !== undefined) {
          const pending = this.pendingRequests.get(message.requestId);
          if (pending) {
            pending.reject(new Error(message.payload as string));
            this.pendingRequests.delete(message.requestId);
          }
        }
        break;
    }
  }

  async search(query: SearchQuery): Promise<SearchResult[]> {
    await this.readyPromise;

    const cacheKey = `${query.query}:${query.section ?? ''}:${query.maxResults ?? 50}`;

    // Check cache first
    const cached = this.searchCache.get(cacheKey);
    if (cached) return cached;

    if (!this.worker) {
      return [];
    }

    const requestId = ++this.requestId;

    return new Promise((resolve, reject) => {
      this.pendingRequests.set(requestId, { resolve, reject });

      this.worker!.postMessage({
        type: 'SEARCH',
        payload: query,
        requestId
      });

      // Timeout after 5 seconds
      setTimeout(() => {
        if (this.pendingRequests.has(requestId)) {
          this.pendingRequests.delete(requestId);
          reject(new Error('Search timeout'));
        }
      }, 5000);
    }).then((results) => {
      this.searchCache.set(cacheKey, results as SearchResult[]);
      return results as SearchResult[];
    });
  }

  async searchDebounced(
    query: string,
    callback: (results: SearchResult[]) => void,
    options: { section?: number; maxResults?: number } = {}
  ): Promise<void> {
    // Cancel pending search
    if (this.debounceTimer) {
      clearTimeout(this.debounceTimer);
    }

    this.currentQuery = query;

    if (!query.trim()) {
      callback([]);
      return;
    }

    // Adaptive debounce based on query length
    const delay = query.length <= 2 ? 100 : query.length <= 5 ? 150 : 200;

    this.debounceTimer = setTimeout(async () => {
      // Check if query is still current
      if (query !== this.currentQuery) return;

      try {
        const results = await this.search({
          query,
          section: options.section,
          maxResults: options.maxResults ?? 50
        });

        // Check again if query is still current
        if (query === this.currentQuery) {
          callback(results);
        }
      } catch (error) {
        console.error('Search error:', error);
        callback([]);
      }
    }, delay);
  }

  cancelSearch(): void {
    if (this.debounceTimer) {
      clearTimeout(this.debounceTimer);
      this.debounceTimer = null;
    }
    this.currentQuery = '';
  }

  destroy(): void {
    this.cancelSearch();
    this.worker?.terminate();
    this.searchCache.clear();
    this.pendingRequests.clear();
  }
}
