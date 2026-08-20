import React, { useState } from 'react';
import { Folder, Award, FileText, ExternalLink, Briefcase, Code, Layers, User } from 'lucide-react';
import { RESUME_DATA } from '@/data/resume';

export const FinderContent: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'projects' | 'experience' | 'stack' | 'certifications'>('projects');

  return (
    <div className="h-full flex flex-col md:flex-row overflow-hidden bg-[#18181b] text-zinc-100 font-sans select-text">
      {/* Sidebar */}
      <div className="w-full md:w-52 bg-zinc-900/90 p-4 border-b md:border-b-0 md:border-r border-zinc-800 shrink-0 flex md:block gap-4 overflow-x-auto text-xs">
        <div className="min-w-fit">
          <p className="text-[10px] uppercase tracking-widest text-zinc-500 font-bold mb-3 hidden md:block">Favorites</p>
          <div className="flex md:block gap-2 md:space-y-1">
            <button 
              onClick={() => setActiveTab('projects')}
              className={`w-full flex items-center gap-2 px-2.5 py-1.5 rounded-lg font-medium transition-colors whitespace-nowrap text-left ${
                activeTab === 'projects' ? 'bg-indigo-600 text-white' : 'text-zinc-400 hover:text-white hover:bg-white/5'
              }`}
            >
              <Folder size={14} className="text-blue-400" /> Projects ({RESUME_DATA.projects.length})
            </button>
            <button 
              onClick={() => setActiveTab('experience')}
              className={`w-full flex items-center gap-2 px-2.5 py-1.5 rounded-lg font-medium transition-colors whitespace-nowrap text-left ${
                activeTab === 'experience' ? 'bg-indigo-600 text-white' : 'text-zinc-400 hover:text-white hover:bg-white/5'
              }`}
            >
              <Briefcase size={14} className="text-purple-400" /> Experience ({RESUME_DATA.experiences.length})
            </button>
            <button 
              onClick={() => setActiveTab('stack')}
              className={`w-full flex items-center gap-2 px-2.5 py-1.5 rounded-lg font-medium transition-colors whitespace-nowrap text-left ${
                activeTab === 'stack' ? 'bg-indigo-600 text-white' : 'text-zinc-400 hover:text-white hover:bg-white/5'
              }`}
            >
              <Layers size={14} className="text-emerald-400" /> Tech Stack
            </button>
            <button 
              onClick={() => setActiveTab('certifications')}
              className={`w-full flex items-center gap-2 px-2.5 py-1.5 rounded-lg font-medium transition-colors whitespace-nowrap text-left ${
                activeTab === 'certifications' ? 'bg-indigo-600 text-white' : 'text-zinc-400 hover:text-white hover:bg-white/5'
              }`}
            >
              <Award size={14} className="text-amber-400" /> Certification
            </button>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 p-6 overflow-auto custom-scrollbar">
        {activeTab === 'projects' && (
          <div className="space-y-6">
            <div className="flex items-center justify-between border-b border-zinc-800 pb-3">
              <h2 className="text-base font-bold text-white flex items-center gap-2">
                <Folder size={16} className="text-blue-400" /> Production Projects & Repositories
              </h2>
              <span className="text-xs text-zinc-500 font-mono">{RESUME_DATA.projects.length} Items</span>
            </div>

            <div className="grid grid-cols-1 gap-4">
              {RESUME_DATA.projects.map(p => (
                <div key={p.id} className="bg-zinc-900/60 rounded-xl p-5 border border-zinc-800 hover:border-zinc-700 transition-colors">
                  <div className="flex items-start justify-between mb-3 gap-2">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 bg-indigo-600/20 text-indigo-400 rounded-lg flex items-center justify-center shrink-0">
                        <Folder size={18} />
                      </div>
                      <div>
                        <h3 className="font-bold text-sm">{p.title}</h3>
                        <p className="text-xs text-emerald-400 font-semibold">{p.status}</p>
                      </div>
                    </div>
                    <span className="text-xs text-zinc-500 font-mono shrink-0">{p.date}</span>
                  </div>
                  
                  <p className="text-xs text-zinc-300 mb-3 whitespace-pre-line leading-relaxed">{p.description}</p>
                  
                  {p.chips && (
                    <div className="flex flex-wrap gap-1.5 mb-3">
                      {p.chips.map((c, i) => (
                        <span key={i} className="px-2 py-0.5 text-[10px] bg-zinc-800 text-zinc-300 rounded border border-zinc-700">
                          {c}
                        </span>
                      ))}
                    </div>
                  )}

                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {p.stack.map(s => (
                      <span key={s} className="px-2 py-0.5 text-[10px] bg-indigo-500/10 text-indigo-300 rounded-full border border-indigo-500/20">
                        {s}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4 pt-2 border-t border-zinc-800/60 text-xs">
                    {p.github && (
                      <a href={p.github} target="_blank" rel="noopener noreferrer" className="text-indigo-400 hover:underline flex items-center gap-1">
                        GitHub Repo <ExternalLink size={10} />
                      </a>
                    )}
                    {p.live && (
                      <a href={p.live} target="_blank" rel="noopener noreferrer" className="text-emerald-400 hover:underline flex items-center gap-1">
                        Live Preview <ExternalLink size={10} />
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'experience' && (
          <div className="space-y-6">
            <div className="flex items-center justify-between border-b border-zinc-800 pb-3">
              <h2 className="text-base font-bold text-white flex items-center gap-2">
                <Briefcase size={16} className="text-purple-400" /> Work & Internships History
              </h2>
              <span className="text-xs text-zinc-500 font-mono">{RESUME_DATA.experiences.length} Roles</span>
            </div>

            <div className="space-y-4">
              {RESUME_DATA.experiences.map(exp => (
                <div key={exp.id} className="bg-zinc-900/60 rounded-xl p-5 border border-zinc-800 space-y-3">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-bold text-sm text-white">{exp.role}</h3>
                      <p className="text-xs text-indigo-400 font-semibold">{exp.company}</p>
                    </div>
                    <span className="text-xs text-zinc-500 font-mono">{exp.period}</span>
                  </div>
                  <p className="text-xs text-zinc-300 leading-relaxed">{exp.description}</p>
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {exp.chips.map((c, idx) => (
                      <span key={idx} className="px-2 py-0.5 text-[10px] bg-zinc-800 text-zinc-300 rounded border border-zinc-700">
                        {c}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'stack' && (
          <div className="space-y-6">
            <div className="flex items-center justify-between border-b border-zinc-800 pb-3">
              <h2 className="text-base font-bold text-white flex items-center gap-2">
                <Layers size={16} className="text-emerald-400" /> Complete Technology Matrix
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {RESUME_DATA.techStackGroups.map(grp => (
                <div key={grp.name} className="bg-zinc-900/60 rounded-xl p-4 border border-zinc-800 space-y-2">
                  <h3 className="text-xs font-bold text-indigo-400 uppercase tracking-wider">{grp.name}</h3>
                  <div className="flex flex-wrap gap-1.5">
                    {grp.items.map(item => (
                      <span key={item} className="px-2 py-0.5 text-[11px] bg-indigo-500/10 text-indigo-300 rounded border border-indigo-500/20">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'certifications' && (
          <div className="space-y-6">
            <div className="flex items-center justify-between border-b border-zinc-800 pb-3">
              <h2 className="text-base font-bold text-white flex items-center gap-2">
                <Award size={16} className="text-amber-400" /> Credentials & Certifications
              </h2>
            </div>

            <div className="bg-zinc-900/60 rounded-xl p-6 border border-zinc-800 flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <h3 className="font-bold text-sm text-white">{RESUME_DATA.certification.title}</h3>
                <p className="text-xs text-zinc-400 mt-1">{RESUME_DATA.certification.school} • {RESUME_DATA.certification.period}</p>
              </div>
              <a 
                href={RESUME_DATA.certification.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-4 py-2 bg-amber-500 hover:bg-amber-400 text-black font-bold text-xs rounded-full transition-colors flex items-center justify-center gap-1 uppercase tracking-wider shrink-0"
              >
                View Credential <ExternalLink size={12} />
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
