import React, { useState } from 'react';
import { Layers, Cpu, Database, ShieldCheck, Wrench, Code } from 'lucide-react';
import { RESUME_DATA } from '@/data/resume';

interface ProficiencySkill {
  name: string;
  level: number; // 0 - 100
  tier: 'Expert' | 'Advanced' | 'Intermediate';
  projects: string;
}

const SKILL_PROFICIENCY: ProficiencySkill[] = [
  { name: 'Node.js & Express.js', level: 92, tier: 'Expert', projects: 'Docs (Real-Time Editor), FarAlpha microservices' },
  { name: 'TypeScript & JavaScript', level: 92, tier: 'Expert', projects: 'All 5 Production Projects' },
  { name: 'Next.js & React', level: 90, tier: 'Advanced', projects: 'SoarX Community Platform, Activerse, Replay.AI' },
  { name: 'PostgreSQL, MongoDB & Redis', level: 85, tier: 'Advanced', projects: 'FarAlpha caching, CockroachDB/NeonDB projects' },
  { name: 'Python, PyTorch & OpenCV', level: 82, tier: 'Advanced', projects: 'Deepfake Detection System (ResNet50)' },
  { name: 'AWS & Docker', level: 80, tier: 'Advanced', projects: 'Docs (Real-Time Editor) — EC2, Nginx' },
  { name: 'LLM Integration & AI Agents', level: 80, tier: 'Advanced', projects: 'Docs (Real-Time Editor), DatenStrom-3AG chatbots' },
  { name: 'Tailwind, Redux Toolkit & Zustand', level: 85, tier: 'Advanced', projects: 'Replay.AI, Activerse, SoarX' },
];

export const SkillsContent: React.FC = () => {
  const [activeGroup, setActiveGroup] = useState<string>('All');

  return (
    <div className="h-full flex flex-col overflow-hidden bg-[#18181b] text-white font-sans select-text">
      {/* Activity Monitor Header Tabs */}
      <div className="p-3 bg-zinc-900 border-b border-zinc-800 flex flex-wrap gap-2 shrink-0">
        {['All', ...RESUME_DATA.techStackGroups.map(g => g.name)].map(grp => (
          <button
            key={grp}
            onClick={() => setActiveGroup(grp)}
            className={`px-3 py-1 rounded-lg text-xs font-semibold transition-all ${
              activeGroup === grp ? 'bg-indigo-600 text-white' : 'text-zinc-400 hover:text-white hover:bg-white/5'
            }`}
          >
            {grp}
          </button>
        ))}
      </div>

      {/* Main Content Area */}
      <div className="flex-1 p-6 overflow-auto custom-scrollbar space-y-6">
        {/* Core Proficiency Bars */}
        {activeGroup === 'All' && (
          <div className="space-y-4 bg-zinc-900/60 p-5 rounded-2xl border border-zinc-800">
            <h2 className="text-xs uppercase tracking-wider text-indigo-400 font-bold flex items-center gap-2">
              <Cpu size={14} /> Systems Proficiency & Production Usage
            </h2>

            <div className="space-y-3">
              {SKILL_PROFICIENCY.map((sk, idx) => (
                <div key={idx} className="space-y-1">
                  <div className="flex justify-between items-center text-xs">
                    <span className="font-bold text-white">{sk.name}</span>
                    <span className="text-zinc-400 font-mono text-[11px]">{sk.tier} • Used in: {sk.projects}</span>
                  </div>
                  <div className="w-full h-2 bg-zinc-800 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-indigo-500 via-purple-500 to-emerald-400 rounded-full"
                      style={{ width: `${sk.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Grouped Stack Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {RESUME_DATA.techStackGroups
            .filter(grp => activeGroup === 'All' || activeGroup === grp.name)
            .map(grp => (
              <div key={grp.name} className="p-4 rounded-xl bg-zinc-900/40 border border-zinc-800 space-y-2">
                <h3 className="text-xs font-bold text-emerald-400 uppercase tracking-wider flex items-center gap-2">
                  <Code size={13} /> {grp.name}
                </h3>
                <div className="flex flex-wrap gap-1.5">
                  {grp.items.map(item => (
                    <span key={item} className="px-2.5 py-1 text-xs bg-indigo-500/10 text-indigo-300 rounded-lg border border-indigo-500/20 font-medium">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};
