import { AiFillGithub } from "react-icons/ai";
import { motion } from "motion/react";
import { HiArrowUpRight } from "react-icons/hi2";

interface CardProps {
  id?: string;
  imageSrc: string;
  imageAlt: string;
  title: string;
  description: string;
  link: string;
  githubLink?: string;
  ctaText?: string;
}

export default function Card({
  imageSrc,
  imageAlt,
  title,
  description,
  link,
  githubLink,
  ctaText = "View Project",
}: CardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1] }}
      viewport={{ once: true, margin: "-50px" }}
      className="group relative mb-12"
    >
      <div className="grid md:grid-cols-[240px_1fr] gap-6 md:gap-8 items-start">
        {/* Image Container */}
        <div className="relative overflow-hidden">
          <div className="aspect-[4/3] bg-[var(--surface)] border border-[var(--border)]/10 overflow-hidden relative">
            <img
              src={imageSrc}
              alt={imageAlt}
              className="w-full h-full object-contain p-6 transition-transform duration-700 group-hover:scale-105"
            />
            {/* Subtle gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-[var(--accent)]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>
          {/* Corner accent */}
          <div className="absolute -top-1 -right-1 w-6 h-6">
            <div className="absolute top-0 right-0 w-full h-[2px] bg-[var(--accent)] origin-right scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
            <div className="absolute top-0 right-0 w-[2px] h-full bg-[var(--accent)] origin-top scale-y-0 group-hover:scale-y-100 transition-transform duration-300 delay-100" />
          </div>
        </div>

        {/* Content Container */}
        <div className="flex flex-col h-full py-2">
          <div className="flex items-start justify-between gap-4 mb-4">
            <h3 className="font-display text-3xl md:text-4xl tracking-tight text-[var(--text-primary)] group-hover:text-[var(--accent)] transition-colors duration-300">
              {title}
            </h3>
            {githubLink && (
              <a
                href={githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 w-10 h-10 border border-[var(--border)]/20 flex items-center justify-center text-[var(--text-secondary)] hover:border-[var(--accent)] hover:text-[var(--accent)] transition-all duration-300"
                aria-label="View on GitHub"
              >
                <AiFillGithub size={20} />
              </a>
            )}
          </div>

          <p className="text-[var(--text-secondary)] leading-relaxed text-lg mb-6 flex-grow">
            {description}
          </p>

          <div className="flex items-center gap-6 pt-4 border-t border-[var(--border)]/10">
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="group/btn inline-flex items-center gap-2 font-mono text-sm uppercase tracking-widest text-[var(--text-primary)] hover:text-[var(--accent)] transition-colors"
            >
              <span>{ctaText}</span>
              <HiArrowUpRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
            </a>
          </div>
        </div>
      </div>

      {/* Decorative line */}
      <div className="absolute -bottom-6 left-0 right-0 h-[1px] bg-gradient-to-r from-[var(--border)]/20 via-[var(--border)]/5 to-transparent" />
    </motion.article>
  );
}
