import { useState, useCallback } from 'react';
import { Theme } from '@/types';

export const useTheme = (initialTheme: Theme = 'dark') => {
  const [theme, setTheme] = useState<Theme>(initialTheme);

  const toggleTheme = useCallback(() => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  }, []);

  return { theme, setTheme, toggleTheme };
};
