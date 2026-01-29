import Marquee from "react-fast-marquee";
import { motion } from "motion/react";
import { useGithubRepos } from "../../hooks/useGithubRepos";

export default function SlidingMarquee() {
  const { repos, error } = useGithubRepos("AlanKha");

  if (error || !repos || repos.length === 0) {
    return null;
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="relative py-8 bg-[var(--bg-secondary)] overflow-hidden"
    >
      {/* Top border accent */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[var(--accent)]/30 to-transparent" />

      {/* Marquee with gradient masks */}
      <div className="relative mask-marquee">
        <Marquee pauseOnHover speed={40} gradient={false}>
          {repos
            .filter((repo) => !repo.private)
            .map((repo) => (
              <a
                key={repo.id}
                href={`https://github.com/AlanKha/${repo.name}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center mx-8"
              >
                <span className="font-display text-2xl tracking-wide text-[var(--text-primary)] group-hover:text-[var(--accent)] transition-colors">
                  {repo.name}
                </span>
                {repo.language && (
                  <span className="ml-3 font-mono text-xs uppercase tracking-wider text-[var(--text-secondary)] opacity-60">
                    {repo.language}
                  </span>
                )}
                <span className="mx-8 text-[var(--accent-muted)] opacity-40">/</span>
              </a>
            ))}
        </Marquee>
      </div>

      {/* Bottom border accent */}
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[var(--accent)]/30 to-transparent" />
    </motion.div>
  );
}
