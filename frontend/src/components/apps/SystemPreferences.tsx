import React from 'react';
import { Cpu, HardDrive, Battery, Wifi, ShieldCheck, User } from 'lucide-react';
import { RESUME_DATA } from '@/data/resume';

export const SystemPreferences: React.FC = () => {
  return (
    <div className="h-full bg-[#18181b] text-white p-6 overflow-auto custom-scrollbar font-sans select-text space-y-6">
      <div className="flex items-center gap-4 border-b border-zinc-800 pb-4">
        <div className="w-14 h-14 rounded-2xl bg-indigo-600 flex items-center justify-center text-white text-2xl font-bold shadow-lg">
          ⚙️
        </div>
        <div>
          <h1 className="text-lg font-bold">System Settings</h1>
          <p className="text-xs text-zinc-400">Portfolio OS v2026.1 (B.Tech AI-ML)</p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
        {/* System Specs */}
        <div className="p-4 rounded-xl bg-zinc-900/80 border border-zinc-800 space-y-2">
          <div className="flex items-center gap-2 text-indigo-400 font-bold">
            <Cpu size={16} /> Core Specs
          </div>
          <p className="text-zinc-300"><strong>Developer:</strong> {RESUME_DATA.name}</p>
          <p className="text-zinc-300"><strong>Role:</strong> {RESUME_DATA.role}</p>
          <p className="text-zinc-300"><strong>Primary Language:</strong> TypeScript / Node.js</p>
          <p className="text-zinc-300"><strong>AI Engine:</strong> Gemini 2.0 Flash</p>
        </div>

        {/* Database & Storage */}
        <div className="p-4 rounded-xl bg-zinc-900/80 border border-zinc-800 space-y-2">
          <div className="flex items-center gap-2 text-emerald-400 font-bold">
            <HardDrive size={16} /> Data Architecture
          </div>
          <p className="text-zinc-300"><strong>PostgreSQL:</strong> 17+ tables designed</p>
          <p className="text-zinc-300"><strong>Redis Caching:</strong> &lt;1ms session lookups</p>
          <p className="text-zinc-300"><strong>REST APIs:</strong> 400+ endpoints built</p>
          <p className="text-zinc-300"><strong>Cloud:</strong> Vercel + Cloudflare Workers</p>
        </div>

        {/* Battery & Power */}
        <div className="p-4 rounded-xl bg-zinc-900/80 border border-zinc-800 space-y-2">
          <div className="flex items-center gap-2 text-amber-400 font-bold">
            <Battery size={16} /> Power & Energy
          </div>
          <p className="text-zinc-300"><strong>Battery Health:</strong> 100% (Always building)</p>
          <p className="text-zinc-300"><strong>Status:</strong> 2 Active Internships</p>
          <p className="text-zinc-300"><strong>Availability:</strong> Immediately Available</p>
        </div>

        {/* Network & Security */}
        <div className="p-4 rounded-xl bg-zinc-900/80 border border-zinc-800 space-y-2">
          <div className="flex items-center gap-2 text-cyan-400 font-bold">
            <Wifi size={16} /> Network & Security
          </div>
          <p className="text-zinc-300"><strong>Connection:</strong> Connected to "Building Things"</p>
          <p className="text-zinc-300"><strong>Security:</strong> RBAC + JWT + bcryptjs</p>
          <p className="text-zinc-300"><strong>Location:</strong> {RESUME_DATA.location}</p>
        </div>
      </div>

      <div className="p-3 rounded-xl bg-indigo-600/20 border border-indigo-500/30 text-center text-xs text-indigo-300 font-semibold">
        Admin Access: Granted to Recruiter / HR
      </div>
    </div>
  );
};
