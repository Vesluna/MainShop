import { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX, Play, Pause, Music, ChevronDown, ChevronUp, ListMusic } from 'lucide-react';
import { Button } from './button';
import { MUSIC_TRACKS } from '@/lib/musicTracks';

export function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [volume, setVolume] = useState(0.5);
  const [isVisible, setIsVisible] = useState(false);
  const [showTrackList, setShowTrackList] = useState(false);
  
  const audioRef = useRef<HTMLAudioElement | null>(null);
  
  // Initialize audio when component mounts
  useEffect(() => {
    const audio = new Audio(MUSIC_TRACKS[currentTrackIndex].src);
    audio.loop = false; // Don't loop individual tracks, we'll handle progression
    audio.volume = volume;
    audioRef.current = audio;
    
    // Auto-play next track when one ends
    const handleTrackEnd = () => {
      nextTrack();
    };
    
    audio.addEventListener('ended', handleTrackEnd);
    
    return () => {
      audio.removeEventListener('ended', handleTrackEnd);
      audio.pause();
      audioRef.current = null;
    };
  }, [currentTrackIndex]);
  
  // Show player after a short delay
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 500);
    
    return () => clearTimeout(timer);
  }, []);
  
  // Play/pause functionality
  useEffect(() => {
    if (!audioRef.current) return;
    
    if (isPlaying) {
      audioRef.current.play().catch(error => {
        console.error("Error playing audio:", error);
        setIsPlaying(false);
      });
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying]);
  
  // Volume control
  useEffect(() => {
    if (!audioRef.current) return;
    audioRef.current.volume = isMuted ? 0 : volume;
  }, [volume, isMuted]);
  
  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };
  
  const toggleMute = () => {
    setIsMuted(!isMuted);
  };
  
  const nextTrack = () => {
    const newIndex = (currentTrackIndex + 1) % MUSIC_TRACKS.length;
    setCurrentTrackIndex(newIndex);
    if (isPlaying && audioRef.current) {
      audioRef.current.pause();
      // Small timeout to allow audio to load
      setTimeout(() => {
        if (audioRef.current) {
          audioRef.current.play().catch(console.error);
        }
      }, 50);
    }
  };
  
  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    if (isMuted && newVolume > 0) {
      setIsMuted(false);
    }
  };
  
  const currentTrack = MUSIC_TRACKS[currentTrackIndex];
  
  // Handle selecting a track from the list
  const selectTrack = (index: number) => {
    if (index === currentTrackIndex) return;
    setCurrentTrackIndex(index);
    if (isPlaying && audioRef.current) {
      audioRef.current.pause();
      setTimeout(() => {
        if (audioRef.current) {
          audioRef.current.play().catch(console.error);
        }
      }, 50);
    }
    // Hide the track list after selection on mobile
    if (window.innerWidth < 768) {
      setShowTrackList(false);
    }
  };

  return (
    <div 
      className={`fixed bottom-4 right-4 z-[100] bg-black/80 backdrop-blur-sm text-white 
                 rounded-lg p-3 shadow-lg transition-all duration-500 flex flex-col gap-2
                 border border-purple-800 max-w-xs md:max-w-md
                 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
    >
      {/* Header with current track info */}
      <div className="flex items-center gap-2">
        <Music className="w-5 h-5 text-purple-400" />
        <div className="flex-1 min-w-0">
          <p className="text-sm font-medium truncate">{currentTrack.name}</p>
          <p className="text-xs text-gray-400 truncate">{currentTrack.artist}</p>
        </div>
        
        <div className="flex items-center gap-1">
          {/* Toggle track list button */}
          <Button 
            variant="ghost" 
            size="icon" 
            className="h-8 w-8 text-purple-300 hover:text-purple-100 hover:bg-purple-900/50"
            onClick={() => setShowTrackList(!showTrackList)}
            title="Show/hide track list"
          >
            <ListMusic className="h-4 w-4" />
          </Button>
          
          {/* Play/pause button */}
          <Button 
            variant="ghost" 
            size="icon" 
            className="h-8 w-8 text-purple-300 hover:text-purple-100 hover:bg-purple-900/50"
            onClick={togglePlay}
          >
            {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
          </Button>
          
          {/* Mute button */}
          <Button 
            variant="ghost" 
            size="icon" 
            className="h-8 w-8 text-purple-300 hover:text-purple-100 hover:bg-purple-900/50"
            onClick={toggleMute}
          >
            {isMuted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
          </Button>
        </div>
      </div>
      
      {/* Controls: volume slider and next button */}
      <div className="flex items-center gap-2">
        <input
          type="range"
          min="0"
          max="1"
          step="0.01"
          value={volume}
          onChange={handleVolumeChange}
          className="w-full h-1.5 appearance-none bg-purple-900 rounded-full outline-none
                   [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-3
                   [&::-webkit-slider-thumb]:h-3 [&::-webkit-slider-thumb]:rounded-full
                   [&::-webkit-slider-thumb]:bg-purple-400"
        />
        
        <Button 
          variant="outline"
          size="sm"
          className="text-xs h-7 px-2 bg-purple-950/50 border-purple-800 hover:bg-purple-900"
          onClick={nextTrack}
        >
          Next
        </Button>
      </div>
      
      {/* Track list (expandable) */}
      {showTrackList && (
        <div className="mt-1 border-t border-purple-900/50 pt-2 max-h-40 overflow-y-auto scrollbar-thin">
          <h4 className="text-xs font-semibold text-purple-300 mb-1">Available Tracks</h4>
          <ul className="space-y-1">
            {MUSIC_TRACKS.map((track, index) => (
              <li 
                key={track.id}
                className={`text-sm p-1 px-2 rounded cursor-pointer flex items-center justify-between
                          ${index === currentTrackIndex 
                            ? 'bg-purple-900/60 text-white' 
                            : 'hover:bg-purple-900/30 text-gray-300'}`}
                onClick={() => selectTrack(index)}
              >
                <div className="flex-1 min-w-0">
                  <p className="truncate">{track.name}</p>
                  <p className="text-xs text-gray-400 truncate">{track.artist}</p>
                </div>
                {index === currentTrackIndex && isPlaying && (
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse"></span>
                )}
              </li>
            ))}
          </ul>
          <p className="text-xs text-gray-500 mt-2 italic">
            Add tracks in client/src/lib/musicTracks.ts
          </p>
        </div>
      )}
    </div>
  );
}