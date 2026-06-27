import type { LucideIcon } from "lucide-react";

interface PhotoPlaceholderProps {
  icon: LucideIcon;
  label: string;
  className?: string;
}

/**
 * Placeholder elegante para imagem (substitua por <img> com a foto real).
 * Ex.: <img src="/sua-foto.jpg" alt="Carlos Varão" className="h-full w-full object-cover" />
 */
export function PhotoPlaceholder({
  icon: Icon,
  label,
  className = "",
}: PhotoPlaceholderProps) {
  return (
    <div
      className={`relative overflow-hidden rounded-[18px] border border-line2 bg-surface ${className}`}
    >
      <div className="photo-stripes absolute inset-0" />
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-3.5 text-faint">
        <Icon className="h-11 w-11 opacity-60" strokeWidth={1.5} />
        <span className="font-mono text-xs tracking-[0.05em]">{label}</span>
      </div>
    </div>
  );
}
