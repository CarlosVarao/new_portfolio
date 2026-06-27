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
      <span className="font-mono text-[13px] tracking-[0.08em] text-accent">
        {index} / {eyebrow}
      </span>
      <h2 className="mt-3.5 font-display text-[42px] font-bold leading-tight tracking-[-0.02em] text-ink">
        {title}
      </h2>
    </Reveal>
  );
}
