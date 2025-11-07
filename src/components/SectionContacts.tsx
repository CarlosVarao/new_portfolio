export default function SectionContacts() {
  return (
    <div className="text-center max-w-2xl mx-auto section-glass font-secondary">
      <h2 className=" text-xl text-[#22D3EE] mb-2">
        04. Qual o próximo passo?
      </h2>
      <h3 className="text-4xl md:text-5xl font-bold text-white mb-4">
        Entre em Contato
      </h3>
      <p className="text-[#94a3b8] mb-8 font-primary">
        Estou sempre aberto a novas oportunidades e colaborações. Se você tem um
        projeto em mente ou apenas quer dizer olá, minha caixa de entrada está
        sempre aberta. Farei o meu melhor para responder a você!
      </p>
      <a
        className="cursor-pointer overflow-hidden rounded-lg py-3 px-8 glass-effect text-[#22D3EE] text-sm font-bold leading-normal tracking-[0.015em] hover:bg-[#22D3EE]/10 transition-colors bg-[#ffffff0d]"
        href="mailto:contato@seunome.com"
      >
        <span className="truncate font-primary text-base">Diga Olá</span>
      </a>
    </div>
  );
}
