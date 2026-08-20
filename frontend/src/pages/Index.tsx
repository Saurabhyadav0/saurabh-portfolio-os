import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Folder, User, Globe, Terminal, Mail, Sparkles, Briefcase, Layers, Cpu, Gamepad2, Play, Settings } from 'lucide-react';

import { StatusBar } from '@/components/statusbar/StatusBar';
import { Dock } from '@/components/dock/Dock';
import { DraggableWindow } from '@/components/desktop/DraggableWindow';
import { DesktopIcon } from '@/components/desktop/DesktopIcon';
import { ContextMenu } from '@/components/desktop/ContextMenu';
import { SpotlightSearch } from '@/components/desktop/SpotlightSearch';
import { NotificationCenter } from '@/components/desktop/NotificationCenter';
import { BootScreen } from '@/components/desktop/BootScreen';

import { IOSStatusBar, IOSHomeIndicator } from '@/components/ios/IOSStatusBar';
import { IOSHomeScreen } from '@/components/ios/IOSHomeScreen';
import { IPadSplitView } from '@/components/ios/IPadSplitView';

import { AboutContent } from '@/components/apps/AboutContent';
import { FinderContent } from '@/components/apps/FinderContent';
import { ExperienceContent } from '@/components/apps/ExperienceContent';
import { SkillsContent } from '@/components/apps/SkillsContent';
import { ContactContent } from '@/components/apps/ContactContent';
import { TerminalContent } from '@/components/apps/TerminalContent';
import { SafariContent } from '@/components/apps/SafariContent';
import { ChromeContent } from '@/components/apps/ChromeContent';
import { NotesContent } from '@/components/apps/NotesContent';
import { VSCodeContent } from '@/components/apps/VSCodeContent';
import { SpotifyContent } from '@/components/apps/SpotifyContent';
import { MailContent } from '@/components/apps/MailContent';
import { SnakeGame } from '@/components/apps/SnakeGame';
import { TetrisGame } from '@/components/apps/TetrisGame';
import { TicTacToe } from '@/components/apps/TicTacToe';
import { GamesFolderContent } from '@/components/apps/GamesFolderContent';
import { SystemPreferences } from '@/components/apps/SystemPreferences';

import { useWindowManager } from '@/hooks/useWindowManager';
import { useTheme } from '@/hooks/useTheme';
import { WALLPAPERS } from '@/data/wallpapers';
import { DesktopIcon as DesktopIconType, ContextMenuState } from '@/types';
import { toast } from '@/hooks/use-toast';

/* ─── Helper: get app content by id ─── */
function getAppContent(
  appId: string,
  theme: 'dark' | 'light',
  closeWindow: (id: string) => void,
  openApp: (id: string, label: string) => void
): { content: React.ReactElement; title: string; width: number; height: number } {
  switch (appId) {
    case 'safari':
      return { content: <SafariContent theme={theme} />, title: 'Safari — Saurabh Yadav Portfolio', width: 1050, height: 740 };
    case 'finder':
      return { content: <FinderContent />, title: 'Finder — Projects & Code', width: 900, height: 640 };
    case 'experience':
      return { content: <ExperienceContent />, title: 'Experience — Internships & Roles', width: 850, height: 600 };
    case 'skills':
      return { content: <SkillsContent />, title: 'Skills & Technology Matrix', width: 820, height: 580 };
    case 'games':
      return { 
        content: <GamesFolderContent onOpenGame={(gId, gLabel) => {
          closeWindow('games');
          openApp(gId, gLabel);
        }} />, 
        title: 'Games Folder — Retro Arcade', 
        width: 750, 
        height: 480 
      };

    case 'systemprefs':
      return { content: <SystemPreferences />, title: 'System Settings — Saurabh OS', width: 660, height: 520 };
    case 'snake':
      return { content: <SnakeGame />, title: 'Snake Arcade Game 🐍', width: 440, height: 580 };
    case 'tetris':
      return { content: <TetrisGame />, title: 'Tetris Arcade Game 🧱', width: 420, height: 580 };
    case 'tictactoe':
      return { content: <TicTacToe />, title: 'Tic-Tac-Toe AI Game ❌⭕', width: 440, height: 560 };
    case 'contact':
      return { content: <ContactContent onClose={() => closeWindow(appId)} />, title: 'Contacts — Saurabh Yadav', width: 640, height: 540 };
    case 'about':
      return { content: <AboutContent theme={theme} onOpenApp={openApp} />, title: 'About Saurabh Yadav', width: 640, height: 540 };
    case 'terminal':
      return { content: <TerminalContent theme={theme} />, title: 'Terminal — saurabh@macbook-pro', width: 750, height: 500 };
    case 'chrome':
      return { content: <ChromeContent />, title: 'Chrome', width: 1000, height: 720 };
    case 'notes':
      return { content: <NotesContent theme={theme} />, title: 'Notes — Engineering Philosophy', width: 600, height: 520 };
    case 'vscode':
      return { content: <VSCodeContent />, title: 'VS Code — index.js', width: 920, height: 660 };
    case 'spotify':
      return { content: <SpotifyContent />, title: 'Spotify Tunes', width: 380, height: 540 };
    case 'mail':
      return { content: <MailContent onClose={() => closeWindow(appId)} />, title: 'Mail — Send Message', width: 640, height: 540 };
    default:
      return { content: <div className="p-8 text-white/60 font-mono text-sm">Directory empty.</div>, title: 'Folder', width: 600, height: 400 };
  }
}

const Index: React.FC = () => {
  const { theme, toggleTheme } = useTheme('dark');
  const [wallpaperIndex, setWallpaperIndex] = useState(0);
  const [activeAppName, setActiveAppName] = useState('Safari');
  const [contextMenu, setContextMenu] = useState<ContextMenuState>(null);
  
  const [screenMode, setScreenMode] = useState<'mobile' | 'tablet' | 'desktop'>('desktop');

  // Power states
  const [showBoot, setShowBoot] = useState<boolean>(() => {
    return !localStorage.getItem('saurabh-boot-shown');
  });
  const [isSleeping, setIsSleeping] = useState(false);
  const [isShutDown, setIsShutDown] = useState(false);

  const [showSpotlight, setShowSpotlight] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const [iosActiveApp, setIosActiveApp] = useState<string | null>(null);

  const {
    windows,
    openWindow,
    focusWindow,
    closeWindow,
    minimizeWindow,
    maximizeWindow,
  } = useWindowManager([
    { id: 'safari', title: 'Safari — Saurabh Yadav Portfolio', content: <SafariContent theme={theme} />, x: 60, y: 50, zIndex: 10, width: 1000, height: 720 }
  ]);

  const [desktopIcons, setDesktopIcons] = useState<DesktopIconType[]>([
    { id: 'safari', label: 'Safari Web', app: 'safari', icon: <Globe className="text-white" />, bg: 'bg-gradient-to-tr from-blue-500 to-indigo-600', x: 20, y: 60 },
    { id: 'projects', label: 'Projects', app: 'finder', icon: <Folder className="text-white fill-blue-400" />, bg: 'bg-gradient-to-tr from-blue-600 to-cyan-500', x: 20, y: 170 },
    { id: 'experience', label: 'Experience', app: 'experience', icon: <Briefcase className="text-white" />, bg: 'bg-gradient-to-tr from-purple-600 to-indigo-600', x: 20, y: 280 },
    { id: 'skills', label: 'Skills', app: 'skills', icon: <Layers className="text-white" />, bg: 'bg-gradient-to-tr from-emerald-500 to-teal-700', x: 20, y: 390 },
    { id: 'games', label: 'Games', app: 'games', icon: <Gamepad2 className="text-white" />, bg: 'bg-gradient-to-tr from-indigo-600 to-purple-700', x: 20, y: 500 },
    { id: 'about', label: 'About Me', app: 'about', icon: <User className="text-white" />, bg: 'bg-gradient-to-tr from-slate-700 to-slate-900', x: 120, y: 60 },
    { id: 'terminal', label: 'Terminal', app: 'terminal', icon: <Terminal className="text-white" />, bg: 'bg-gradient-to-tr from-zinc-800 to-black', x: 120, y: 170 },
    { id: 'contact', label: 'Contact', app: 'contact', icon: <Mail className="text-white" />, bg: 'bg-gradient-to-tr from-blue-500 to-sky-600', x: 120, y: 280 }
  ]);

  useEffect(() => {
    const handleResize = () => {
      const w = window.innerWidth;
      if (w < 768) setScreenMode('mobile');
      else if (w < 1024) setScreenMode('tablet');
      else setScreenMode('desktop');
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleBootComplete = () => {
    setShowBoot(false);
    localStorage.setItem('saurabh-boot-shown', 'true');
  };

  const handleRestart = () => {
    setShowBoot(true);
  };

  const handleSleep = () => {
    setIsSleeping(true);
  };

  const handleShutDown = () => {
    setIsShutDown(true);
    setTimeout(() => {
      setIsShutDown(false);
    }, 3000);
  };

  const openApp = (appId: string, appLabel: string) => {
    if (screenMode === 'mobile') {
      setIosActiveApp(appId);
      return;
    }

    const { content, title, width, height } = getAppContent(appId, theme, closeWindow, openApp);

    openWindow({
      id: appId,
      title,
      content,
      x: 70 + (windows.length * 25),
      y: 60 + (windows.length * 25),
      width,
      height,
      isMinimized: false,
      isMaximized: false,
    }, false);
    setActiveAppName(title);
  };

  const handleFocusWindow = (id: string) => {
    focusWindow(id);
    const win = windows.find(w => w.id === id);
    if (win) setActiveAppName(win.title);
  };

  const handleDockToDesktop = (appId: string, label: string, point: { x: number; y: number }) => {
    if (point.y < window.innerHeight - 120) {
      const existing = desktopIcons.find(i => i.app === appId);
      if (!existing) {
        setDesktopIcons(prev => [...prev, {
          id: `shortcut-${Date.now()}`,
          label,
          app: appId,
          icon: <Folder className="text-white fill-blue-300" />,
          bg: 'bg-blue-600',
          x: Math.max(20, point.x - 40),
          y: Math.max(60, point.y - 40)
        }]);
      }
    }
  };

  const handleDesktopIconDragEnd = (id: string, x: number, y: number) => {
    setDesktopIcons(prev => prev.map(i => i.id === id ? { ...i, x, y } : i));
  };

  const handleNewFolder = () => {
    const name = prompt("Folder Name:", "New Project");
    if (name) {
      setDesktopIcons(prev => [...prev, {
        id: `folder-${Date.now()}`,
        label: name,
        app: 'finder',
        icon: <Folder className="text-white fill-blue-400" />,
        bg: 'bg-blue-600',
        x: 120,
        y: 60
      }]);
    }
    setContextMenu(null);
  };

  const handleChangeWallpaper = () => {
    setWallpaperIndex(i => (i + 1) % WALLPAPERS.length);
    setContextMenu(null);
  };

  return (
    <>
      {/* Boot Screen Overlay */}
      <AnimatePresence>
        {showBoot && <BootScreen onComplete={handleBootComplete} />}
      </AnimatePresence>

      {/* Sleep Screen Overlay */}
      <AnimatePresence>
        {isSleeping && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsSleeping(false)}
            className="fixed inset-0 z-[100000] bg-black/95 backdrop-blur-3xl flex flex-col items-center justify-center text-white cursor-pointer select-none"
          >
            <p className="text-4xl font-light tracking-tight">{new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</p>
            <p className="text-xs text-zinc-400 mt-2">Click anywhere to wake Saurabh's Mac</p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Shut Down Screen Overlay */}
      <AnimatePresence>
        {isShutDown && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100000] bg-black flex flex-col items-center justify-center text-white select-none"
          >
            <p className="text-2xl font-semibold tracking-tight">Goodbye.</p>
            <p className="text-xs text-zinc-500 mt-2">Powering down Saurabh OS...</p>
          </motion.div>
        )}
      </AnimatePresence>

      <SpotlightSearch 
        isOpen={showSpotlight} 
        onClose={() => setShowSpotlight(false)} 
        onOpenApp={openApp}
      />

      <NotificationCenter 
        isOpen={showNotifications} 
        onClose={() => setShowNotifications(false)} 
      />

      {/* MOBILE VIEW */}
      {screenMode === 'mobile' && (
        <div 
          className="h-screen w-screen bg-cover bg-center overflow-hidden select-none relative font-[-apple-system,BlinkMacSystemFont,'SF Pro Display','SF Pro Text','Helvetica Neue',Arial,sans-serif]"
          style={{ backgroundImage: `url(${WALLPAPERS[wallpaperIndex]})` }}
        >
          <div className="h-full w-full flex flex-col">
            <IOSStatusBar />
            <IOSHomeScreen onOpenApp={(appId) => setIosActiveApp(appId)} />
            <IOSHomeIndicator dark={true} />
          </div>

          <AnimatePresence>
            {iosActiveApp && (
              <div className="absolute inset-0 z-[50000] flex flex-col overflow-hidden bg-[#18181b]">
                <IOSStatusBar isInApp={false} />
                <div className="flex items-center justify-between px-4 h-[44px] bg-[#1c1c1e] border-b border-white/5 shrink-0">
                  <button onClick={() => setIosActiveApp(null)} className="text-[#0A84FF] text-[17px] font-semibold">
                    ← Home
                  </button>
                  <span className="text-white text-[17px] font-semibold">
                    {iosActiveApp.toUpperCase()}
                  </span>
                  <div className="w-12" />
                </div>
                <div className="flex-1 overflow-auto">
                  {getAppContent(iosActiveApp, 'dark', () => setIosActiveApp(null), openApp).content}
                </div>
                <IOSHomeIndicator dark={false} />
              </div>
            )}
          </AnimatePresence>
        </div>
      )}

      {/* TABLET VIEW */}
      {screenMode === 'tablet' && (
        <IPadSplitView theme={theme} wallpaperUrl={WALLPAPERS[wallpaperIndex]} />
      )}

      {/* DESKTOP VIEW */}
      {screenMode === 'desktop' && (
        <div 
          className="h-screen w-screen bg-cover bg-center overflow-hidden font-sans select-none relative transition-all duration-500 pointer-events-none"
          style={{ backgroundImage: `url(${WALLPAPERS[wallpaperIndex]})` }}
          onContextMenu={e => { 
            e.preventDefault(); 
            setContextMenu({ x: e.clientX, y: e.clientY }); 
          }}
          onClick={() => setContextMenu(null)}
        >
          <StatusBar 
            theme={theme} 
            activeAppName={activeAppName} 
            isMobile={false} 
            windows={windows}
            onToggleTheme={toggleTheme} 
            onOpenApp={openApp}
            onToggleSpotlight={() => setShowSpotlight(!showSpotlight)}
            onToggleNotifications={() => setShowNotifications(!showNotifications)}
            onSleep={handleSleep}
            onRestart={handleRestart}
            onShutDown={handleShutDown}
            onFocusWindow={handleFocusWindow}
          />

          <div className="absolute top-12 right-6 pointer-events-auto flex flex-col gap-4 z-0 max-w-xs select-text">
            <div className="p-4 rounded-2xl bg-black/40 backdrop-blur-2xl border border-white/10 text-white shadow-2xl space-y-2">
              <div className="flex items-center gap-2 text-indigo-400 font-bold text-xs">
                <Sparkles size={14} /> Saurabh Yadav
              </div>
              <p className="text-xs font-semibold text-zinc-200">
                "I build systems that think, scale, and ship."
              </p>
              <p className="text-[10px] text-zinc-400 leading-normal">
                B.Tech AI-ML, Class of 2027 · 5 Internships · 8+ Projects Shipped
              </p>
            </div>
            <div className="p-4 rounded-2xl bg-black/40 backdrop-blur-2xl border border-white/10 text-white shadow-2xl space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-emerald-400 font-bold text-xs">
                  <Cpu size={14} /> System Highlights
                </div>
                <button 
                  onClick={() => setShowNotifications(true)}
                  className="text-[10px] text-indigo-300 hover:underline"
                >
                  Alerts
                </button>
              </div>
              <div className="grid grid-cols-2 gap-2 text-center text-xs">
                <div className="bg-white/5 p-2 rounded-xl border border-white/5">
                  <p className="font-black text-indigo-400 text-sm">400+</p>
                  <p className="text-[9px] opacity-70">REST Endpoints</p>
                </div>
                <div className="bg-white/5 p-2 rounded-xl border border-white/5">
                  <p className="font-black text-emerald-400 text-sm">50+</p>
                  <p className="text-[9px] opacity-70">DB Tables</p>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute inset-0 pointer-events-auto pt-8">
            {desktopIcons.map(icon => (
              <DesktopIcon
                key={icon.id}
                icon={icon}
                isMobile={false}
                onOpen={openApp}
                onDragEnd={handleDesktopIconDragEnd}
              />
            ))}
          </div>

          <AnimatePresence>
            {windows.map(w => !w.isMinimized && (
              <DraggableWindow
                key={w.id}
                window={w}
                theme={theme}
                isMobile={false}
                onClose={closeWindow}
                onFocus={handleFocusWindow}
                onMaximize={maximizeWindow}
                onMinimize={minimizeWindow}
              />
            ))}
          </AnimatePresence>

          {contextMenu && (
            <ContextMenu
              contextMenu={contextMenu}
              onNewFolder={handleNewFolder}
              onChangeWallpaper={handleChangeWallpaper}
            />
          )}

          <Dock
            windows={windows}
            isMobile={false}
            onOpenApp={openApp}
            onCloseApp={closeWindow}
            onDockToDesktop={handleDockToDesktop}
          />
        </div>
      )}
    </>
  );
};

export default Index;
