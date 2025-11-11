interface BackgroundProps {
  header?: React.ReactNode;
  children?: React.ReactNode;
}

export default function Background({ header, children }: BackgroundProps) {
  return (
    <>
      <div className="relative w-screen min-h-screen bg-[#0A0A1A]">
        {/* Glow infinito */}
        <div className="fixed md:inset-0 overflow-hidden">
          {/* Glow Top */}
          <div className="absolute top-[-20%] left-[-15%] w-[500px] h-[500px] bg-linear-to-br from-blue-500/30 to-purple-600/30 rounded-full blur-3xl animate-pulse pointer-events-none"></div>
          {/* Glow Bottom */}
          <div className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] bg-linear-to-tl from-cyan-400/30 to-indigo-500/30 rounded-full blur-3xl animate-pulse pointer-events-none"></div>
        </div>

        {/* Conteúdo centralizado */}
        <div className="relative flex flex-col min-h-screen w-full">
          <div className="flex flex-1 justify-center">
            <div className="w-full max-w-5xl py-4 px-4 flex flex-col gap-17 md:gap-12">
              {header}
              <div className="w-full flex flex-col gap-25">{children}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
