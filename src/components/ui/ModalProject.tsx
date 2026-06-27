import { useEffect } from "react";
import { X } from "lucide-react";
import type { Project } from "@/data/types";

interface Props {
  project: Project | null;
  onClose: () => void;
}

export function ModalProject({ project, onClose }: Props) {
  useEffect(() => {
    if (!project) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [project, onClose]);

  if (!project) return null;

  const Icon = project.icon;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

      {/* Modal */}
      <div
        className="relative z-10 w-full max-w-[620px] rounded-2xl border border-line bg-surface shadow-soft"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-start justify-between border-b border-line p-6">
          <div className="flex items-center gap-3">
            <span className="grid h-11 w-11 flex-none place-items-center rounded-[11px] bg-accent-soft text-accent">
              <Icon className="h-5 w-5" />
            </span>
            <div>
              <h3 className="font-display text-[18px] font-semibold text-ink">
                {project.name}
              </h3>
              <span className="font-display text-[22px] font-bold text-accent">
                {project.metric}
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

        {/* Body */}
        <div className="space-y-5 p-6">
          <div>
            <span className="mb-1.5 block font-mono text-[10px] uppercase tracking-[0.2em] text-accent">
              Problema
            </span>
            <p className="text-justify text-[13px] leading-[1.65] text-muted">
              {project.problem}
            </p>
          </div>
          <div>
            <span className="mb-1.5 block font-mono text-[10px] uppercase tracking-[0.2em] text-accent">
              Resultado
            </span>
            <p className="text-justify text-[13px] leading-[1.65] text-muted">
              {project.result}
            </p>
          </div>
          <div className="flex flex-wrap gap-2 pt-1">
            {project.tech.map((tech) => (
              <span
                key={tech}
                className="rounded-md border border-line px-2.5 py-1 font-mono text-[11px] text-accent"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
