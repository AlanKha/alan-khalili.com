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
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`px-6 lg:px-36 py-24 ${className}`}
    >
      {children}
    </motion.section>
  );
}

interface SectionHeaderProps {
  title: string;
  className?: string;
}

export function SectionHeader({ title, className = "" }: SectionHeaderProps) {
  return (
    <div className={`mb-16 flex items-center gap-4 ${className}`}>
      <h2 className="font-serif text-5xl md:text-6xl italic text-custom-black relative inline-block">
        {title}
        <span className="absolute -bottom-2 left-0 w-full h-1 bg-custom-brown"></span>
      </h2>
      <div className="h-[2px] bg-custom-black/10 flex-grow ml-4 rounded-full"></div>
    </div>
  );
}

