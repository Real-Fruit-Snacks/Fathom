import type { ManPage } from '../types';

const DB_NAME = 'fathom';
const DB_VERSION = 1;

interface CacheStore {
  manPages: ManPage;
  searchIndex: unknown;
  options: Record<string, unknown>;
}

type StoreName = keyof CacheStore;

export class CacheManager {
  private db: IDBDatabase | null = null;
  private initPromise: Promise<void> | null = null;

  async init(): Promise<void> {
    if (this.db) return;
    if (this.initPromise) return this.initPromise;

    this.initPromise = this.openDatabase();
    await this.initPromise;
  }

  private async openDatabase(): Promise<void> {
    return new Promise((resolve, reject) => {
      const request = indexedDB.open(DB_NAME, DB_VERSION);

      request.onerror = () => {
        console.error('Failed to open IndexedDB:', request.error);
        reject(request.error);
      };

      request.onsuccess = () => {
        this.db = request.result;
        resolve();
      };

      request.onupgradeneeded = (event) => {
        const db = (event.target as IDBOpenDBRequest).result;

        // Create object stores
        if (!db.objectStoreNames.contains('manPages')) {
          db.createObjectStore('manPages', { keyPath: 'key' });
        }
        if (!db.objectStoreNames.contains('searchIndex')) {
          db.createObjectStore('searchIndex', { keyPath: 'key' });
        }
        if (!db.objectStoreNames.contains('options')) {
          db.createObjectStore('options', { keyPath: 'key' });
        }
        if (!db.objectStoreNames.contains('metadata')) {
          db.createObjectStore('metadata', { keyPath: 'key' });
        }
      };
    });
  }

  async get<T>(storeName: StoreName, key: string): Promise<T | null> {
    await this.init();
    if (!this.db) return null;

    return new Promise((resolve, reject) => {
      const tx = this.db!.transaction(storeName, 'readonly');
      const store = tx.objectStore(storeName);
      const request = store.get(key);

      request.onsuccess = () => {
        const result = request.result;
        resolve(result?.value ?? null);
      };

      request.onerror = () => {
        console.error(`Failed to get ${key} from ${storeName}:`, request.error);
        reject(request.error);
      };
    });
  }

  async set<T>(storeName: StoreName, key: string, value: T): Promise<void> {
    await this.init();
    if (!this.db) return;

    return new Promise((resolve, reject) => {
      const tx = this.db!.transaction(storeName, 'readwrite');
      const store = tx.objectStore(storeName);
      const request = store.put({
        key,
        value,
        timestamp: Date.now()
      });

      request.onsuccess = () => resolve();
      request.onerror = () => {
        console.error(`Failed to set ${key} in ${storeName}:`, request.error);
        reject(request.error);
      };
    });
  }

  async delete(storeName: StoreName, key: string): Promise<void> {
    await this.init();
    if (!this.db) return;

    return new Promise((resolve, reject) => {
      const tx = this.db!.transaction(storeName, 'readwrite');
      const store = tx.objectStore(storeName);
      const request = store.delete(key);

      request.onsuccess = () => resolve();
      request.onerror = () => {
        console.error(`Failed to delete ${key} from ${storeName}:`, request.error);
        reject(request.error);
      };
    });
  }

  async clear(storeName: StoreName): Promise<void> {
    await this.init();
    if (!this.db) return;

    return new Promise((resolve, reject) => {
      const tx = this.db!.transaction(storeName, 'readwrite');
      const store = tx.objectStore(storeName);
      const request = store.clear();

      request.onsuccess = () => resolve();
      request.onerror = () => {
        console.error(`Failed to clear ${storeName}:`, request.error);
        reject(request.error);
      };
    });
  }

  async getManPage(command: string, section: number): Promise<ManPage | null> {
    return this.get('manPages', `${command}.${section}`);
  }

  async setManPage(page: ManPage): Promise<void> {
    await this.set('manPages', `${page.command}.${page.section}`, page);
  }

  // Cleanup old entries
  async cleanup(maxAge: number = 30 * 24 * 60 * 60 * 1000): Promise<void> {
    await this.init();
    if (!this.db) return;

    const now = Date.now();
    const storeNames: StoreName[] = ['manPages', 'options'];

    for (const storeName of storeNames) {
      const tx = this.db.transaction(storeName, 'readwrite');
      const store = tx.objectStore(storeName);
      const request = store.openCursor();

      request.onsuccess = () => {
        const cursor = request.result;
        if (cursor) {
          const entry = cursor.value;
          if (entry.timestamp && now - entry.timestamp > maxAge) {
            cursor.delete();
          }
          cursor.continue();
        }
      };
    }
  }

  close(): void {
    this.db?.close();
    this.db = null;
    this.initPromise = null;
  }
}

// Singleton instance
export const cacheManager = new CacheManager();
