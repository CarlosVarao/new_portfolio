import { useState } from "react";
import { BsFillTerminalFill } from "react-icons/bs";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { IoExit } from "react-icons/io5";

export default function Header() {
  const [clickSidbar, setClickSidbar] = useState(false);
  const activeLink = "#Sobre";

  const arrayMenus = [
    { label: "Sobre", link: "#Sobre" },
    { label: "Projetos", link: "#Projetos" },
    { label: "Habilidades", link: "#Habilidades" },
    { label: "Contatos", link: "#Contatos" },
  ];

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
      {/* HEADER */}
      <div className=" top-2 z-50 w-full">
        <div className="flex items-center justify-between font-primary text-[#e2e8f0] py-4 md:p-4 md:py-3 md:rounded-xl md:bg-[#ffffff0d] md:backdrop-blur-md md:border md:border-[#ffffff1a] md:shadow-lg">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <BsFillTerminalFill className="text-[#22d3ee]" size={25} />
            <h2 className="text-md font-bold tracking-[-0.015em]">
              Carlos Varão
            </h2>
          </div>

          {/* Menu Desktop */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8">
            <ul className="flex items-center gap-4 lg:gap-6 font-secondary">
              {arrayMenus.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.link}
                    className="text-sm font-medium transition-colors hover:text-[#22D3EE]"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>

            <button
              className="flex items-center justify-center h-9 lg:h-10 px-3 lg:px-4 rounded-lg border border-[#ffffff1a] bg-[#ffffff0d] backdrop-blur-md text-sm font-bold text-[#22d3ee] transition-all duration-300 hover:bg-[#22D3EE]/15 hover:-translate-y-0.5 cursor-pointer"
              onClick={exportCurriculo}
            >
              Baixar CV
            </button>
          </nav>

          {/* Menu Mobile Button */}
          <button className="md:hidden">
            <HiOutlineMenuAlt3
              size={26}
              className="text-[#22d3ee] cursor-pointer"
              onClick={() => setClickSidbar((prev) => !prev)}
            />
          </button>
        </div>
      </div>

      {/* SIDEBAR */}
      <div
        className={`fixed inset-0 z-50 h-dvh w-full flex font-primary transition-opacity duration-300 ease-in-out backdrop-blur-sm ${
          clickSidbar ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={(e) => {
          e.stopPropagation();
          if (e.target === e.currentTarget) setClickSidbar(false);
        }}
      >
        <div
          className={`relative h-full w-[75%] flex flex-col bg-white text-slate-900 p-6
      transition-transform duration-300 ease-in-out
      ${clickSidbar ? "translate-x-0" : "-translate-x-full"}`}
        >
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-[20px] font-bold">Menus</h2>
            <IoExit
              size={30}
              className="cursor-pointer"
              onClick={() => setClickSidbar(false)}
            />
          </div>

          <nav className="flex flex-1 flex-col font-secondary gap-2 font-bold">
            <ul className="flex flex-col gap-1">
              {arrayMenus.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.link}
                    className={`block w-full p-2 rounded-lg transition-colors
                ${
                  activeLink === item.link
                    ? "bg-slate-200 text-slate-900"
                    : "text-slate-600 hover:text-slate-900 hover:bg-slate-200"
                }`}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>

            <button
              className="p-2 rounded-lg font-bold text-red-700 hover:bg-red-100 focus:bg-red-200 text-left"
              onClick={exportCurriculo}
            >
              Baixar CV
            </button>
          </nav>

          <div>
            <h3 className="text-sm font-bold text-slate-500 mb-3">Contatos</h3>
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
    </>
  );
}
