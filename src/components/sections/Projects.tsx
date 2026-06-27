import { ArrowUpRight } from "lucide-react";
import { projects } from "@/data/projects";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Projects() {
  return (
    <section id="projetos" className="border-y border-line bg-base2">
      <div className="mx-auto max-w-[1200px] px-7 py-[110px]">
        <div className="mb-[54px]">
          <SectionHeading
            index="04"
            eyebrow="PROJETOS"
            title="Casos de sucesso"
          />
        </div>

        <div className="grid grid-cols-1 gap-[22px] md:grid-cols-3">
          {projects.map((project, i) => {
            const Icon = project.icon;
            return (
              <Reveal key={project.name} delay={i * 0.05}>
                <div className="group flex h-full flex-col rounded-[18px] border border-line bg-surface p-7 transition-all duration-300 hover:-translate-y-1 hover:border-line2 hover:shadow-soft">
                  <div className="mb-[18px] flex items-start justify-between">
                    <span className="grid h-11 w-11 place-items-center rounded-[11px] bg-accent-soft text-accent">
                      <Icon className="h-5 w-5" />
                    </span>
                    <ArrowUpRight className="h-5 w-5 text-faint transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-accent" />
                  </div>

                  <h3 className="mb-3 font-display text-[19px] font-semibold text-ink">
                    {project.name}
                  </h3>

                  <p className="mb-1.5 text-sm leading-[1.65] text-muted">
                    <b className="font-semibold text-ink">Problema. </b>
                    {project.problem}
                  </p>
                  <p className="mb-[18px] text-sm leading-[1.65] text-muted">
                    <b className="font-semibold text-ink">Resultado. </b>
                    {project.result}
                  </p>

                  <div className="mt-auto">
                    <div className="mb-3.5 font-display text-[26px] font-bold text-accent">
                      {project.metric}
                    </div>
                    <div className="flex flex-wrap gap-[7px]">
                      {project.tech.map((tech) => (
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
