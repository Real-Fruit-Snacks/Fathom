import type { Theme, ThemeVariables } from '../types';

// Catppuccin themes — https://catppuccin.com
const DEFAULT_THEMES: Theme[] = [
  {
    name: 'mocha',
    displayName: 'Catppuccin Mocha',
    category: 'dark',
    variables: {
      '--bg-primary': '#1e1e2e',
      '--bg-secondary': '#181825',
      '--bg-tertiary': '#313244',
      '--text-primary': '#cdd6f4',
      '--text-secondary': '#a6adc8',
      '--accent': '#cba6f7',
      '--accent-secondary': '#89b4fa',
      '--border': '#45475a',
      '--success': '#a6e3a1',
      '--error': '#f38ba8'
    }
  },
  {
    name: 'latte',
    displayName: 'Catppuccin Latte',
    category: 'light',
    variables: {
      '--bg-primary': '#eff1f5',
      '--bg-secondary': '#e6e9ef',
      '--bg-tertiary': '#ccd0da',
      '--text-primary': '#4c4f69',
      '--text-secondary': '#6c6f85',
      '--accent': '#8839ef',
      '--accent-secondary': '#1e66f5',
      '--border': '#bcc0cc',
      '--success': '#40a02b',
      '--error': '#d20f39'
    }
  },
  {
    name: 'frappe',
    displayName: 'Catppuccin Frappé',
    category: 'dark',
    variables: {
      '--bg-primary': '#303446',
      '--bg-secondary': '#292c3c',
      '--bg-tertiary': '#414559',
      '--text-primary': '#c6d0f5',
      '--text-secondary': '#a5adce',
      '--accent': '#ca9ee6',
      '--accent-secondary': '#8caaee',
      '--border': '#51576d',
      '--success': '#a6d189',
      '--error': '#e78284'
    }
  },
  {
    name: 'macchiato',
    displayName: 'Catppuccin Macchiato',
    category: 'dark',
    variables: {
      '--bg-primary': '#24273a',
      '--bg-secondary': '#1e2030',
      '--bg-tertiary': '#363a4f',
      '--text-primary': '#cad3f5',
      '--text-secondary': '#a5adcb',
      '--accent': '#c6a0f6',
      '--accent-secondary': '#8aadf4',
      '--border': '#494d64',
      '--success': '#a6da95',
      '--error': '#ed8796'
    }
  }
];

export class ThemeEngine {
  private themes: Map<string, Theme> = new Map();
  private currentTheme: string = 'mocha';
  private listeners: Set<(theme: Theme) => void> = new Set();

  constructor() {
    // Load default themes
    for (const theme of DEFAULT_THEMES) {
      this.themes.set(theme.name, theme);
    }

    // Load saved theme
    const saved = localStorage.getItem('theme');
    if (saved && this.themes.has(saved)) {
      this.currentTheme = saved;
    }

    // Apply initial theme
    this.applyTheme(this.currentTheme);
  }

  getThemes(): Theme[] {
    return Array.from(this.themes.values());
  }

  getTheme(name: string): Theme | undefined {
    return this.themes.get(name);
  }

  getCurrentTheme(): Theme {
    return this.themes.get(this.currentTheme)!;
  }

  setTheme(name: string): void {
    if (!this.themes.has(name)) {
      console.warn(`Theme "${name}" not found`);
      return;
    }

    this.currentTheme = name;
    this.applyTheme(name);
    localStorage.setItem('theme', name);

    // Notify listeners
    const theme = this.themes.get(name)!;
    this.listeners.forEach(listener => listener(theme));
  }

  private applyTheme(name: string): void {
    const theme = this.themes.get(name);
    if (!theme) return;

    const root = document.documentElement;

    // Apply all CSS variables
    for (const [prop, value] of Object.entries(theme.variables)) {
      root.style.setProperty(prop, value);
    }

    // Update body class for theme-specific overrides
    document.body.className = document.body.className
      .replace(/theme-[\w-]+/g, '')
      .trim() + ` theme-${name}`;
  }

  onThemeChange(callback: (theme: Theme) => void): () => void {
    this.listeners.add(callback);
    return () => this.listeners.delete(callback);
  }

}
