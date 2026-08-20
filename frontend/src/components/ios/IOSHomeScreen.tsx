import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Folder, Globe, User, Terminal as TermIcon, Code, Edit3, Music, Mail, Gamepad2, Play } from 'lucide-react';

interface IOSAppIcon {
  id: string;
  label: string;
  icon: React.ReactElement;
  gradient: string;
  badge?: string;
}

const IOS_APPS: IOSAppIcon[] = [
  { id: 'safari', label: 'Safari', icon: <Globe size={28} className="text-white" />, gradient: 'from-sky-400 via-blue-500 to-indigo-600' },
  { id: 'finder', label: 'Projects', icon: <Folder size={28} className="text-white" />, gradient: 'from-blue-500 to-cyan-400' },
  { id: 'about', label: 'About', icon: <User size={28} className="text-white" />, gradient: 'from-slate-600 to-zinc-800' },
  { id: 'snake', label: 'Snake', icon: <Gamepad2 size={28} className="text-white" />, gradient: 'from-emerald-500 to-teal-700' },
  { id: 'tictactoe', label: 'TicTacToe', icon: <Play size={28} className="text-white" />, gradient: 'from-purple-600 to-pink-600' },
  { id: 'terminal', label: 'Terminal', icon: <TermIcon size={28} className="text-white" />, gradient: 'from-zinc-700 to-black' },
  { id: 'vscode', label: 'VS Code', icon: <Code size={28} className="text-white" />, gradient: 'from-blue-600 to-indigo-700' },
  { id: 'notes', label: 'Notes', icon: <Edit3 size={28} className="text-white" />, gradient: 'from-amber-400 to-yellow-600' },
  { id: 'spotify', label: 'Spotify', icon: <Music size={28} className="text-white" />, gradient: 'from-green-500 to-emerald-700' },
  { id: 'mail', label: 'Mail', icon: <Mail size={28} className="text-white" />, gradient: 'from-blue-400 to-sky-600', badge: '1' },
];

const IOS_DOCK_APPS: IOSAppIcon[] = [
  { id: 'safari', label: 'Safari', icon: <Globe size={26} className="text-white" />, gradient: 'from-sky-400 via-blue-500 to-indigo-600' },
  { id: 'finder', label: 'Projects', icon: <Folder size={26} className="text-white" />, gradient: 'from-blue-500 to-cyan-400' },
  { id: 'snake', label: 'Snake', icon: <Gamepad2 size={26} className="text-white" />, gradient: 'from-emerald-500 to-teal-700' },
  { id: 'mail', label: 'Mail', icon: <Mail size={26} className="text-white" />, gradient: 'from-blue-400 to-sky-600' },
];

interface IOSHomeScreenProps {
  onOpenApp: (appId: string, label: string) => void;
}

export const IOSHomeScreen: React.FC<IOSHomeScreenProps> = ({ onOpenApp }) => {
  return (
    <div className="flex-1 flex flex-col justify-between px-6 pt-2 pb-2 select-none">
      <div className="grid grid-cols-4 gap-x-6 gap-y-5 pt-4">
        {IOS_APPS.map(app => (
          <button
            key={app.id}
            onClick={() => onOpenApp(app.id, app.label)}
            className="flex flex-col items-center gap-1.5 active:scale-90 transition-transform duration-150"
          >
            <div className="relative">
              <div className={`w-[60px] h-[60px] rounded-[14px] bg-gradient-to-br ${app.gradient} flex items-center justify-center shadow-lg shadow-black/30`}>
                {app.icon}
              </div>
              {app.badge && (
                <div className="absolute -top-1 -right-1 min-w-[20px] h-[20px] bg-red-500 rounded-full flex items-center justify-center px-1 border-2 border-black/20">
                  <span className="text-white text-[11px] font-bold">{app.badge}</span>
                </div>
              )}
            </div>
            <span className="text-white text-[11px] font-medium drop-shadow-md leading-tight text-center">
              {app.label}
            </span>
          </button>
        ))}
      </div>

      <div className="flex items-center justify-center gap-1.5 py-3">
        <div className="w-[6px] h-[6px] rounded-full bg-white" />
        <div className="w-[6px] h-[6px] rounded-full bg-white/30" />
        <div className="w-[6px] h-[6px] rounded-full bg-white/30" />
      </div>

      <div className="bg-white/15 backdrop-blur-2xl rounded-[26px] px-4 py-3 flex items-center justify-around border border-white/10 shadow-lg">
        {IOS_DOCK_APPS.map(app => (
          <button
            key={app.id}
            onClick={() => onOpenApp(app.id, app.label)}
            className="active:scale-90 transition-transform duration-150"
          >
            <div className={`w-[52px] h-[52px] rounded-[13px] bg-gradient-to-br ${app.gradient} flex items-center justify-center shadow-md shadow-black/30`}>
              {app.icon}
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};
