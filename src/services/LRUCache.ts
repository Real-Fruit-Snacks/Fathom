interface CacheNode<T> {
  key: string;
  value: T;
  timestamp: number;
  prev: CacheNode<T> | null;
  next: CacheNode<T> | null;
}

export class LRUCache<T> {
  private cache: Map<string, CacheNode<T>> = new Map();
  private head: CacheNode<T> | null = null;
  private tail: CacheNode<T> | null = null;
  private maxSize: number;
  private ttl: number;

  constructor(maxSize: number = 100, ttlMs: number = 5 * 60 * 1000) {
    this.maxSize = maxSize;
    this.ttl = ttlMs;
  }

  get(key: string): T | null {
    const node = this.cache.get(key);
    if (!node) return null;

    // Check if expired
    if (Date.now() - node.timestamp > this.ttl) {
      this.delete(key);
      return null;
    }

    // Move to front (most recently used)
    this.moveToFront(node);
    return node.value;
  }

  set(key: string, value: T): void {
    // If key exists, update and move to front
    const existing = this.cache.get(key);
    if (existing) {
      existing.value = value;
      existing.timestamp = Date.now();
      this.moveToFront(existing);
      return;
    }

    // Evict oldest if at capacity
    if (this.cache.size >= this.maxSize) {
      this.evictOldest();
    }

    // Create new node
    const node: CacheNode<T> = {
      key,
      value,
      timestamp: Date.now(),
      prev: null,
      next: this.head
    };

    // Add to front of list
    if (this.head) {
      this.head.prev = node;
    }
    this.head = node;
    if (!this.tail) {
      this.tail = node;
    }

    this.cache.set(key, node);
  }

  has(key: string): boolean {
    const node = this.cache.get(key);
    if (!node) return false;
    if (Date.now() - node.timestamp > this.ttl) {
      this.delete(key);
      return false;
    }
    return true;
  }

  delete(key: string): void {
    const node = this.cache.get(key);
    if (!node) return;

    this.removeFromList(node);
    this.cache.delete(key);
  }

  clear(): void {
    this.cache.clear();
    this.head = null;
    this.tail = null;
  }

  get size(): number {
    return this.cache.size;
  }

  private moveToFront(node: CacheNode<T>): void {
    if (node === this.head) return;

    this.removeFromList(node);

    node.prev = null;
    node.next = this.head;
    if (this.head) {
      this.head.prev = node;
    }
    this.head = node;
  }

  private removeFromList(node: CacheNode<T>): void {
    if (node.prev) {
      node.prev.next = node.next;
    } else {
      this.head = node.next;
    }

    if (node.next) {
      node.next.prev = node.prev;
    } else {
      this.tail = node.prev;
    }
  }

  private evictOldest(): void {
    if (!this.tail) return;
    this.cache.delete(this.tail.key);
    this.removeFromList(this.tail);
  }

  // Cleanup expired entries
  cleanup(): void {
    const now = Date.now();
    const toDelete: string[] = [];

    this.cache.forEach((node, key) => {
      if (now - node.timestamp > this.ttl) {
        toDelete.push(key);
      }
    });

    toDelete.forEach(key => this.delete(key));
  }
}
