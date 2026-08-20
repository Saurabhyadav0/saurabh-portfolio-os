import React from 'react';

interface AppIconProps {
  icon: React.ReactElement | null;
  bgGradient: string;
}

export const AppIcon: React.FC<AppIconProps> = ({ icon, bgGradient }) => (
  <div className="w-full h-full relative">
    <div className={`w-full h-full ${bgGradient} rounded-[22%] shadow-lg`} />
    <div className="absolute inset-0 flex items-center justify-center text-white">
      {icon && React.isValidElement(icon) 
        ? React.cloneElement(icon as React.ReactElement<{ size?: string }>, { size: '55%' }) 
        : null
      } 
    </div>
  </div>
);
