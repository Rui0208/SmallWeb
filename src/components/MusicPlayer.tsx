import React, { useState, useRef, useEffect } from 'react';
import {
  Play,
  Pause,
  Volume2,
  VolumeX,
  ChevronUp,
  ChevronDown,
  SkipForward,
} from 'lucide-react';

const MusicPlayer: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [volume, setVolume] = useState(0.5);
  const [isMuted, setIsMuted] = useState(false);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [isExpanded, setIsExpanded] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isPlaylistOpen, setIsPlaylistOpen] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const playlist = [
    { title: 'Love Story', src: '/music/Lovestory.mp3' },
    { title: '偶超級宇宙無敵霹靂愛尼', src: '/music/偶超級宇宙無敵霹靂愛尼.mp3' },
    { title: '星星', src: '/music/星星.mp3' },
  ];

  useEffect(() => {
    audioRef.current = new Audio(playlist[currentTrackIndex].src);
    audioRef.current.volume = volume;
    audioRef.current.play().catch(error => console.log("自動播放失敗:", error));

    const updateTime = () => {
      if (audioRef.current) {
        setCurrentTime(audioRef.current.currentTime);
        setDuration(audioRef.current.duration);
      }
    };

    audioRef.current.addEventListener('timeupdate', updateTime);
    audioRef.current.addEventListener('loadedmetadata', updateTime);
    audioRef.current.addEventListener('ended', handleTrackEnd);

    return () => {
      if (audioRef.current) {
        audioRef.current.removeEventListener('timeupdate', updateTime);
        audioRef.current.removeEventListener('loadedmetadata', updateTime);
        audioRef.current.removeEventListener('ended', handleTrackEnd);
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.src = playlist[currentTrackIndex].src;
      audioRef.current.volume = isMuted ? 0 : volume;
      if (isPlaying) {
        audioRef.current.play();
      } else {
        audioRef.current.pause();
      }
    }
  }, [currentTrackIndex, isPlaying]);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = isMuted ? 0 : volume;
    }
  }, [volume, isMuted]);

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
    if (newVolume > 0) {
      setIsMuted(false);
    }
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  const handleTrackChange = (index: number) => {
    setCurrentTrackIndex(index);
    setIsPlaying(true);
    setIsPlaylistOpen(false);
  };

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const handleProgressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const time = parseFloat(e.target.value);
    setCurrentTime(time);
    if (audioRef.current) {
      audioRef.current.currentTime = time;
    }
  };

  const playNextTrack = () => {
    const nextIndex = (currentTrackIndex + 1) % playlist.length;
    setCurrentTrackIndex(nextIndex);
    setIsPlaying(true);
  };

  const handleTrackEnd = () => {
    playNextTrack();
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  return (
    <div
      className={`fixed bottom-4 right-4 bg-gray-800 p-4 rounded-lg shadow-lg z-50 transition-all duration-300 ${
        isExpanded ? 'h-auto w-80' : 'h-16 w-64'
      } `}
    >
      <div className="flex items-center justify-between mb-2">
        <button onClick={togglePlay} className="focus:outline-none text-white hover:text-yellow-300 transition-colors">
          {isPlaying ? <Pause size={24} /> : <Play size={24} />}
        </button>
        <div className="relative flex-grow mx-2">
          <button
            onClick={() => setIsPlaylistOpen(!isPlaylistOpen)}
            className="w-full text-center focus:outline-none text-white hover:text-yellow-300 transition-colors truncate"
          >
            {playlist[currentTrackIndex].title}
            <ChevronUp size={16} className="inline ml-1" />
          </button>
          {isPlaylistOpen && (
            <div className="absolute bottom-full left-0 w-full bg-gray-700 rounded shadow-lg mb-1 max-h-40 overflow-y-auto">
              {playlist.map((track, index) => (
                <div
                  key={index}
                  onClick={() => handleTrackChange(index)}
                  className={`p-2 cursor-pointer hover:bg-gray-600 transition-colors ${
                    currentTrackIndex === index ? 'bg-gray-500' : ''
                  }`}
                >
                  <span className="text-white text-sm truncate block">{track.title}</span>
                </div>
              ))}
            </div>
          )}
        </div>
        <button
          onClick={toggleExpand}
          className="focus:outline-none text-white hover:text-yellow-300 transition-colors"
        >
          {isExpanded ? <ChevronDown size={24} /> : <ChevronUp size={24} />}
        </button>
      </div>
      {isExpanded && (
        <div className="flex flex-col items-center space-y-2">
          <div className="w-full">
            <input
              type="range"
              min={0}
              max={duration}
              value={currentTime}
              onChange={handleProgressChange}
              className="w-full"
            />
            <div className="flex justify-between text-xs text-white">
              <span>{formatTime(currentTime)}</span>
              <span>{formatTime(duration)}</span>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <input
              type="range"
              min="0"
              max="1"
              step="0.01"
              value={isMuted ? 0 : volume}
              onChange={handleVolumeChange}
              className="w-24"
            />
            <button
              onClick={toggleMute}
              className="focus:outline-none text-white hover:text-yellow-300 transition-colors"
            >
              {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
            </button>
            <button
              onClick={playNextTrack}
              className="focus:outline-none text-white hover:text-yellow-300 transition-colors"
            >
              <SkipForward size={20} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default MusicPlayer;
