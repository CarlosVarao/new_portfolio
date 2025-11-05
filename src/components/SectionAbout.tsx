import photo from "/my_foto.jpg";

export default function SectionAbout() {
  return (
    <section className="section-glass">
      <div className="flex flex-col gap-8 md:flex-row md:items-start">
        <div className="flex-1">
          <div className="font-secondary text-2xl md:text-3xl font-bold text-[#e2e8f0] mb-6 flex items-center gap-3">
            <p className="text-xl text-[#22D3EE] ">01.</p>
            <p className="text-3xl">Sobre Mim</p>
            <p className="grow h-px bg-white/10 ml-2"></p>
          </div>
          <div className="flex flex-col gap-4 text-base leading-relaxed font-primary text-[#94a3b8] break-all">
            <p>
              Desde cedo, me interessei por tecnologia e programação, fascinado
              por como algumas linhas de código podem transformar ideias em
              realidade. Comecei minha jornada explorando HTML, CSS e
              JavaScript, aprendendo na prática e construindo pequenos projetos
              para testar minhas habilidades.
            </p>
            <p>
              Com o tempo, fui aprofundando meus conhecimentos em
              desenvolvimento web, migrando para React, TypeScript e criando
              projetos mais complexos, como sistemas de gerenciamento e
              dashboards interativos. Cada desafio me ensinou a importância de
              pensar na arquitetura, na performance e na experiência do usuário.
            </p>
            <p>
              Hoje, trabalho focado em criar soluções modernas, escaláveis e
              elegantes, sempre buscando aprender novas tecnologias e melhorar
              minhas habilidades. Fora do trabalho, gosto de explorar
              frameworks, contribuir com projetos pessoais e estudar novas
              tendências, mantendo minha paixão por desenvolvimento sempre viva.
            </p>
          </div>
        </div>

        <div className="mt-8 md:mt-22 flex justify-center font-secondary">
          <div className="relative w-64 h-64 md:w-72 md:h-72">
            {/* Borda levemente deslocada */}
            <div className="absolute -inset-1 border-2 border-[#22D3EE] rounded-lg bottom-1 right-1"></div>

            {/* Imagem */}
            <img
              src={photo}
              alt="Foto profissional de Seu Nome"
              className="relative z-10 w-full h-full object-cover rounded-lg left-1 top-1"
            />

            {/* Idade sobreposta no canto inferior */}
            <p className="absolute bottom-1 right-1 bg-[#22D3EE] text-white text-sm px-2 py-1 rounded-md z-20">
              26 anos
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
