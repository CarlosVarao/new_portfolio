interface BackgroundProps {
  children?: React.ReactNode;
}

export default function Background({ children }: BackgroundProps) {
  return (
    <>
      <div className="bg-[#0A0A1A] font-bold w-screen h-screen">
        <div className="fixed top-0 left-0 w-full h-full  overflow-hidden">
          <div className="absolute top-[-20%] left-[-20%] w-[500px] h-[500px] bg-linear-to-br from-blue-500/30 to-purple-600/30 rounded-full filter blur-3xl animate-pulse"></div>

          <div className="relative flex flex-col items-center w-full pt-4">
            <div className="w-full max-w-[1200px] px-4 sm:px-6">{children}</div>
          </div>

          <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-linear-to-tl from-cyan-400/30 to-indigo-500/30 rounded-full filter blur-3xl animate-pulse animation-delay-3000"></div>
        </div>
      </div>
    </>
  );
}
