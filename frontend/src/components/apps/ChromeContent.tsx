import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, RotateCcw, Lock } from 'lucide-react';

export const ChromeContent: React.FC = () => {
  const [url, setUrl] = useState('youtube.com');
  
  return (
    <div className="h-full bg-zinc-900 text-white flex flex-col overflow-hidden">
      <div className="bg-zinc-800 p-2 flex items-center gap-2 shrink-0">
        <div className="flex gap-1">
          <ArrowLeft size={14} className="text-zinc-500" />
          <ArrowRight size={14} className="text-zinc-500" />
          <RotateCcw size={14} className="text-zinc-500" />
        </div>
        <div className="flex-1 flex items-center bg-zinc-700 rounded-full px-4 py-1.5 text-sm">
          <Lock size={12} className="text-green-400 mr-2" />
          <input 
            value={url} 
            onChange={(e) => setUrl(e.target.value)} 
            className="flex-1 outline-none truncate text-center bg-transparent"
          />
        </div>
      </div>

      <div className="flex-1 bg-zinc-950 overflow-auto custom-scrollbar">
        <div className="p-4">
          <div className="flex items-center gap-2 mb-6">
            <span className="text-red-500 font-bold text-2xl">You</span>
            <span className="text-white font-bold text-2xl">Tube</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
          {[1, 2, 3, 4, 5, 6].map(i => (
            <div key={i} className="cursor-pointer group">
              <div className="relative bg-zinc-800 rounded-lg aspect-video mb-2 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-purple-600 opacity-50" />
                <span className="absolute bottom-2 right-2 bg-black/80 text-xs px-1.5 py-0.5 rounded">
                  14:20
                </span>
              </div>
              <div className="flex gap-3">
                <div className="w-9 h-9 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 shrink-0" />
                <div>
                  <h3 className="font-bold text-sm line-clamp-2 group-hover:text-blue-400 transition-colors">
                    Saurabh Yadav: AI Portfolio Project Demo #{i}
                  </h3>
                  <p className="text-zinc-500 text-xs mt-1">
                    Saurabh Dev • 1.2M views
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
