import { useState } from "react";
import { MdClose } from "react-icons/md";
import { enviarEmail } from "../services/servicesApi";
import SpinnerBtn from "./SpinnerBtn";

const IntinialAlertToast = {
  menssageSucess: "",
  menssageError: "",
  result: false,
};

const initialValues = {
  remetente: "",
  assunto: "",
  messagem: "",
};

const configAlertToast = {
  sucess: {
    initial: "-right-20 top-8 md:top-10 md:-right-200",
    start: "top-8 right-20 md:top-10 md:right-10 bg-emerald-500/90",
  },
  error: {
    initial: "-right-24 top-8 md:top-10 md:-right-200",
    start: "top-8 right-23 md:top-10 md:right-10 bg-red-500/90",
  },
};

export default function ModalEmail({ close }: { close: () => void }) {
  const [alertToast, setAlertToast] = useState(IntinialAlertToast);
  const [valueInputs, setValueInputs] = useState(initialValues);
  const [disabledBtn, setBisabledBtn] = useState(false);

  async function btnEnviarEmail() {
    function configAlert(sucess: string, error: string) {
      setAlertToast({
        menssageSucess: sucess,
        menssageError: error,
        result: true,
      });
      setTimeout(() => {
        setAlertToast(IntinialAlertToast);
      }, 3000);
    }

    if (
      !valueInputs.assunto ||
      !valueInputs.remetente ||
      !valueInputs.messagem
    ) {
      alert("Preencha todos os campos!");
      return;
    }

    if (valueInputs.remetente.length > 70) {
      alert("E-mail muito longo! Máximo: 70 caracteres");
      return;
    }

    if (valueInputs.assunto.length > 50) {
      alert("Assunto muito longo! Máximo: 50 caracteres");
      return;
    }

    if (valueInputs.messagem.length > 2000) {
      alert("Mensagem muito longa! Máximo: 2000 caracteres");
      return;
    }

    setBisabledBtn(true);
    try {
      await enviarEmail(valueInputs);
      configAlert("E-mail enviado com sucesso!", "");
      setBisabledBtn(false);
      setValueInputs(initialValues);
    } catch (error) {
      console.log("Falha ao enviar ❌", error);
      configAlert("", "Falha no envio do e-mail :(");
      setBisabledBtn(false);
    }
  }

  return (
    <>
      <div
        className="cursor-pointer fixed inset-0 z-99 flex items-center justify-center bg-black/70 backdrop-blur-sm "
        onClick={() => false}
      >
        <div
          className={`fixed ${alertToast.menssageSucess
            ? configAlertToast.sucess.start
            : alertToast.menssageError
              ? configAlertToast.error.start
              : configAlertToast.error.initial
            } px-4 py-2 rounded-lg text-white text-sm font-medium shadow-lg transition-all duration-300  backdrop-blur-md z-99`}
        >
          {alertToast.menssageSucess || alertToast.menssageError}
        </div>
        <div
          className="relative flex justify-between w-dvw md:w-full md:max-w-2xl h-dvh md:h-max  flex-col md:rounded-xl md:border md:border-white/10 bg-[#101622]/70 shadow-2xl backdrop-blur-sm animate-[fadeIn_0.25s_ease-in-out] cursor-default"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="p-8 h-full flex flex-col justify-center">
            <div className="flex justify-between items-center mb-7">
              <h1 className="text-[#e2e8f0] text-2xl font-bold">
                Enviar E-mail
              </h1>
              <button
                className=" rounded-full p-1.5 text-white/60 transition-colors hover:bg-white/10 hover:text-white cursor-pointer"
                onClick={close}
              >
                <MdClose fontSize={22} />
              </button>
            </div>

            <form className="flex flex-col gap-4  text-[#e2e8f0] text-sm">
              <div className="flex flex-col gap-6 sm:flex-row">
                <div className="flex flex-col min-w-40 flex-1">
                  <label
                    htmlFor="input_remetente"
                    className=" font-medium mb-2"
                  >
                    Remetente
                  </label>
                  <input
                    id="input_remetente"
                    className=" focus:border-cyan-400 w-full rounded-lg border border-white/10 bg-white/5 px-4 py-2 placeholder:text-white/40 focus:border-primary focus:outline-none "
                    placeholder="Digite seu E-mail..."
                    value={valueInputs.remetente}
                    max={50}
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
                    className=" w-full rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-white/40 focus:border-primary focus:outline-none cursor-not-allowed"
                    disabled
                    value="carlosvarao.frontend@hotmail.com"
                  />
                </div>
              </div>

              <div className="flex flex-col min-w-40 flex-1">
                <label
                  htmlFor="input_assunto"
                  className="text-white/80  font-medium mb-2"
                >
                  Assunto
                </label>
                <input
                  id="input_assunto"
                  className=" focus:border-cyan-400 w-full rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-white placeholder:text-white/40 focus:border-primary focus:outline-none"
                  placeholder="Ex: Dúvida sobre o Projeto X"
                  max={70}
                  value={valueInputs.assunto}
                  onChange={(e) =>
                    setValueInputs({ ...valueInputs, assunto: e.target.value })
                  }
                />
              </div>

              <div className="flex flex-col min-w-40 flex-1">
                <label
                  htmlFor="input_mensagem"
                  className="text-white/80  font-medium mb-2"
                >
                  Mensagem
                </label>
                <textarea
                  id="input_mensagem"
                  className=" focus:border-cyan-400 min-h-36 w-full resize-y rounded-lg border border-white/10 bg-white/5 p-4 text-white placeholder:text-white/40 focus:border-primary focus:outline-none"
                  placeholder="Digite sua mensagem aqui..."
                  maxLength={2000}
                  value={valueInputs.messagem}
                  onChange={(e) =>
                    setValueInputs({ ...valueInputs, messagem: e.target.value })
                  }
                />
              </div>
            </form>
          </div>

          <div className="flex flex-wrap items-center justify-end gap-3 border-t border-white/10 px-8 py-4">
            <button
              className="rounded-lg hover:bg-white/10 px-6 py-2.5 text-sm cursor-pointer font-bold text-white/80 transition-all duration-250"
              onClick={close}
            >
              Cancelar
            </button>
            <button
              className={`flex justify-center items-center w-[88px] px-6 py-2.5 rounded-lg text-sm font-bold transition-all duration-250 ${disabledBtn
                ? "cursor-not-allowed text-[#22D3EE]/60 border border-[#22D3EE]/30 bg-[#ffffff0d]/50"
                : "cursor-pointer text-[#22D3EE] border border-[#22D3EE]/50 bg-[#ffffff0d] hover:bg-[#22D3EE]/10"
                }`}
              onClick={btnEnviarEmail}
              disabled={disabledBtn}
            >
              {disabledBtn ? <SpinnerBtn width={20} height={20} /> : "Enviar"}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
