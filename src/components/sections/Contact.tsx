import { motion } from "motion/react";
import { SectionHeader } from "../ui/Section";
import { HiArrowRight } from "react-icons/hi2";

const EMAIL = "khalilialan@gmail.com";
const LINKEDIN = "https://linkedin.com/in/alankhalili";

export default function Contact() {
  return (
    <motion.section
      id="Contact"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8 }}
      className="px-6 lg:px-24 xl:px-36 py-32 bg-[var(--bg-secondary)] relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-[0.02] pointer-events-none">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(var(--text-primary) 1px, transparent 1px),
              linear-gradient(90deg, var(--text-primary) 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="max-w-4xl mx-auto relative">
        <SectionHeader title="Contact" subtitle="Let's build something together" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="border-2 border-[var(--border)]/30 p-8 md:p-12"
        >
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--text-secondary)]/60 mb-6">
            Form Temporarily Closed
          </p>

          <h3 className="font-display text-3xl md:text-4xl text-[var(--text-primary)] mb-4">
            Email me instead
          </h3>

          <p className="text-[var(--text-secondary)] max-w-xl mb-10">
            The contact form is taking a break while I deal with a wave of spam.
            Email still reaches me just as fast — and I read every one.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 sm:items-center">
            <motion.a
              href={`mailto:${EMAIL}`}
              whileHover={{ x: 4 }}
              whileTap={{ scale: 0.98 }}
              className="group inline-flex items-center gap-4 bg-[var(--accent)] text-[var(--bg-primary)] px-8 py-4 font-mono text-sm uppercase tracking-widest transition-all duration-300 hover:shadow-[8px_8px_0px_0px_var(--text-primary)]"
            >
              <span>Send an Email</span>
              <HiArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </motion.a>

            <a
              href={LINKEDIN}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-sm uppercase tracking-widest text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors duration-300 border-b-2 border-transparent hover:border-[var(--accent)] pb-1 self-start"
            >
              Or reach me on LinkedIn
            </a>
          </div>

          <p className="mt-10 pt-8 border-t border-[var(--border)]/20 font-mono text-xs text-[var(--text-secondary)]/50 select-all">
            {EMAIL}
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
}
