import React, { useState } from 'react';
import { Briefcase, Building, Calendar, CheckCircle2, ChevronRight, Code } from 'lucide-react';
import { RESUME_DATA } from '@/data/resume';

export const ExperienceContent: React.FC = () => {
  const [selectedId, setSelectedId] = useState<string>(RESUME_DATA.experiences[0].id);

  const selectedExp = RESUME_DATA.experiences.find(e => e.id === selectedId) || RESUME_DATA.experiences[0];

  return (
    <div className="h-full flex flex-col md:flex-row overflow-hidden bg-[#18181b] text-white font-sans select-text">
      {/* Timeline Sidebar */}
      <div className="w-full md:w-64 bg-zinc-900/90 p-4 border-b md:border-b-0 md:border-r border-zinc-800 shrink-0 space-y-3">
        <h2 className="text-xs uppercase tracking-wider text-zinc-400 font-bold px-2">Work Timeline</h2>
        <div className="space-y-1">
          {RESUME_DATA.experiences.map(exp => (
            <button
              key={exp.id}
              onClick={() => setSelectedId(exp.id)}
              className={`w-full p-3 rounded-xl text-left transition-all flex items-center justify-between ${
                selectedId === exp.id ? 'bg-indigo-600 text-white shadow-md' : 'hover:bg-white/5 text-zinc-300'
              }`}
            >
              <div>
                <p className="font-bold text-xs">{exp.role}</p>
                <p className={`text-[11px] font-medium ${selectedId === exp.id ? 'text-indigo-200' : 'text-indigo-400'}`}>
                  {exp.company}
                </p>
              </div>
              <ChevronRight size={14} className={selectedId === exp.id ? 'text-white' : 'text-zinc-600'} />
            </button>
          ))}
        </div>
      </div>

      {/* Detail Panel */}
      <div className="flex-1 p-6 md:p-8 overflow-auto custom-scrollbar space-y-6">
        <div className="border-b border-zinc-800 pb-4 space-y-2">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <h1 className="text-xl md:text-2xl font-black">{selectedExp.role}</h1>
            <span className="px-3 py-1 rounded-full text-xs font-bold bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
              {selectedExp.tag}
            </span>
          </div>
          <div className="flex items-center gap-4 text-xs font-semibold text-indigo-400">
            <span className="flex items-center gap-1"><Building size={14} /> {selectedExp.company}</span>
            <span className="flex items-center gap-1 text-zinc-400 font-mono"><Calendar size={14} /> {selectedExp.period}</span>
          </div>
        </div>

        {/* Description Paragraph */}
        <div className="space-y-3 text-xs md:text-sm text-zinc-300 leading-relaxed bg-zinc-900/60 p-5 rounded-2xl border border-zinc-800">
          <p>{selectedExp.description}</p>
        </div>

        {/* Highlight Metric Badges */}
        <div className="space-y-3">
          <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-400">Engineering Metrics & Scope</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
            {selectedExp.chips.map((chip, idx) => (
              <div key={idx} className="p-3 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-semibold flex items-center gap-2">
                <CheckCircle2 size={14} className="text-indigo-400 shrink-0" />
                <span>{chip}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
