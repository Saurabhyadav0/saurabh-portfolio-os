import { useState, useCallback } from 'react';
import { WindowState } from '@/types';

export const useWindowManager = (initialWindows: WindowState[] = []) => {
  const [windows, setWindows] = useState<WindowState[]>(initialWindows);
  const [zIndexCounter, setZIndexCounter] = useState(10);

  const openWindow = useCallback((window: Omit<WindowState, 'zIndex'>, isMobile: boolean) => {
    if (windows.find(w => w.id === window.id)) {
      focusWindow(window.id);
      return;
    }

    setWindows(prev => [...prev, { 
      ...window, 
      zIndex: zIndexCounter + 1,
      x: isMobile ? 0 : window.x,
      y: isMobile ? 0 : window.y,
      hideHeader: isMobile && window.id === 'mail', // Hide header for Mail app key on Mobile
    }]);
    setZIndexCounter(prev => prev + 1);
  }, [windows, zIndexCounter]);

  const focusWindow = useCallback((id: string) => {
    setWindows(prev => prev.map(w =>
      w.id === id
        ? { ...w, zIndex: zIndexCounter + 1, isMinimized: false }
        : w
    ));
    setZIndexCounter(prev => prev + 1);
  }, [zIndexCounter]);

  // Bumps z-index only — unlike focusWindow, never un-minimizes. Safe to call
  // from a window's own mousedown handler, including during its minimize
  // exit animation (where the window is still briefly mounted).
  const bringToFront = useCallback((id: string) => {
    setWindows(prev => prev.map(w =>
      w.id === id ? { ...w, zIndex: zIndexCounter + 1 } : w
    ));
    setZIndexCounter(prev => prev + 1);
  }, [zIndexCounter]);

  const closeWindow = useCallback((id: string) => {
    setWindows(prev => prev.filter(w => w.id !== id));
  }, []);

  const minimizeWindow = useCallback((id: string) => {
    setWindows(prev => prev.map(w => 
      w.id === id ? { ...w, isMinimized: true } : w
    ));
  }, []);

  const maximizeWindow = useCallback((id: string) => {
    setWindows(prev => prev.map(w => 
      w.id === id ? { ...w, isMaximized: !w.isMaximized } : w
    ));
  }, []);

  return {
    windows,
    setWindows,
    openWindow,
    focusWindow,
    bringToFront,
    closeWindow,
    minimizeWindow,
    maximizeWindow,
    zIndexCounter,
  };
};
