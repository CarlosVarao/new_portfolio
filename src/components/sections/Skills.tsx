import { skillGroups } from "@/data/skills";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Skills() {
  return (
    <section
      id="competencias"
      className="mx-auto max-w-[1200px] px-7 py-[110px]"
    >
      <div className="mb-[54px]">
        <SectionHeading
          index="03"
          eyebrow="COMPETÊNCIAS"
          title="Competências técnicas"
        />
      </div>

      <div className="grid grid-cols-1 gap-[25px] md:grid-cols-2 lg:grid-cols-2">
        {skillGroups.map((group, i) => {
          const Icon = group.icon;
          return (
            <Reveal key={group.title} delay={i * 0.05} className={i === skillGroups.length - 1 ? "md:col-span-2" : ""}>
              <div className="h-full rounded-[18px] border border-line bg-surface p-5 transition-all duration-300 hover:-translate-y-1 hover:border-accent">
                <div className="mb-[22px] flex items-center gap-3">
                  <span className="grid h-[42px] w-[42px] place-items-center rounded-[11px] bg-accent-soft text-accent">
                    <Icon className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="font-display text-[18px] font-semibold text-ink">
                      {group.title}
                    </h3>
                    <span className="font-mono text-[11px] text-faint">
                      {group.tag}
                    </span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="cursor-default rounded-[7px] border border-line bg-surface2 px-2.5 py-1 text-[11px] text-muted transition-all duration-300 hover:border-accent hover:bg-accent-soft hover:text-ink"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
