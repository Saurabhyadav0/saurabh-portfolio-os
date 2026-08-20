import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Apple } from 'lucide-react';

interface BootScreenProps {
  onComplete: () => void;
}

export const BootScreen: React.FC<BootScreenProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(onComplete, 300);
          return 100;
        }
        return prev + Math.floor(Math.random() * 25) + 15;
      });
    }, 200);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <motion.div 
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed inset-0 z-[100000] bg-black flex flex-col items-center justify-center text-white select-none pointer-events-auto"
    >
      <Apple size={72} className="fill-current mb-12 text-white/90" />
      
      {/* Progress Bar */}
      <div className="w-56 h-1.5 bg-zinc-800 rounded-full overflow-hidden border border-zinc-700/50">
        <motion.div 
          className="h-full bg-white rounded-full transition-all duration-200"
          style={{ width: `${progress}%` }}
        />
      </div>
      <p className="mt-4 font-mono text-[11px] text-zinc-500 uppercase tracking-widest">
        Booting Saurabh's Portfolio OS...
      </p>
    </motion.div>
  );
};
