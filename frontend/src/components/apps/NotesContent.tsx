import React, { useState } from 'react';
import { Theme } from '@/types';

interface NotesContentProps {
  theme?: Theme;
}

export const NotesContent: React.FC<NotesContentProps> = ({ theme = 'dark' }) => {
  const [text, setText] = useState(
    `Saurabh's Engineering Notes\n\n──────────────────────\n\n📌 Core Philosophy:\n"Document first, code second."\n"Architecture before features."\n"Ship to learn."\n\n──────────────────────\n\n🚀 Current Focus:\n• Software Engineer Intern @ FarAlpha Technologies\n• Building scalable Python microservices with Redis caching\n• Integrating LLM-powered AI agents into backend systems\n• Head Student Placement Coordinator, UIET MDU\n\n──────────────────────\n\n📊 Systems Shipped:\n• 5 internships across backend, AI & full-stack roles\n• 8+ projects in production (Saarthi TaskEngine, SoarX, Activerse...)\n• Deepfake detection pipeline (PyTorch + ResNet50)\n• Open source contributor — Hacktoberfest 2023 & 2024\n\n──────────────────────\n\n🎯 Looking For:\n• Full-Stack / Backend / SDE roles\n• AI/ML / Gen AI engineer positions\n• Cloud & DevOps opportunities\n• Remote or India-based`
  );

  return (
    <div className={`h-full flex flex-col ${
      theme === 'dark' ? 'bg-[#1c1c1e] text-white' : 'bg-[#FFFEF5] text-zinc-900'
    }`}>
      <div className={`px-4 py-2 text-xs font-semibold border-b flex items-center justify-between ${
        theme === 'dark' ? 'border-white/10 text-zinc-400 bg-[#2c2c2e]' : 'border-amber-200 text-amber-600 bg-amber-50'
      }`}>
        <span>Notes</span>
        <span className="opacity-50">All Notes</span>
      </div>
      <textarea 
        value={text} 
        onChange={(e) => setText(e.target.value)} 
        className="flex-1 p-6 bg-transparent outline-none resize-none text-sm leading-relaxed custom-scrollbar font-mono" 
        spellCheck="false" 
      />
    </div>
  );
};
