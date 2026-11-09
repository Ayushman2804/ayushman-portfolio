import { useCallback, useState } from 'react';

const THEME_COLORS = { dark: '#12141B', light: '#F4F5F8' };

function currentTheme() {
  return document.documentElement.classList.contains('dark') ? 'dark' : 'light';
}

// The initial theme is applied by the inline script in index.html; this hook only reads and changes it.
export function useTheme() {
  const [theme, setTheme] = useState(currentTheme);

  const toggle = useCallback(() => {
    const next = currentTheme() === 'dark' ? 'light' : 'dark';
    const root = document.documentElement;
    root.classList.toggle('dark', next === 'dark');
    root.style.colorScheme = next;
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', THEME_COLORS[next]);
    try {
      localStorage.setItem('theme', next);
    } catch {
      // Storage can be unavailable (private mode, blocked site data); the theme still applies for this visit.
    }
    setTheme(next);
  }, []);

  return { theme, toggle };
}
