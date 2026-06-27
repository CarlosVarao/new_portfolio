import { socials } from "@/data/socials";
import { GithubIcon, LinkedinIcon } from "@/components/icons/BrandIcons";
import { Reveal } from "@/components/Reveal";

const iconMap = {
  GitHub: GithubIcon,
  LinkedIn: LinkedinIcon,
} as const;

export function Contact() {
  const year = new Date().getFullYear();

  return (
    <footer id="contato" className="border-t border-line">
      <div className="mx-auto max-w-[900px] px-7 pb-16 pt-[110px] text-center">
        <Reveal>
          <span className="font-mono text-[13px] tracking-[0.08em] text-accent">
            07 / CONTATO
          </span>
          <h2 className="mb-[18px] mt-4 font-display text-[46px] font-bold leading-[1.05] tracking-[-0.025em] text-ink">
            Vamos construir algo
            <br />
            de valor juntos.
          </h2>
          <p className="mx-auto mb-10 max-w-[520px] text-[17px] leading-[1.7] text-muted">
            Aberto a conversas sobre engenharia de dados, ecossistema SAP e
            integrações corporativas.
          </p>

          <div className="flex justify-center gap-4">
            {socials.map((social) => {
              const Icon = iconMap[social.label as keyof typeof iconMap];
              return (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="grid h-[58px] w-[58px] place-items-center rounded-[14px] border border-line bg-surface text-muted transition-all duration-300 hover:-translate-y-1 hover:border-accent hover:text-accent"
                >
                  {Icon ? <Icon className="h-6 w-6" /> : null}
                </a>
              );
            })}
          </div>
        </Reveal>
      </div>

      <div className="border-t border-line px-7 py-[26px] text-center">
        <span className="font-mono text-[13px] text-faint">
          Design e Construção por Carlos Varão © {year}
        </span>
      </div>
    </footer>
  );
}
