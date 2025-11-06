import { useState } from "react";
import CardSections from "./CardSections";
import { FaRegFolder } from "react-icons/fa6";
import { MdOpenInNew } from "react-icons/md";
import SpinnerBackground from "./SpinnerBackground";
import { useNavigate } from "react-router-dom";
import dadosProjetos from "../data/projetos.json";

interface Project {
  rota?: string;
  title?: string;
  descriptionResumo?: string;
  descriptionCompleto?: string;
  tecnologias?: string[];
  myVideo?: string;
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
      {ativarSpinner && <SpinnerBackground />}

      <CardSections numberSection="02." inforSection="Projetos">
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {dadosProjetos.map((item, index) => (
            <div
              key={index}
              className="flex gap-5 flex-col rounded-lg p-6 transition-all duration-300 ease-in-out glass-effect hover:-translate-y-[3px]"
            >
              <div className="flex items-center justify-between">
                <FaRegFolder color="#22D3EE" fontSize={28} />
                <button
                  className="cursor-pointer hover:text-[#22D3EE] text-[#94a3b8] transition-colors"
                  onClick={() => openProject(item)}
                >
                  <MdOpenInNew fontSize={25} />
                </button>
              </div>

              <div className="flex flex-col gap-3">
                <p className="font-secondary text-xl font-bold text-white">
                  {item.title}
                </p>
                <p className="font-primary text-[#94a3b8] text-sm leading-relaxed break-all">
                  {item.descriptionResumo}
                </p>
              </div>

              <div className="flex flex-wrap gap-x-4 gap-y-2 text-xs font-secondary text-[#22D3EE]">
                <span>{item.tecnologias.join(" • ")}</span>
              </div>
            </div>
          ))}
        </div>
      </CardSections>
    </>
  );
}
