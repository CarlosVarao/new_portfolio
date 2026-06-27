interface PhotoPlaceholderProps {
  caminhoImg: string;
  className?: string;
  classNameImg?: string;
}

/**
 * Placeholder elegante para imagem (substitua por <img> com a foto real).
 * Ex.: <img src="/perfil1.jpg" alt="Carlos Varão" className="h-full w-full object-cover" />
 */
export function PhotoPlaceholder({
  caminhoImg,
  className = "",
  classNameImg = "",
}: PhotoPlaceholderProps) {
  return (
    <div
      className={`relative overflow-hidden rounded-[18px] border border-line2 bg-surface ${className}`}
    >
      <div className="photo-stripes absolute inset-0" />
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-3.5 text-faint">
        <img src={caminhoImg} alt="Carlos Varão" className={classNameImg} />
      </div>
    </div>
  );
}
