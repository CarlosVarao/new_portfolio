import photo from "/my_foto.jpg";
import { sobreMy } from "../data/informacoesIniciais.json";
import CardSections from "./CardSections";

export default function SectionAbout() {
  return (
    <>
      <CardSections numberSection="01." inforSection="Sobre Mim">
        <div className=" flex flex-col gap-2 scroll-m-72" id="Sobre">
          <div className="flex gap-8 flex-col md:flex-row">
            {/* Textos p1 e p2 */}
            <div className="flex flex-col gap-2 text-base leading-relaxed font-primary text-[#94a3b8] text-justify ">
              <p>{sobreMy.p1}</p>
              <p>{sobreMy.p2}</p>
            </div>

            {/* Foto */}
            <div className="hidden lg:block mt-3 md:mt-8 font-secondary ">
              <div className="relative w-64 h-64 md:w-72 md:h-72">
                <div className="absolute -inset-1 borda-gradiente bottom-1 right-1"></div>

                <img
                  src={photo}
                  alt="Foto profissional"
                  className="relative z-10 w-full h-full object-cover rounded-lg left-1 top-1"
                />

                <p className="absolute bottom-1 right-1 bg-[#22D3EE] text-white text-sm px-2 py-1 rounded-md z-20 text-shadow-[0_1px_3px_rgba(0,0,0,0.8)]">
                  26 anos
                </p>
              </div>
            </div>
          </div>

          <p className="text-base leading-relaxed font-primary text-[#94a3b8] text-justify">
            {sobreMy.p3}
          </p>

          <div className="lg:hidden mt-5 flex justify-center font-secondary ">
            <div className="relative w-64 h-64 md:w-72 md:h-72">
              <div className="absolute -inset-1 borda-gradiente bottom-1 right-1"></div>

              <img
                src={photo}
                alt="Foto profissional"
                className="relative z-10 w-full h-full object-cover rounded-lg left-1 top-1"
              />

              <p className="absolute bottom-1 right-1 bg-[#22D3EE] text-white text-sm px-2 py-1 rounded-md z-20 text-shadow-[0_1px_3px_rgba(0,0,0,0.8)]">
                26 anos
              </p>
            </div>
          </div>
        </div>
      </CardSections>
    </>
  );
}
