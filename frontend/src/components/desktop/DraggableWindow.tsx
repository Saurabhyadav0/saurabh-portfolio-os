import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { X, Minus, Maximize2, ChevronLeft } from 'lucide-react';
import { WindowState, Theme } from '@/types';

interface DraggableWindowProps {
  window: WindowState;
  onClose: (id: string) => void;
  onBringToFront: (id: string) => void;
  onMaximize: (id: string) => void;
  onMinimize: (id: string) => void;
  theme: Theme;
  isMobile: boolean;
}

export const DraggableWindow: React.FC<DraggableWindowProps> = ({
  window,
  onClose,
  onBringToFront,
  onMaximize,
  onMinimize,
  theme,
  isMobile,
}) => {
  const isMaximized = window.isMaximized || isMobile;
  const [size, setSize] = useState({ w: window.width || 850, h: window.height || 620 });
  const isResizing = useRef(false);

  const startResize = (e: React.MouseEvent) => {
    if (isMaximized) return;
    e.preventDefault();
    e.stopPropagation();
    isResizing.current = true;
    
    const startX = e.clientX;
    const startY = e.clientY;
    const startWidth = size.w;
    const startHeight = size.h;

    const onMouseMove = (moveEvent: MouseEvent) => {
      if (!isResizing.current) return;
      const newWidth = Math.max(360, startWidth + (moveEvent.clientX - startX));
      const newHeight = Math.max(280, startHeight + (moveEvent.clientY - startY));
      setSize({ w: newWidth, h: newHeight });
    };

    const onMouseUp = () => {
      isResizing.current = false;
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);
    };

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
  };

  return (
    <motion.div
      drag={!isMaximized} 
      dragMomentum={false}
      initial={isMobile ? { y: '100%', opacity: 0 } : { scale: 0.95, opacity: 0, x: window.x, y: window.y }}
      animate={isMaximized 
        ? { x: 0, y: isMobile ? 32 : 32, width: '100vw', height: isMobile ? 'calc(100vh - 32px)' : 'calc(100vh - 32px)', borderRadius: 0, scale: 1, opacity: 1 } 
        : { x: window.x, y: window.y, width: size.w, height: size.h, borderRadius: 14, scale: 1, opacity: 1 }
      }
      exit={isMobile ? { y: '100%', opacity: 0 } : { scale: 0.95, opacity: 0 }}
      transition={{ type: 'spring', stiffness: 400, damping: 32 }}
      className={`absolute flex flex-col overflow-hidden border ${
        theme === 'dark' 
          ? 'bg-[#18181b]/95 border-white/10 text-white shadow-[0_25px_80px_rgba(0,0,0,0.6)]' 
          : 'bg-white/95 border-black/10 text-gray-900 shadow-[0_25px_80px_rgba(0,0,0,0.2)]'
      } pointer-events-auto backdrop-blur-xl`}
      style={{ zIndex: window.zIndex }}
      onMouseDown={() => onBringToFront(window.id)}
    >
      {/* Window Header */}
      {!window.hideHeader && (
        <div 
          className={`h-10 flex items-center px-3.5 justify-between shrink-0 select-none cursor-default border-b ${
            theme === 'dark' ? 'bg-[#27272a] border-white/5' : 'bg-[#f4f4f5] border-black/5'
          }`} 
          onDoubleClick={() => onMaximize(window.id)}
        >
          {/* Controls / Back Button */}
          <div className="flex gap-2 items-center">
            {isMobile ? (
              <button 
                onClick={(e) => { e.stopPropagation(); onClose(window.id); }} 
                className="text-blue-500 hover:bg-blue-500/10 rounded-full px-2.5 py-1 flex items-center gap-1 text-xs font-semibold transition-all active:scale-95"
              >
                <ChevronLeft size={16}/> Back
              </button>
            ) : (
              <div className="flex items-center gap-2 group">
                <button 
                  onClick={(e) => { e.stopPropagation(); onClose(window.id); }} 
                  className="w-3 h-3 rounded-full bg-[#FF5F56] border border-black/10 flex items-center justify-center hover:bg-red-600 shadow-sm transition-colors"
                  title="Close"
                >
                  <X size={8} className="opacity-0 group-hover:opacity-100 text-black/80 font-bold" />
                </button>
                <button 
                  onClick={(e) => { e.stopPropagation(); onMinimize(window.id); }} 
                  className="w-3 h-3 rounded-full bg-[#FFBD2E] border border-black/10 flex items-center justify-center hover:bg-yellow-500 shadow-sm transition-colors"
                  title="Minimize"
                >
                  <Minus size={8} className="opacity-0 group-hover:opacity-100 text-black/80 font-bold" />
                </button>
                <button 
                  onClick={(e) => { e.stopPropagation(); onMaximize(window.id); }} 
                  className="w-3 h-3 rounded-full bg-[#28C840] border border-black/10 flex items-center justify-center hover:bg-green-600 shadow-sm transition-colors"
                  title="Maximize"
                >
                  <Maximize2 size={8} className="opacity-0 group-hover:opacity-100 text-black/80 font-bold" />
                </button>
              </div>
            )} 
          </div>

          {/* Window Title */}
          <span className={`text-xs md:text-sm font-semibold flex-1 text-center pr-8 truncate ${
            theme === 'dark' ? 'text-zinc-300' : 'text-zinc-700'
          }`}>
            {window.title}
          </span>
        </div>
      )}

      {/* Window Body Content */}
      <div className="flex-1 overflow-auto relative flex flex-col">
        {window.content} 
        
        {/* Resize Handle for desktop */}
        {!isMaximized && !isMobile && (
          <div 
            className="absolute bottom-0 right-0 w-4 h-4 cursor-se-resize z-50 flex items-end justify-end p-0.5 opacity-40 hover:opacity-100 transition-opacity"
            onMouseDown={startResize}
          >
            <svg viewBox="0 0 6 6" className="w-2.5 h-2.5 fill-current text-zinc-400">
              <path d="M6 6L6 0L0 6Z" />
            </svg>
          </div>
        )}
      </div>
    </motion.div>
  );
};
