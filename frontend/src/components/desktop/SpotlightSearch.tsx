import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Folder, Terminal, Globe, User, Briefcase, Code, Mail, Award, ArrowRight } from 'lucide-react';
import { RESUME_DATA } from '@/data/resume';

interface SpotlightSearchProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenApp: (appId: string, label: string) => void;
}

export const SpotlightSearch: React.FC<SpotlightSearchProps> = ({ isOpen, onClose, onOpenApp }) => {
  const [query, setQuery] = useState('');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.code === 'Space') {
        e.preventDefault();
        if (isOpen) onClose();
        else setQuery('');
      } else if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const results = [
    { type: 'App', title: 'Safari — Portfolio Web', appId: 'safari', icon: <Globe size={18} className="text-blue-400" /> },
    { type: 'App', title: 'Finder — Projects & Code', appId: 'finder', icon: <Folder size={18} className="text-cyan-400" /> },
    { type: 'App', title: 'About Me — Developer Profile', appId: 'about', icon: <User size={18} className="text-emerald-400" /> },
    { type: 'App', title: 'Experience — Internships & Roles', appId: 'experience', icon: <Briefcase size={18} className="text-purple-400" /> },
    { type: 'App', title: 'Skills & Tech Matrix', appId: 'skills', icon: <Code size={18} className="text-amber-400" /> },
    { type: 'Game', title: 'Snake Arcade Game 🐍', appId: 'snake', icon: <Terminal size={18} className="text-emerald-400" /> },
    { type: 'Game', title: 'Tic-Tac-Toe AI ❌⭕', appId: 'tictactoe', icon: <Terminal size={18} className="text-purple-400" /> },
    { type: 'App', title: 'Terminal (CLI)', appId: 'terminal', icon: <Terminal size={18} className="text-zinc-300" /> },
    { type: 'App', title: 'Contacts & Direct Mail', appId: 'contact', icon: <Mail size={18} className="text-indigo-400" /> },

    ...RESUME_DATA.projects.map(p => ({
      type: 'Project',
      title: p.title,
      appId: 'finder',
      icon: <Folder size={18} className="text-indigo-400" />
    }))
  ].filter(item => 
    !query || item.title.toLowerCase().includes(query.toLowerCase()) || item.type.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="fixed inset-0 z-[99999] bg-black/40 backdrop-blur-md flex items-start justify-center pt-24 pointer-events-auto" onClick={onClose}>
      <motion.div 
        initial={{ scale: 0.95, opacity: 0, y: -20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.95, opacity: 0, y: -20 }}
        transition={{ type: 'spring', stiffness: 450, damping: 30 }}
        className="w-full max-w-xl bg-[#1e1e1e]/90 text-white border border-white/20 rounded-2xl shadow-[0_25px_80px_rgba(0,0,0,0.7)] backdrop-blur-3xl overflow-hidden font-sans"
        onClick={e => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="flex items-center px-4 py-3.5 border-b border-white/10 gap-3">
          <Search size={22} className="text-zinc-400" />
          <input
            type="text"
            value={query}
            onChange={e => setQuery(e.target.value)}
            placeholder="Spotlight Search (Spotlight Saurabh's apps, projects, skills)..."
            className="flex-1 bg-transparent outline-none text-base font-normal text-white placeholder-zinc-500"
            autoFocus
          />
          <span className="text-[11px] font-semibold bg-white/10 px-2 py-0.5 rounded text-zinc-400">ESC</span>
        </div>

        {/* Search Results list */}
        <div className="max-h-80 overflow-y-auto py-2 custom-scrollbar">
          {results.length > 0 ? (
            results.map((res, i) => (
              <div
                key={i}
                onClick={() => {
                  onOpenApp(res.appId, res.title);
                  onClose();
                }}
                className="flex items-center justify-between px-4 py-2.5 hover:bg-indigo-600/60 cursor-pointer transition-colors group"
              >
                <div className="flex items-center gap-3">
                  {res.icon}
                  <div>
                    <p className="text-sm font-semibold text-white group-hover:text-white">{res.title}</p>
                    <p className="text-[11px] text-zinc-400 group-hover:text-indigo-200">{res.type}</p>
                  </div>
                </div>
                <ArrowRight size={16} className="opacity-0 group-hover:opacity-100 text-white transition-opacity" />
              </div>
            ))
          ) : (
            <div className="p-6 text-center text-xs text-zinc-500 font-mono">
              No Spotlight results for "{query}". Try searching "projects", "skills", or "experience".
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
};
