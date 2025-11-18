import Background from "../components/Background";
import Header from "../components/Header";
import Footer from "../components/Footer";
import CardSections from "../components/CardSections";
import LoadingHome from "../components/LoadingHome";
import { useState } from "react";
import { useLocation, Navigate } from "react-router-dom";

export default function ProjectHub() {
  const { state } = useLocation();
  const [openImgProjet, setOpenImgProjet] = useState(false);
  const [spinnerLoading, setSpinnerLoading] = useState(true);

  setInterval(() => {
    setSpinnerLoading(false);
  }, 2500);

  if (!state) {
    return <Navigate to="/" replace />;
  }

  return (
    <>
      {openImgProjet && (
        <div
          className="fixed inset-0 z-99 md:w-screen md:h-screen bg-black/80 backdrop-blur-lg flex items-center flex-col justify-center cursor-pointer"
          onClick={() => setOpenImgProjet(false)}
        >
          <img
            src={state.imgProjeto}
            alt="Imagem ampliada"
            className="max-w-[900px] max-h-[565px] object-contain cursor-default fadeIn animate-[fadeIn_0.25s_ease-in-out]"
            onClick={(e) => e.stopPropagation()}
          />
          <p className="mt-5 font-black font-secondary text-[#22D3EE] fadeIn animate-[fadeIn_0.25s_ease-in-out]">
            Click fora para fechar!
          </p>
        </div>
      )}

      {spinnerLoading ? (
        <LoadingHome />
      ) : (
        <Background header={<Header home="Home" />}>
          <div className="text-center m-10">
            <h1 className="text-[#e2e8f0] text-5xl font-black font-primary">
              Project Hub
            </h1>
            <p className="text-[#94a3b8] md:text-xl font-normal mt-5 md:max-w-2xl md:mx-auto">
              Aplicações que desenvolvi com foco em eficiência, experiência do
              usuário e evolução constante.
            </p>
          </div>

          <CardSections inforSection="My Project">
            <div className="flex flex-col gap-8">
              <iframe
                className="w-full aspect-video rounded-xl shadow-lg"
                src={state.myVideo}
                title="Demonstração do projeto"
                allowFullScreen
              ></iframe>

              <img
                className="w-full aspect-video object-cover rounded-xl cursor-pointer"
                src={state.imgProjeto}
                alt="Imagem do projeto"
                onClick={() => setOpenImgProjet(true)}
              />

              <div className="font-primary text-[#e2e8f0] space-y-4 leading-relaxed">
                <p className="text-[#e2e8f0] font-semibold text-lg">
                  Título do projeto:
                  <span className="font-light ml-1">{state.title}</span>
                </p>
                <p className="text-[#e2e8f0] font-semibold text-base">
                  Detalhes do Projeto
                </p>
                <p className="md:text-justify break-all md:break-normal whitespace-pre-line">
                  {state.descriptionCompleto}
                </p>
                <p className="text-[#e2e8f0] font-semibold text-base mt-10">
                  Link do Repositório:
                  <a
                    target="_blank"
                    href={state.hrefGithub}
                    className="font-light ml-1 text-[#22D3EE] hover:underline transition-colors duration-200 break-all"
                  >
                    {state.hrefGithub}
                  </a>
                </p>
              </div>
            </div>
          </CardSections>
          <Footer />
        </Background>
      )}
    </>
  );
}
