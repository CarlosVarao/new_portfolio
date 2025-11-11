export default function MusicPlayer() {
  return (
    <audio
      src="/lofi.mp3"
      controls
      className="fixed bottom-4 right-4 z-9999 w-[250px] h-40px rounded-xl bg-white/10 backdrop-blur-md border border-white/20 shadow-lg transition hover:scale-105 duration-200"
    />
  );
}
