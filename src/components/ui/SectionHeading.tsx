import { Reveal } from "@/components/Reveal";

interface SectionHeadingProps {
  index: string;
  eyebrow: string;
  title: string;
  align?: "left" | "center";
}

/** Cabeçalho padronizado de seção (número + eyebrow + título). */
export function SectionHeading({
  index,
  eyebrow,
  title,
  align = "left",
}: SectionHeadingProps) {
  return (
    <Reveal className={align === "center" ? "text-center" : ""}>
      <span className="font-mono text-[11px] tracking-[0.08em] text-accent md:text-[13px]">
        {index} / {eyebrow}
      </span>
      <h2 className="mt-2.5 font-display text-[28px] font-bold leading-tight tracking-[-0.02em] text-ink md:mt-3.5 md:text-[42px]">
        {title}
      </h2>
    </Reveal>
  );
}
