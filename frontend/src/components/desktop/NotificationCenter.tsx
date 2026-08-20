import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bell, CheckCircle2, Zap, Server, Star, X } from 'lucide-react';

interface NotificationCenterProps {
  isOpen: boolean;
  onClose: () => void;
}

export const NotificationCenter: React.FC<NotificationCenterProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const notifications = [
    {
      id: 1,
      title: 'Activerse (Live)',
      desc: 'Edge cache warm on Cloudflare. Razorpay checkout flow healthy.',
      time: 'Just now',
      icon: <Server className="text-emerald-400" size={16} />,
      tag: 'Real-Time'
    },
    {
      id: 2,
      title: 'FarAlpha Technologies',
      desc: 'Python microservices deployed. Redis caching + tracing active.',
      time: '2 min ago',
      icon: <Zap className="text-yellow-400" size={16} />,
      tag: 'Backend'
    },
    {
      id: 3,
      title: 'SoarX Community Platform',
      desc: 'NextAuth session verified. Certificate QR scan pipeline online.',
      time: '1 hr ago',
      icon: <CheckCircle2 className="text-blue-400" size={16} />,
      tag: 'Platform'
    },
    {
      id: 4,
      title: 'Deepfake Detection System',
      desc: 'New star on GitHub! ResNet50 inference pipeline online.',
      time: '3 hrs ago',
      icon: <Star className="text-amber-400" size={16} />,
      tag: 'AI/ML'
    }
  ];

  return (
    <AnimatePresence>
      <motion.div
        initial={{ x: '100%', opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: '100%', opacity: 0 }}
        transition={{ type: 'spring', stiffness: 400, damping: 32 }}
        className="fixed top-8 right-0 bottom-0 w-80 sm:w-96 bg-[#18181b]/90 backdrop-blur-3xl border-l border-white/10 p-5 z-[99990] text-white pointer-events-auto flex flex-col shadow-[-20px_0_50px_rgba(0,0,0,0.5)] font-sans"
      >
        <div className="flex items-center justify-between pb-4 border-b border-white/10">
          <div className="flex items-center gap-2 font-bold text-sm">
            <Bell size={16} className="text-indigo-400" /> System Notifications
          </div>
          <button onClick={onClose} className="p-1 rounded hover:bg-white/10 text-zinc-400 hover:text-white">
            <X size={16} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto space-y-3 py-4 custom-scrollbar">
          {notifications.map(n => (
            <div key={n.id} className="p-3.5 rounded-xl bg-white/5 border border-white/10 hover:border-white/20 transition-all space-y-1.5">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  {n.icon}
                  <span className="font-bold text-xs">{n.title}</span>
                </div>
                <span className="text-[10px] text-zinc-400 font-mono">{n.time}</span>
              </div>
              <p className="text-xs text-zinc-300 leading-relaxed">{n.desc}</p>
              <span className="inline-block px-2 py-0.5 rounded text-[9px] font-bold bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                {n.tag}
              </span>
            </div>
          ))}
        </div>

        {/* Footer Widget */}
        <div className="p-3.5 rounded-xl bg-indigo-600/20 border border-indigo-500/30 text-center space-y-1 text-xs">
          <p className="font-bold text-indigo-300">Saurabh Yadav — Status</p>
          <p className="text-[11px] text-zinc-300">Software Engineer Intern @ FarAlpha · Open to Full-time Opportunities</p>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
