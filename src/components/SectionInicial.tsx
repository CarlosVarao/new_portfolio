import informacoesIniciais from "../data/informacoesIniciais.json";
import ModalEmail from "../components/ModalEmail";
import { useState } from "react";

export default function SectionInicia() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      {openModal && <ModalEmail close={() => setOpenModal(false)} />}
      <div className="flex md:min-h-[60vh] flex-col items-start justify-center gap-5 md:gap-5 text-left font-secondary">
        <p className="text-lg md:text-lg text-[#22D3EE] ">Olá, meu nome é</p>

        <h1 className="text-5xl md:text-7xl font-black leading-tight tracking-[-0.033em] text-[#e2e8f0] ">
          {informacoesIniciais.nome}
        </h1>

        <h2 className="tracking-tighter bg-clip-text text-transparent bg-linear-to-r from-indigo-500 from-10% via-sky-500 via-50%  to-emerald-500 text-2xl md:text-5xl  font-bold leading-tight ">
          {informacoesIniciais.profissao}
        </h2>

        <p className="max-w-3xl text-sm md:text-base font-normal leading-relaxed text-[#94a3b8] font-primary text-justify md:text-left">
          {informacoesIniciais.descricao}
        </p>

        <button
          onClick={() => setOpenModal(true)}
          className="mt-4 cursor-pointer rounded-lg py-3 px-5 text-sm font-semibold text-white text-shadow-[0_1px_3px_rgba(0,0,0,0.4)] bg-linear-to-r from-cyan-500 to-blue-600 transition-all duration-250 hover:-translate-y-[3px] hover:shadow-[0_0_10px_rgba(56,189,248,0.4)]"
        >
          Entre em contato
        </button>
      </div>
    </>
  );
}
