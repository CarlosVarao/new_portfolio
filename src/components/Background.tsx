interface BackgroundProps {
  children?: React.ReactNode;
}

export default function Background({ children }: BackgroundProps) {
  return (
    <div className="bg-[#0A0A1A] font-bold w-screen h-screen overflow-hidden">
      <div className="fixed top-0 left-0 w-full h-full">
        {/* Glow Top (somente em telas md+) */}
        <div
          className="
          md:absolute md:top-[-20%] md:left-[-20%]
          md:w-[500px] md:h-[500px]
          md:bg-linear-to-br md:from-blue-500/30 md:to-purple-600/30
          md:rounded-full
          md:blur-3xl
          md:animate-pulse
        "
        ></div>

        {/* Conteúdo */}
        <div className="relative flex flex-col items-center w-full pt-4 z-10">
          <div className="w-full max-w-[1200px] px-4 sm:px-6">{children}</div>
        </div>

        {/* Glow Bottom (somente em telas md+) */}
        <div
          className="
          md:absolute md:bottom-[-10%] md:right-[-10%]
          md:w-[600px] md:h-[600px]
          md:bg-linear-to-tl md:from-cyan-400/30 md:to-indigo-500/30
          md:rounded-full
          md:blur-3xl
          md:animate-pulse
        "
        ></div>
      </div>
    </div>
  );
}
