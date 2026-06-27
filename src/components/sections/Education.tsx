import { ExternalLink } from "lucide-react";
import { education } from "@/data/education";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Education() {
  return (
    <section id="formacao" className="relative min-h-screen overflow-hidden border-t border-line bg-base">
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
              <Reveal key={item.title} delay={i * 0.05}>
                <div className="h-full rounded-2xl border border-line bg-surface p-[26px] transition-all duration-300 hover:-translate-y-[3px] hover:border-accent">
                  <div className="mb-4 flex items-center justify-between">
                    <span className="grid h-11 w-11 place-items-center rounded-[11px] bg-accent-soft text-accent">
                      <Icon className="h-5 w-5" />
                    </span>
                    <span className="rounded-md border border-line px-2.5 py-1 font-mono text-[11px] text-faint">
                      {item.type}
                    </span>
                  </div>
                  <h3 className="mb-1.5 font-display text-base font-semibold leading-[1.35] text-ink">
                    {item.title}
                  </h3>
                  <div className="mb-1 text-sm text-muted">{item.org}</div>
                  {item.year && <div className="font-mono text-xs text-faint">{item.year}</div>}
                  {item.link && (
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-3 flex items-center gap-1.5 font-mono text-[11px] text-accent transition-opacity hover:opacity-70"
                    >
                      <ExternalLink className="h-3.5 w-3.5" />
                      ver certificado
                    </a>
                  )}
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
