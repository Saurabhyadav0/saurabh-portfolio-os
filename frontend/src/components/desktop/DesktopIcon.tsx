import React from 'react';
import { motion } from 'framer-motion';
import { AppIcon } from '@/components/shared/AppIcon';
import { DesktopIcon as DesktopIconType } from '@/types';

interface DesktopIconProps {
  icon: DesktopIconType;
  isMobile: boolean;
  onOpen: (appId: string, label: string) => void;
  onDragEnd: (id: string, x: number, y: number) => void;
}

export const DesktopIcon: React.FC<DesktopIconProps> = ({
  icon,
  isMobile,
  onOpen,
  onDragEnd,
}) => {
  return (
    <motion.div
      key={icon.id}
      drag={!isMobile}
      dragMomentum={false}
      onDragEnd={(_, info) => {
        if (isMobile) return;
        const col = Math.round((info.point.x - 20) / 100);
        const row = Math.round((info.point.y - 60) / 110);
        onDragEnd(icon.id, 20 + Math.max(0, col) * 100, 60 + Math.max(0, row) * 110);
      }}
      initial={{ x: icon.x, y: icon.y }}
      animate={{ x: icon.x, y: icon.y }}
      className="absolute flex flex-col items-center gap-1 w-20 cursor-pointer group z-10 p-2 rounded-xl transition-all"
      onDoubleClick={() => !isMobile && onOpen(icon.app, icon.label)}
      onClick={() => isMobile && onOpen(icon.app, icon.label)}
    >
      <div className="w-14 h-14 md:w-16 md:h-16 active:scale-95 transition-transform drop-shadow-xl">
        <AppIcon icon={icon.icon} bgGradient={icon.bg} />
      </div>
      <span className="text-[10px] md:text-[11px] bg-black/40 px-2.5 py-0.5 rounded-full text-white shadow-lg border border-white/10 line-clamp-1 text-center font-bold backdrop-blur-md transition-colors group-hover:bg-blue-600/50">
        {icon.label}
      </span>
    </motion.div>
  );
};
