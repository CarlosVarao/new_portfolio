import { useState } from "react";
import { motion } from "framer-motion";
import { Download, Mail, UserRound } from "lucide-react";
import { PhotoPlaceholder } from "@/components/ui/PhotoPlaceholder";
import { ModalEmail } from "@/components/ui/ModalEmail";

const CV_PATH = "/curriculo/curriculo.pdf";

async function handleDownloadCV(e: React.MouseEvent<HTMLButtonElement>) {
  e.preventDefault();
  const res = await fetch(CV_PATH, { method: "HEAD" });
  const contentType = res.headers.get("Content-Type") ?? "";
  if (!res.ok || !contentType.includes("pdf")) {
    alert("Currículo não disponível no momento. Tente novamente mais tarde.");
    return;
  }
  const link = document.createElement("a");
  link.href = CV_PATH;
  link.download = "curriculo.pdf";
  link.click();
}

const ease = [0.16, 1, 0.3, 1] as const;

export function Hero() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <section
        id="home"
        className="relative overflow-hidden border-b border-line"
      >
        {/* Grid técnico animado */}
        <div className="tech-grid pointer-events-none absolute inset-0 animate-gridDrift" />
        {/* Brilho do acento */}
        <div className="pointer-events-none absolute -right-20 -top-36 h-[520px] w-[520px] animate-glowPulse rounded-full bg-[radial-gradient(circle,var(--glow),transparent_65%)] blur-[28px]" />

        <div className="relative mx-auto grid max-w-[1200px] grid-cols-1 items-center gap-16 px-7 py-[110px] md:grid-cols-[1.25fr_0.9fr] md:pt-[120px]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease }}
          >
            <div className="mb-7 inline-flex items-center gap-2.5 rounded-full border border-line bg-surface px-3.5 py-[7px]">
              <span className="h-[7px] w-[7px] rounded-full bg-accent shadow-[0_0_10px_var(--accent)]" />
              <span className="font-mono text-xs tracking-[0.06em] text-muted">
                VENHA ME CONHECER MELHOR 🧑‍💻
              </span>
            </div>

            <h1 className="mb-5 font-display text-[52px] font-bold leading-[1.02] tracking-[-0.025em] text-ink md:text-[74px]">
              Carlos Varão
            </h1>

            <p className="mb-5 font-display text-[18px] font-medium leading-[1.5] text-accent">
              Engenheiro de Dados&nbsp;&middot;&nbsp;SAP
              ABAP&nbsp;&middot;&nbsp;SAP PI/PO/CPI&nbsp;&middot;&nbsp;SAP
              Datasphere&nbsp;&middot;&nbsp;Desenvolvimento, Integração e Dados
            </p>

            <p className="mb-9 text-justify text-[17px] leading-[1.7]">
              Profissional com foco em soluções corporativas, atuando em
              Engenharia de Dados e integração de sistemas, com experiência no
              ecossistema SAP e em projetos de dados envolvendo extração,
              transformação e integração entre diferentes plataformas e sistemas
              corporativos.
            </p>

            <div className="flex flex-wrap gap-3.5">
              <button
                onClick={handleDownloadCV}
                className="inline-flex items-center gap-2.5 rounded-[11px] border border-accent bg-accent px-6 py-3.5 text-[15px] text-base font-semibold transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_16px_30px_-12px_var(--accent-soft)]"
              >
                <Download className="h-[17px] w-[17px]" /> Baixar currículo
              </button>
              <button
                onClick={() => setModalOpen(true)}
                className="inline-flex items-center gap-2.5 rounded-[11px] border border-line bg-surface px-6 py-3.5 text-[15px] font-semibold text-ink transition-all duration-300 hover:-translate-y-0.5 hover:border-line2 hover:bg-surface2"
              >
                <Mail className="h-[17px] w-[17px]" /> Entrar em contato
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.15, ease }}
            className="relative mx-auto w-[340px] animate-floaty md:mx-0"
          >
            <PhotoPlaceholder
              icon={UserRound}
              label="foto profissional"
              className="h-[430px] w-full"
            />
            <div className="absolute -left-[18px] bottom-[18px] rounded-xl border border-line bg-surface px-4 py-3 shadow-soft">
              <div className="mb-[3px] font-mono text-[11px] text-faint">
                FOCO ATUAL
              </div>
              <div className="font-display text-sm font-semibold text-ink">
                Eng. Dados &amp; Soluções SAP
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {modalOpen && <ModalEmail onClose={() => setModalOpen(false)} />}
    </>
  );
}
