import { useEffect, useState } from "react";

export default function LoadingHome() {
  const [fade, setFade] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFade(true);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* Fundo preto fixo, que NÃO some → evita clarão */}
      <div className="fixed inset-0 bg-[#0a0a1a] z-9998"></div>

      {/* Loader que some com opacidade (mas fundo continua preto) */}
      <div
        className={`fixed inset-0 text-white flex flex-col items-center justify-center gap-6 
        z-9999 font-mono transition-opacity duration-700
        ${fade ? "opacity-0 pointer-events-none" : "opacity-100"}
      `}
      >
        <span className="text-lg animate-pulse">Loading... Please Wait</span>

        <div className="w-64 h-4 border border-white relative overflow-hidden">
          <div
            className="absolute inset-y-0 left-0 bg-white 
            animate-[loadingBar_2.5s_ease-in-out_forwards]"
          ></div>
        </div>
      </div>

      <style>{`
        @keyframes loadingBar {
          0%   { width: 0%; }
          50%  { width: 60%; }
          100% { width: 100%; }
        }
      `}</style>
    </>
  );
}
