import { Image } from "lucide-react";
import { aboutBlocks, personalValues } from "@/data/about";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PhotoPlaceholder } from "@/components/ui/PhotoPlaceholder";

export function About() {
  return (
    <section id="sobre" className="mx-auto max-w-[1200px] px-7 py-[110px]">
      <div className="mb-[54px]">
        <SectionHeading index="01" eyebrow="SOBRE MIM" title="Quem sou" />
      </div>

      <div className="grid grid-cols-1 items-start gap-14 md:grid-cols-[0.85fr_1.15fr]">
        <Reveal>
          <PhotoPlaceholder
            icon={Image}
            label="foto pessoal"
            className="aspect-[4/5] w-full"
          />
        </Reveal>

        <Reveal delay={0.1}>
          <div className="flex flex-col gap-6">
            {aboutBlocks.map((block) => {
              const Icon = block.icon;
              return (
                <div
                  key={block.title}
                  className="border-l-2 border-line pl-5 transition-colors duration-300 hover:border-accent"
                >
                  <h3 className="mb-2 flex items-center gap-2.5 font-display text-[17px] font-semibold text-ink">
                    <Icon className="h-4 w-4 text-accent" />
                    {block.title}
                  </h3>
                  <p className="text-[15px] leading-[1.7] text-muted">
                    {block.text}
                  </p>
                </div>
              );
            })}

            <div className="mt-1.5 flex flex-wrap gap-2.5">
              {personalValues.map((value) => (
                <span
                  key={value}
                  className="rounded-lg border border-line px-3 py-[7px] font-mono text-xs text-muted"
                >
                  {value}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
