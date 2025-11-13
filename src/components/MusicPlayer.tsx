export default function MusicPlayer() {
  return (
    <>
      <div className="fixed z-10 indent-0 right-7 bottom-7 md:left-7 md:bottom-7 max-w-xs p-4 border rounded-xl border-[#ffffff1a] backdrop-blur-xs">
        <img
          src="capa_album.jpg"
          alt="imagem_album"
          className="w-17 h-17 rounded-lg"
        />
        {/* <audio src="lofi.mp3" controls></audio> */}
      </div>
    </>
  );
}
