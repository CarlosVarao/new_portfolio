import { aboutBlocks, personalValues } from "@/data/about";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PhotoPlaceholder } from "@/components/ui/PhotoPlaceholder";

export function About() {
  return (
    <section
      id="sobre"
      className="mx-auto flex min-h-screen max-w-[1200px] flex-col justify-center px-7 py-[72px]"
    >
      <div className="mb-12 md:mb-5">
        <SectionHeading index="01" eyebrow="SOBRE MIM" title="Quem sou" />
      </div>

      <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-[0.7fr_1.3fr]">
        <Reveal className="hidden md:block">
          <PhotoPlaceholder
            caminhoImg="/perfil2.jpeg"
            className="aspect-[3/5] w-full"
            classNameImg="object-cover"
          />
        </Reveal>

        <Reveal delay={0.1}>
          <div className="flex flex-col gap-4">
            {aboutBlocks.map((block) => {
              const Icon = block.icon;
              return (
                <div
                  key={block.title}
                  className="border-l-2 border-line pl-5 text-justify transition-colors duration-300 hover:border-accent"
                >
                  <h3 className="mb-2 flex items-center gap-2.5 font-display text-[17px] font-semibold text-ink">
                    <Icon className="h-4 w-4 text-accent" />
                    {block.title}
                  </h3>
                  <p className="text-[14px] leading-[1.65] text-muted">
                    {block.text}
                  </p>
                </div>
              );
            })}

            <div className="mt-1.5 flex flex-wrap gap-2.5">
              {personalValues.map((value) => (
                <span
                  key={value}
                  className="rounded-lg border border-line px-3 py-[7px] font-mono text-xs text-accent"
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
