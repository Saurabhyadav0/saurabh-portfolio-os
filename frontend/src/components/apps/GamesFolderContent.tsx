import React from 'react';
import { Gamepad2, Play, Layers, Trophy } from 'lucide-react';

interface GamesFolderContentProps {
  onOpenGame: (gameId: string, label: string) => void;
}

export const GamesFolderContent: React.FC<GamesFolderContentProps> = ({ onOpenGame }) => {
  const games = [
    {
      id: 'snake',
      name: 'Snake Arcade',
      desc: 'Classic retro snake game with high score tracking & WASD/D-Pad controls.',
      badge: 'Arcade',
      gradient: 'from-emerald-500 to-teal-700',
      icon: <Gamepad2 size={32} className="text-white" />
    },
    {
      id: 'tetris',
      name: 'Tetris Arcade',
      desc: 'Classic block-stacking puzzle game with 7 tetromino shapes & line clears.',
      badge: 'Puzzle',
      gradient: 'from-indigo-600 to-purple-700',
      icon: <Layers size={32} className="text-white" />
    },
    {
      id: 'tictactoe',
      name: 'Tic-Tac-Toe AI',
      desc: 'Unbeatable Smart AI & 2-Player modes with score tracking.',
      badge: 'Strategy',
      gradient: 'from-purple-600 to-pink-600',
      icon: <Play size={32} className="text-white" />
    }
  ];

  return (
    <div className="h-full bg-[#18181b] text-white p-6 flex flex-col justify-between overflow-auto custom-scrollbar font-sans select-text">
      <div className="space-y-6">
        <div className="flex items-center justify-between border-b border-zinc-800 pb-3">
          <h1 className="text-lg font-bold flex items-center gap-2">
            <Gamepad2 className="text-indigo-400" size={20} /> Saurabh's Retro Arcade Suite
          </h1>
          <span className="text-xs text-zinc-400 font-mono">3 Games</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {games.map(game => (
            <div
              key={game.id}
              onClick={() => onOpenGame(game.id, game.name)}
              className="bg-zinc-900/80 p-5 rounded-2xl border border-zinc-800 hover:border-indigo-500/50 hover:bg-zinc-800/60 transition-all cursor-pointer group flex flex-col justify-between space-y-4 shadow-lg"
            >
              <div className="space-y-3">
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-tr ${game.gradient} flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform`}>
                  {game.icon}
                </div>
                <div>
                  <h3 className="font-bold text-base group-hover:text-indigo-300 transition-colors">{game.name}</h3>
                  <span className="inline-block mt-1 px-2 py-0.5 rounded text-[10px] font-bold bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                    {game.badge}
                  </span>
                </div>
                <p className="text-xs text-zinc-400 leading-relaxed">{game.desc}</p>
              </div>

              <button className="w-full py-2 bg-indigo-600 group-hover:bg-indigo-500 text-white font-bold text-xs rounded-xl transition-colors shadow-md">
                Launch Game 🚀
              </button>
            </div>
          ))}
        </div>
      </div>

      <div className="pt-6 text-center text-xs text-zinc-500 border-t border-zinc-800/60">
        Built natively in React & TypeScript · High scores stored in browser memory
      </div>
    </div>
  );
};
