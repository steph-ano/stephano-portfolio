import React, { useState, useRef, useEffect } from 'react';
import { Play, Pause, SkipBack, SkipForward, Volume2, VolumeX, ListMusic, Disc3, ExternalLink, ChevronUp, ChevronDown } from 'lucide-react';
import { sound } from '../audio/SoundFX';

export interface SoundtrackTrack {
  id: string;
  title: string;
  artist: string;
  album: string;
  src: string;
  officialLink?: string;
  platform: 'Spotify' | 'Bandcamp' | 'YouTube';
}

const TRACKS: SoundtrackTrack[] = [
  {
    id: 'china',
    title: 'China',
    artist: 'Kensuke Ushio',
    album: 'Ping Pong The Animation OST',
    src: '/audio/China - Kensuke Ushio.mp3',
    officialLink: 'https://open.spotify.com/album/4eJk8FsmhMawWb2T5t7T9G',
    platform: 'Spotify'
  },
  {
    id: 'like-a-dance',
    title: 'Like a Dance',
    artist: 'Kensuke Ushio',
    album: 'Ping Pong The Animation OST',
    src: '/audio/Like a Dance - Kensuke Ushio.mp3',
    officialLink: 'https://open.spotify.com/album/4eJk8FsmhMawWb2T5t7T9G',
    platform: 'Spotify'
  },
  {
    id: 'the-heat',
    title: 'The Heat',
    artist: 'Kensuke Ushio',
    album: 'Ping Pong The Animation OST',
    src: '/audio/The Heat - Kensuke Ushio.mp3',
    officialLink: 'https://open.spotify.com/album/4eJk8FsmhMawWb2T5t7T9G',
    platform: 'Spotify'
  },
  {
    id: 'sapience',
    title: 'Sapience',
    artist: 'King Gizzard & The Lizard Wizard',
    album: 'Alien Metal',
    src: '/audio/Sapience - King Gizzard & the Lizard Wizard.mp3',
    officialLink: 'https://kinggizzard.bandcamp.com/',
    platform: 'Bandcamp'
  }
];

export const SoundtrackPlayer: React.FC = () => {
  const [currentTrackIndex, setCurrentTrackIndex] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [currentTime, setCurrentTime] = useState<number>(0);
  const [duration, setDuration] = useState<number>(0);
  const [volume, setVolume] = useState<number>(0.65);
  const [isMuted, setIsMuted] = useState<boolean>(false);
  const [showPlaylist, setShowPlaylist] = useState<boolean>(false);
  const [isMinimized, setIsMinimized] = useState<boolean>(false);

  const audioRef = useRef<HTMLAudioElement | null>(null);
  const currentTrack = TRACKS[currentTrackIndex];

  // Load and play track
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = isMuted ? 0 : volume;
      if (isPlaying) {
        audioRef.current.play().catch(() => {
          setIsPlaying(false);
        });
      }
    }
  }, [currentTrackIndex]);

  const togglePlay = () => {
    sound.playClick();
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play().then(() => {
        setIsPlaying(true);
      }).catch(() => {
        setIsPlaying(false);
      });
    }
  };

  const handleNext = () => {
    sound.playClick();
    setCurrentTrackIndex((prev) => (prev + 1) % TRACKS.length);
    setIsPlaying(true);
  };

  const handlePrev = () => {
    sound.playClick();
    setCurrentTrackIndex((prev) => (prev - 1 + TRACKS.length) % TRACKS.length);
    setIsPlaying(true);
  };

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
      setDuration(audioRef.current.duration || 0);
    }
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const time = parseFloat(e.target.value);
    setCurrentTime(time);
    if (audioRef.current) {
      audioRef.current.currentTime = time;
    }
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = parseFloat(e.target.value);
    setVolume(val);
    if (audioRef.current) {
      audioRef.current.volume = isMuted ? 0 : val;
    }
    if (val > 0 && isMuted) {
      setIsMuted(false);
    }
  };

  const toggleMute = () => {
    sound.playClick();
    const nextMuted = !isMuted;
    setIsMuted(nextMuted);
    if (audioRef.current) {
      audioRef.current.volume = nextMuted ? 0 : volume;
    }
  };

  const formatTime = (secs: number) => {
    if (isNaN(secs) || secs < 0) return '0:00';
    const m = Math.floor(secs / 60);
    const s = Math.floor(secs % 60);
    return `${m}:${s < 10 ? '0' : ''}${s}`;
  };

  if (isMinimized) {
    return (
      <div className="fixed bottom-3 right-3 sm:bottom-5 sm:right-5 z-40">
        <audio
          ref={audioRef}
          src={currentTrack.src}
          onTimeUpdate={handleTimeUpdate}
          onLoadedMetadata={handleTimeUpdate}
          onEnded={handleNext}
          preload="metadata"
        />
        <div
          onClick={() => {
            sound.playClick();
            setIsMinimized(false);
          }}
          className="zine-panel rounded-full px-3 py-2 border border-amber-500/50 shadow-2xl flex items-center gap-2 backdrop-blur-2xl cursor-pointer hover:border-amber-400 hover:scale-105 active:scale-95 transition-all text-xs font-mono"
        >
          <div className="w-6 h-6 rounded-full bg-zinc-900 border border-amber-500/40 flex items-center justify-center shrink-0">
            <Disc3 className={`w-3.5 h-3.5 text-amber-400 ${isPlaying ? 'animate-spin duration-3000' : 'opacity-70'}`} />
          </div>
          <div className="flex items-center min-w-0 max-w-[100px] xs:max-w-[140px]">
            <span className="text-white font-bold truncate text-[11px]">{currentTrack.title}</span>
          </div>
          <button
            onClick={(e) => {
              e.stopPropagation();
              togglePlay();
            }}
            className="p-1 rounded-full bg-amber-400 text-black hover:bg-amber-300 transition-colors cursor-pointer"
            title={isPlaying ? 'Pausar' : 'Reproducir'}
          >
            {isPlaying ? <Pause className="w-3 h-3 fill-black" /> : <Play className="w-3 h-3 fill-black ml-0.5" />}
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              setIsMinimized(false);
            }}
            className="text-zinc-400 hover:text-white p-0.5"
            title="Expandir reproductor"
          >
            <ChevronUp className="w-3.5 h-3.5 text-amber-400" />
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed bottom-3 sm:bottom-5 left-1/2 -translate-x-1/2 z-40 w-[95%] sm:w-[94%] max-w-2xl">
      {/* Hidden audio element */}
      <audio
        ref={audioRef}
        src={currentTrack.src}
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleTimeUpdate}
        onEnded={handleNext}
        preload="metadata"
      />

      {/* Playlist Drawer (pops up above the bar) */}
      {showPlaylist && (
        <div className="mb-2 zine-panel rounded-2xl p-3.5 sm:p-4 border border-amber-500/40 shadow-2xl backdrop-blur-2xl animate-in fade-in slide-in-from-bottom-2 max-h-[60vh] flex flex-col">
          <div className="flex items-center justify-between pb-2 mb-2 sm:mb-3 border-b border-zinc-800 text-xs font-mono">
            <div className="flex items-center gap-2 text-amber-400 font-bold">
              <Disc3 className="w-3.5 h-3.5 text-amber-400 animate-spin duration-3000" />
              <span className="truncate">SOUNDTRACK SELECTION // TRACKLIST</span>
            </div>
            <span className="text-[10px] text-zinc-400 shrink-0">4 TRACKS</span>
          </div>

          <div className="space-y-1.5 overflow-y-auto pr-1">
            {TRACKS.map((track, idx) => {
              const isSelected = idx === currentTrackIndex;
              return (
                <div
                  key={track.id}
                  onClick={() => {
                    sound.playClick();
                    setCurrentTrackIndex(idx);
                    setIsPlaying(true);
                  }}
                  onMouseEnter={() => sound.playHover()}
                  className={`flex items-center justify-between p-2 sm:p-2.5 rounded-xl text-xs font-mono transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-amber-400/15 border border-amber-400/40 text-white'
                      : 'hover:bg-zinc-900/80 text-zinc-300 border border-transparent'
                  }`}
                >
                  <div className="flex items-center gap-2.5 min-w-0">
                    <span className="text-[11px] text-amber-400 font-bold shrink-0">0{idx + 1}</span>
                    <div className="min-w-0">
                      <div className="font-bold text-zinc-100 flex items-center gap-1.5 truncate">
                        <span className="truncate">{track.title}</span>
                        {isSelected && isPlaying && (
                          <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-ping shrink-0" />
                        )}
                      </div>
                      <div className="text-[10px] text-zinc-400 truncate">{track.artist}</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 shrink-0">
                    {track.officialLink && (
                      <a
                        href={track.officialLink}
                        target="_blank"
                        rel="noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="px-2 py-0.5 rounded text-[10px] font-mono bg-zinc-900 hover:bg-zinc-800 text-amber-300 border border-amber-500/30 flex items-center gap-1"
                        title={`Escuchar oficial en ${track.platform}`}
                      >
                        <span>{track.platform}</span>
                        <ExternalLink className="w-2.5 h-2.5" />
                      </a>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-2.5 pt-2 border-t border-zinc-800/80 flex items-center justify-between text-[10px] font-mono text-zinc-500">
            <span className="truncate">© Kensuke Ushio & King Gizzard</span>
            <span className="text-amber-400 shrink-0">FAIR USE</span>
          </div>
        </div>
      )}

      {/* Main Bottom Floating Bar */}
      <div className="zine-panel corner-crosshairs rounded-2xl px-3 py-2 sm:px-5 sm:py-3 border border-amber-500/35 shadow-2xl flex flex-col gap-1 sm:gap-1.5 backdrop-blur-2xl">
        {/* Top Mini Scrubber */}
        <div className="flex items-center gap-2 text-[10px] font-mono text-zinc-400">
          <span className="w-7 sm:w-8 text-right text-amber-300/90 text-[10px]">{formatTime(currentTime)}</span>
          <div className="relative flex-1 flex items-center">
            <input
              type="range"
              min={0}
              max={duration || 100}
              value={currentTime}
              onChange={handleSeek}
              className="w-full h-1 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-amber-400"
            />
          </div>
          <span className="w-7 sm:w-8 text-zinc-500 text-[10px]">{formatTime(duration)}</span>
        </div>

        {/* Controls Row */}
        <div className="flex items-center justify-between gap-2 sm:gap-3">
          {/* Left: Track Info & Animated Equalizer bars */}
          <div className="flex items-center gap-2 min-w-0 max-w-[42%] sm:max-w-[45%]">
            {/* Vinyl disc */}
            <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-zinc-900 border border-amber-500/30 flex items-center justify-center shrink-0">
              <Disc3 className={`w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-400 ${isPlaying ? 'animate-spin duration-3000' : 'opacity-70'}`} />
            </div>

            {/* Title and artist */}
            <div className="min-w-0">
              <div className="flex items-center gap-1.5">
                <span className="text-[11px] sm:text-xs font-bold text-white font-['Syne'] truncate">
                  {currentTrack.title}
                </span>
                <span className="text-[9px] font-mono px-1 rounded bg-amber-400/10 text-amber-300 border border-amber-400/20 shrink-0 hidden md:inline">
                  {currentTrack.platform}
                </span>
              </div>
              <div className="text-[9px] sm:text-[10px] font-mono text-zinc-400 truncate">
                {currentTrack.artist}
              </div>
            </div>
          </div>

          {/* Center: Playback Buttons */}
          <div className="flex items-center gap-1 sm:gap-2 shrink-0">
            <button
              onClick={handlePrev}
              onMouseEnter={() => sound.playHover()}
              className="p-1 sm:p-1.5 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-800/80 transition-all cursor-pointer"
              title="Pista anterior"
            >
              <SkipBack className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </button>

            <button
              onClick={togglePlay}
              onMouseEnter={() => sound.playHover()}
              className="p-2 sm:p-2.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-black shadow-lg shadow-amber-500/20 active:scale-95 transition-all cursor-pointer font-bold"
              title={isPlaying ? 'Pausar' : 'Reproducir'}
            >
              {isPlaying ? <Pause className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-black" /> : <Play className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-black ml-0.5" />}
            </button>

            <button
              onClick={handleNext}
              onMouseEnter={() => sound.playHover()}
              className="p-1 sm:p-1.5 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-800/80 transition-all cursor-pointer"
              title="Pista siguiente"
            >
              <SkipForward className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </button>
          </div>

          {/* Right: Volume, Playlist Toggle, and Minimize Toggle */}
          <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
            {/* Volume Control (desktop only) */}
            <div className="hidden lg:flex items-center gap-1.5">
              <button
                onClick={toggleMute}
                onMouseEnter={() => sound.playHover()}
                className="text-zinc-400 hover:text-amber-400 transition-colors cursor-pointer"
                title={isMuted ? 'Activar sonido' : 'Silenciar'}
              >
                {isMuted || volume === 0 ? (
                  <VolumeX className="w-3.5 h-3.5 text-zinc-500" />
                ) : (
                  <Volume2 className="w-3.5 h-3.5 text-amber-400" />
                )}
              </button>
              <input
                type="range"
                min={0}
                max={1}
                step={0.05}
                value={isMuted ? 0 : volume}
                onChange={handleVolumeChange}
                className="w-14 h-1 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-amber-400"
              />
            </div>

            {/* Playlist Toggle */}
            <button
              onClick={() => {
                sound.playClick();
                setShowPlaylist(!showPlaylist);
              }}
              onMouseEnter={() => sound.playHover()}
              className={`p-1.5 rounded-lg border text-xs font-mono transition-all flex items-center gap-1 cursor-pointer ${
                showPlaylist
                  ? 'bg-amber-400/20 border-amber-400 text-amber-300'
                  : 'bg-zinc-900 border-zinc-800 text-zinc-300 hover:text-white hover:border-amber-500/40'
              }`}
              title="Ver lista de canciones"
            >
              <ListMusic className="w-3.5 h-3.5 text-amber-400" />
              <span className="hidden md:inline text-[11px]">TRACKS</span>
              {showPlaylist ? <ChevronDown className="w-3 h-3" /> : <ChevronUp className="w-3 h-3" />}
            </button>

            {/* Minimize to Pill Button */}
            <button
              onClick={() => {
                sound.playClick();
                setShowPlaylist(false);
                setIsMinimized(true);
              }}
              onMouseEnter={() => sound.playHover()}
              className="p-1.5 rounded-lg bg-zinc-900/90 border border-zinc-800 text-zinc-400 hover:text-amber-400 hover:border-amber-500/30 transition-all cursor-pointer"
              title="Minimizar reproductor a píldora"
              aria-label="Minimizar reproductor"
            >
              <ChevronDown className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
