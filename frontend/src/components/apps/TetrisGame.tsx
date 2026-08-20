import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Play, RotateCcw, Trophy, ArrowLeft, ArrowRight, ArrowDown, RotateCw } from 'lucide-react';

const COLS = 10;
const ROWS = 20;

type TetrominoShape = number[][];
type Matrix = (string | null)[][];

const TETROMINOES: { [key: string]: { shape: TetrominoShape; color: string } } = {
  I: { shape: [[1, 1, 1, 1]], color: 'bg-cyan-400' },
  J: { shape: [[1, 0, 0], [1, 1, 1]], color: 'bg-blue-500' },
  L: { shape: [[0, 0, 1], [1, 1, 1]], color: 'bg-amber-500' },
  O: { shape: [[1, 1], [1, 1]], color: 'bg-yellow-400' },
  S: { shape: [[0, 1, 1], [1, 1, 0]], color: 'bg-emerald-500' },
  T: { shape: [[0, 1, 0], [1, 1, 1]], color: 'bg-purple-500' },
  Z: { shape: [[1, 1, 0], [0, 1, 1]], color: 'bg-red-500' },
};

const RANDOM_TETROMINO = () => {
  const keys = Object.keys(TETROMINOES);
  const randKey = keys[Math.floor(Math.random() * keys.length)];
  return { key: randKey, ...TETROMINOES[randKey] };
};

const createEmptyMatrix = (): Matrix => 
  Array.from({ length: ROWS }, () => Array(COLS).fill(null));

export const TetrisGame: React.FC = () => {
  const [matrix, setMatrix] = useState<Matrix>(createEmptyMatrix);
  const [currentPiece, setCurrentPiece] = useState<{
    shape: TetrominoShape;
    color: string;
    x: number;
    y: number;
  } | null>(null);
  const [nextPiece, setNextPiece] = useState(RANDOM_TETROMINO());
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState<number>(() => {
    return parseInt(localStorage.getItem('saurabh-tetris-highscore') || '0', 10);
  });
  const [gameOver, setGameOver] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  const checkCollision = useCallback((pieceShape: TetrominoShape, posX: number, posY: number, currentMatrix: Matrix) => {
    for (let r = 0; r < pieceShape.length; r++) {
      for (let c = 0; c < pieceShape[r].length; c++) {
        if (pieceShape[r][c] !== 0) {
          const newY = posY + r;
          const newX = posX + c;
          if (newX < 0 || newX >= COLS || newY >= ROWS) return true;
          if (newY >= 0 && currentMatrix[newY][newX] !== null) return true;
        }
      }
    }
    return false;
  }, []);

  const spawnPiece = useCallback((grid: Matrix, pieceToSpawn?: ReturnType<typeof RANDOM_TETROMINO>) => {
    const p = pieceToSpawn || nextPiece;
    const next = RANDOM_TETROMINO();
    setNextPiece(next);

    const startX = Math.floor((COLS - p.shape[0].length) / 2);
    const startY = 0;

    if (checkCollision(p.shape, startX, startY, grid)) {
      setGameOver(true);
      setIsPlaying(false);
      return;
    }

    setCurrentPiece({
      shape: p.shape,
      color: p.color,
      x: startX,
      y: startY,
    });
  }, [nextPiece, checkCollision]);

  const startGame = () => {
    const empty = createEmptyMatrix();
    setMatrix(empty);
    setScore(0);
    setGameOver(false);
    const firstPiece = RANDOM_TETROMINO();
    spawnPiece(empty, firstPiece);
    setIsPlaying(true);
  };

  const moveLeft = useCallback(() => {
    if (!currentPiece || !isPlaying || gameOver) return;
    if (!checkCollision(currentPiece.shape, currentPiece.x - 1, currentPiece.y, matrix)) {
      setCurrentPiece(prev => prev ? { ...prev, x: prev.x - 1 } : null);
    }
  }, [currentPiece, isPlaying, gameOver, matrix, checkCollision]);

  const moveRight = useCallback(() => {
    if (!currentPiece || !isPlaying || gameOver) return;
    if (!checkCollision(currentPiece.shape, currentPiece.x + 1, currentPiece.y, matrix)) {
      setCurrentPiece(prev => prev ? { ...prev, x: prev.x + 1 } : null);
    }
  }, [currentPiece, isPlaying, gameOver, matrix, checkCollision]);

  const rotate = useCallback(() => {
    if (!currentPiece || !isPlaying || gameOver) return;
    const shape = currentPiece.shape;
    const rotated = shape[0].map((_, index) => shape.map(row => row[index]).reverse());

    if (!checkCollision(rotated, currentPiece.x, currentPiece.y, matrix)) {
      setCurrentPiece(prev => prev ? { ...prev, shape: rotated } : null);
    }
  }, [currentPiece, isPlaying, gameOver, matrix, checkCollision]);

  const drop = useCallback(() => {
    if (!currentPiece || !isPlaying || gameOver) return;

    if (!checkCollision(currentPiece.shape, currentPiece.x, currentPiece.y + 1, matrix)) {
      setCurrentPiece(prev => prev ? { ...prev, y: prev.y + 1 } : null);
    } else {
      // Lock piece into matrix
      const newMatrix = matrix.map(row => [...row]);
      for (let r = 0; r < currentPiece.shape.length; r++) {
        for (let c = 0; c < currentPiece.shape[r].length; c++) {
          if (currentPiece.shape[r][c] !== 0) {
            if (currentPiece.y + r >= 0) {
              newMatrix[currentPiece.y + r][currentPiece.x + c] = currentPiece.color;
            }
          }
        }
      }

      // Check line clears
      let clearedLines = 0;
      for (let r = ROWS - 1; r >= 0; r--) {
        if (newMatrix[r].every(cell => cell !== null)) {
          newMatrix.splice(r, 1);
          newMatrix.unshift(Array(COLS).fill(null));
          clearedLines++;
          r++; // Recheck same index
        }
      }

      if (clearedLines > 0) {
        const points = clearedLines === 1 ? 100 : clearedLines === 2 ? 300 : clearedLines === 3 ? 500 : 800;
        setScore(s => {
          const nextS = s + points;
          if (nextS > highScore) {
            setHighScore(nextS);
            localStorage.setItem('saurabh-tetris-highscore', nextS.toString());
          }
          return nextS;
        });
      }

      setMatrix(newMatrix);
      spawnPiece(newMatrix);
    }
  }, [currentPiece, isPlaying, gameOver, matrix, checkCollision, spawnPiece, highScore]);

  // Controls Listener
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isPlaying || gameOver) return;
      if (e.key === 'ArrowLeft' || e.key === 'a') moveLeft();
      if (e.key === 'ArrowRight' || e.key === 'd') moveRight();
      if (e.key === 'ArrowDown' || e.key === 's') drop();
      if (e.key === 'ArrowUp' || e.key === 'w' || e.key === ' ') rotate();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isPlaying, gameOver, moveLeft, moveRight, drop, rotate]);

  // Game Loop Ticker
  useEffect(() => {
    if (!isPlaying || gameOver) return;
    const interval = setInterval(drop, 500);
    return () => clearInterval(interval);
  }, [isPlaying, gameOver, drop]);

  return (
    <div className="h-full bg-[#121214] text-white p-4 flex flex-col items-center justify-between font-sans select-none overflow-auto custom-scrollbar">
      {/* Top Stats Bar */}
      <div className="w-full max-w-xs flex items-center justify-between px-3 py-2 bg-zinc-900 rounded-xl border border-zinc-800 text-xs">
        <div className="flex items-center gap-1.5 text-indigo-400 font-bold">
          Score: <span className="text-white text-sm">{score}</span>
        </div>
        <div className="flex items-center gap-1.5 text-amber-400 font-bold">
          <Trophy size={14} /> High: <span className="text-white text-sm">{highScore}</span>
        </div>
      </div>

      {/* Main Play Area */}
      <div className="relative my-2 w-[220px] h-[340px] bg-zinc-950 rounded-2xl border border-zinc-800 overflow-hidden shadow-2xl grid grid-cols-10 grid-rows-20">
        {!isPlaying && !gameOver && (
          <div className="absolute inset-0 bg-black/80 backdrop-blur-sm flex flex-col items-center justify-center p-6 text-center space-y-4 z-20">
            <h2 className="text-xl font-black text-indigo-400">🧱 Tetris Arcade</h2>
            <p className="text-xs text-zinc-300">Arrow keys to move/rotate. Stack & clear lines!</p>
            <button 
              onClick={startGame}
              className="px-6 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs rounded-full transition-all shadow-lg shadow-indigo-600/30 flex items-center gap-2"
            >
              <Play size={16} /> Start Game
            </button>
          </div>
        )}

        {gameOver && (
          <div className="absolute inset-0 bg-black/85 backdrop-blur-sm flex flex-col items-center justify-center p-6 text-center space-y-3 z-20">
            <h2 className="text-xl font-black text-red-400">Game Over!</h2>
            <p className="text-xs text-zinc-300">Final Score: <strong className="text-indigo-400">{score}</strong></p>
            <button 
              onClick={startGame}
              className="px-5 py-2 bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs rounded-full transition-all flex items-center gap-2"
            >
              <RotateCcw size={14} /> Try Again
            </button>
          </div>
        )}

        {/* Matrix Grid Rendering */}
        {matrix.map((row, r) =>
          row.map((cellColor, c) => {
            // Check if current active piece occupies cell
            let isCurrent = false;
            let currentPieceColor = '';
            if (currentPiece) {
              const pr = r - currentPiece.y;
              const pc = c - currentPiece.x;
              if (pr >= 0 && pr < currentPiece.shape.length && pc >= 0 && pc < currentPiece.shape[0].length) {
                if (currentPiece.shape[pr][pc] !== 0) {
                  isCurrent = true;
                  currentPieceColor = currentPiece.color;
                }
              }
            }

            const activeColor = isCurrent ? currentPieceColor : cellColor;

            return (
              <div
                key={`${r}-${c}`}
                className={`w-full h-full border-[0.5px] border-white/[0.02] ${
                  activeColor || 'bg-transparent'
                } ${activeColor ? 'rounded-[2px] shadow-sm' : ''}`}
              />
            );
          })
        )}
      </div>

      {/* Control Buttons */}
      <div className="flex gap-2">
        <button onClick={moveLeft} className="p-2.5 bg-zinc-800 hover:bg-zinc-700 active:scale-95 text-white rounded-xl">
          <ArrowLeft size={18} />
        </button>
        <button onClick={rotate} className="p-2.5 bg-indigo-600 hover:bg-indigo-500 active:scale-95 text-white rounded-xl">
          <RotateCw size={18} />
        </button>
        <button onClick={drop} className="p-2.5 bg-zinc-800 hover:bg-zinc-700 active:scale-95 text-white rounded-xl">
          <ArrowDown size={18} />
        </button>
        <button onClick={moveRight} className="p-2.5 bg-zinc-800 hover:bg-zinc-700 active:scale-95 text-white rounded-xl">
          <ArrowRight size={18} />
        </button>
      </div>
    </div>
  );
};
