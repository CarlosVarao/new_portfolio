import { BsFillTerminalFill } from "react-icons/bs";

export default function header() {
  return (
    <>
      <div className="sticky top-4 z-50 flex items-center justify-between whitespace-nowrap rounded-xl px-6 py-3 my-4 glass-effect shadow-lg text-[#e2e8f0]">
        <div className="flex items-center gap-4 text-inter">
          <BsFillTerminalFill color="#22d3ee" fontSize={25} />
          <h2 className="font-display text-lg font-bold leading-tight tracking-[-0.015em]">
            Carlos Varão
          </h2>
        </div>
        <nav className="hidden md:flex flex-1 justify-end items-center gap-8 text-Space">
          <div className="flex items-center gap-6">
            <a
              className="font-display text-sm font-medium leading-normal text-text-light hover:text-accent-cyan transition-colors "
              href="#sobre"
            >
              Sobre
            </a>
            <a
              className="font-display text-sm font-medium leading-normal text-text-light hover:text-accent-cyan transition-colors"
              href="#projetos"
            >
              Projetos
            </a>
            <a
              className="font-display text-sm font-medium leading-normal text-text-light hover:text-accent-cyan transition-colors"
              href="#habilidades"
            >
              Habilidades
            </a>
            <a
              className="font-display text-sm font-medium leading-normal text-text-light hover:text-accent-cyan transition-colors"
              href="#contato"
            >
              Contato
            </a>
          </div>
          <button className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 glass-effect text-accent-cyan text-sm font-bold leading-normal tracking-[0.015em] hover:bg-accent-cyan/10 transition-colors">
            <span className="truncate text-[#22d3ee] text-[13px] ">
              Baixar CV
            </span>
          </button>
        </nav>
      </div>
    </>
  );
}
