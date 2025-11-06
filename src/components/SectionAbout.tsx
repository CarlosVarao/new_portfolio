import photo from "/my_foto.jpg";
import CardSections from "./CardSections";

export default function SectionAbout() {
  return (
    <>
      <CardSections numberSection="01." inforSection="Sobre min">
        <div className="flex gap-7 flex-col md:flex-row">
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

          <div className="mt-3 md:mt-11 flex justify-center font-secondary">
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
      </CardSections>
    </>
  );
}
