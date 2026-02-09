// Search types
export interface SearchEntry {
  command: string;
  section: number;
  description: string;
}

export interface SearchResult extends SearchEntry {
  score: number;
  matchType: 'exact' | 'prefix' | 'keyword' | 'substring' | 'fuzzy';
}

export interface SearchMessage {
  type: 'INIT' | 'SEARCH' | 'READY' | 'RESULTS' | 'ERROR';
  payload?: unknown;
  requestId?: number;
}

export interface SearchQuery {
  query: string;
  section?: number;
  maxResults?: number;
}

// Command options types
export interface CommandOption {
  description: string;
  argument?: string;
}

export interface CommandOptions {
  description: string;
  options: Record<string, CommandOption>;
  stats?: {
    totalOptions: number;
    f1Score?: string;
  };
}

// Man page types
export interface ManSection {
  name: string;
  id: string;
  content: string;
}

export interface ManPage {
  command: string;
  section: number;
  raw: string;
  sections: ManSection[];
  crossRefs: Array<{ command: string; section: number }>;
}

// TLDR types
export interface TLDRIndex {
  common: string[];
  linux: string[];
}

// Theme types
export interface ThemeVariables {
  '--bg-primary': string;
  '--bg-secondary': string;
  '--bg-tertiary': string;
  '--text-primary': string;
  '--text-secondary': string;
  '--accent': string;
  '--accent-secondary': string;
  '--border': string;
  '--success': string;
  '--error': string;
}

export interface Theme {
  name: string;
  displayName: string;
  variables: ThemeVariables;
  category: 'dark' | 'light' | 'special';
}

// Cache types
export interface CacheEntry<T> {
  value: T;
  timestamp: number;
}

// App state
export interface AppState {
  currentCommand: string | null;
  currentSection: number | null;
  theme: string;
  history: string[];
  bookmarks: string[];
  sidebarOpen: boolean;
}
