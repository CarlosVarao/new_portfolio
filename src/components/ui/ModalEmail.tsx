import { useState } from "react";
import emailjs from "@emailjs/browser";
import { X, Send, Loader2 } from "lucide-react";

const SERVICE_ID = import.meta.env.VITE_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_PUBLIC_KEY;

const initialValues = { remetente: "", assunto: "", messagem: "" };

interface Props {
  onClose: () => void;
}

export function ModalEmail({ onClose }: Props) {
  const [values, setValues] = useState(initialValues);
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState<{ msg: string; ok: boolean } | null>(null);

  function showToast(msg: string, ok: boolean) {
    setToast({ msg, ok });
    setTimeout(() => setToast(null), 3000);
  }

  async function handleSubmit() {
    if (!values.remetente || !values.assunto || !values.messagem) {
      alert("Preencha todos os campos!");
      return;
    }
    if (values.remetente.length > 70) {
      alert("E-mail muito longo! Máximo: 70 caracteres");
      return;
    }
    if (values.assunto.length > 50) {
      alert("Assunto muito longo! Máximo: 50 caracteres");
      return;
    }
    if (values.messagem.length > 2000) {
      alert("Mensagem muito longa! Máximo: 2000 caracteres");
      return;
    }

    setLoading(true);
    try {
      await emailjs.send(SERVICE_ID, TEMPLATE_ID, values, {
        publicKey: PUBLIC_KEY,
      });
      showToast("E-mail enviado com sucesso!", true);
      setValues(initialValues);
    } catch (err) {
      console.error("Erro ao enviar e-mail:", err);
      showToast("Falha no envio do e-mail :(", false);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm"
      onClick={onClose}
    >
      {/* Toast */}
      {toast && (
        <div
          className={`fixed right-6 top-8 z-50 rounded-lg px-4 py-2 text-sm font-medium text-white shadow-lg transition-all duration-300 ${
            toast.ok ? "bg-emerald-500/90" : "bg-red-500/90"
          }`}
        >
          {toast.msg}
        </div>
      )}

      <div
        className="relative flex w-full max-w-2xl flex-col rounded-xl border border-line bg-surface shadow-soft"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-line px-8 py-5">
          <h2 className="font-display text-xl font-bold text-ink">
            Enviar mensagem
          </h2>
          <button
            onClick={onClose}
            className="rounded-full p-1.5 text-muted transition-colors hover:bg-surface2 hover:text-ink"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Body */}
        <div className="flex flex-col gap-4 p-8">
          <div className="flex flex-col gap-4 sm:flex-row">
            <div className="flex flex-1 flex-col gap-2">
              <label className="text-sm font-medium text-ink">Seu e-mail</label>
              <input
                className="w-full rounded-lg border border-line bg-surface2 px-4 py-2.5 text-sm text-ink placeholder:text-faint focus:border-accent focus:outline-none"
                placeholder="Digite seu e-mail..."
                value={values.remetente}
                onChange={(e) =>
                  setValues({ ...values, remetente: e.target.value })
                }
              />
            </div>
            <div className="flex flex-1 flex-col gap-2">
              <label className="text-sm font-medium text-ink">
                Destinatário
              </label>
              <input
                className="w-full cursor-not-allowed rounded-lg border border-line bg-surface2 px-4 py-2.5 text-sm text-faint focus:outline-none"
                disabled
                value="carlosvarao.frontend@hotmail.com"
              />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-ink">Assunto</label>
            <input
              className="w-full rounded-lg border border-line bg-surface2 px-4 py-2.5 text-sm text-ink placeholder:text-faint focus:border-accent focus:outline-none"
              placeholder="Ex: Dúvida sobre o Projeto X"
              value={values.assunto}
              onChange={(e) =>
                setValues({ ...values, assunto: e.target.value })
              }
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-ink">Mensagem</label>
            <textarea
              className="min-h-36 w-full resize-y rounded-lg border border-line bg-surface2 p-4 text-sm text-ink placeholder:text-faint focus:border-accent focus:outline-none"
              placeholder="Digite sua mensagem aqui..."
              maxLength={2000}
              value={values.messagem}
              onChange={(e) =>
                setValues({ ...values, messagem: e.target.value })
              }
            />
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-end gap-3 border-t border-line px-8 py-4">
          <button
            onClick={onClose}
            className="rounded-lg px-6 py-2.5 text-sm font-semibold text-muted transition-colors hover:bg-surface2 hover:text-ink"
          >
            Cancelar
          </button>
          <button
            onClick={handleSubmit}
            disabled={loading}
            className="inline-flex items-center gap-2 rounded-lg border border-accent bg-accent px-6 py-2.5 text-sm font-semibold transition-all duration-300 hover:shadow-[0_8px_20px_-8px_var(--accent-soft)] disabled:cursor-not-allowed disabled:opacity-60"
          >
            {loading ? (
              <Loader2 className="h-4 w-4 animate-spin" />
            ) : (
              <Send className="h-4 w-4" />
            )}
            {loading ? "Enviando..." : "Enviar"}
          </button>
        </div>
      </div>
    </div>
  );
}
