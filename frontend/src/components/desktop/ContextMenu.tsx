import React from 'react';
import { Plus, Monitor, Download, Info, Trash2, Sparkles, Folder } from 'lucide-react';
import { ContextMenuState as ContextMenuType } from '@/types';
import { toast } from '@/hooks/use-toast';

interface ContextMenuProps {
  contextMenu: NonNullable<ContextMenuType>;
  onNewFolder: () => void;
  onChangeWallpaper: () => void;
}

export const ContextMenu: React.FC<ContextMenuProps> = ({
  contextMenu,
  onNewFolder,
  onChangeWallpaper,
}) => {
  const downloadResume = () => {
    const link = document.createElement('a');
    link.href = '/Saurabh_Yadav_Resume.pdf';
    link.download = 'Saurabh_Yadav_Resume.pdf';
    link.click();
  };

  const handleGetInfo = () => {
    toast({
      title: "System Information",
      description: "Portfolio OS 2026. Built by Saurabh Yadav. React 19 + TypeScript + Tailwind CSS.",
    });
  };

  const handleCleanUp = () => {
    toast({
      title: "Desktop Cleaned",
      description: "Desktop icons arranged neatly to grid.",
    });
  };

  const handleMoveToTrash = () => {
    toast({
      title: "Nice try! 😉",
      description: "Saurabh's portfolio files are protected from deletion.",
    });
  };

  return (
    <div 
      className="absolute bg-[#18181b]/95 backdrop-blur-3xl border border-white/10 rounded-2xl py-2 w-56 shadow-[0_20px_50px_rgba(0,0,0,0.6)] z-[99999] text-white text-xs pointer-events-auto overflow-hidden animate-in fade-in zoom-in-95 duration-100" 
      style={{ top: contextMenu.y, left: contextMenu.x }}
    >
      <div 
        className="px-4 py-2 hover:bg-indigo-600 flex items-center gap-3 transition-colors cursor-pointer font-semibold" 
        onClick={onNewFolder}
      >
        <Plus size={15} /> New Folder
      </div>
      <div 
        className="px-4 py-2 hover:bg-indigo-600 flex items-center gap-3 transition-colors cursor-pointer font-semibold" 
        onClick={onChangeWallpaper}
      >
        <Monitor size={15} /> Change Wallpaper
      </div>
      <div 
        className="px-4 py-2 hover:bg-indigo-600 flex items-center gap-3 transition-colors cursor-pointer font-semibold" 
        onClick={handleGetInfo}
      >
        <Info size={15} /> Get Info
      </div>
      <div 
        className="px-4 py-2 hover:bg-indigo-600 flex items-center gap-3 transition-colors cursor-pointer font-semibold" 
        onClick={handleCleanUp}
      >
        <Sparkles size={15} /> Clean Up Desktop
      </div>
      <div className="h-[1px] bg-white/10 my-1.5" />
      <div 
        className="px-4 py-2 hover:bg-indigo-600 flex items-center gap-3 transition-colors cursor-pointer font-semibold text-emerald-400 hover:text-white" 
        onClick={downloadResume}
      >
        <Download size={15} /> Download Resume (PDF)
      </div>
      <div 
        className="px-4 py-2 hover:bg-red-600 flex items-center gap-3 transition-colors cursor-pointer font-semibold text-red-400 hover:text-white" 
        onClick={handleMoveToTrash}
      >
        <Trash2 size={15} /> Move to Trash
      </div>
    </div>
  );
};
