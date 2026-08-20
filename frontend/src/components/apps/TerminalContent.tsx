import React, { useState, useRef, useEffect } from 'react';
import { RESUME_DATA } from '@/data/resume';
import { Theme } from '@/types';

interface TerminalContentProps {
  theme?: Theme;
}

interface CommandLog {
  cmd: string;
  output: React.ReactNode;
}

export const TerminalContent: React.FC<TerminalContentProps> = ({ theme = 'dark' }) => {
  const [input, setInput] = useState('');
  const [logs, setLogs] = useState<CommandLog[]>([
    {
      cmd: 'whoami',
      output: (
        <div className="text-yellow-400">
          <p><strong>Name:</strong> {RESUME_DATA.name}</p>
          <p><strong>Role:</strong> {RESUME_DATA.role}</p>
          <p><strong>Headline:</strong> {RESUME_DATA.headline}</p>
        </div>
      )
    },
    {
      cmd: 'help',
      output: (
        <div className="text-zinc-400 space-y-1">
          <p>Available commands:</p>
          <p><span className="text-emerald-400">whoami</span> — Display bio & headline</p>
          <p><span className="text-emerald-400">neofetch</span> — Display system & developer specs</p>
          <p><span className="text-emerald-400">hire me</span> — Display HIRE ME ASCII banner</p>
          <p><span className="text-emerald-400">skills</span> — View full tech stack matrix</p>
          <p><span className="text-emerald-400">projects</span> — List production projects</p>
          <p><span className="text-emerald-400">experience</span> — View internships & roles</p>
          <p><span className="text-emerald-400">contact</span> — Get email, github & phone</p>
          <p><span className="text-emerald-400">resume</span> — Trigger resume PDF download</p>
          <p><span className="text-emerald-400">ls / pwd / git log / ping saurabh</span> — UNIX utilities</p>
          <p><span className="text-emerald-400">clear</span> — Clear terminal output</p>
        </div>
      )
    }
  ]);

  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [logs]);

  const handleCommandSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanCmd = input.trim().toLowerCase();
    if (!cleanCmd) return;

    let output: React.ReactNode = null;

    switch (cleanCmd) {
      case 'clear':
        setLogs([]);
        setInput('');
        return;
      case 'whoami':
        output = (
          <div className="text-yellow-400">
            <p><strong>Name:</strong> {RESUME_DATA.name}</p>
            <p><strong>Role:</strong> {RESUME_DATA.role}</p>
            <p><strong>Headline:</strong> {RESUME_DATA.headline}</p>
            <p><strong>Education:</strong> {RESUME_DATA.education}</p>
          </div>
        );
        break;
      case 'neofetch':
        output = (
          <div className="flex gap-4 items-start text-xs font-mono text-cyan-400 py-1">
            <div className="text-indigo-400 font-bold select-none hidden sm:block">
              {`       .--.
      |o_o |
      |:_/ |
     //   \\ \\
    (|     | )
   /'\\_   _/ \`\\
   \\___)=(___/`}
            </div>
            <div className="space-y-0.5 text-zinc-300">
              <p className="text-emerald-400 font-bold">saurabh@macbook-pro</p>
              <p className="text-zinc-500">-----------------</p>
              <p><strong className="text-indigo-400">OS:</strong> Portfolio OS 2026</p>
              <p><strong className="text-indigo-400">Host:</strong> saurabhyadav.dev</p>
              <p><strong className="text-indigo-400">Kernel:</strong> Node.js + React 19 + Next.js 14</p>
              <p><strong className="text-indigo-400">Uptime:</strong> Always building</p>
              <p><strong className="text-indigo-400">IDE:</strong> Cursor / VS Code</p>
              <p><strong className="text-indigo-400">RAM:</strong> Redis (&lt;1ms session caching)</p>
              <p><strong className="text-indigo-400">Disk:</strong> PostgreSQL (17+ tables)</p>
              <p><strong className="text-indigo-400">GPU:</strong> Gemini 2.0 Flash</p>
            </div>
          </div>
        );
        break;
      case 'hire me':
      case 'hire':
        output = (
          <div className="text-emerald-400 space-y-2 py-1 font-mono">
            <pre className="text-[10px] leading-tight select-none">
{` _   _ ___ ____  _____   __  __ _____ _ 
| | | |_ _|  _ \\| ____| |  \\/  | ____| |
| |_| || || |_) |  _|   | |\\/| |  _| | |
|  _  || ||  _ <| |___  | |  | | |___| |___
|_| |_|___|_| \\_\\_____| |_|  |_|_____|_____|`}
            </pre>
            <p className="text-white text-xs">Email: <span className="text-indigo-300">yadavv.saurab@gmail.com</span></p>
            <p className="text-white text-xs">LinkedIn: <span className="text-blue-400">linkedin.com/in/saurabh-yadav0</span></p>
            <p className="text-white text-xs">Resume: <a href={RESUME_DATA.contact.resume} target="_blank" rel="noopener noreferrer" className="text-amber-400 underline">view on Google Drive</a></p>
          </div>
        );
        break;
      case 'resume':
        const link = document.createElement('a');
        link.href = '/Saurabh_Yadav_Resume.pdf';
        link.download = 'Saurabh_Yadav_Resume.pdf';
        link.click();
        output = (
          <div className="text-emerald-400">
            <p>✅ Downloading Saurabh_Yadav_Resume.pdf...</p>
            <a
              href="/Saurabh_Yadav_Resume.pdf"
              download="Saurabh_Yadav_Resume.pdf"
              className="text-indigo-300 underline font-bold"
            >
              Click here if download does not start automatically.
            </a>
            <p className="mt-1">
              Or{' '}
              <a href={RESUME_DATA.contact.resume} target="_blank" rel="noopener noreferrer" className="text-amber-400 underline font-bold">
                view it on Google Drive
              </a>
              .
            </p>
          </div>
        );
        break;

      case 'skills':
      case 'cat skills.json':
        output = (
          <pre className="text-cyan-400 whitespace-pre-wrap font-mono text-xs">
            {JSON.stringify(RESUME_DATA.techStackGroups, null, 2)}
          </pre>
        );
        break;
      case 'projects':
        output = (
          <div className="space-y-2 text-indigo-300">
            {RESUME_DATA.projects.map(p => (
              <div key={p.id} className="border-l-2 border-indigo-500 pl-2">
                <p className="font-bold text-white">{p.title} ({p.status})</p>
                <p className="text-xs text-zinc-400">{p.stack.join(' · ')}</p>
              </div>
            ))}
          </div>
        );
        break;
      case 'experience':
        output = (
          <div className="space-y-2 text-purple-300">
            {RESUME_DATA.experiences.map(e => (
              <div key={e.id} className="border-l-2 border-purple-500 pl-2">
                <p className="font-bold text-white">{e.role} @ {e.company} ({e.period})</p>
                <p className="text-xs text-zinc-400">{e.chips.join(' · ')}</p>
              </div>
            ))}
          </div>
        );
        break;
      case 'contact':
        output = (
          <div className="text-emerald-400 space-y-1">
            <p>Email: {RESUME_DATA.contact.email}</p>
            <p>Phone: {RESUME_DATA.contact.phone}</p>
            <p>GitHub: {RESUME_DATA.contact.github}</p>
            <p>LinkedIn: {RESUME_DATA.contact.linkedin}</p>
          </div>
        );
        break;
      case 'ls':
        output = (
          <div className="text-cyan-400 flex gap-4 font-mono">
            <span>about.txt</span>
            <span>projects/</span>
            <span>experience/</span>
            <span>skills.json</span>
            <span>resume.pdf</span>
          </div>
        );
        break;
      case 'pwd':
        output = <p className="text-zinc-400">/Users/saurabh/portfolio</p>;
        break;
      case 'ping saurabh':
        output = <p className="text-emerald-400">PING saurabh: 1 packet transmitted, 1 received, 0% packet loss. RT: ∞ms (always available for hire)</p>;
        break;
      case 'git log':
        output = (
          <div className="text-amber-300 font-mono text-xs space-y-1">
            <p>commit 7f9a2b (HEAD -&gt; main) — Ship Activerse edge-cached booking platform</p>
            <p>commit 4c8e1d — Add ResNet50 inference pipeline to Deepfake Detection System</p>
            <p>commit 1a3b5c — Wire up Redis caching for FarAlpha microservices</p>
          </div>
        );
        break;
      case 'sudo rm -rf /':
      case 'sudo':
        output = <span className="text-red-400">Nice try. Portfolio protected by Saurabh's firewall. 🔐</span>;
        break;
      case 'help':
        output = (
          <div className="text-zinc-400 space-y-1">
            <p>Available commands:</p>
            <p><span className="text-emerald-400">whoami</span> — Display bio & headline</p>
            <p><span className="text-emerald-400">neofetch</span> — Display system & developer specs</p>
            <p><span className="text-emerald-400">hire me</span> — Display HIRE ME ASCII banner</p>
            <p><span className="text-emerald-400">skills</span> — View full tech stack matrix</p>
            <p><span className="text-emerald-400">projects</span> — List production projects</p>
            <p><span className="text-emerald-400">experience</span> — View internships & roles</p>
            <p><span className="text-emerald-400">contact</span> — Get email, github & phone</p>
            <p><span className="text-emerald-400">resume</span> — Trigger resume PDF download</p>
            <p><span className="text-emerald-400">clear</span> — Clear terminal output</p>
          </div>
        );
        break;
      default:
        output = <span className="text-red-400">zsh: command not found: {cleanCmd}. Type "help" for commands.</span>;
    }

    setLogs(prev => [...prev, { cmd: input, output }]);
    setInput('');
  };

  return (
    <div className={`h-full p-5 font-mono text-xs overflow-auto custom-scrollbar leading-relaxed ${
      theme === 'dark' ? 'bg-[#09090b] text-zinc-200' : 'bg-zinc-100 text-zinc-900'
    }`}>
      <p className="text-zinc-500 font-semibold mb-3">
        Last login: {new Date().toLocaleDateString()} on ttys001. Type "help" for commands.
      </p>

      {logs.map((log, index) => (
        <div key={index} className="space-y-1 mb-3">
          <div className="flex items-center gap-2">
            <span className="text-emerald-400 font-bold">saurabh@macbook-pro</span>
            <span className="text-blue-400 font-bold">~</span>
            <span className="text-zinc-400">$</span>
            <span className="text-white font-semibold">{log.cmd}</span>
          </div>
          <div className="pl-4">{log.output}</div>
        </div>
      ))}

      <form onSubmit={handleCommandSubmit} className="flex items-center gap-2 pt-1">
        <span className="text-emerald-400 font-bold">saurabh@macbook-pro</span>
        <span className="text-blue-400 font-bold">~</span>
        <span className="text-zinc-400">$</span>
        <input 
          value={input} 
          onChange={e => setInput(e.target.value)} 
          className="flex-1 bg-transparent outline-none text-white font-semibold"
          autoFocus
          spellCheck={false}
        />
      </form>
      <div ref={bottomRef} />
    </div>
  );
};
