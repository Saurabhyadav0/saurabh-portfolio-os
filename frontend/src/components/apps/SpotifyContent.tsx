import React, { useState, useEffect, useRef } from 'react';
import { Play, Pause, SkipForward, SkipBack, Volume2 } from 'lucide-react';
import { SONGS } from '@/data/songs';

export const SpotifyContent: React.FC = () => {
  const [index, setIndex] = useState(0);
  const [playing, setPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (audioRef.current) {
      if (playing) {
        audioRef.current.play().catch(() => setPlaying(false));
      } else {
        audioRef.current.pause();
      }
    }
  }, [playing, index]);

  return (
    <div className="h-full bg-gradient-to-b from-zinc-900 to-black text-white p-8 flex flex-col items-center justify-center text-center">
      <div className={`w-48 h-48 ${SONGS[index].cover} rounded-lg shadow-2xl mb-8`} />
      <h2 className="text-xl font-bold">{SONGS[index].title}</h2>
      <p className="text-zinc-400 text-sm">{SONGS[index].artist}</p>
      
      <div className="flex items-center gap-6 mt-8">
        <SkipBack 
          className="cursor-pointer hover:text-green-400 transition-colors" 
          onClick={() => setIndex(i => (i - 1 + SONGS.length) % SONGS.length)}
        />
        <div 
          onClick={() => setPlaying(!playing)} 
          className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-black cursor-pointer hover:scale-110 shadow-lg active:scale-95"
        >
          {playing ? <Pause size={20} /> : <Play size={20} />}
        </div>
        <SkipForward 
          className="cursor-pointer hover:text-green-400 transition-colors" 
          onClick={() => setIndex(i => (i + 1) % SONGS.length)}
        />
      </div>
      
      <audio ref={audioRef} src={SONGS[index].url} />
    </div>
  );
};
