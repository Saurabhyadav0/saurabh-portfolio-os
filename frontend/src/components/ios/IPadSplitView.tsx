import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Columns, Grid, Folder, User, Terminal as TermIcon, Code, Mail, Globe, Layers, Briefcase } from 'lucide-react';
import { IOSStatusBar, IOSHomeIndicator } from './IOSStatusBar';
import { SafariContent } from '../apps/SafariContent';
import { FinderContent } from '../apps/FinderContent';
import { AboutContent } from '../apps/AboutContent';
import { TerminalContent } from '../apps/TerminalContent';
import { ExperienceContent } from '../apps/ExperienceContent';
import { SkillsContent } from '../apps/SkillsContent';
import { ContactContent } from '../apps/ContactContent';
import { MailContent } from '../apps/MailContent';

interface IPadSplitViewProps {
  theme: 'dark' | 'light';
  wallpaperUrl: string;
}

export const IPadSplitView: React.FC<IPadSplitViewProps> = ({ theme, wallpaperUrl }) => {
  const [leftApp, setLeftApp] = useState<string>('safari');
  const [rightApp, setRightApp] = useState<string>('terminal');
  const [splitRatio, setSplitRatio] = useState<number>(55); // % width for left panel

  const renderAppContent = (appId: string) => {
    switch (appId) {
      case 'safari': return <SafariContent theme={theme} />;
      case 'finder': return <FinderContent />;
      case 'about': return <AboutContent theme={theme} />;
      case 'experience': return <ExperienceContent />;
      case 'skills': return <SkillsContent />;
      case 'terminal': return <TerminalContent theme={theme} />;
      case 'contact': return <ContactContent />;
      case 'mail': return <MailContent />;
      default: return <SafariContent theme={theme} />;
    }
  };

  const apps = [
    { id: 'safari', label: 'Safari', icon: <Globe size={18} className="text-blue-400" /> },
    { id: 'finder', label: 'Projects', icon: <Folder size={18} className="text-cyan-400" /> },
    { id: 'experience', label: 'Experience', icon: <Briefcase size={18} className="text-purple-400" /> },
    { id: 'skills', label: 'Skills', icon: <Layers size={18} className="text-emerald-400" /> },
    { id: 'about', label: 'About', icon: <User size={18} className="text-emerald-400" /> },
    { id: 'terminal', label: 'Terminal', icon: <TermIcon size={18} className="text-zinc-300" /> },
    { id: 'contact', label: 'Contact', icon: <Mail size={18} className="text-indigo-400" /> },
  ];

  return (
    <div 
      className="h-screen w-screen bg-cover bg-center overflow-hidden flex flex-col font-sans select-none"
      style={{ backgroundImage: `url(${wallpaperUrl})` }}
    >
      {/* iPad Status Bar */}
      <IOSStatusBar />

      {/* iPad Top Control Toolbar */}
      <div className="h-10 bg-black/40 backdrop-blur-2xl px-6 border-b border-white/10 flex items-center justify-between text-white shrink-0">
        <div className="flex items-center gap-2 text-xs font-bold text-indigo-300">
          <Columns size={16} /> iPadOS Split View
        </div>

        {/* Quick App Selectors */}
        <div className="flex items-center gap-4 text-xs">
          <div className="flex items-center gap-1.5">
            <span className="text-zinc-400 text-[11px]">Left:</span>
            <select 
              value={leftApp} 
              onChange={e => setLeftApp(e.target.value)}
              className="bg-zinc-800 text-white px-2 py-0.5 rounded text-xs outline-none border border-white/10"
            >
              {apps.map(a => <option key={a.id} value={a.id}>{a.label}</option>)}
            </select>
          </div>

          <div className="flex items-center gap-1.5">
            <span className="text-zinc-400 text-[11px]">Right:</span>
            <select 
              value={rightApp} 
              onChange={e => setRightApp(e.target.value)}
              className="bg-zinc-800 text-white px-2 py-0.5 rounded text-xs outline-none border border-white/10"
            >
              {apps.map(a => <option key={a.id} value={a.id}>{a.label}</option>)}
            </select>
          </div>
        </div>
      </div>

      {/* Main Split View Container */}
      <div className="flex-1 flex overflow-hidden p-3 gap-2 relative">
        {/* Left App Pane */}
        <div 
          className="h-full rounded-2xl overflow-hidden border border-white/10 bg-[#18181b] shadow-2xl flex flex-col"
          style={{ width: `${splitRatio}%` }}
        >
          <div className="h-8 bg-zinc-900 px-3 flex items-center justify-between border-b border-white/5 text-xs text-zinc-300 font-semibold shrink-0">
            <span>{apps.find(a => a.id === leftApp)?.label}</span>
          </div>
          <div className="flex-1 overflow-auto">
            {renderAppContent(leftApp)}
          </div>
        </div>

        {/* Split Divider Bar */}
        <div 
          className="w-2 bg-white/20 hover:bg-indigo-500 rounded-full cursor-col-resize self-center h-24 transition-colors flex items-center justify-center shrink-0"
          onMouseDown={(e) => {
            const startX = e.clientX;
            const startRatio = splitRatio;
            const onMouseMove = (moveEvent: MouseEvent) => {
              const delta = moveEvent.clientX - startX;
              const newRatio = Math.min(75, Math.max(25, startRatio + (delta / window.innerWidth) * 100));
              setSplitRatio(newRatio);
            };
            const onMouseUp = () => {
              document.removeEventListener('mousemove', onMouseMove);
              document.removeEventListener('mouseup', onMouseUp);
            };
            document.addEventListener('mousemove', onMouseMove);
            document.addEventListener('mouseup', onMouseUp);
          }}
        />

        {/* Right App Pane */}
        <div 
          className="h-full flex-1 rounded-2xl overflow-hidden border border-white/10 bg-[#18181b] shadow-2xl flex flex-col"
        >
          <div className="h-8 bg-zinc-900 px-3 flex items-center justify-between border-b border-white/5 text-xs text-zinc-300 font-semibold shrink-0">
            <span>{apps.find(a => a.id === rightApp)?.label}</span>
          </div>
          <div className="flex-1 overflow-auto">
            {renderAppContent(rightApp)}
          </div>
        </div>
      </div>

      {/* Home Indicator */}
      <IOSHomeIndicator dark={true} />
    </div>
  );
};
