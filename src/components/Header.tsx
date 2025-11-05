import { useState } from "react";
import { BsFillTerminalFill } from "react-icons/bs";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { IoExit } from "react-icons/io5";

export default function Header() {
  const [clickSidbar, setClickSidbar] = useState(false);

  // Função de exportar Currículo
  function exportCurriculo() {
    const link = document.createElement("a");
    link.href = "/Curriculo_Carlos_Oliveira_Varao.docx";
    link.download = "Curriculo_Carlos_Oliveira_Varao.docx";

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
  return (
    <>
      <div className="sticky top-2  z-50 w-full">
        <div className="flex items-center justify-between md:rounded-xl md:bg-[#ffffff0d] md:backdrop-blur-md md:border md:border-[#ffffff1a] md:shadow-lg text-[#e2e8f0] font-primary px-4 py-4 md:py-3">
          {/* Logo + Nome */}
          <div className="flex items-center gap-3">
            <BsFillTerminalFill className="text-[#22d3ee]" size={25} />
            <h2 className="text-md font-bold tracking-[-0.015em]">
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

            <button
              className="flex items-center justify-center h-9 lg:h-10 px-3 lg:px-4 rounded-lg bg-[#ffffff0d] backdrop-blur-md border border-[#ffffff1a] text-xs sm:text-sm font-bold transition-all duration-300 hover:bg-[#22D3EE]/15 hover:-translate-y-0.5 cursor-pointer"
              onClick={exportCurriculo}
            >
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

      {/* Menu SidBar */}
      {clickSidbar && (
        <div className="fixed inset-0 z-99 h-dvh w-full flex-col text-white overflow-hidden backdrop-blur-sm font-primary">
          <div className="relative h-full w-[75%] flex-col text-slate-800 bg-white pt-6 pl-6 pr-6 flex gap-15">
            <div className="flex items-center justify-between">
              <h2 className="text-[20px] font-bold text-slate-900">Menu</h2>
              <IoExit
                className="cursor-pointer text-red-700"
                size={30}
                onClick={() => setClickSidbar((prev) => !prev)}
              />
            </div>

            <div className="flex flex-1 flex-col font-secondary">
              <ul className="flex w-full flex-col gap-2">
                <li className="w-full p-2 bg-slate-200 rounded-lg">
                  <a href="#projetos" className="text-[17px] text-slate-800">
                    Sobre
                  </a>
                </li>

                <li className="w-full p-2 rounded-lg hover:bg-slate-200 focus:bg-slate-200">
                  <a
                    href="#habilidades"
                    className="text-[17px] text-slate-600 hover:text-slate-800 focus:text-primary"
                  >
                    Projetos
                  </a>
                </li>

                <li className="w-full p-2 rounded-lg hover:bg-slate-200 focus:bg-slate-200 ">
                  <a
                    href="#contato"
                    className="text-[17px] text-slate-600 hover:text-slate-800 focus:text-primary"
                  >
                    Habilidades
                  </a>
                </li>
              </ul>

              <button
                className="p-2 rounded-lg bg-[#ffffff0d] backdrop-blur-md border border-[#ffffff1a] font-bold  hover:bg-[red]/15 focus:bg-slate-200 cursor-pointer text-left text-red-700"
                onClick={exportCurriculo}
              >
                Baixar CV
              </button>
            </div>

            <div>
              <div className="mb-6">
                <h3 className="text-sm font-semibold text-slate-500 mb-3">
                  Contatos
                </h3>
                <div className="flex flex-col gap-2 text-slate-700">
                  <a
                    className="text-sm hover:text-primary"
                    href="mailto:carlosvarao.frontend@hotmail.com"
                  >
                    carlosvarao.frontend@hotmail.com
                  </a>
                  <a
                    className="text-sm hover:text-primary"
                    href="tel:+55639992576214"
                  >
                    +55 (63) 99925-6214
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
