import React, { useState } from 'react';
import { 
  ArrowLeft, ArrowRight, RotateCcw, Lock, Github, Linkedin, Mail, Phone, 
  ExternalLink, Award, Code, Briefcase, Cpu, Layers, Sparkles, Terminal, 
  CheckCircle2, Server, Database, ShieldCheck, Wrench, ChevronRight
} from 'lucide-react';
import { RESUME_DATA } from '@/data/resume';
import { Theme } from '@/types';

interface SafariContentProps {
  theme?: Theme;
}

export const SafariContent: React.FC<SafariContentProps> = ({ theme = 'dark' }) => {
  const [url, setUrl] = useState('saurabhyadav.dev');
  const [view, setView] = useState<'google' | 'search-results' | 'portfolio'>('portfolio'); 
  const [activeTechGroup, setActiveTechGroup] = useState<string>('All');
  const [activeProjectFilter, setActiveProjectFilter] = useState<string>('All');

  const handleSearch = (q: string) => {
    const query = (q || '').toLowerCase();
    if (query.includes('saurabhyadav.dev') || query.includes('portfolio')) {
      setView('portfolio');
      setUrl('saurabhyadav.dev');
    } else {
      setView('search-results');
      setUrl(`google.com/search?q=${encodeURIComponent(query)}`);
    }
  };

  const projectTags = ['All', 'Production', 'Frontend', 'Backend', 'AI/ML'];

  const filteredProjects = RESUME_DATA.projects.filter(p => {
    if (activeProjectFilter === 'All') return true;
    return p.tags.includes(activeProjectFilter);
  });

  return (
    <div className={`h-full flex flex-col overflow-hidden font-sans select-text ${
      theme === 'dark' ? 'bg-[#0a0a0a] text-zinc-100' : 'bg-zinc-50 text-zinc-900'
    }`}>
      {/* Browser Navigation Bar */}
      <div className={`p-2 flex items-center gap-2 shrink-0 border-b ${
        theme === 'dark' ? 'bg-[#18181b] border-zinc-800' : 'bg-zinc-200 border-zinc-300'
      }`}>
        <div className="flex gap-1.5 items-center pl-1">
          <button 
            onClick={() => setView('google')} 
            className="p-1 rounded hover:bg-white/10 opacity-70 hover:opacity-100 transition-opacity"
            title="Google Search"
          >
            <ArrowLeft size={14} />
          </button>
          <button className="p-1 rounded opacity-30 cursor-not-allowed">
            <ArrowRight size={14} />
          </button>
          <button 
            onClick={() => handleSearch(url)} 
            className="p-1 rounded hover:bg-white/10 opacity-70 hover:opacity-100 transition-opacity"
            title="Reload Page"
          >
            <RotateCcw size={14} />
          </button>
        </div>

        {/* URL Input Box */}
        <div className={`flex-1 flex items-center rounded-lg px-3 py-1 text-xs font-mono ${
          theme === 'dark' ? 'bg-zinc-900 text-zinc-200 border border-zinc-700/50' : 'bg-white text-zinc-800 border border-zinc-300'
        }`}>
          <Lock size={12} className="text-emerald-500 mr-2 shrink-0" />
          <input 
            value={url} 
            onChange={(e) => setUrl(e.target.value)} 
            onKeyDown={e => e.key === 'Enter' && handleSearch(url)} 
            className="flex-1 outline-none truncate bg-transparent text-center"
          />
        </div>

        {/* Quick Nav Badges */}
        <div className="hidden sm:flex gap-1">
          <button 
            onClick={() => { setView('portfolio'); setUrl('saurabhyadav.dev'); }}
            className={`px-2.5 py-1 rounded text-[11px] font-semibold transition-all ${
              view === 'portfolio' ? 'bg-indigo-600 text-white' : 'hover:bg-white/10 opacity-70'
            }`}
          >
            Portfolio
          </button>
          <button 
            onClick={() => { setView('google'); setUrl('google.com'); }}
            className={`px-2.5 py-1 rounded text-[11px] font-semibold transition-all ${
              view === 'google' ? 'bg-indigo-600 text-white' : 'hover:bg-white/10 opacity-70'
            }`}
          >
            Google
          </button>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 overflow-auto custom-scrollbar">
        {view === 'google' ? (
          /* Google Search View */
          <div className="flex flex-col items-center justify-center min-h-full gap-6 p-8 text-center">
            <h1 className="text-5xl font-black tracking-tight bg-gradient-to-r from-blue-500 via-red-500 to-yellow-500 bg-clip-text text-transparent">
              Google
            </h1>
            <div className="w-full max-w-md relative">
              <input 
                placeholder="Search Saurabh Yadav, Projects, Skills..." 
                className={`w-full px-5 py-3 rounded-full border text-sm shadow-lg outline-none transition-all ${
                  theme === 'dark' ? 'bg-zinc-800 border-zinc-700 text-white focus:border-blue-500' : 'bg-white border-zinc-300 text-black'
                }`}
                onKeyDown={e => e.key === 'Enter' && handleSearch((e.target as HTMLInputElement).value)}
              />
            </div>
            <div className="flex gap-3 text-xs opacity-70">
              <button onClick={() => handleSearch('saurabhyadav.dev')} className="px-3 py-1.5 rounded bg-zinc-800 hover:bg-zinc-700">
                Search "Saurabh Yadav"
              </button>
              <button onClick={() => { setView('portfolio'); setUrl('saurabhyadav.dev'); }} className="px-3 py-1.5 rounded bg-blue-600 text-white hover:bg-blue-500">
                I'm Feeling Lucky
              </button>
            </div>
          </div>
        ) : view === 'search-results' ? (
          /* Search Results View */
          <div className="p-6 max-w-3xl mx-auto space-y-6">
            <p className="text-xs opacity-50 font-mono">About 5 results (0.12 seconds)</p>
            <div 
              onClick={() => { setView('portfolio'); setUrl('saurabhyadav.dev'); }} 
              className="cursor-pointer group p-4 rounded-xl hover:bg-white/5 transition-colors border border-transparent hover:border-zinc-800"
            >
              <p className="text-xs text-emerald-400 font-mono mb-1">https://saurabhyadav.dev</p>
              <h3 className="text-lg font-bold text-blue-400 group-hover:underline">
                Saurabh Yadav — Full-Stack Engineer & AI Systems Developer
              </h3>
              <p className="text-xs opacity-75 mt-1 leading-relaxed">
                Final year B.Tech AI-ML engineer with 2 active internships and production SaaS experience. Building systems at the intersection of software engineering and intelligent automation.
              </p>
            </div>
          </div>
        ) : (
          /* Portfolio Master Website View */
          <div className="space-y-16 pb-20">
            
            {/* HERO SECTION */}
            <section className="relative pt-12 pb-16 px-6 md:px-12 text-center max-w-5xl mx-auto overflow-hidden">
              {/* Background Glow */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-indigo-600/15 rounded-full blur-3xl pointer-events-none" />
              
              <div className="relative z-10 space-y-6">
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                  <Sparkles size={13} /> B.Tech AI-ML, Class of 2027 · Open To Opportunities
                </span>

                <h1 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight leading-tight">
                  I build systems that <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-emerald-400 bg-clip-text text-transparent">think, scale, and ship.</span>
                </h1>

                <p className="text-sm sm:text-base md:text-lg font-semibold opacity-90 max-w-2xl mx-auto text-indigo-300">
                  {RESUME_DATA.subheadline}
                </p>

                <p className="text-xs sm:text-sm md:text-base opacity-75 max-w-3xl mx-auto leading-relaxed">
                  {RESUME_DATA.summary}
                </p>

                {/* CTAs */}
                <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
                  <a 
                    href="#projects" 
                    className="px-6 py-3 rounded-full bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs sm:text-sm transition-all shadow-lg shadow-indigo-600/30 flex items-center gap-2"
                  >
                    View My Work <ChevronRight size={16} />
                  </a>
                  <a 
                    href={`mailto:${RESUME_DATA.contact.email}`}
                    className="px-6 py-3 rounded-full bg-zinc-800 hover:bg-zinc-700 text-white font-bold text-xs sm:text-sm transition-all border border-zinc-700 flex items-center gap-2"
                  >
                    <Mail size={16} /> Let's Talk
                  </a>
                </div>
              </div>
            </section>

            {/* STATS BAR */}
            <section className="px-6 max-w-6xl mx-auto">
              <div className={`grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 p-6 rounded-2xl border ${
                theme === 'dark' ? 'bg-zinc-900/80 border-zinc-800' : 'bg-white border-zinc-200 shadow-md'
              }`}>
                {RESUME_DATA.stats.map((st, i) => (
                  <div key={i} className="text-center p-3">
                    <p className="text-3xl sm:text-4xl font-black text-indigo-400 tracking-tight">{st.value}</p>
                    <p className="text-xs font-bold mt-1 opacity-90">{st.label}</p>
                    <p className="text-[10px] opacity-50 uppercase tracking-wider">{st.sublabel}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* ABOUT SECTION */}
            <section className="px-6 max-w-5xl mx-auto space-y-6">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-xl bg-indigo-500/10 text-indigo-400">
                  <Cpu size={20} />
                </div>
                <h2 className="text-2xl sm:text-3xl font-black tracking-tight">{RESUME_DATA.aboutHeading}</h2>
              </div>

              <div className={`p-6 sm:p-8 rounded-2xl border leading-relaxed space-y-4 text-xs sm:text-sm opacity-85 ${
                theme === 'dark' ? 'bg-zinc-900/60 border-zinc-800' : 'bg-white border-zinc-200 shadow-sm'
              }`}>
                {RESUME_DATA.aboutBody.split('\n\n').map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>
            </section>

            {/* TECH STACK SECTION */}
            <section className="px-6 max-w-5xl mx-auto space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-xl bg-emerald-500/10 text-emerald-400">
                    <Layers size={20} />
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-black tracking-tight">What I Build With</h2>
                </div>

                {/* Tech Filters */}
                <div className="flex flex-wrap gap-1.5 bg-zinc-900/60 p-1.5 rounded-xl border border-zinc-800">
                  {['All', ...RESUME_DATA.techStackGroups.map(g => g.name)].map(grpName => (
                    <button 
                      key={grpName}
                      onClick={() => setActiveTechGroup(grpName)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                        activeTechGroup === grpName 
                          ? 'bg-indigo-600 text-white shadow-md' 
                          : 'text-zinc-400 hover:text-white hover:bg-white/5'
                      }`}
                    >
                      {grpName}
                    </button>
                  ))}
                </div>
              </div>

              {/* Grouped Stack Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {RESUME_DATA.techStackGroups
                  .filter(grp => activeTechGroup === 'All' || activeTechGroup === grp.name)
                  .map(grp => (
                    <div key={grp.name} className={`p-5 rounded-2xl border space-y-3 ${
                      theme === 'dark' ? 'bg-zinc-900/50 border-zinc-800' : 'bg-white border-zinc-200 shadow-sm'
                    }`}>
                      <h3 className="text-xs font-bold uppercase tracking-wider text-indigo-400 flex items-center gap-2">
                        <Code size={14} /> {grp.name}
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {grp.items.map(item => (
                          <span key={item} className="px-2.5 py-1 text-xs font-medium bg-indigo-500/10 text-indigo-300 rounded-lg border border-indigo-500/20">
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
              </div>
            </section>

            {/* EXPERIENCE SECTION */}
            <section className="px-6 max-w-5xl mx-auto space-y-8">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-xl bg-purple-500/10 text-purple-400">
                  <Briefcase size={20} />
                </div>
                <h2 className="text-2xl sm:text-3xl font-black tracking-tight">Engineering Experience</h2>
              </div>

              <div className="space-y-6">
                {RESUME_DATA.experiences.map(exp => (
                  <div key={exp.id} className={`p-6 sm:p-8 rounded-2xl border space-y-4 ${
                    theme === 'dark' ? 'bg-zinc-900/60 border-zinc-800' : 'bg-white border-zinc-200 shadow-sm'
                  }`}>
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-zinc-800/60 pb-4">
                      <div>
                        <div className="flex items-center gap-2">
                          <h3 className="text-lg sm:text-xl font-bold">{exp.role}</h3>
                          <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
                            {exp.tag}
                          </span>
                        </div>
                        <p className="text-xs sm:text-sm font-semibold text-indigo-400 mt-0.5">{exp.company}</p>
                      </div>
                      <span className="text-xs opacity-50 font-mono">{exp.period}</span>
                    </div>

                    <p className="text-xs sm:text-sm opacity-80 leading-relaxed">{exp.description}</p>

                    {/* Metric Chips */}
                    <div className="flex flex-wrap gap-2 pt-2">
                      {exp.chips.map((chip, idx) => (
                        <span key={idx} className="px-2.5 py-1 text-xs font-semibold bg-zinc-800 text-zinc-300 rounded-md border border-zinc-700">
                          {chip}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* PROJECTS SECTION */}
            <section id="projects" className="px-6 max-w-5xl mx-auto space-y-8">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-xl bg-amber-500/10 text-amber-400">
                    <Server size={20} />
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-black tracking-tight">Featured Projects</h2>
                </div>

                {/* Project Filter Pills */}
                <div className="flex flex-wrap gap-1.5 bg-zinc-900/60 p-1.5 rounded-xl border border-zinc-800">
                  {projectTags.map(tag => (
                    <button 
                      key={tag}
                      onClick={() => setActiveProjectFilter(tag)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                        activeProjectFilter === tag 
                          ? 'bg-indigo-600 text-white shadow-md' 
                          : 'text-zinc-400 hover:text-white hover:bg-white/5'
                      }`}
                    >
                      {tag}
                    </button>
                  ))}
                </div>
              </div>

              {/* Projects Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredProjects.map(proj => (
                  <div 
                    key={proj.id} 
                    className={`p-6 rounded-2xl border flex flex-col justify-between space-y-4 transition-all hover:border-indigo-500/50 ${
                      proj.featured ? 'md:col-span-2 border-indigo-500/30 bg-gradient-to-br from-indigo-950/20 via-zinc-900/80 to-zinc-900/60' : 'bg-zinc-900/60 border-zinc-800'
                    }`}
                  >
                    <div className="space-y-3">
                      <div className="flex items-start justify-between gap-2">
                        <div className="space-y-1">
                          <div className="flex flex-wrap items-center gap-2">
                            <h3 className="text-lg font-bold">{proj.title}</h3>
                            {proj.featured && (
                              <span className="px-2 py-0.5 rounded text-[10px] font-black uppercase tracking-wider bg-amber-500 text-black">
                                ⭐ Featured
                              </span>
                            )}
                          </div>
                          <p className="text-xs text-emerald-400 font-semibold">{proj.status}</p>
                        </div>
                        <span className="text-xs opacity-50 font-mono shrink-0">{proj.date}</span>
                      </div>

                      {/* Description */}
                      <div className="text-xs sm:text-sm opacity-80 leading-relaxed whitespace-pre-line">
                        {proj.description}
                      </div>
                    </div>

                    <div className="space-y-4 pt-2">
                      {/* Metric Chips */}
                      {proj.chips && proj.chips.length > 0 && (
                        <div className="flex flex-wrap gap-1.5">
                          {proj.chips.map((chip, idx) => (
                            <span key={idx} className="px-2 py-0.5 text-[11px] font-medium bg-zinc-800/80 text-zinc-300 rounded border border-zinc-700/60">
                              {chip}
                            </span>
                          ))}
                        </div>
                      )}

                      {/* Stack Pills */}
                      <div className="flex flex-wrap gap-1.5">
                        {proj.stack.map(tech => (
                          <span key={tech} className="px-2 py-0.5 text-[11px] font-semibold bg-indigo-500/10 text-indigo-300 rounded-full border border-indigo-500/20">
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* Action Links */}
                      <div className="flex items-center gap-4 pt-2 border-t border-zinc-800/50">
                        {proj.github && (
                          <a 
                            href={proj.github} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="flex items-center gap-1.5 text-xs font-bold text-indigo-400 hover:underline"
                          >
                            <Github size={14} /> Repository
                          </a>
                        )}
                        {proj.live && (
                          <a 
                            href={proj.live} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="flex items-center gap-1.5 text-xs font-bold text-emerald-400 hover:underline"
                          >
                            <ExternalLink size={14} /> Live Application
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* HOW I WORK SECTION */}
            <section className="px-6 max-w-5xl mx-auto space-y-6">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-xl bg-blue-500/10 text-blue-400">
                  <ShieldCheck size={20} />
                </div>
                <h2 className="text-2xl sm:text-3xl font-black tracking-tight">How I Work</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {RESUME_DATA.howIWork.map((hw, idx) => (
                  <div key={idx} className={`p-6 rounded-2xl border space-y-3 ${
                    theme === 'dark' ? 'bg-zinc-900/60 border-zinc-800' : 'bg-white border-zinc-200 shadow-sm'
                  }`}>
                    <span className="text-3xl">{hw.icon}</span>
                    <h3 className="font-bold text-base">{hw.title}</h3>
                    <p className="text-xs opacity-75 leading-relaxed">{hw.body}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* OPEN TO WORK SECTION */}
            <section className="px-6 max-w-5xl mx-auto space-y-6">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-xl bg-emerald-500/10 text-emerald-400">
                  <CheckCircle2 size={20} />
                </div>
                <h2 className="text-2xl sm:text-3xl font-black tracking-tight">Currently Open To</h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {RESUME_DATA.openToRoles.map((role, idx) => (
                  <div key={idx} className={`p-5 rounded-xl border space-y-2 ${
                    theme === 'dark' ? 'bg-zinc-900/50 border-zinc-800' : 'bg-white border-zinc-200 shadow-sm'
                  }`}>
                    <h3 className="font-bold text-sm text-indigo-400">{role.title}</h3>
                    <p className="text-xs opacity-75">{role.description}</p>
                  </div>
                ))}
              </div>

              {/* Availability Details Bar */}
              <div className="p-4 rounded-xl bg-indigo-600/10 border border-indigo-500/20 text-xs flex flex-wrap items-center justify-between gap-3 text-indigo-300">
                <span><strong>Open to:</strong> {RESUME_DATA.availability.types}</span>
                <span><strong>Location:</strong> {RESUME_DATA.availability.location}</span>
                <span className="px-2.5 py-1 rounded bg-emerald-500/20 text-emerald-300 font-bold">
                  ● {RESUME_DATA.availability.status}
                </span>
              </div>
            </section>

            {/* CERTIFICATION SECTION */}
            <section className="px-6 max-w-5xl mx-auto space-y-4">
              <div className={`p-6 rounded-2xl border flex flex-col md:flex-row md:items-center justify-between gap-4 ${
                theme === 'dark' ? 'bg-zinc-900/80 border-zinc-800' : 'bg-white border-zinc-200 shadow-sm'
              }`}>
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-xl bg-amber-500/10 text-amber-400 shrink-0">
                    <Award size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-base">{RESUME_DATA.certification.title}</h3>
                    <p className="text-xs opacity-60">{RESUME_DATA.certification.school} • {RESUME_DATA.certification.period}</p>
                  </div>
                </div>
                <a 
                  href={RESUME_DATA.certification.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 bg-amber-500 hover:bg-amber-400 text-black font-bold text-xs rounded-full transition-colors flex items-center justify-center gap-2 shrink-0 uppercase tracking-wider"
                >
                  View Certificate <ExternalLink size={14} />
                </a>
              </div>
            </section>

            {/* CONTACT SECTION */}
            <section className="px-6 max-w-5xl mx-auto text-center space-y-6 pt-6">
              <div className="space-y-2">
                <h2 className="text-3xl font-black tracking-tight">Let's Build Something</h2>
                <p className="text-xs sm:text-sm opacity-70 max-w-lg mx-auto">
                  I'm actively looking for the next opportunity. Whether you're hiring, collaborating, or just want to talk tech — reach out.
                </p>
              </div>

              <div className="flex flex-wrap justify-center gap-4">
                <a 
                  href={`mailto:${RESUME_DATA.contact.email}`}
                  className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs transition-all shadow-lg shadow-indigo-600/20"
                >
                  <Mail size={16} /> {RESUME_DATA.contact.email}
                </a>
                <a 
                  href={RESUME_DATA.contact.linkedin} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs transition-all"
                >
                  <Linkedin size={16} /> LinkedIn Profile
                </a>
                <a 
                  href={RESUME_DATA.contact.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-zinc-800 hover:bg-zinc-700 text-white font-bold text-xs transition-all border border-zinc-700"
                >
                  <Github size={16} /> GitHub (saurabhyadav0)
                </a>
              </div>
            </section>

            {/* FOOTER */}
            <footer className="text-center text-xs opacity-40 pt-10 pb-6 border-t border-zinc-800/60 font-mono">
              <p>Built by Saurabh Yadav · 2026</p>
              <p className="mt-1">{RESUME_DATA.location}</p>
            </footer>

          </div>
        )}
      </div>
    </div>
  );
};
