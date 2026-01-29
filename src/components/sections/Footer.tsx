import { footerLinks } from "../../data/content";
import { motion } from "motion/react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[var(--bg-primary)] border-t border-[var(--border)]/10">
      <div className="px-6 lg:px-24 xl:px-36 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Logo/Name */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="font-display text-3xl tracking-wider text-[var(--text-primary)]">
              AK
            </span>
          </motion.div>

          {/* Links */}
          <motion.nav
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-wrap justify-center gap-8"
          >
            {footerLinks.map((link) => (
              <a
                key={link.text}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors link-hover"
              >
                {link.text}
              </a>
            ))}
          </motion.nav>

          {/* Copyright */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-mono text-xs text-[var(--text-secondary)]"
          >
            &copy; {currentYear} Alan Khalili
          </motion.p>
        </div>
      </div>
    </footer>
  );
}
