import React, { useState } from 'react';
import { Github, Linkedin, Mail, MapPin, Sparkles, Award, Briefcase, GraduationCap, Cpu } from 'lucide-react';
import { RESUME_DATA } from '@/data/resume';
import { Theme } from '@/types';

interface AboutContentProps {
  theme?: Theme;
  onOpenApp?: (appId: string, label: string) => void;
}

export const AboutContent: React.FC<AboutContentProps> = ({ theme = 'dark', onOpenApp }) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'internships' | 'education' | 'certifications'>('overview');

  return (
    <div className={`h-full flex flex-col font-sans select-text ${
      theme === 'dark' ? 'bg-[#18181b] text-white' : 'bg-white text-zinc-900'
    }`}>
      {/* About This Mac Tabs */}
      <div className={`flex justify-center gap-1 p-2 border-b shrink-0 text-xs font-semibold ${
        theme === 'dark' ? 'bg-zinc-900 border-zinc-800' : 'bg-zinc-100 border-zinc-200'
      }`}>
        <button 
          onClick={() => setActiveTab('overview')}
          className={`px-3 py-1 rounded-lg transition-all ${
            activeTab === 'overview' ? 'bg-indigo-600 text-white shadow-sm' : 'text-zinc-400 hover:text-white'
          }`}
        >
          Overview
        </button>
        <button 
          onClick={() => setActiveTab('internships')}
          className={`px-3 py-1 rounded-lg transition-all ${
            activeTab === 'internships' ? 'bg-indigo-600 text-white shadow-sm' : 'text-zinc-400 hover:text-white'
          }`}
        >
          Internships ({RESUME_DATA.experiences.length})
        </button>
        <button 
          onClick={() => setActiveTab('education')}
          className={`px-3 py-1 rounded-lg transition-all ${
            activeTab === 'education' ? 'bg-indigo-600 text-white shadow-sm' : 'text-zinc-400 hover:text-white'
          }`}
        >
          Education
        </button>
        <button 
          onClick={() => setActiveTab('certifications')}
          className={`px-3 py-1 rounded-lg transition-all ${
            activeTab === 'certifications' ? 'bg-indigo-600 text-white shadow-sm' : 'text-zinc-400 hover:text-white'
          }`}
        >
          Certification
        </button>
      </div>

      {/* Main Tab Content */}
      <div className="flex-1 p-6 md:p-8 overflow-auto custom-scrollbar">
        {activeTab === 'overview' && (
          <div className="flex flex-col items-center text-center max-w-lg mx-auto space-y-4">
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-tr from-indigo-600 via-purple-600 to-emerald-500 shadow-2xl flex items-center justify-center text-white text-3xl font-black border border-white/20">
              {RESUME_DATA.name.split(' ').map(n => n[0]).join('')}
            </div>
            <div>
              <h1 className="text-2xl font-black">{RESUME_DATA.name}</h1>
              <p className="text-xs font-semibold text-indigo-400 mt-0.5">{RESUME_DATA.role}</p>
              <p className="text-[11px] opacity-75 mt-1 flex items-center justify-center gap-1">
                <MapPin size={12} /> {RESUME_DATA.location}
              </p>
            </div>

            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-indigo-500/10 text-indigo-300 border border-indigo-500/20">
              <Sparkles size={12} /> {RESUME_DATA.education}
            </div>

            <p className="text-xs opacity-80 leading-relaxed text-center">
              {RESUME_DATA.summary}
            </p>

            <div className="grid grid-cols-3 gap-2.5 w-full pt-2">
              {RESUME_DATA.stats.slice(0, 3).map((st, i) => (
                <div key={i} className="p-2.5 rounded-xl bg-zinc-900/60 border border-zinc-800 text-center">
                  <p className="text-lg font-black text-indigo-400">{st.value}</p>
                  <p className="text-[9px] opacity-70 font-semibold">{st.label}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'internships' && (
          <div className="space-y-4">
            {RESUME_DATA.experiences.map(exp => (
              <div key={exp.id} className="p-4 rounded-xl bg-zinc-900/60 border border-zinc-800 space-y-2">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-bold text-sm text-white">{exp.role}</h3>
                    <p className="text-xs text-indigo-400 font-semibold">{exp.company}</p>
                  </div>
                  <span className="text-xs text-zinc-500 font-mono">{exp.period}</span>
                </div>
                <p className="text-xs text-zinc-300 leading-relaxed">{exp.description}</p>
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {exp.chips.map((c, i) => (
                    <span key={i} className="px-2 py-0.5 text-[10px] bg-zinc-800 text-zinc-300 rounded border border-zinc-700">
                      {c}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'education' && (
          <div className="space-y-4">
            <div className="p-5 rounded-2xl bg-zinc-900/60 border border-zinc-800 space-y-2">
              <div className="flex items-center gap-3 text-indigo-400">
                <GraduationCap size={24} />
                <div>
                  <h3 className="font-bold text-sm text-white">B.Tech in Artificial Intelligence & Machine Learning</h3>
                  <p className="text-xs text-zinc-400">Maharshi Dayanand University, Haryana (Expected 2027)</p>
                </div>
              </div>
              <p className="text-xs text-zinc-300 pt-2 border-t border-zinc-800 leading-relaxed">
                Final year student specializing in intelligent automation, database architecture, and machine learning pipelines.
              </p>
            </div>
          </div>
        )}

        {activeTab === 'certifications' && (
          <div className="p-5 rounded-2xl bg-zinc-900/60 border border-zinc-800 space-y-3">
            <div className="flex items-center gap-3 text-amber-400">
              <Award size={24} />
              <div>
                <h3 className="font-bold text-sm text-white">{RESUME_DATA.certification.title}</h3>
                <p className="text-xs text-zinc-400">{RESUME_DATA.certification.school} • {RESUME_DATA.certification.period}</p>
              </div>
            </div>
            <a 
              href={RESUME_DATA.certification.link} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-block px-4 py-2 bg-amber-500 text-black font-bold text-xs rounded-full hover:bg-amber-400 transition-colors uppercase tracking-wider"
            >
              View Credential ↗
            </a>
          </div>
        )}
      </div>
    </div>
  );
};
