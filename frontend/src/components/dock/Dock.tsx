import React from 'react';
import { motion } from 'framer-motion';
import { Folder, Globe, Terminal, Edit3, Code, Music, Mail, Gamepad2, Play, Layers } from 'lucide-react';
import { AppIcon } from '@/components/shared/AppIcon';
import { WindowState } from '@/types';

interface DockApp {
  id: string;
  label: string;
  icon: React.ReactElement;
  bg: string;
}

const DOCK_APPS: DockApp[] = [
  { id: 'finder', label: 'Finder (Projects)', icon: <Folder className="text-white fill-white/20" />, bg: 'bg-gradient-to-tr from-blue-600 to-cyan-500' },
  { id: 'safari', label: 'Safari (Portfolio Web)', icon: <Globe className="text-white" />, bg: 'bg-gradient-to-tr from-blue-500 via-indigo-500 to-sky-400' },
  { id: 'about', label: 'About Me', icon: <Folder className="text-white" />, bg: 'bg-gradient-to-tr from-slate-700 to-slate-900' },
  { id: 'games', label: 'Games Folder', icon: <Gamepad2 className="text-white" />, bg: 'bg-gradient-to-tr from-indigo-600 to-purple-700' },
  { id: 'terminal', label: 'Terminal (CLI)', icon: <Terminal className="text-white" />, bg: 'bg-gradient-to-tr from-zinc-800 to-black' },
  { id: 'snake', label: 'Snake Arcade', icon: <Gamepad2 className="text-white" />, bg: 'bg-gradient-to-tr from-emerald-500 to-teal-700' },
  { id: 'tetris', label: 'Tetris Arcade', icon: <Layers className="text-white" />, bg: 'bg-gradient-to-tr from-indigo-600 to-purple-700' },
  { id: 'tictactoe', label: 'Tic-Tac-Toe AI', icon: <Play className="text-white" />, bg: 'bg-gradient-to-tr from-purple-600 to-pink-600' },
  { id: 'vscode', label: 'VS Code', icon: <Code className="text-white" />, bg: 'bg-gradient-to-tr from-blue-700 to-indigo-600' },
  { id: 'notes', label: 'Notes (PRD)', icon: <Edit3 className="text-white" />, bg: 'bg-gradient-to-tr from-amber-400 to-yellow-600' },
  { id: 'spotify', label: 'Spotify Tunes', icon: <Music className="text-white" />, bg: 'bg-gradient-to-tr from-emerald-500 to-green-700' },
  { id: 'mail', label: 'Mail (Contact)', icon: <Mail className="text-white" />, bg: 'bg-gradient-to-tr from-blue-500 to-sky-600' },
];

interface DockProps {
  windows: WindowState[];
  isMobile: boolean;
  onOpenApp: (appId: string, label: string) => void;
  onCloseApp: (appId: string) => void;
  onDockToDesktop: (appId: string, label: string, point: { x: number; y: number }) => void;
}

export const Dock: React.FC<DockProps> = ({
  windows,
  isMobile,
  onOpenApp,
  onCloseApp,
  onDockToDesktop,
}) => {
  return (
    <div className={`fixed bottom-3 md:bottom-4 left-1/2 -translate-x-1/2 flex items-end ${
      isMobile ? 'gap-1.5 px-2.5 py-2 max-w-[98%] justify-around' : 'gap-2.5 p-2.5'
    } rounded-2xl md:rounded-3xl border border-white/20 backdrop-blur-3xl bg-white/10 dark:bg-black/30 z-[10000] pointer-events-auto shadow-[0_20px_50px_rgba(0,0,0,0.4)] transition-all`}>
      {DOCK_APPS.map(app => {
        const isOpen = windows.some(w => w.id === app.id);

        return (
          <motion.div 
            key={app.id} 
            drag={!isMobile} 
            dragMomentum={false}
            onDragEnd={(_, info) => onDockToDesktop(app.id, app.label, info.point)}
            whileHover={!isMobile ? { scale: 1.25, y: -12 } : { scale: 0.95 }} 
            whileTap={{ scale: 0.9 }}
            onClick={() => onOpenApp(app.id, app.label)} 
            className={`${isMobile ? 'w-8 h-8' : 'w-11 h-11'} cursor-pointer relative group shrink-0 transition-transform`}
          >
            <AppIcon bgGradient={app.bg} icon={app.icon} />

            {!isMobile && (
              <div className="absolute -top-10 left-1/2 -translate-x-1/2 px-2.5 py-1 bg-black/80 backdrop-blur-md text-white text-[10px] font-medium rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap border border-white/10 shadow-lg">
                {app.label}
              </div>
            )}

            {isOpen && (
              <div className="w-1.5 h-1.5 bg-white/90 rounded-full mx-auto mt-1 shadow-[0_0_8px_rgba(255,255,255,0.8)]" />
            )}
          </motion.div>
        );
      })}
    </div>
  );
};
