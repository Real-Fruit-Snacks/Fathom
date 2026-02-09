import type { SearchEntry, SearchResult, SearchQuery, SearchMessage } from '../types';

// Trie node for prefix matching
class TrieNode {
  children: Map<string, TrieNode> = new Map();
  entries: SearchEntry[] = [];
}

// Trie index for O(k) prefix matching
class TrieIndex {
  private root = new TrieNode();

  build(entries: SearchEntry[]): void {
    for (const entry of entries) {
      this.insert(entry);
    }
  }

  private insert(entry: SearchEntry): void {
    let node = this.root;
    const command = entry.command.toLowerCase();

    for (const char of command) {
      if (!node.children.has(char)) {
        node.children.set(char, new TrieNode());
      }
      node = node.children.get(char)!;
      node.entries.push(entry);
    }
  }

  getExact(query: string): SearchEntry[] {
    let node = this.root;
    const q = query.toLowerCase();

    for (const char of q) {
      if (!node.children.has(char)) return [];
      node = node.children.get(char)!;
    }

    // Return only exact matches
    return node.entries.filter(e => e.command.toLowerCase() === q);
  }

  getPrefix(query: string, maxResults = 50): SearchEntry[] {
    let node = this.root;
    const q = query.toLowerCase();

    for (const char of q) {
      if (!node.children.has(char)) return [];
      node = node.children.get(char)!;
    }

    return node.entries.slice(0, maxResults);
  }
}

// Inverted index for keyword matching
class InvertedIndex {
  private index: Map<string, SearchEntry[]> = new Map();
  private stopWords = new Set([
    'the', 'a', 'an', 'and', 'or', 'but', 'in', 'on', 'at', 'to', 'for',
    'of', 'with', 'by', 'from', 'as', 'is', 'was', 'are', 'were', 'been',
    'be', 'have', 'has', 'had', 'do', 'does', 'did', 'will', 'would', 'could',
    'should', 'may', 'might', 'must', 'can', 'this', 'that', 'these', 'those'
  ]);

  build(entries: SearchEntry[]): void {
    for (const entry of entries) {
      const words = this.tokenize(entry.description);
      for (const word of words) {
        if (!this.index.has(word)) {
          this.index.set(word, []);
        }
        this.index.get(word)!.push(entry);
      }

      // Also index command name words
      const cmdWords = this.tokenize(entry.command.replace(/[-_]/g, ' '));
      for (const word of cmdWords) {
        if (!this.index.has(word)) {
          this.index.set(word, []);
        }
        if (!this.index.get(word)!.includes(entry)) {
          this.index.get(word)!.push(entry);
        }
      }
    }
  }

  private tokenize(text: string): string[] {
    return text
      .toLowerCase()
      .split(/[^a-z0-9]+/)
      .filter(word => word.length > 2 && !this.stopWords.has(word));
  }

  search(query: string, maxResults = 50): SearchEntry[] {
    const words = this.tokenize(query);
    if (words.length === 0) return [];

    // Get entries that match all words
    let results = this.index.get(words[0]) || [];

    for (let i = 1; i < words.length; i++) {
      const wordResults = new Set(this.index.get(words[i]) || []);
      results = results.filter(r => wordResults.has(r));
    }

    return results.slice(0, maxResults);
  }
}

// Soundex for fuzzy matching
function soundex(str: string): string {
  const s = str.toUpperCase().replace(/[^A-Z]/g, '');
  if (!s) return '';

  const codes: Record<string, string> = {
    B: '1', F: '1', P: '1', V: '1',
    C: '2', G: '2', J: '2', K: '2', Q: '2', S: '2', X: '2', Z: '2',
    D: '3', T: '3',
    L: '4',
    M: '5', N: '5',
    R: '6'
  };

  let result = s[0];
  let prevCode = codes[s[0]] || '';

  for (let i = 1; i < s.length && result.length < 4; i++) {
    const code = codes[s[i]] || '';
    if (code && code !== prevCode) {
      result += code;
    }
    prevCode = code || prevCode;
  }

  return result.padEnd(4, '0');
}

// Fuzzy matcher using Soundex
class FuzzyMatcher {
  private soundexIndex: Map<string, SearchEntry[]> = new Map();

  build(entries: SearchEntry[]): void {
    for (const entry of entries) {
      const code = soundex(entry.command);
      if (!this.soundexIndex.has(code)) {
        this.soundexIndex.set(code, []);
      }
      this.soundexIndex.get(code)!.push(entry);
    }
  }

  match(query: string, maxResults = 20): SearchEntry[] {
    const code = soundex(query);
    return (this.soundexIndex.get(code) || []).slice(0, maxResults);
  }
}

// Search engine
class SearchEngine {
  private entries: SearchEntry[] = [];
  private trieIndex = new TrieIndex();
  private invertedIndex = new InvertedIndex();
  private fuzzyMatcher = new FuzzyMatcher();
  private commandMap: Map<string, SearchEntry[]> = new Map();

  init(entries: SearchEntry[]): void {
    this.entries = entries;

    // Build command map for O(1) exact lookups
    for (const entry of entries) {
      const key = entry.command.toLowerCase();
      if (!this.commandMap.has(key)) {
        this.commandMap.set(key, []);
      }
      this.commandMap.get(key)!.push(entry);
    }

    // Build indexes
    this.trieIndex.build(entries);
    this.invertedIndex.build(entries);
    this.fuzzyMatcher.build(entries);
  }

  search(query: SearchQuery): SearchResult[] {
    const { query: q, section, maxResults = 50 } = query;
    const normalizedQuery = q.trim().toLowerCase();

    if (!normalizedQuery) return [];

    const results = new Map<string, SearchResult>();
    const addResult = (entry: SearchEntry, score: number, matchType: SearchResult['matchType']) => {
      // Apply section filter
      if (section !== undefined && entry.section !== section) return;

      const key = `${entry.command}.${entry.section}`;
      const existing = results.get(key);

      if (!existing || existing.score < score) {
        results.set(key, { ...entry, score, matchType });
      }
    };

    // 1. Exact command matches (score: 100)
    const exact = this.commandMap.get(normalizedQuery) || [];
    exact.forEach(e => addResult(e, 100, 'exact'));

    // 2. Prefix matches (score: 90)
    const prefix = this.trieIndex.getPrefix(normalizedQuery, maxResults);
    prefix.forEach(e => addResult(e, 90 - (e.command.length - normalizedQuery.length) * 0.5, 'prefix'));

    // 3. Keyword matches in descriptions (score: 70)
    if (normalizedQuery.length >= 3) {
      const keyword = this.invertedIndex.search(normalizedQuery, maxResults);
      keyword.forEach(e => addResult(e, 70, 'keyword'));
    }

    // 4. Substring matches (score: 60)
    if (results.size < maxResults && normalizedQuery.length >= 2) {
      for (const entry of this.entries) {
        if (results.size >= maxResults * 2) break; // Limit iterations
        if (entry.command.toLowerCase().includes(normalizedQuery)) {
          addResult(entry, 60, 'substring');
        }
      }
    }

    // 5. Fuzzy matches (score: 30) - only if few results
    if (results.size < 10 && normalizedQuery.length >= 3) {
      const fuzzy = this.fuzzyMatcher.match(normalizedQuery);
      fuzzy.forEach(e => addResult(e, 30, 'fuzzy'));
    }

    // Sort by score descending, then by command name
    return Array.from(results.values())
      .sort((a, b) => b.score - a.score || a.command.localeCompare(b.command))
      .slice(0, maxResults);
  }
}

// Worker instance
const engine = new SearchEngine();

// Message handler
self.onmessage = (e: MessageEvent<SearchMessage>) => {
  const { type, payload, requestId } = e.data;

  switch (type) {
    case 'INIT': {
      const { searchIndex } = payload as { searchIndex: SearchEntry[] };
      engine.init(searchIndex);
      self.postMessage({ type: 'READY' });
      break;
    }

    case 'SEARCH': {
      try {
        const results = engine.search(payload as SearchQuery);
        self.postMessage({ type: 'RESULTS', payload: results, requestId });
      } catch (error) {
        self.postMessage({
          type: 'ERROR',
          payload: error instanceof Error ? error.message : 'Search failed',
          requestId
        });
      }
      break;
    }
  }
};
