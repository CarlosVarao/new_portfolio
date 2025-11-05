import { useState } from "react";
import { BsFillTerminalFill } from "react-icons/bs";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { ImExit } from "react-icons/im";
//import { IoIosCloseCircle } from "react-icons/io";

export default function Header() {
  const [clickSidbar, setClickSidbar] = useState(false);

  function clickSidbarExit(e: React.MouseEvent<HTMLDivElement>) {
    if (e.target === e.currentTarget) {
      setClickSidbar(false);
    }
    console.log(e);
  }

  return (
    <>
      <div className="sticky top-2 sm:top-4 z-50 w-full">
        <div className="flex items-center justify-between rounded-xl bg-[#ffffff0d] backdrop-blur-md border border-[#ffffff1a] shadow-lg text-[#e2e8f0] font-primary px-3 py-3 ">
          {/* Logo + Nome */}
          <div className="flex items-center gap-2 sm:gap-3 lg:gap-4">
            <BsFillTerminalFill className="text-[#22d3ee]" size={18} />
            <h2 className="text-xs sm:text-sm md:text-base lg:text-lg font-bold tracking-[-0.015em]">
              Carlos Varão
            </h2>
          </div>

          {/* Menu Desktop */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8">
            <div className="flex items-center gap-4 lg:gap-6 font-secondary">
              <a
                className="text-sm font-medium transition-colors hover:text-[#22D3EE]"
                href="#sobre"
              >
                Sobre
              </a>
              <a
                className="text-sm font-medium transition-colors hover:text-[#22D3EE]"
                href="#projetos"
              >
                Projetos
              </a>
              <a
                className="text-sm font-medium transition-colors hover:text-[#22D3EE]"
                href="#habilidades"
              >
                Habilidades
              </a>
              <a
                className="text-sm font-medium transition-colors hover:text-[#22D3EE]"
                href="#contato"
              >
                Contato
              </a>
            </div>

            <button className="flex items-center justify-center h-9 lg:h-10 px-3 lg:px-4 rounded-lg bg-[#ffffff0d] backdrop-blur-md border border-[#ffffff1a] text-xs sm:text-sm font-bold transition-all duration-300 hover:bg-[#22D3EE]/15 hover:-translate-y-0.5">
              <span className="truncate text-[#22d3ee] text-[13px] lg:text-[14px]">
                Baixar CV
              </span>
            </button>
          </nav>

          {/* Menu Mobile */}
          <button className="md:hidden">
            <HiOutlineMenuAlt3
              className="text-[#22d3ee] cursor-pointer"
              size={26}
              onClick={() => setClickSidbar((prev) => !prev)}
            />
          </button>
        </div>
      </div>

      {clickSidbar && (
        <div
          className="fixed inset-0 z-99 bg-[#0A0A1A] text-white flex items-center justify-center overflow-hidden"
          onClick={clickSidbarExit}
        >
          <div
            className="w-full flex flex-col items-center justify-center gap-14"
            onClick={(e) => e.stopPropagation()}
          >
            <ul className="flex flex-col gap-8 text-center w-full px-6">
              <li className="w-full">
                <a
                  href="#sobre"
                  className="flex items-center justify-center gap-4 rounded-lg py-4 text-3xl font-semibold text-white bg-primary/20 transition-colors hover:bg-primary/30"
                >
                  Home
                </a>
              </li>

              <li className="w-full">
                <a
                  href="#projetos"
                  className="flex items-center justify-center gap-4 rounded-lg py-4 text-3xl font-semibold text-slate-400 transition-colors hover:text-white hover:bg-white/5"
                >
                  Projetos
                </a>
              </li>

              <li className="w-full">
                <a
                  href="#habilidades"
                  className="flex items-center justify-center gap-4 rounded-lg py-4 text-3xl font-semibold text-slate-400 transition-colors hover:text-white hover:bg-white/5"
                >
                  Habilidades
                </a>
              </li>

              <li className="w-full">
                <a
                  href="#contato"
                  className="flex items-center justify-center gap-4 rounded-lg py-4 text-3xl font-semibold text-slate-400 transition-colors hover:text-white hover:bg-white/5"
                >
                  Contato
                </a>
              </li>
            </ul>

            <ImExit
              className="cursor-pointer hover:scale-110 transition-transform duration-200"
              size={30}
              color="#ff4040"
              onClick={() => setClickSidbar((prev) => !prev)}
            />
          </div>
        </div>
      )}
    </>
  );
}
