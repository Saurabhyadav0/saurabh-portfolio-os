import React, { useState } from 'react';
import { Play, FileText } from 'lucide-react';

export const VSCodeContent: React.FC = () => {
  const [code, setCode] = useState(
    "// index.js\nconsole.log('Environment ready...');\nconsole.log('User: Saurabh Yadav');\nconsole.log('Building Portfolio Components...');"
  );
  const [output, setOutput] = useState<string[]>([]);

  const runCode = () => {
    const logs: string[] = [];
    const originalLog = console.log;
    console.log = (msg: unknown) => logs.push(String(msg));
    try { 
      // eslint-disable-next-line no-eval
      (0, eval)(code); 
    } catch(e) { 
      logs.push("Error: " + (e as Error).message); 
    }
    console.log = originalLog;
    setOutput(logs);
  };

  return (
    <div className="h-full bg-[#1e1e1e] text-white flex flex-col overflow-hidden font-mono text-sm">
      <div className="flex items-center gap-2 bg-[#252526] px-4 py-2 border-b border-[#3c3c3c] shrink-0">
        <FileText size={14} className="text-yellow-400" />
        <span className="text-zinc-300">index.js</span>
        <button 
          onClick={runCode} 
          className="ml-auto flex items-center gap-1.5 bg-green-600 hover:bg-green-500 px-3 py-1 rounded text-xs font-bold transition-colors"
        >
          <Play size={12} /> Run
        </button>
      </div>
      
      <textarea 
        value={code} 
        onChange={(e) => setCode(e.target.value)} 
        className="flex-1 bg-transparent p-5 outline-none resize-none text-blue-300 custom-scrollbar leading-relaxed" 
        spellCheck="false" 
      />
      
      <div className="bg-[#1a1a1a] p-4 border-t border-[#3c3c3c] max-h-32 overflow-auto custom-scrollbar">
        <p className="text-zinc-500 text-xs mb-2 uppercase tracking-wider font-bold">Output Terminal</p>
        {output.map((l, i) => (
          <p key={i} className="text-green-400">➜ {l}</p>
        ))}
      </div>
    </div>
  );
};
