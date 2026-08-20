import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Play, RotateCcw, Trophy, Pause, ArrowUp, ArrowDown, ArrowLeft, ArrowRight } from 'lucide-react';

const BOARD_SIZE = 15; // 15x15 grid
type Position = { x: number; y: number };
type Direction = 'UP' | 'DOWN' | 'LEFT' | 'RIGHT';

export const SnakeGame: React.FC = () => {
  const [snake, setSnake] = useState<Position[]>([
    { x: 7, y: 7 },
    { x: 7, y: 8 },
    { x: 7, y: 9 },
  ]);
  const [food, setFood] = useState<Position>({ x: 4, y: 4 });
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState<number>(() => {
    return parseInt(localStorage.getItem('saurabh-snake-highscore') || '0', 10);
  });
  const [isGameOver, setIsGameOver] = useState(false);
  const [isRunning, setIsRunning] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  const directionRef = useRef<Direction>('UP');
  const nextDirectionRef = useRef<Direction>('UP');

  const generateFood = useCallback((currentSnake: Position[]): Position => {
    let newFood: Position;
    while (true) {
      newFood = {
        x: Math.floor(Math.random() * BOARD_SIZE),
        y: Math.floor(Math.random() * BOARD_SIZE),
      };
      if (!currentSnake.some(seg => seg.x === newFood.x && seg.y === newFood.y)) {
        break;
      }
    }
    return newFood;
  }, []);

  const handleStart = () => {
    const initialSnake = [
      { x: 7, y: 7 },
      { x: 7, y: 8 },
      { x: 7, y: 9 },
    ];
    setSnake(initialSnake);
    directionRef.current = 'UP';
    nextDirectionRef.current = 'UP';
    setScore(0);
    setIsGameOver(false);
    setIsPaused(false);
    setFood(generateFood(initialSnake));
    setIsRunning(true);
  };

  const changeDir = useCallback((newDir: Direction) => {
    const current = directionRef.current;
    if (newDir === 'UP' && current !== 'DOWN') nextDirectionRef.current = 'UP';
    if (newDir === 'DOWN' && current !== 'UP') nextDirectionRef.current = 'DOWN';
    if (newDir === 'LEFT' && current !== 'RIGHT') nextDirectionRef.current = 'LEFT';
    if (newDir === 'RIGHT' && current !== 'LEFT') nextDirectionRef.current = 'RIGHT';
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (['ArrowUp', 'w', 'W'].includes(e.key)) {
        e.preventDefault();
        changeDir('UP');
      } else if (['ArrowDown', 's', 'S'].includes(e.key)) {
        e.preventDefault();
        changeDir('DOWN');
      } else if (['ArrowLeft', 'a', 'A'].includes(e.key)) {
        e.preventDefault();
        changeDir('LEFT');
      } else if (['ArrowRight', 'd', 'D'].includes(e.key)) {
        e.preventDefault();
        changeDir('RIGHT');
      } else if (e.key === ' ' && isRunning) {
        e.preventDefault();
        setIsPaused(p => !p);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isRunning, changeDir]);

  // Main game interval loop
  useEffect(() => {
    if (!isRunning || isGameOver || isPaused) return;

    const interval = setInterval(() => {
      setSnake(prevSnake => {
        const dir = nextDirectionRef.current;
        directionRef.current = dir;

        const head = { ...prevSnake[0] };
        if (dir === 'UP') head.y -= 1;
        if (dir === 'DOWN') head.y += 1;
        if (dir === 'LEFT') head.x -= 1;
        if (dir === 'RIGHT') head.x += 1;

        // Check wall collision
        if (head.x < 0 || head.x >= BOARD_SIZE || head.y < 0 || head.y >= BOARD_SIZE) {
          setIsGameOver(true);
          setIsRunning(false);
          return prevSnake;
        }

        // Check self collision
        if (prevSnake.some(seg => seg.x === head.x && seg.y === head.y)) {
          setIsGameOver(true);
          setIsRunning(false);
          return prevSnake;
        }

        const newSnake = [head, ...prevSnake];

        // Check food collision
        if (head.x === food.x && head.y === food.y) {
          setScore(s => {
            const nextScore = s + 10;
            if (nextScore > highScore) {
              setHighScore(nextScore);
              localStorage.setItem('saurabh-snake-highscore', nextScore.toString());
            }
            return nextScore;
          });
          setFood(generateFood(newSnake));
        } else {
          newSnake.pop();
        }

        return newSnake;
      });
    }, 120);

    return () => clearInterval(interval);
  }, [isRunning, isGameOver, isPaused, food, highScore, generateFood]);

  return (
    <div className="h-full bg-[#121214] text-white p-4 flex flex-col items-center justify-between font-sans select-none overflow-auto custom-scrollbar">
      {/* Header bar */}
      <div className="w-full max-w-xs flex items-center justify-between px-3 py-2 bg-zinc-900 rounded-xl border border-zinc-800 text-xs">
        <div className="flex items-center gap-1.5 text-emerald-400 font-bold">
          Score: <span className="text-white text-sm">{score}</span>
        </div>
        <div className="flex items-center gap-1.5 text-amber-400 font-bold">
          <Trophy size={14} /> High: <span className="text-white text-sm">{highScore}</span>
        </div>
      </div>

      {/* Grid Board using explicit inline CSS grid template columns/rows */}
      <div 
        className="relative my-2 w-[270px] h-[270px] sm:w-[300px] sm:h-[300px] bg-zinc-950 rounded-2xl border border-zinc-800 overflow-hidden shadow-2xl grid"
        style={{
          gridTemplateColumns: `repeat(${BOARD_SIZE}, minmax(0, 1fr))`,
          gridTemplateRows: `repeat(${BOARD_SIZE}, minmax(0, 1fr))`
        }}
      >
        {!isRunning && !isGameOver && (
          <div className="absolute inset-0 bg-black/80 backdrop-blur-sm flex flex-col items-center justify-center p-6 text-center space-y-4 z-20">
            <h2 className="text-xl font-black text-emerald-400">🐍 Snake Arcade</h2>
            <p className="text-xs text-zinc-300">Use WASD or Arrow Keys. Press Space to Pause!</p>
            <button 
              onClick={handleStart}
              className="px-6 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs rounded-full transition-all shadow-lg shadow-emerald-600/30 flex items-center gap-2"
            >
              <Play size={16} /> Play Now
            </button>
          </div>
        )}

        {isPaused && isRunning && (
          <div className="absolute inset-0 bg-black/75 backdrop-blur-sm flex flex-col items-center justify-center p-6 text-center space-y-3 z-20">
            <h2 className="text-xl font-black text-amber-400">Game Paused</h2>
            <button 
              onClick={() => setIsPaused(false)}
              className="px-5 py-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs rounded-full transition-all flex items-center gap-2"
            >
              <Play size={14} /> Resume
            </button>
          </div>
        )}

        {isGameOver && (
          <div className="absolute inset-0 bg-black/85 backdrop-blur-sm flex flex-col items-center justify-center p-6 text-center space-y-3 z-20">
            <h2 className="text-xl font-black text-red-400">Game Over!</h2>
            <p className="text-xs text-zinc-300">Final Score: <strong className="text-emerald-400">{score}</strong></p>
            <button 
              onClick={handleStart}
              className="px-5 py-2 bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs rounded-full transition-all flex items-center gap-2"
            >
              <RotateCcw size={14} /> Try Again
            </button>
          </div>
        )}

        {/* Grid Cells */}
        {Array.from({ length: BOARD_SIZE * BOARD_SIZE }).map((_, idx) => {
          const x = idx % BOARD_SIZE;
          const y = Math.floor(idx / BOARD_SIZE);
          const isHead = snake[0]?.x === x && snake[0]?.y === y;
          const isBody = snake.slice(1).some(s => s.x === x && s.y === y);
          const isFood = food.x === x && food.y === y;

          return (
            <div 
              key={idx}
              className={`w-full h-full ${
                isHead 
                  ? 'bg-emerald-400 rounded-sm shadow-[0_0_8px_rgba(52,211,153,0.9)] z-10' 
                  : isBody 
                  ? 'bg-emerald-600/90 rounded-sm' 
                  : isFood 
                  ? 'bg-red-500 rounded-full animate-pulse shadow-[0_0_10px_rgba(239,68,68,1)]' 
                  : 'border-[0.5px] border-white/[0.04]'
              }`}
            />
          );
        })}
      </div>

      {/* D-Pad & Control Buttons */}
      <div className="flex flex-col items-center gap-1">
        <button 
          onClick={() => changeDir('UP')}
          className="w-9 h-9 bg-zinc-800 hover:bg-zinc-700 active:scale-95 text-white rounded-xl flex items-center justify-center shadow"
        >
          <ArrowUp size={16} />
        </button>
        <div className="flex gap-3">
          <button 
            onClick={() => changeDir('LEFT')}
            className="w-9 h-9 bg-zinc-800 hover:bg-zinc-700 active:scale-95 text-white rounded-xl flex items-center justify-center shadow"
          >
            <ArrowLeft size={16} />
          </button>
          {isRunning && (
            <button 
              onClick={() => setIsPaused(p => !p)}
              className="w-9 h-9 bg-amber-600 hover:bg-amber-500 active:scale-95 text-white rounded-xl flex items-center justify-center shadow"
              title="Pause/Resume"
            >
              <Pause size={14} />
            </button>
          )}
          <button 
            onClick={() => changeDir('RIGHT')}
            className="w-9 h-9 bg-zinc-800 hover:bg-zinc-700 active:scale-95 text-white rounded-xl flex items-center justify-center shadow"
          >
            <ArrowRight size={16} />
          </button>
        </div>
        <button 
          onClick={() => changeDir('DOWN')}
          className="w-9 h-9 bg-zinc-800 hover:bg-zinc-700 active:scale-95 text-white rounded-xl flex items-center justify-center shadow"
        >
          <ArrowDown size={16} />
        </button>
      </div>
    </div>
  );
};
