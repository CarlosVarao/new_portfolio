import { motion, type Variant } from "framer-motion";
import type { ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  /** Direção do deslize inicial */
  y?: number;
  as?: "div" | "li" | "section";
}

const ease = [0.16, 1, 0.3, 1] as const;

/**
 * Wrapper de animação de surgimento no scroll (Framer Motion).
 * Anima apenas uma vez ao entrar na viewport.
 */
export function Reveal({
  children,
  className,
  delay = 0,
  y = 30,
}: RevealProps) {
  const hidden: Variant = { opacity: 0, y };
  const visible: Variant = {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay, ease },
  };

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "0px 0px -10% 0px" }}
      variants={{ hidden, visible }}
    >
      {children}
    </motion.div>
  );
}
