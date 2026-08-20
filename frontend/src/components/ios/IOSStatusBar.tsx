import React, { useState, useEffect } from 'react';
import { Wifi, Battery, Signal, Zap } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface IOSStatusBarProps {
  isInApp?: boolean;
  time?: string;
}

const DYNAMIC_ISLAND_STATUSES = [
  'Building Python microservices @ FarAlpha 👨‍💻',
  'Activerse: edge cache warm 📦',
  'SoarX: certificate verified 🚀',
  'Deepfake Detection: ResNet50 inference ⚡',
  'B.Tech AI-ML · MDU 2027 🎓'
];

export const IOSStatusBar: React.FC<IOSStatusBarProps> = ({ isInApp = false, time }) => {
  const [currentTime, setCurrentTime] = useState('');
  const [statusIndex, setStatusIndex] = useState(0);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const update = () => {
      const now = new Date();
      setCurrentTime(now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false }));
    };
    update();
    const interval = setInterval(update, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const rotateStatus = setInterval(() => {
      setStatusIndex(i => (i + 1) % DYNAMIC_ISLAND_STATUSES.length);
    }, 4000);
    return () => clearInterval(rotateStatus);
  }, []);

  const displayTime = time || currentTime;

  return (
    <div className={`w-full flex items-center justify-between px-6 h-[44px] shrink-0 relative z-[99999] select-none ${
      isInApp ? 'text-black' : 'text-white'
    }`}>
      {/* Left: Time */}
      <span className="font-semibold text-[15px] tracking-tight w-16">
        {displayTime}
      </span>

      {/* Center: Dynamic Island */}
      <div 
        onClick={() => setIsExpanded(!isExpanded)}
        className={`absolute top-[6px] left-1/2 -translate-x-1/2 bg-black rounded-full z-[100000] shadow-lg cursor-pointer flex items-center justify-center transition-all duration-300 ${
          isExpanded ? 'w-[280px] h-[52px] px-4' : 'w-[140px] h-[32px] px-2'
        }`}
      >
        <AnimatePresence mode="wait">
          {isExpanded ? (
            <motion.div 
              key="expanded"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="text-white text-xs flex items-center justify-between w-full font-medium"
            >
              <div className="flex items-center gap-2">
                <Zap size={14} className="text-yellow-400 fill-yellow-400" />
                <span className="truncate max-w-[200px]">{DYNAMIC_ISLAND_STATUSES[statusIndex]}</span>
              </div>
            </motion.div>
          ) : (
            <motion.div 
              key="pill"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="text-[10px] font-bold text-zinc-300 truncate tracking-tight text-center px-1"
            >
              {DYNAMIC_ISLAND_STATUSES[statusIndex]}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Right: Status Icons */}
      <div className="flex items-center gap-[5px] w-16 justify-end">
        <div className="flex items-end gap-[1.5px] h-[12px]">
          <div className={`w-[3px] h-[4px] rounded-sm ${isInApp ? 'bg-black' : 'bg-white'}`} />
          <div className={`w-[3px] h-[6px] rounded-sm ${isInApp ? 'bg-black' : 'bg-white'}`} />
          <div className={`w-[3px] h-[8px] rounded-sm ${isInApp ? 'bg-black' : 'bg-white'}`} />
          <div className={`w-[3px] h-[11px] rounded-sm ${isInApp ? 'bg-black' : 'bg-white'}`} />
        </div>
        <svg width="15" height="12" viewBox="0 0 15 12" className={isInApp ? 'fill-black' : 'fill-white'}>
          <path d="M7.5 10.5a1.5 1.5 0 110 3 1.5 1.5 0 010-3zm-3.54-2.83a5 5 0 017.08 0l-1.06 1.06a3.5 3.5 0 00-4.96 0L3.96 7.67zm-2.83-2.83a8.5 8.5 0 0112.74 0L12.8 5.9a7 7 0 00-10.6 0L1.13 4.84z" />
        </svg>
        <div className="flex items-center gap-[1px]">
          <div className={`w-[22px] h-[11px] rounded-[3px] border-[1.5px] ${isInApp ? 'border-black' : 'border-white'} relative overflow-hidden`}>
            <div className={`absolute left-[1px] top-[1px] bottom-[1px] w-[75%] rounded-[1.5px] ${isInApp ? 'bg-black' : 'bg-white'}`} />
          </div>
          <div className={`w-[1.5px] h-[4px] rounded-r-sm ${isInApp ? 'bg-black' : 'bg-white'} opacity-60`} />
        </div>
      </div>
    </div>
  );
};

export const IOSHomeIndicator: React.FC<{ dark?: boolean }> = ({ dark = true }) => (
  <div className="w-full flex items-center justify-center h-[34px] shrink-0 z-[99999]">
    <div className={`w-[134px] h-[5px] rounded-full ${dark ? 'bg-white/30' : 'bg-black/20'}`} />
  </div>
);
