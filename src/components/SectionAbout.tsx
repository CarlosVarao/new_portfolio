import photo from "/my_foto.jpg";
import { sobreMy } from "../data/informacoesIniciais.json";
import CardSections from "./CardSections";

export default function SectionAbout() {
  return (
    <>
      <CardSections numberSection="01." inforSection="Sobre Mim">
        <div
          className="flex gap-7 flex-col md:flex-row scroll-mt-52"
          id="Sobre"
        >
          <div className="flex flex-col gap-4 text-base leading-relaxed font-primary text-[#94a3b8] text-justify">
            <p>{sobreMy.p1}</p>
            <p>{sobreMy.p2}</p>
            <p>{sobreMy.p3}</p>
          </div>

          <div className="mt-3 md:mt-11 flex justify-center font-secondary">
            <div className="relative w-64 h-64 md:w-72 md:h-72">
              {/* Borda levemente deslocada */}
              <div className="absolute -inset-1 borda-gradiente bottom-1 right-1"></div>

              {/* Imagem */}
              <img
                src={photo}
                alt="Foto profissional de Seu Nome"
                className="relative z-10 w-full h-full object-cover rounded-lg left-1 top-1"
              />

              {/* Idade sobreposta no canto inferior */}
              <p className="absolute bottom-1 right-1 bg-[#22D3EE] text-white text-sm px-2 py-1 rounded-md z-20  text-shadow-[0_1px_3px_rgba(0,0,0,0.8)]">
                26 anos
              </p>
            </div>
          </div>
        </div>
      </CardSections>
    </>
  );
}
