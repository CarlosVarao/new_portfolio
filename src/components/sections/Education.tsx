import { education } from "@/data/education";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Education() {
  return (
    <section id="formacao" className="border-t border-line bg-base2">
      <div className="mx-auto max-w-[1200px] px-7 py-[110px]">
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
                <div className="h-full rounded-2xl border border-line bg-surface p-[26px] transition-all duration-300 hover:-translate-y-[3px] hover:border-line2">
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
                  <div className="font-mono text-xs text-faint">{item.year}</div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
