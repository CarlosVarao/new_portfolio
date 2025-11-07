import informacoesIniciais from "../data/informacoesIniciais.json";

export default function SectionInicia() {
  return (
    <div className="flex min-h-[60vh] flex-col items-start justify-center gap-6 text-left font-secondary">
      <p className="text-lg md:text-lg text-[#22D3EE]">Olá, meu nome é</p>

      <h1 className="text-4xl md:text-7xl font-black leading-tight tracking-[-0.033em] text-[#e2e8f0] ">
        {informacoesIniciais.nome}
      </h1>

      <h2 className="text-xl md:text-5xl font-bold leading-tight tracking-[-0.033em] text-[#94a3b8]">
        {informacoesIniciais.profissao}
      </h2>

      <p className="max-w-2xl text-sm md:text-base font-normal leading-relaxed text-[#94a3b8] font-primary text-justify">
        {informacoesIniciais.descricao}
      </p>

      <button className="md:mt-5 cursor-pointer overflow-hidden rounded-lg py-3 px-3 md:py-3 md:px-5 text-[#e2e8f0] text-xs md:text-sm font-semibold md:font-bold hover:bg-[#7110df]/80 bg-[#7110df] transition-all duration-250 hover:-translate-y-[3px]">
        <span className="truncate">Entre em contato</span>
      </button>
    </div>
  );
}
