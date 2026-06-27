import { useState } from "react";
import { timeline } from "@/data/timeline";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

// Ordem cronológica (mais antigo -> mais recente) para o fluxo do pipeline.
// O array original vem do mais recente para o mais antigo.
const stages = [...timeline].reverse();

export function Timeline() {
  const [active, setActive] = useState(stages.length - 1);

  const entry = stages[active];
  const Icon = entry.icon;
  const total = String(stages.length).padStart(2, "0");

  return (
    <section
      id="trajetoria"
      className="relative min-h-screen overflow-hidden border-y border-line bg-base"
    >
      {/* Grid técnico animado */}
      <div className="tech-grid pointer-events-none absolute inset-0 animate-gridDrift" />
      {/* Brilho do acento */}
      <div className="pointer-events-none absolute -left-20 -top-36 h-[520px] w-[520px] animate-glowPulse rounded-full bg-[radial-gradient(circle,var(--glow),transparent_65%)] blur-[28px]" />
      <div className="mx-auto max-w-[1200px] px-7 py-[110px]">
        <div className="mb-[54px] flex flex-wrap items-end justify-between gap-4">
          <SectionHeading
            index="02"
            eyebrow="TRAJETÓRIA"
            title="Pipeline da carreira"
          />
          <div className="flex items-center gap-2.5 font-mono text-[11px] text-faint">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            clique em um estágio
          </div>
        </div>

        {/* Keyframes do fluxo de dados + fundo da seção */}
        <style>{`
          /* Variável do brilho do acento usada no glow do fundo */
          #trajetoria {
            --glow: color-mix(in srgb, var(--accent) 16%, transparent);
          }

          /* Malha de pontos técnica (desvanece nas bordas) */
          .tech-grid {
            background-image: radial-gradient(
              color-mix(in srgb, var(--accent) 32%, transparent) 1.2px,
              transparent 1.2px
            );
            background-size: 26px 26px;
            opacity: 0.6;
            -webkit-mask-image: radial-gradient(120% 80% at 50% 0%, #000 30%, transparent 80%);
            mask-image: radial-gradient(120% 80% at 50% 0%, #000 30%, transparent 80%);
          }

          /* Utilitários de animação do fundo */
          .animate-gridDrift { animation: gridDrift 40s linear infinite; }
          .animate-glowPulse { animation: glowPulse 12s ease-in-out infinite; }

          @keyframes gridDrift {
            from { background-position: 0 0; }
            to   { background-position: 26px 26px; }
          }
          @keyframes glowPulse {
            0%, 100% { transform: scale(1);    opacity: 0.6; }
            50%      { transform: scale(1.15); opacity: 0.9; }
          }

          @keyframes pipeFlow {
            0%   { left: 0;    opacity: 0; }
            8%   { opacity: 1; }
            92%  { opacity: 1; }
            100% { left: 100%; opacity: 0; }
          }
        `}</style>

        {/* Pipeline (blocos) -------------------------------------------- */}
        <Reveal>
          <div className="-mx-7 overflow-x-auto px-7 py-2">
            <div className="relative flex min-w-[860px] items-stretch justify-between gap-3.5">
              {/* Trilho + partículas */}
              <div className="pointer-events-none absolute left-3 right-3 top-1/2 z-[1] h-0.5 -translate-y-1/2 bg-gradient-to-r from-line to-line">
                {[0, 0.25, 0.5, 0.75].map((d, i) => (
                  <span
                    key={i}
                    className="absolute top-1/2 h-1.5 w-1.5 -translate-y-1/2 rounded-full bg-accent"
                    style={{
                      boxShadow: "0 0 8px var(--accent)",
                      animation: "pipeFlow 6s linear infinite",
                      animationDelay: `${-(6 * d)}s`,
                    }}
                  />
                ))}
              </div>

              {stages.map((s, i) => {
                const on = i === active;
                return (
                  <button
                    key={s.year + s.role}
                    type="button"
                    onClick={() => setActive(i)}
                    aria-pressed={on}
                    className={`group relative z-[2] flex flex-1 flex-col rounded-xl border bg-surface p-3.5 text-left outline-none transition-all duration-300 ${
                      on
                        ? "border-accent shadow-[0_0_0_1px_var(--accent-soft),0_10px_30px_-12px_var(--accent-soft)]"
                        : "border-line hover:-translate-y-0.5 hover:border-line2"
                    }`}
                    style={{ minWidth: 0 }}
                  >
                    {/* Topo: número + status */}
                    <div className="flex items-center justify-between">
                      <span
                        className={`font-mono text-[11px] tracking-wide transition-colors ${
                          on ? "text-accent" : "text-faint"
                        }`}
                      >
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span
                        className={`h-[7px] w-[7px] rounded-full transition-all ${
                          on ? "bg-accent" : "bg-line2"
                        }`}
                        style={
                          on
                            ? { boxShadow: "0 0 8px var(--accent)" }
                            : undefined
                        }
                      />
                    </div>

                    {/* Cargo */}
                    <div
                      className={`mt-3 text-balance font-display text-[14px] font-semibold leading-snug transition-colors ${
                        on ? "text-ink" : "text-muted group-hover:text-ink"
                      }`}
                    >
                      {s.role}
                    </div>

                    {/* Ano (fixo no rodapé) */}
                    <div
                      className={`mt-auto pt-2.5 font-mono text-[11px] transition-colors ${
                        on ? "text-accent" : "text-faint"
                      }`}
                    >
                      {s.year}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </Reveal>

        {/* Detalhe do estágio selecionado ------------------------------- */}
        <div
          style={{
            height: 400,
            marginTop: 28,
            overflow: "hidden",
            borderRadius: 16,
          }}
        >
          <Reveal
            delay={0.08}
            className="h-full overflow-hidden rounded-2xl border border-line bg-surface shadow-soft"
          >
            <div className="flex h-full flex-col md:flex-row">
              {/* Lateral */}
              <div className="flex shrink-0 flex-col gap-4 border-b border-line bg-base2 p-6 md:w-[310px] md:border-b-0 md:border-r">
                {/* Linha 1: Estágio (esq) | Ano (dir) */}
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent">
                    Etapa {String(active + 1).padStart(2, "0")} / {total}
                  </span>
                  <span className="rounded-lg border border-accent-soft bg-accent-soft px-3 py-1.5 font-mono text-sm font-medium text-accent">
                    {entry.year}
                  </span>
                </div>

                {/* Linha 2: Logo (esq) | Role + Company (dir) */}
                <div className="flex items-start gap-4">
                  <span className="grid h-[52px] w-[52px] flex-none place-items-center overflow-hidden border border-line bg-surface">
                    {entry.logo ? (
                      <img
                        src={entry.logo}
                        alt={entry.company}
                        className="h-full w-full object-contain p-1.5"
                      />
                    ) : (
                      <Icon className="h-5 w-5 text-accent" />
                    )}
                  </span>
                  <div>
                    <div className="font-display text-[18px] font-semibold leading-tight text-ink">
                      {entry.role}
                    </div>
                    <div className="mt-0.5 text-sm text-muted">
                      {entry.company}
                    </div>
                  </div>
                </div>
              </div>

              {/* Conteúdo */}
              <div className="flex flex-1 flex-col overflow-y-auto p-6">
                <p className="mb-4 flex-1 text-justify text-[13px] leading-[1.65] text-muted">
                  {entry.description}
                </p>
                <div className="flex flex-wrap gap-2.5 pt-4">
                  {entry.tech.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md border border-line px-2.5 py-1 font-mono text-[11px] text-accent"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
