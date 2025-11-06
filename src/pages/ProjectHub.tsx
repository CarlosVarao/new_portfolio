import Background from "../components/Background";
import Header from "../components/Header";
import CardSections from "../components/CardSections";
import { useState, useEffect } from "react";
import { useLocation, Navigate } from "react-router-dom";

export default function ProjectHub() {
  const { state } = useLocation();
  const [openImgProjet, setOpenImgProjet] = useState(false);
  const [loadingState, setLoadingState] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);

    setLoadingState(false);
  }, []);

  if (loadingState) return null;

  if (!state) {
    return <Navigate to="/" replace />;
  }

  return (
    <>
      {openImgProjet && (
        <div
          className="fixed inset-0 z-99 w-screen h-screen bg-black/80 backdrop-blur-lg flex items-center flex-col justify-center"
          onClick={() => setOpenImgProjet(false)}
        >
          <img
            src={state.imgProjeto}
            alt="Imagem ampliada"
            className="object-contain"
            onClick={(e) => e.stopPropagation()}
          />
          <p className="mt-5 font-black font-secondary text-red-700">
            Click fora para fechar!
          </p>
        </div>
      )}

      <Background>
        <Header />
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

            <div className="font-primary text-[#94a3b8] space-y-4 leading-relaxed">
              <p className="text-[#e2e8f0] font-semibold text-lg">
                Título do projeto:{" "}
                <span className="font-light">{state.title}</span>
              </p>
              <p className="text-[#e2e8f0] font-semibold text-base">
                Detalhes do Projeto
              </p>
              <p className="break-all">{state.description}</p>
            </div>
          </div>
        </CardSections>
      </Background>
    </>
  );
}
