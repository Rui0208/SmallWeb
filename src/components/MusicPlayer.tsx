import React, { useState, useRef, useEffect, useMemo } from 'react';
import {
  Play,
  Pause,
  Volume2,
  VolumeX,
  ChevronUp,
  ChevronDown,
} from 'lucide-react';

const MusicPlayer: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.5);
  const [isMuted, setIsMuted] = useState(false);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [isExpanded, setIsExpanded] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const playlist = useMemo(() => [
    { title: 'Love Story', src: '/music/Lovestory.mp3' },
    {
      title: '偶超級宇宙無敵霹靂愛尼',
      src: '/music/偶超級宇宙無敵霹靂愛尼.mp3',
    },
    { title: '星星', src: '/music/星星.mp3' },
  ], []);

  useEffect(() => {
    audioRef.current = new Audio(playlist[currentTrackIndex].src);
    audioRef.current.loop = false;
    audioRef.current.play();
    setIsPlaying(true);
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, [currentTrackIndex, playlist]);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    if (audioRef.current) {
      audioRef.current.volume = newVolume;
    }
    setIsMuted(newVolume === 0);
  };

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handleTrackChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newIndex = parseInt(e.target.value);
    setCurrentTrackIndex(newIndex);
  };

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div
      className={`fixed bottom-4 right-4 bg-black p-4 rounded-lg shadow-lg z-50 transition-all duration-300 ${isExpanded ? 'h-auto' : 'h-16'} overflow-hidden`}
    >
      <div className="flex items-center justify-between mb-2">
        <button onClick={togglePlay} className="focus:outline-none text-white">
          {isPlaying ? <Pause size={24} /> : <Play size={24} />}
        </button>
        {!isExpanded && (
          <span className="text-white text-sm truncate mx-2">
            {playlist[currentTrackIndex].title}
          </span>
        )}
        <button
          onClick={toggleExpand}
          className="focus:outline-none text-white"
        >
          {isExpanded ? <ChevronDown size={24} /> : <ChevronUp size={24} />}
        </button>
      </div>
      {isExpanded && (
        <div className="flex flex-col items-center space-y-2">
          <select
            value={currentTrackIndex}
            onChange={handleTrackChange}
            className="w-full p-2 bg-gray-800 text-white rounded"
          >
            {playlist.map((track, index) => (
              <option key={index} value={index}>
                {track.title}
              </option>
            ))}
          </select>
          <div className="flex items-center space-x-2">
            <input
              type="range"
              min="0"
              max="1"
              step="0.01"
              value={volume}
              onChange={handleVolumeChange}
              className="w-24"
            />
            <button
              onClick={toggleMute}
              className="focus:outline-none text-white"
            >
              {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default MusicPlayer;
