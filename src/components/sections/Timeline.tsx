import { timeline } from "@/data/timeline";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Timeline() {
  return (
    <section
      id="trajetoria"
      className="border-y border-line bg-base2"
    >
      <div className="mx-auto max-w-[1100px] px-7 py-[110px]">
        <div className="mb-[60px]">
          <SectionHeading
            index="02"
            eyebrow="TRAJETÓRIA"
            title="Linha do tempo da carreira"
          />
        </div>

        <div className="relative pl-10">
          {/* Linha vertical */}
          <div className="absolute left-[7px] top-1.5 bottom-1.5 w-0.5 bg-gradient-to-b from-accent to-line" />

          {timeline.map((entry, i) => {
            const Icon = entry.icon;
            return (
              <Reveal key={entry.year + entry.company} delay={i * 0.05}>
                <div className="relative mb-[34px]">
                  {/* Marcador */}
                  <div className="absolute -left-10 top-6 h-4 w-4 rounded-full border-2 border-accent bg-base2 shadow-[0_0_0_4px_var(--accent-soft)]" />

                  <div className="group rounded-2xl border border-line bg-surface p-7 transition-all duration-300 hover:-translate-y-[3px] hover:border-line2 hover:shadow-soft">
                    <div className="mb-3.5 flex flex-wrap items-center gap-3.5">
                      <span className="grid h-[46px] w-[46px] place-items-center rounded-[10px] border border-line bg-surface2 text-accent">
                        <Icon className="h-5 w-5" />
                      </span>
                      <div className="min-w-[160px] flex-1">
                        <div className="font-display text-[18px] font-semibold text-ink">
                          {entry.role}
                        </div>
                        <div className="text-sm text-muted">{entry.company}</div>
                      </div>
                      <span className="rounded-lg border border-accent-soft bg-accent-soft px-3 py-1.5 font-mono text-sm font-medium text-accent">
                        {entry.year}
                      </span>
                    </div>

                    <p className="mb-4 text-[15px] leading-[1.7] text-muted">
                      {entry.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {entry.tech.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-md border border-line px-2.5 py-1 font-mono text-[11px] text-faint"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
