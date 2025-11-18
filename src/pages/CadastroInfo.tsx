import { useState } from "react";
import SpinnerBtn from "../components/SpinnerBtn";
import Background from "../components/Background";
import { enviarCadastroGit, downloadsArquivos } from "../services/servicesApi";

export default function CadastroInfo() {
  const [loading, setLoading] = useState(false);
  const [loadingEnviar, setLoadingEnviar] = useState(false);
  const [modal, setModal] = useState(false);
  const [login, setLogin] = useState("");
  const [senha, setSenha] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [valueDadosImgInput, setValueDadosImgInput] = useState<File | null>(
    null
  );

  const [valueDadosJsonInput, setValueDadosJsonInput] = useState<File | null>(
    null
  );

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setErrorMsg("");
    setLoading(true);

    if (
      login === import.meta.env.VITE_USER_LOGIN &&
      senha === import.meta.env.VITE_USER_SENHA
    ) {
      setTimeout(() => {
        setModal(true);
        setLoading(false);
      }, 2000);
    } else {
      setTimeout(() => {
        setErrorMsg("Usuário ou senha inválidos!");
        setLoading(false);
      }, 2000);
    }
  }

  function dadosInputImg(e: React.ChangeEvent<HTMLInputElement>) {
    const dados = e.target.files?.[0] || null;
    setValueDadosImgInput(dados);
  }

  function dadosInputJson(e: React.ChangeEvent<HTMLInputElement>) {
    const dados = e.target.files?.[0] || null;
    setValueDadosJsonInput(dados);
  }

  async function enviarDados() {
    if (!valueDadosImgInput && !valueDadosJsonInput) {
      return alert("Preencha as inputs!");
    }
    setLoadingEnviar(true);
    try {
      enviarCadastroGit({
        fileImg: valueDadosImgInput,
        fileJson: valueDadosJsonInput,
      });
      setLoadingEnviar(false);
    } catch (error) {
      console.log(error);
      setLoadingEnviar(false);
    }
  }

  return (
    <Background>
      {!modal ? (
        <div className="flex items-center justify-center px-4">
          <div className="w-full max-w-md section-glass px-8 py-13">
            <h2 className="text-center text-2xl md:text-3xl font-bold text-[#e2e8f0] mb-8 from-cyan-400 to-blue-500 bg-clip-text ">
              Acesso ao Sistema
            </h2>

            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div className="flex flex-col">
                <label
                  htmlFor="input_email"
                  className="text-white/80 mb-2 font-medium"
                >
                  Login
                </label>
                <input
                  id="input_email"
                  type="text"
                  placeholder="Digite seu e-mail"
                  value={login}
                  onChange={(e) => setLogin(e.target.value)}
                  className="pl-3 focus:border-cyan-400 text-sm w-full rounded-lg border border-white/10 bg-white/5 p-2 text-[#e2e8f0] placeholder:text-white/40 focus:border-primary focus:outline-none"
                />
              </div>

              <div className="flex flex-col">
                <label
                  htmlFor="input_senha"
                  className="text-white/80 mb-2 font-medium"
                >
                  Senha
                </label>
                <input
                  id="input_senha"
                  type="password"
                  placeholder="Digite sua senha"
                  value={senha}
                  onChange={(e) => setSenha(e.target.value)}
                  className="pl-3 focus:border-cyan-400 w-full text-sm rounded-lg border border-white/10 bg-white/5 p-2 text-[#e2e8f0] placeholder:text-white/40 focus:border-primary focus:outline-none"
                />
              </div>

              <button
                type="submit"
                className="flex h-10 justify-center items-center cursor-pointer mt-2 rounded-lg bg-linear-to-r from-cyan-500 to-blue-600 py-2 font-bold text-[#e2e8f0] transition-all hover:opacity-85"
              >
                {loading ? <SpinnerBtn width={20} height={20} /> : "Entrar"}
              </button>

              {/* Mensagem de erro com opacidade dinâmica */}
              <p
                className={`text-red-400 text-sm text-center mt-2 transition-opacity duration-500 ${
                  errorMsg ? "opacity-100" : "opacity-0"
                }`}
              >
                Usuário ou senha inválidos!
              </p>
            </form>
          </div>
        </div>
      ) : (
        <div className="flex w-full items-center justify-center px-4 py-10">
          <div className="w-full max-w-md section-glass rounded-2xl shadow-2xl p-8">
            {/* TÍTULO PRINCIPAL */}
            <h2 className="text-center text-3xl font-bold bg-linear-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-10">
              Enviar Arquivo
            </h2>

            <div className="flex flex-col gap-8">
              {/* SEÇÃO 1 — ARQUIVOS DISPONÍVEIS */}
              <div className="bg-white/5 rounded-xl p-5 border border-white/10">
                <h3 className="text-white font-semibold mb-4 text-lg">
                  Arquivos atuais
                </h3>

                <div className="flex flex-col gap-2">
                  <button
                    type="button"
                    className="text-left text-cyan-300 hover:text-white  cursor-pointer"
                    onClick={() =>
                      downloadsArquivos("informacoesIniciais.json")
                    }
                  >
                    informacoesIniciais.json
                  </button>
                  <button
                    type="button"
                    className="text-left text-cyan-300 hover:text-white  cursor-pointer"
                    onClick={() => downloadsArquivos("projetos.json")}
                  >
                    projetos.json
                  </button>
                  <button
                    type="button"
                    className="text-left text-cyan-300 hover:text-white  cursor-pointer"
                    onClick={() => downloadsArquivos("skills.json")}
                  >
                    skills.json
                  </button>
                </div>
              </div>

              {/* SEÇÃO 2 — PUBLIC */}
              <div className="bg-white/5 rounded-xl p-5 border border-white/10">
                <h3 className="text-white font-semibold mb-2">
                  Substituir arquivos na pasta
                  <span className="text-cyan-300">/public</span>
                </h3>
                <p className="text-white/60 text-sm mb-3">
                  Use este campo para enviar imagens ou estruturas usadas no
                  site.
                </p>

                <input
                  id="file_input"
                  type="file"
                  onChange={dadosInputImg}
                  className="file:cursor-pointer cursor-pointer file:mr-4 file:rounded-lg file:border-0 file:bg-linear-to-r file:from-cyan-500 file:to-blue-600 file:px-3 file:py-1 file:w-40 file:text-white file:font-medium hover:file:opacity-90 text-white/70 text-[12px]"
                />
              </div>

              {/* SEÇÃO 3 — DATA */}
              <div className="bg-white/5 rounded-xl p-5 border border-white/10">
                <h3 className="text-white font-semibold mb-2">
                  Atualizar dados da pasta
                  <span className="text-cyan-300">/data</span>
                </h3>
                <p className="text-white/60 text-sm mb-3">
                  Utilize este campo para atualizar informações utilizadas no
                  conteúdo do site.
                </p>
                <input
                  id="file_input"
                  type="file"
                  accept=".json"
                  onChange={dadosInputJson}
                  className="file:cursor-pointer cursor-pointer file:mr-4 file:rounded-lg file:border-0 file:bg-linear-to-r file:from-cyan-500 file:to-blue-600 file:px-3 file:py-1 file:w-40 file:text-white file:font-medium hover:file:opacity-90 text-white/70 text-[12px]"
                />
              </div>

              {/* BOTÃO FINAL */}
              <button
                className="cursor-pointer rounded-xl bg-linear-to-r from-cyan-500 to-blue-600 
                   text-sm py-3 font-bold text-white transition-all hover:opacity-85 w-full mt-2 flex justify-center"
                onClick={enviarDados}
              >
                {loadingEnviar ? (
                  <SpinnerBtn width={20} height={20} />
                ) : (
                  "Enviar Dados"
                )}
              </button>
            </div>
          </div>
        </div>
      )}
    </Background>
  );
}
