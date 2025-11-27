import { ReactNode } from "react";

interface SectionProps {
  id?: string;
  className?: string;
  children: ReactNode;
}

export function Section({ id, className = "", children }: SectionProps) {
  return (
    <section
      id={id}
      className={`px-8 lg:px-36 py-16 ${className}`}
    >
      {children}
    </section>
  );
}

interface SectionHeaderProps {
  title: string;
  className?: string;
}

export function SectionHeader({ title, className = "" }: SectionHeaderProps) {
  return (
    <div className={`pt-12 px-3 text-2xl flex justify-between border-b pb-2 border-black ${className}`}>
      <h1>{title}</h1>
    </div>
  );
}

