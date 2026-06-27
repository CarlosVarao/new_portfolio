import { useState } from "react";
import { projects } from "@/data/projects";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ModalProject } from "@/components/ui/ModalProject";
import type { Project } from "@/data/types";

export function Projects() {
  const [selected, setSelected] = useState<Project | null>(null);

  return (
    <>
      <section
        id="projetos"
        className="relative min-h-screen overflow-hidden border-y border-line bg-base"
      >
        {/* Grid técnico animado */}
        <div className="tech-grid-p pointer-events-none absolute inset-0 animate-gridDrift" />
        {/* Brilho do acento */}
        <div className="pointer-events-none absolute -left-20 -top-36 h-[520px] w-[520px] animate-glowPulse rounded-full bg-[radial-gradient(circle,var(--glow-p),transparent_65%)] blur-[28px]" />
        <style>{`
          #projetos { --glow-p: color-mix(in srgb, var(--accent) 16%, transparent); }
          .tech-grid-p {
            background-image: radial-gradient(
              color-mix(in srgb, var(--accent) 32%, transparent) 1.2px,
              transparent 1.2px
            );
            background-size: 26px 26px;
            opacity: 0.6;
            -webkit-mask-image: radial-gradient(120% 80% at 50% 0%, #000 30%, transparent 80%);
            mask-image: radial-gradient(120% 80% at 50% 0%, #000 30%, transparent 80%);
          }
        `}</style>
        <div className="relative mx-auto flex min-h-screen max-w-[1200px] flex-col justify-center px-7 py-[72px]">
          <div className="mb-[40px]">
            <SectionHeading
              index="04"
              eyebrow="PROJETOS"
              title="Casos de sucesso"
            />
          </div>

          <div className="grid grid-cols-1 gap-[28px] md:grid-cols-2">
            {projects.map((project, i) => {
              const Icon = project.icon;
              return (
                <Reveal key={project.name} delay={i * 0.05}>
                  <button
                    type="button"
                    onClick={() => setSelected(project)}
                    className="group flex h-full w-full flex-col rounded-[18px] border border-line bg-surface p-5 text-left transition-all duration-300 hover:-translate-y-1 hover:border-accent hover:shadow-soft"
                  >
                    <div className="mb-4 flex items-center gap-3">
                      <span className="grid h-11 w-11 flex-none place-items-center rounded-[11px] bg-accent-soft text-accent">
                        <Icon className="h-5 w-5" />
                      </span>
                      <h3 className="font-display text-[17px] font-semibold text-ink">
                        {project.name}
                      </h3>
                    </div>

                    <p className="mb-4 flex-1 text-[13px] leading-[1.65] text-muted">
                      {project.summary}
                    </p>

                    <div className="mt-auto flex items-end justify-between">
                      <div className="font-display text-[22px] font-bold text-accent">
                        {project.metric}
                      </div>
                      <span className="font-mono text-[11px] text-accent transition-colors">
                        ver detalhes →
                      </span>
                    </div>
                  </button>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <ModalProject project={selected} onClose={() => setSelected(null)} />
    </>
  );
}
