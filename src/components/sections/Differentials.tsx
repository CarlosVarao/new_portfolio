import { differentials } from "@/data/differentials";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Differentials() {
  return (
    <section
      id="diferenciais"
      className="mx-auto max-w-[1200px] px-7 py-[110px]"
    >
      <div className="mb-[54px]">
        <SectionHeading
          index="05"
          eyebrow="DIFERENCIAIS"
          title="Diferenciais profissionais"
        />
      </div>

      <div className="grid grid-cols-1 gap-[18px] md:grid-cols-3">
        {differentials.map((item, i) => {
          const Icon = item.icon;
          return (
            <Reveal key={item.title} delay={i * 0.05}>
              <div className="group h-full rounded-2xl border border-line bg-surface p-[26px] transition-all duration-300 hover:-translate-y-1 hover:border-accent">
                <span className="mb-[18px] grid h-[46px] w-[46px] place-items-center rounded-xl border border-line bg-surface2 text-accent transition-all duration-300 group-hover:bg-accent group-hover:text-base">
                  <Icon className="h-[21px] w-[21px]" />
                </span>
                <h3 className="mb-2 font-display text-[17px] font-semibold text-ink">
                  {item.title}
                </h3>
                <p className="text-justify text-sm leading-[1.65] text-muted">{item.text}</p>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
