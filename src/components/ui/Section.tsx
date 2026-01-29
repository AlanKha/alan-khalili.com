import { ReactNode } from "react";
import { motion } from "motion/react";

interface SectionProps {
  id?: string;
  className?: string;
  children: ReactNode;
}

export function Section({ id, className = "", children }: SectionProps) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7, ease: [0.33, 1, 0.68, 1] }}
      className={`px-6 lg:px-24 xl:px-36 py-24 bg-[var(--bg-primary)] ${className}`}
    >
      {children}
    </motion.section>
  );
}

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  className?: string;
}

export function SectionHeader({ title, subtitle, className = "" }: SectionHeaderProps) {
  return (
    <div className={`mb-16 ${className}`}>
      <div className="flex items-center gap-4 mb-6">
        <motion.span
          initial={{ width: 0 }}
          whileInView={{ width: "2.5rem" }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="h-[1px] bg-[var(--accent)]"
        />
        <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-[var(--accent)]">
          Section
        </span>
      </div>
      <h2 className="font-display text-5xl md:text-6xl lg:text-7xl tracking-tight text-[var(--text-primary)]">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-6 text-lg text-[var(--text-secondary)] max-w-xl leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}

