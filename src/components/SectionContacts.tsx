import { useState } from "react";
import ModalEmail from "../components/ModalEmail";

export default function SectionContacts() {
  const [ativarModal, setAtivarModal] = useState(false);
  return (
    <>
      {ativarModal && <ModalEmail close={() => setAtivarModal(false)} />}
      <div className="text-center max-w-2xl mx-auto section-glass font-secondary">
        <h2 className=" text-xl text-[#22D3EE] mb-2">
          04. Qual o próximo passo?
        </h2>
        <h3 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Entre em Contato
        </h3>
        <p className="text-[#94a3b8] mb-8 font-primary text-justify md:text-center">
          Estou sempre aberto a novas oportunidades e colaborações. Se você tem
          um projeto em mente ou apenas quer dizer olá, minha caixa de entrada
          está sempre aberta. Farei o meu melhor para responder a você!
        </p>
        <button
          className="text-base font-primary cursor-pointer rounded-lg py-2 px-7 border border-[#ffffff1a] text-[#22D3EE] font-bold hover:bg-[#22D3EE]/10 transition-colors bg-[#ffffff0d]"
          onClick={() => setAtivarModal(true)}
        >
          Diga Olá
        </button>
      </div>
    </>
  );
}
