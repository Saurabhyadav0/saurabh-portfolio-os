import React, { useState } from 'react';
import { RotateCcw, Trophy, Cpu, User } from 'lucide-react';

type Player = 'X' | 'O' | null;

const WINNING_COMBOS = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
  [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
  [0, 4, 8], [2, 4, 6]             // Diagonals
];

export const TicTacToe: React.FC = () => {
  const [board, setBoard] = useState<Player[]>(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true); // X is User
  const [vsAI, setVsAI] = useState(true);
  const [scores, setScores] = useState({ x: 0, o: 0, ties: 0 });

  const checkWinner = (currentBoard: Player[]) => {
    for (let combo of WINNING_COMBOS) {
      const [a, b, c] = combo;
      if (currentBoard[a] && currentBoard[a] === currentBoard[b] && currentBoard[a] === currentBoard[c]) {
        return { winner: currentBoard[a], combo };
      }
    }
    if (currentBoard.every(square => square !== null)) {
      return { winner: 'TIE' as const, combo: null };
    }
    return null;
  };

  const winResult = checkWinner(board);
  const isGameOver = winResult !== null;

  // Minimax or Smart AI move
  const getAIMove = (currentBoard: Player[]) => {
    const emptyIndices = currentBoard.map((val, idx) => val === null ? idx : null).filter((val): val is number => val !== null);
    
    // Check if AI can win in 1 move
    for (let idx of emptyIndices) {
      const boardCopy = [...currentBoard];
      boardCopy[idx] = 'O';
      if (checkWinner(boardCopy)?.winner === 'O') return idx;
    }

    // Block player win in 1 move
    for (let idx of emptyIndices) {
      const boardCopy = [...currentBoard];
      boardCopy[idx] = 'X';
      if (checkWinner(boardCopy)?.winner === 'X') return idx;
    }

    // Take center if available
    if (currentBoard[4] === null) return 4;

    // Pick random corner or edge
    return emptyIndices[Math.floor(Math.random() * emptyIndices.length)];
  };

  const handleClick = (index: number) => {
    if (board[index] || isGameOver) return;

    const newBoard = [...board];
    newBoard[index] = 'X';
    setBoard(newBoard);

    const result = checkWinner(newBoard);
    if (result) {
      updateScore(result.winner);
      return;
    }

    if (vsAI) {
      // AI Move turn
      setTimeout(() => {
        const aiMoveIndex = getAIMove(newBoard);
        if (aiMoveIndex !== undefined && aiMoveIndex !== null) {
          newBoard[aiMoveIndex] = 'O';
          setBoard([...newBoard]);
          const aiResult = checkWinner(newBoard);
          if (aiResult) updateScore(aiResult.winner);
        }
      }, 300);
    } else {
      setIsXNext(!isXNext);
    }
  };

  const updateScore = (winner: Player | 'TIE') => {
    if (winner === 'X') setScores(s => ({ ...s, x: s.x + 1 }));
    else if (winner === 'O') setScores(s => ({ ...s, o: s.o + 1 }));
    else setScores(s => ({ ...s, ties: s.ties + 1 }));
  };

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setIsXNext(true);
  };

  return (
    <div className="h-full bg-[#18181b] text-white p-6 flex flex-col items-center justify-between font-sans select-none overflow-auto custom-scrollbar">
      {/* Header Controls */}
      <div className="w-full max-w-xs space-y-3">
        <div className="flex justify-between items-center bg-zinc-900 p-1.5 rounded-xl border border-zinc-800 text-xs">
          <button 
            onClick={() => { setVsAI(true); resetGame(); }}
            className={`flex-1 py-1.5 rounded-lg font-semibold flex items-center justify-center gap-1.5 transition-all ${
              vsAI ? 'bg-indigo-600 text-white shadow' : 'text-zinc-400 hover:text-white'
            }`}
          >
            <Cpu size={14} /> vs AI
          </button>
          <button 
            onClick={() => { setVsAI(false); resetGame(); }}
            className={`flex-1 py-1.5 rounded-lg font-semibold flex items-center justify-center gap-1.5 transition-all ${
              !vsAI ? 'bg-indigo-600 text-white shadow' : 'text-zinc-400 hover:text-white'
            }`}
          >
            <User size={14} /> 2 Players
          </button>
        </div>

        {/* Score Board */}
        <div className="grid grid-cols-3 gap-2 text-center text-xs">
          <div className="p-2 bg-indigo-500/10 rounded-xl border border-indigo-500/20">
            <p className="text-indigo-400 font-bold">X (You)</p>
            <p className="text-base font-black text-white">{scores.x}</p>
          </div>
          <div className="p-2 bg-zinc-800/60 rounded-xl border border-zinc-700/60">
            <p className="text-zinc-400 font-bold">Ties</p>
            <p className="text-base font-black text-white">{scores.ties}</p>
          </div>
          <div className="p-2 bg-purple-500/10 rounded-xl border border-purple-500/20">
            <p className="text-purple-400 font-bold">{vsAI ? 'O (AI)' : 'O (P2)'}</p>
            <p className="text-base font-black text-white">{scores.o}</p>
          </div>
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-3 gap-3 my-4 w-[270px] h-[270px]">
        {board.map((cell, idx) => {
          const isWinningCell = winResult?.combo?.includes(idx);

          return (
            <button
              key={idx}
              onClick={() => handleClick(idx)}
              className={`rounded-2xl text-3xl font-black flex items-center justify-center transition-all shadow-md ${
                isWinningCell 
                  ? 'bg-emerald-500 text-black shadow-[0_0_20px_rgba(16,185,129,0.8)] scale-105' 
                  : cell === 'X' 
                  ? 'bg-indigo-600 text-white' 
                  : cell === 'O' 
                  ? 'bg-purple-600 text-white' 
                  : 'bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-transparent'
              }`}
            >
              {cell}
            </button>
          );
        })}
      </div>

      {/* Footer Controls */}
      <div className="w-full max-w-xs text-center space-y-3">
        {winResult && (
          <p className="text-sm font-bold text-emerald-400">
            {winResult.winner === 'TIE' ? "It's a Tie!" : `Winner: ${winResult.winner}! 🎉`}
          </p>
        )}
        <button 
          onClick={resetGame}
          className="px-6 py-2.5 bg-zinc-800 hover:bg-zinc-700 text-white font-bold text-xs rounded-full transition-all border border-zinc-700 inline-flex items-center gap-2"
        >
          <RotateCcw size={14} /> Reset Board
        </button>
      </div>
    </div>
  );
};
