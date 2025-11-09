import { useState } from "react";
import { enviarEmail } from "../services/servicesApi";
import Background from "../components/Background";

export default function CadastroInfo() {
  const [liberarCadastro, setLiberarCadastro] = useState({
    login: true,
    cadastro: false,
  });

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const [file, setFile] = useState<File | null>(null);

  // Função de envio de login
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Login com:", { email, senha });
    // enviarEmail({ email, senha });
  };

  // Função de troca entre telas
  const alternarTela = () => {
    setLiberarCadastro((prev) => ({
      login: !prev.login,
      cadastro: !prev.cadastro,
    }));
  };

  // Funções do upload
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleUpload = async () => {
    if (!file) {
      alert("Selecione um arquivo antes de enviar!");
      return;
    }

    console.log("Arquivo selecionado:", file.name);
    alert(`Arquivo "${file.name}" enviado com sucesso!`);
  };

  return (
    <Background>
      {/* === TELA DE LOGIN === */}
      {liberarCadastro.login && (
        <div className="flex h-screen w-full items-center justify-center px-4">
          <div className="w-full max-w-md bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl shadow-2xl p-8">
            <h2 className="text-center text-3xl font-bold text-white mb-8 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Acesso ao Sistema
            </h2>

            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div className="flex flex-col">
                <label className="text-white/80 mb-2 font-medium">E-mail</label>
                <input
                  type="email"
                  placeholder="Digite seu e-mail"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full rounded-xl bg-white/10 border border-white/20 px-4 py-2 text-white placeholder-white/50 focus:outline-none focus:border-cyan-400 transition"
                />
              </div>

              <div className="flex flex-col">
                <label className="text-white/80 mb-2 font-medium">Senha</label>
                <input
                  type="password"
                  placeholder="Digite sua senha"
                  value={senha}
                  onChange={(e) => setSenha(e.target.value)}
                  className="w-full rounded-xl bg-white/10 border border-white/20 px-4 py-2 text-white placeholder-white/50 focus:outline-none focus:border-cyan-400 transition"
                />
              </div>

              <button
                type="submit"
                className="mt-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 py-2 font-bold text-white transition-all hover:scale-[1.02] hover:shadow-[0_0_10px_#06b6d4]"
              >
                Entrar
              </button>
            </form>

            <div className="text-center mt-5">
              <button
                onClick={alternarTela}
                className="text-sm text-cyan-400 hover:text-cyan-300 transition"
              >
                Criar conta / Ir para upload
              </button>
            </div>
          </div>
        </div>
      )}

      {/* === TELA DE UPLOAD === */}
      {liberarCadastro.cadastro && (
        <div className="flex h-screen w-full items-center justify-center px-4">
          <div className="w-full max-w-md bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl shadow-2xl p-8">
            <h2 className="text-center text-3xl font-bold text-white mb-8 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Enviar Arquivo
            </h2>

            <div className="flex flex-col gap-6">
              <div className="flex flex-col">
                <label className="text-white/80 mb-2 font-medium">
                  Selecione um arquivo JSON
                </label>
                <input
                  type="file"
                  accept=".json"
                  onChange={handleFileChange}
                  className="file:mr-4 file:rounded-lg file:border-0 file:bg-gradient-to-r file:from-cyan-500 file:to-blue-600 file:px-4 file:py-2 file:text-white file:font-semibold hover:file:opacity-90 text-white/70"
                />
                {file && (
                  <p className="mt-3 text-sm text-cyan-300 text-center truncate">
                    Arquivo selecionado: {file.name}
                  </p>
                )}
              </div>

              <button
                onClick={handleUpload}
                className="rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 py-2 font-bold text-white transition-all hover:scale-[1.02] hover:shadow-[0_0_10px_#06b6d4]"
              >
                Enviar
              </button>

              <button
                onClick={alternarTela}
                className="text-sm text-cyan-400 hover:text-cyan-300 transition mt-2"
              >
                Voltar para login
              </button>
            </div>
          </div>
        </div>
      )}
    </Background>
  );
}
