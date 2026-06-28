import { useState } from "react";
import { education } from "@/data/education";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ModalEducation } from "@/components/ui/ModalEducation";
import type { Education as EducationType } from "@/data/types";

export function Education() {
  const [selected, setSelected] = useState<EducationType | null>(null);

  return (
    <>
      <section
        id="formacao"
        className="relative min-h-screen overflow-hidden border-t border-line bg-base"
      >
        {/* Grid técnico animado */}
        <div className="tech-grid-e pointer-events-none absolute inset-0 animate-gridDrift" />
        {/* Brilho do acento */}
        <div className="pointer-events-none absolute -left-20 -top-36 h-[520px] w-[520px] animate-glowPulse rounded-full bg-[radial-gradient(circle,var(--glow-e),transparent_65%)] blur-[28px]" />
        <style>{`
          #formacao { --glow-e: color-mix(in srgb, var(--accent) 16%, transparent); }
          .tech-grid-e {
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

        <div className="relative mx-auto flex min-h-screen max-w-[1200px] flex-col justify-center px-7 py-[110px]">
          <div className="mb-[54px]">
            <SectionHeading
              index="06"
              eyebrow="FORMAÇÃO"
              title="Formação e certificações"
            />
          </div>

          <div className="grid grid-cols-1 gap-[18px] md:grid-cols-3">
            {education.map((item, i) => {
              const Icon = item.icon;
              return (
                <Reveal key={item.institution} delay={i * 0.05}>
                  <div className="group h-full w-full rounded-2xl border border-line bg-surface p-[26px] text-left transition-all duration-300 hover:-translate-y-[3px] hover:border-accent">
                    <div className="mb-4 flex items-start justify-between gap-3">
                      <div className="flex items-center gap-3">
                        <span className="grid h-11 w-11 flex-none place-items-center overflow-hidden border border-line bg-surface">
                          {item.logo ? (
                            <img
                              src={item.logo}
                              alt={item.institution}
                              className="h-full w-full object-contain p-1.5"
                            />
                          ) : (
                            <Icon className="h-5 w-5 text-accent" />
                          )}
                        </span>
                        <div>
                          <h3 className="font-display text-[14px] font-semibold leading-[1.35] text-ink">
                            {item.title}
                          </h3>
                        </div>
                      </div>
                      <span className="flex-none rounded-md border border-line px-2.5 py-1 font-mono text-[11px] text-faint">
                        {item.type}
                      </span>
                    </div>
                    <p className="mb-1 text-[13px] text-muted">
                      {item.institution}
                    </p>
                    <p className="mb-4 font-mono text-[11px] text-faint">
                      {item.courses.length}{" "}
                      {item.courses.length === 1 ? "curso" : "cursos"}
                    </p>
                    <button
                      type="button"
                      onClick={() => setSelected(item)}
                      className="font-mono text-[11px] text-accent transition-colors hover:opacity-70"
                    >
                      ver certificados →
                    </button>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <ModalEducation item={selected} onClose={() => setSelected(null)} />
    </>
  );
}
