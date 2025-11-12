import React, { useState, useRef, useEffect } from "react";
import "../styles/global.css"; // Importa os estilos do slider

export default function MusicPlayer(): React.JSX.Element {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(1);

  const audioRef = useRef<HTMLAudioElement>(null);
  const progressSliderRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const audio = audioRef.current;

    const handleLoadedMetadata = () => {
      if (audio && progressSliderRef.current) {
        setDuration(audio.duration);
        progressSliderRef.current.max = String(audio.duration);
      }
    };

    const handleTimeUpdate = () => {
      if (audio && progressSliderRef.current) {
        setCurrentTime(audio.currentTime);
        progressSliderRef.current.value = String(audio.currentTime);
      }
    };

    const handleEnded = () => {
      setIsPlaying(false);
      setCurrentTime(0);
      if (progressSliderRef.current) progressSliderRef.current.value = "0";
    };

    if (audio) {
      audio.addEventListener("loadedmetadata", handleLoadedMetadata);
      audio.addEventListener("timeupdate", handleTimeUpdate);
      audio.addEventListener("ended", handleEnded);
      return () => {
        audio.removeEventListener("loadedmetadata", handleLoadedMetadata);
        audio.removeEventListener("timeupdate", handleTimeUpdate);
        audio.removeEventListener("ended", handleEnded);
      };
    }
  }, []);

  useEffect(() => {
    if (audioRef.current) {
      isPlaying ? audioRef.current.play() : audioRef.current.pause();
    }
  }, [isPlaying]);

  useEffect(() => {
    if (audioRef.current) audioRef.current.volume = volume;
  }, [volume]);

  const togglePlayPause = () => setIsPlaying(!isPlaying);

  const handleProgressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newTime = parseFloat(e.target.value);
    setCurrentTime(newTime);
    if (audioRef.current) audioRef.current.currentTime = newTime;
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setVolume(parseFloat(e.target.value));
  };

  const formatTime = (seconds: number): string => {
    const minutes = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${minutes}:${secs < 10 ? "0" : ""}${secs}`;
  };

  return (
    <div className="backdrop-blur-md bg-white/10 border border-white/20 shadow-lg rounded-2xl p-4 w-[280px] flex flex-col space-y-4 text-white select-none">
      <audio ref={audioRef} src="lofi.mp3" preload="metadata" />

      {/* Barra de progresso */}
      <div className="w-full">
        <input
          type="range"
          ref={progressSliderRef}
          defaultValue="0"
          min="0"
          step="0.01"
          onChange={handleProgressChange}
          className="slider w-full cursor-pointer"
        />
        <div className="flex justify-between text-[11px] text-gray-300 mt-1">
          <span>{formatTime(currentTime)}</span>
          <span>{formatTime(duration)}</span>
        </div>
      </div>

      {/* Controles */}
      <div className="flex items-center justify-between">
        <button
          onClick={togglePlayPause}
          className="bg-white/10 border border-white/20 backdrop-blur-sm text-white w-10 h-10 rounded-full flex items-center justify-center transition-transform hover:scale-105"
        >
          {isPlaying ? (
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zM8 7a1 1 0 00-1 1v4a1 1 0 001 1h1a1 1 0 001-1V8a1 1 0 00-1-1H8zm5 0a1 1 0 00-1 1v4a1 1 0 001 1h1a1 1 0 001-1V8a1 1 0 00-1-1h-1z"
                clipRule="evenodd"
              />
            </svg>
          ) : (
            <svg
              className="w-4 h-4 ml-0.5"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                clipRule="evenodd"
              />
            </svg>
          )}
        </button>

        <div className="flex items-center w-2/3 space-x-2 justify-end">
          <svg
            className="w-4 h-4 text-gray-200"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .89-1.077 1.337-1.707.707L5.586 15z"
            />
          </svg>
          <input
            type="range"
            value={volume}
            min="0"
            max="1"
            step="0.01"
            onChange={handleVolumeChange}
            className="slider w-full"
          />
        </div>
      </div>
    </div>
  );
}
