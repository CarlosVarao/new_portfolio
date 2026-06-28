import { useEffect } from "react";
import { X, ExternalLink } from "lucide-react";
import type { Education } from "@/data/types";

interface Props {
  item: Education | null;
  onClose: () => void;
}

export function ModalEducation({ item, onClose }: Props) {
  useEffect(() => {
    if (!item) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [item, onClose]);

  if (!item) return null;

  const Icon = item.icon;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

      <div
        className="relative z-10 w-full max-w-[520px] rounded-2xl border border-line bg-surface shadow-soft"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-line p-6">
          <div className="flex items-center gap-3">
            <span className="grid h-11 w-11 flex-none place-items-center overflow-hidden border border-line bg-surface">
              {item.logo ? (
                <img
                  src={item.logo}
                  alt={item.institution}
                  className="h-full w-full object-contain p-1.5"
                />
              ) : (
                <Icon className="h-5 w-5 text-accent" />
              )}
            </span>
            <div>
              <h3 className="font-display text-[14px] font-semibold text-ink md:text-[18px]">
                {item.title}
              </h3>
              <span className="font-mono text-[11px] text-faint">
                {item.type}
              </span>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="grid h-8 w-8 place-items-center rounded-lg border border-line text-muted transition-colors hover:border-line2 hover:text-ink"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {/* Courses */}
        <div className="space-y-2 p-6">
          {item.courses.map((course) => (
            <div
              key={course.title}
              className="flex items-center justify-between rounded-xl border border-line bg-base2 px-4 py-3"
            >
              <span className="text-[13px] text-ink">{course.title}</span>
              {course.link ? (
                <a
                  href={course.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-4 flex flex-none items-center gap-1.5 font-mono text-[11px] text-accent transition-opacity hover:opacity-70"
                >
                  <ExternalLink className="h-3.5 w-3.5" />
                  ver certificado
                </a>
              ) : (
                <span className="ml-4 font-mono text-[11px] text-faint">
                  em andamento
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
