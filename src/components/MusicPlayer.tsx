import { useState, useRef, useCallback } from "react";
import { IoPlay } from "react-icons/io5";
import { FaPause } from "react-icons/fa6";

const MOCK_TRACK = {
  title: "Apresentação",
  artist: "Carlos Varão",
  albumArtUrl: "capa_album.jpg",
  audioUrl: "lofi.mp3",
};

export default function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [currentTrack] = useState(MOCK_TRACK);
  const audioRef = useRef<HTMLAudioElement>(null);

  const togglePlayPause = useCallback(() => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      audio
        .play()
        .then(() => setIsPlaying(true))
        .catch((error) =>
          console.error("Erro ao tentar tocar o áudio:", error)
        );
    }
  }, [isPlaying]);

  const handleTimeUpdate = useCallback(() => {
    if (audioRef.current) setCurrentTime(audioRef.current.currentTime);
  }, []);

  const handleLoadedMetadata = useCallback(() => {
    if (audioRef.current) setDuration(audioRef.current.duration);
  }, []);

  const handleTrackEnded = useCallback(() => {
    setIsPlaying(false);
  }, []);

  const progressPercent = duration > 0 ? (currentTime / duration) * 100 : 0;

  return (
    <>
      <audio
        ref={audioRef}
        src={currentTrack.audioUrl}
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
        onEnded={handleTrackEnded}
        preload="metadata"
      />

      <div className="fixed z-10 right-3 bottom-3 xl:left-7 lg:bottom-7 max-w-[190px] md:max-w-[270px] py-3 px-4 md:p-3 border border-gray-700 rounded-xl backdrop-blur-md shadow-2xl transition-all duration-300">
        <div className="flex items-center space-x-3">
          <img
            src={currentTrack.albumArtUrl}
            alt="Arte do Álbum"
            className="hidden md:block w-12 h-12 md:w-14 md:h-14 rounded-lg shadow-md shrink-0"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.onerror = null;
            }}
          />

          <div className="flex-1 min-w-0 pr-1">
            <p className="text-sm font-bold text-white truncate">
              {currentTrack.title}
            </p>
            <p className="text-xs text-gray-400 truncate">
              {currentTrack.artist}
            </p>

            <div className="relative w-full h-1 bg-gray-700 rounded-full mt-1">
              <div
                className="absolute h-full bg-sky-500 rounded-full transition-all duration-100"
                style={{ width: `${progressPercent}%` }}
              ></div>
            </div>
          </div>

          <button
            onClick={togglePlayPause}
            className="bg-[#00a9e8] hover:bg-sky-600 text-white p-2 rounded-full shadow-lg transition-all duration-300 active:scale-90 w-10 h-10 flex items-center justify-center shrink-0 cursor-pointer"
          >
            {isPlaying ? (
              <FaPause size={20} fill="white" />
            ) : (
              <IoPlay size={20} fill="white" />
            )}
          </button>
        </div>
      </div>
    </>
  );
}
