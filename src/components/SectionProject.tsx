import { useState } from "react";
import CardSections from "./CardSections";
import { FaRegFolder } from "react-icons/fa6";
import { MdOpenInNew } from "react-icons/md";
//import SpinnerBackground from "./SpinnerBackground";
import LoadingHome from "../components/LoadingHome";
import { useNavigate } from "react-router-dom";
import dadosProjetos from "../data/projetos.json";

interface Project {
  rota?: string;
  title?: string;
  descriptionResumo?: string;
  descriptionCompleto?: string;
  tecnologias?: string[];
  myVideo?: string;
  hrefGithub?: string;
  imgProjeto?: string;
}

export default function SectionProject() {
  const [ativarSpinner, setAtivarSpinner] = useState(false);
  const navigate = useNavigate();

  function openProject(project: Project) {
    setAtivarSpinner(true);

    setTimeout(() => {
      setAtivarSpinner(false);

      navigate("/project-hub", {
        state: project,
      });
    }, 2000);
  }

  return (
    <>
      {ativarSpinner && <LoadingHome />}

      <CardSections numberSection="02." inforSection="Projetos">
        <div
          className="flex flex-wrap justify-center gap-6 scroll-m-72"
          id="Projetos"
        >
          {dadosProjetos.map((item, index) => (
            <div
              key={index}
              className="flex gap-5 flex-col rounded-lg p-6 transition-all flex-1 min-w-[280px] duration-270 ease-in-out glass-effect hover:-translate-y-[3px]"
            >
              <div className="flex items-center justify-between">
                <FaRegFolder color="#22D3EE" fontSize={28} />
                <button
                  className="cursor-pointer hover:text-[#22D3EE] text-[#94a3b8] transition-colors duration-200 "
                  onClick={() => openProject(item)}
                >
                  <MdOpenInNew fontSize={25} />
                </button>
              </div>
              <div className="h-full gap-7 flex flex-col justify-between">
                <div className="flex flex-col gap-3">
                  <p className="font-secondary text-xl font-bold text-white">
                    {item.title}
                  </p>
                  <p className="font-primary text-[#94a3b8] text-sm leading-relaxed text-justify">
                    {item.descriptionResumo}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 text-xs font-secondary text-[#22D3EE]">
                  {item.tecnologias.map((itens, index) => (
                    <p
                      key={index}
                      className="bg-[#101022]/60 px-2 py-1 rounded"
                    >
                      {itens}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardSections>
    </>
  );
}
