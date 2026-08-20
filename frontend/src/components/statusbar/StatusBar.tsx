import React, { useState, useEffect } from 'react';
import { Wifi, Battery, Search, Sun, Moon, Apple, Bell, Volume2, Shield } from 'lucide-react';
import { Theme, WindowState } from '@/types';

interface StatusBarProps {
  theme: Theme;
  activeAppName: string;
  isMobile: boolean;
  windows?: WindowState[];
  onToggleTheme: () => void;
  onOpenApp?: (appId: string, label: string) => void;
  onToggleSpotlight?: () => void;
  onToggleNotifications?: () => void;
  onSleep?: () => void;
  onRestart?: () => void;
  onShutDown?: () => void;
  onFocusWindow?: (id: string) => void;
}

export const StatusBar: React.FC<StatusBarProps> = ({
  theme,
  activeAppName,
  isMobile,
  windows = [],
  onToggleTheme,
  onOpenApp,
  onToggleSpotlight,
  onToggleNotifications,
  onSleep,
  onRestart,
  onShutDown,
  onFocusWindow
}) => {
  const [time, setTime] = useState<string>('');
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [showVolumeSlider, setShowVolumeSlider] = useState(false);
  const [volume, setVolume] = useState(80);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const downloadResume = () => {
    const link = document.createElement('a');
    link.href = '/Saurabh_Yadav_Resume.pdf';
    link.download = 'Saurabh_Yadav_Resume.pdf';
    link.click();
  };

  return (
    <div className={`h-8 flex items-center justify-between px-3 md:px-4 fixed top-0 w-full z-[10000] backdrop-blur-2xl ${
      theme === 'dark' ? 'bg-black/40 text-white border-white/10' : 'bg-white/60 text-gray-900 border-black/10'
    } pointer-events-auto border-b shadow-sm transition-colors select-none text-xs`}>
      
      {/* Left side: Apple Logo & App Title & Menus */}
      <div className="flex gap-3 md:gap-4 items-center font-medium">
        {/* Apple Logo Dropdown */}
        <div className="relative">
          <button 
            onClick={() => setActiveMenu(activeMenu === 'apple' ? null : 'apple')}
            className="hover:opacity-70 active:scale-95 transition-all p-1 rounded hover:bg-white/10 flex items-center"
            title="System Menu"
          >
            <Apple size={14} className="fill-current" />
          </button>
          
          {activeMenu === 'apple' && (
            <div 
              className="absolute top-7 left-0 w-56 bg-zinc-900/95 text-white backdrop-blur-2xl border border-white/10 rounded-xl py-1.5 shadow-2xl z-[50000] text-xs animate-in fade-in zoom-in-95 duration-100"
              onClick={() => setActiveMenu(null)}
            >
              <div 
                className="px-3 py-1.5 hover:bg-blue-600 cursor-pointer font-semibold flex justify-between items-center"
                onClick={() => onOpenApp && onOpenApp('about', 'About Me')}
              >
                <span>About Saurabh Yadav</span>
                <span className="opacity-40 text-[10px]">⌘I</span>
              </div>
              <div 
                className="px-3 py-1.5 hover:bg-blue-600 cursor-pointer flex justify-between items-center"
                onClick={() => onOpenApp && onOpenApp('systemprefs', 'System Settings')}
              >
                <span>System Settings...</span>
              </div>
              <div className="h-[1px] bg-white/10 my-1" />
              <div 
                className="px-3 py-1.5 hover:bg-blue-600 cursor-pointer flex justify-between items-center"
                onClick={onSleep}
              >
                <span>Sleep</span>
              </div>
              <div 
                className="px-3 py-1.5 hover:bg-blue-600 cursor-pointer flex justify-between items-center"
                onClick={onRestart}
              >
                <span>Restart...</span>
              </div>
              <div 
                className="px-3 py-1.5 hover:bg-blue-600 cursor-pointer flex justify-between items-center text-red-400 hover:text-white"
                onClick={onShutDown}
              >
                <span>Shut Down...</span>
              </div>
            </div>
          )}
        </div>

        {!isMobile && (
          <span className="font-bold tracking-tight text-xs md:text-sm">
            {activeAppName}
          </span>
        )}

        {!isMobile && (
          <div className="hidden lg:flex gap-3 text-[11px] opacity-75 font-normal relative">
            {/* File Menu */}
            <div className="relative">
              <span 
                className="hover:opacity-100 cursor-pointer"
                onClick={() => setActiveMenu(activeMenu === 'file' ? null : 'file')}
              >
                File
              </span>
              {activeMenu === 'file' && (
                <div 
                  className="absolute top-6 left-0 w-48 bg-zinc-900/95 text-white backdrop-blur-2xl border border-white/10 rounded-xl py-1.5 shadow-2xl z-[50000] text-xs"
                  onClick={() => setActiveMenu(null)}
                >
                  <div className="px-3 py-1.5 hover:bg-blue-600 cursor-pointer" onClick={() => onOpenApp && onOpenApp('safari', 'Safari')}>
                    New Window (⌘N)
                  </div>
                  <div className="px-3 py-1.5 hover:bg-blue-600 cursor-pointer" onClick={downloadResume}>
                    Download Resume (⌘D)
                  </div>
                  <div className="px-3 py-1.5 hover:bg-blue-600 cursor-pointer" onClick={() => window.print()}>
                    Print (⌘P)
                  </div>
                </div>
              )}
            </div>

            {/* Edit Menu */}
            <span className="hover:opacity-100 cursor-pointer" onClick={() => onOpenApp && onOpenApp('finder', 'Projects')}>
              Edit
            </span>

            {/* View Menu */}
            <div className="relative">
              <span 
                className="hover:opacity-100 cursor-pointer"
                onClick={() => setActiveMenu(activeMenu === 'view' ? null : 'view')}
              >
                View
              </span>
              {activeMenu === 'view' && (
                <div 
                  className="absolute top-6 left-0 w-44 bg-zinc-900/95 text-white backdrop-blur-2xl border border-white/10 rounded-xl py-1.5 shadow-2xl z-[50000] text-xs"
                  onClick={() => setActiveMenu(null)}
                >
                  <div className="px-3 py-1.5 hover:bg-blue-600 cursor-pointer flex justify-between" onClick={onToggleTheme}>
                    <span>Theme ({theme})</span>
                  </div>
                </div>
              )}
            </div>

            {/* Window Menu */}
            <div className="relative">
              <span 
                className="hover:opacity-100 cursor-pointer"
                onClick={() => setActiveMenu(activeMenu === 'window' ? null : 'window')}
              >
                Window
              </span>
              {activeMenu === 'window' && (
                <div 
                  className="absolute top-6 left-0 w-56 bg-zinc-900/95 text-white backdrop-blur-2xl border border-white/10 rounded-xl py-1.5 shadow-2xl z-[50000] text-xs"
                  onClick={() => setActiveMenu(null)}
                >
                  {windows.length > 0 ? (
                    windows.map(w => (
                      <div 
                        key={w.id}
                        className="px-3 py-1.5 hover:bg-blue-600 cursor-pointer truncate"
                        onClick={() => onFocusWindow && onFocusWindow(w.id)}
                      >
                        ✓ {w.title}
                      </div>
                    ))
                  ) : (
                    <div className="px-3 py-1.5 opacity-50">No Open Windows</div>
                  )}
                </div>
              )}
            </div>

            {/* Help Menu */}
            <div className="relative">
              <span 
                className="hover:opacity-100 cursor-pointer"
                onClick={() => setActiveMenu(activeMenu === 'help' ? null : 'help')}
              >
                Help
              </span>
              {activeMenu === 'help' && (
                <div 
                  className="absolute top-6 left-0 w-52 bg-zinc-900/95 text-white backdrop-blur-2xl border border-white/10 rounded-xl py-1.5 shadow-2xl z-[50000] text-xs"
                  onClick={() => setActiveMenu(null)}
                >
                  <div className="px-3 py-1.5 hover:bg-blue-600 cursor-pointer" onClick={() => onOpenApp && onOpenApp('contact', 'Contact')}>
                    Contact Saurabh Support
                  </div>
                  <div className="px-3 py-1.5 hover:bg-blue-600 cursor-pointer" onClick={onToggleSpotlight}>
                    Keyboard Shortcuts (⌘+Space)
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {isMobile && (
          <span className="font-bold text-xs">
            {time}
          </span>
        )}
      </div>

      {/* Right side: Control items & Clock */}
      <div className="flex gap-3 items-center font-medium">
        <div className="relative group">
          <Wifi size={13} className="opacity-80 cursor-pointer" />
          <div className="absolute top-6 right-0 bg-black/80 text-white text-[10px] px-2 py-1 rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
            Connected to: Building Things
          </div>
        </div>

        <div className="relative group">
          <Battery size={15} className="opacity-80 cursor-pointer text-emerald-400" />
          <div className="absolute top-6 right-0 bg-black/80 text-white text-[10px] px-2 py-1 rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
            100% ⚡ Always Charged
          </div>
        </div>

        {!isMobile && (
          <div className="relative">
            <button 
              onClick={() => setShowVolumeSlider(!showVolumeSlider)}
              className="p-1 hover:bg-white/10 rounded transition-all opacity-80 hover:opacity-100"
              title="Volume"
            >
              <Volume2 size={13} />
            </button>
            {showVolumeSlider && (
              <div className="absolute top-7 right-0 bg-zinc-900 text-white p-3 rounded-xl border border-white/10 shadow-2xl z-[50000] w-36 space-y-2">
                <p className="text-[10px] font-bold text-zinc-400">Volume</p>
                <input 
                  type="range" 
                  min="0" 
                  max="100" 
                  value={volume}
                  onChange={e => setVolume(parseInt(e.target.value))}
                  className="w-full h-1 bg-zinc-700 rounded-lg appearance-none cursor-pointer"
                />
              </div>
            )}
          </div>
        )}

        {!isMobile && (
          <button 
            onClick={onToggleSpotlight}
            className="p-1 hover:bg-white/10 rounded transition-all opacity-80 hover:opacity-100"
            title="Spotlight Search (⌘+Space)"
          >
            <Search size={13} />
          </button>
        )}

        {!isMobile && (
          <button 
            onClick={onToggleNotifications}
            className="p-1 hover:bg-white/10 rounded transition-all opacity-80 hover:opacity-100"
            title="Notification Center"
          >
            <Bell size={13} />
          </button>
        )}

        <button 
          onClick={onToggleTheme} 
          className="p-1 hover:bg-white/10 rounded transition-all active:scale-90 opacity-80 hover:opacity-100"
          title={theme === 'dark' ? "Switch to Light Mode" : "Switch to Dark Mode"}
        >
          {theme === 'dark' ? <Sun size={13} /> : <Moon size={13} />}
        </button>

        {!isMobile && (
          <button 
            onClick={onToggleNotifications}
            className="font-semibold tabular-nums text-[11px] opacity-90 pl-1 hover:opacity-100 cursor-pointer"
            title="Notification Center"
          >
            {time}
          </button>
        )}
      </div>
    </div>
  );
};
