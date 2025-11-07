import { useState } from "react";
import { MdClose } from "react-icons/md";
// import { enviarEmail } from "../services/enviarEmail";

interface closeBtn {
  close: () => void;
}

export default function ModalEmail({ close }: closeBtn) {
  const [valueInputs, setValueInputs] = useState({
    remetente: "",
    assunto: "",
    mensagem: "",
  });

  async function btnEnviarEmail() {
    try {
      const response = await enviarEmail(valueInputs);
      console.log("E-mail enviado ✅", response);
    } catch (error) {
      console.log("Falha ao enviar ❌", error);
    }
  }

  return (
    <div className="fixed inset-0 z-99 flex items-center justify-center bg-black/70 backdrop-blur-sm">
      <div
        className="relative flex w-full max-w-2xl flex-col rounded-xl border border-white/10 bg-[#101622]/70 shadow-2xl backdrop-blur-sm "
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-8">
          <div className="flex justify-between items-center mb-7">
            <h1 className="text-[#e2e8f0] text-2xl font-bold">Enviar E-mail</h1>
            <button
              className=" rounded-full p-1.5 text-white/60 transition-colors hover:bg-white/10 hover:text-white cursor-pointer"
              onClick={close}
            >
              <MdClose fontSize={22} />
            </button>
          </div>

          <div className="flex flex-col gap-4  text-[#e2e8f0] text-sm">
            <div className="flex flex-col gap-6 sm:flex-row">
              <div className="flex flex-col min-w-40 flex-1">
                <label className=" font-medium mb-2">Remetente</label>
                <input
                  className="form-input w-full rounded-lg border border-white/10 bg-white/5 px-4 py-2 placeholder:text-white/40 focus:border-primary focus:outline-none "
                  placeholder="Digite seu E-mail..."
                  value={valueInputs.remetente}
                  onChange={(e) =>
                    setValueInputs({
                      ...valueInputs,
                      remetente: e.target.value,
                    })
                  }
                />
              </div>
              <div className="flex flex-col min-w-40 flex-1">
                <label className=" font-medium mb-2">Destinatário</label>
                <input
                  className="form-input w-full rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-white/40 focus:border-primary focus:outline-none cursor-not-allowed"
                  disabled
                  value="carlosvarao.frontend@hotmail.com"
                />
              </div>
            </div>

            <div className="flex flex-col min-w-40 flex-1">
              <label className="text-white/80  font-medium mb-2">Assunto</label>
              <input
                className="form-input w-full rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-white placeholder:text-white/40 focus:border-primary focus:outline-none"
                placeholder="Ex: Dúvida sobre o Projeto X"
                value={valueInputs.assunto}
                onChange={(e) =>
                  setValueInputs({ ...valueInputs, assunto: e.target.value })
                }
              />
            </div>

            <div className="flex flex-col min-w-40 flex-1">
              <label className="text-white/80  font-medium mb-2">
                Mensagem
              </label>
              <textarea
                className="form-input min-h-36 w-full resize-y rounded-lg border border-white/10 bg-white/5 p-4 text-white placeholder:text-white/40 focus:border-primary focus:outline-none"
                placeholder="Digite sua mensagem aqui..."
                value={valueInputs.mensagem}
                onChange={(e) =>
                  setValueInputs({ ...valueInputs, mensagem: e.target.value })
                }
              />
            </div>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-end gap-3 border-t border-white/10 px-8 py-4">
          <button
            className="rounded-lg hover:bg-white/10 px-6 py-2.5 text-sm cursor-pointer font-bold text-white/80 transition-all duration-250"
            onClick={close}
          >
            Cancelar
          </button>
          <button
            className="px-6 py-2.5 rounded-lg bg-primary text-sm font-bold cursor-pointer text-white  hover:bg-[#7110df]/80 bg-[#7110df] transition-all duration-250"
            onClick={btnEnviarEmail}
          >
            Enviar
          </button>
        </div>
      </div>
    </div>
  );
}
