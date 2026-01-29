import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { heroContent } from "../../data/content";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <div
      id="Hero"
      ref={containerRef}
      className="min-h-screen relative overflow-hidden bg-[var(--bg-primary)] pb-32"
    >
      {/* Decorative Grid Background */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(var(--text-primary) 1px, transparent 1px),
              linear-gradient(90deg, var(--text-primary) 1px, transparent 1px)
            `,
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      {/* Floating Shapes */}
      <motion.div
        className="absolute top-1/4 right-[15%] w-32 h-32 border-2 border-[var(--accent)] opacity-20 rotate-12"
        animate={{
          rotate: [12, 24, 12],
          y: [0, -20, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-1/3 left-[10%] w-24 h-24 bg-[var(--accent-muted)] opacity-10 rounded-full blur-xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.15, 0.1],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Main Content */}
      <motion.div
        style={{ y, opacity }}
        className="relative z-10 min-h-screen flex flex-col justify-center px-6 lg:px-24 xl:px-36 pt-24"
      >
        {/* Top Label */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-8"
        >
          <span className="font-mono text-sm tracking-[0.3em] uppercase text-[var(--accent)] border border-[var(--accent)] px-4 py-2">
            Software Engineer
          </span>
        </motion.div>

        {/* Giant Name */}
        <div className="overflow-hidden">
          <motion.h1
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.33, 1, 0.68, 1] }}
            className="font-display text-[clamp(4rem,15vw,14rem)] leading-[0.85] tracking-tight text-[var(--text-primary)] glitch-hover"
          >
            {heroContent.name.split(" ")[0]}
          </motion.h1>
        </div>
        <div className="overflow-hidden -mt-2 lg:-mt-4">
          <motion.h1
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: [0.33, 1, 0.68, 1] }}
            className="font-display text-[clamp(4rem,15vw,14rem)] leading-[0.85] tracking-tight text-transparent"
            style={{
              WebkitTextStroke: "2px var(--text-primary)",
            }}
          >
            {heroContent.name.split(" ")[1]}
          </motion.h1>
        </div>

        {/* Description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-12 max-w-xl"
        >
          <p className="text-xl lg:text-2xl text-[var(--text-secondary)] leading-relaxed">
            {heroContent.intro}{" "}
            <span className="text-[var(--accent)] font-semibold">
              {heroContent.highlight}
            </span>
          </p>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="mt-12 flex flex-wrap items-center gap-6"
        >
          <a
            href="#Contact"
            className="group relative inline-flex items-center gap-3 bg-[var(--accent)] text-[var(--bg-primary)] px-8 py-4 font-mono text-sm uppercase tracking-widest overflow-hidden transition-all duration-300 hover:shadow-[8px_8px_0px_0px_var(--text-primary)]"
          >
            <span className="relative z-10">{heroContent.linkText}</span>
            <svg
              className="w-4 h-4 relative z-10 transition-transform group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
          <a
            href="#Experience"
            className="font-mono text-sm uppercase tracking-widest text-[var(--text-secondary)] link-hover hover:text-[var(--text-primary)] transition-colors"
          >
            View Work
          </a>
        </motion.div>


        {/* Side decoration */}
        <div className="hidden lg:block absolute right-24 xl:right-36 top-1/2 -translate-y-1/2">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="relative"
          >
            {/* Coffee cup ASCII art */}
            <pre className="font-mono text-[var(--accent-muted)] text-xs leading-tight opacity-40 select-none">
              {`
    ( (
     ) )
  .______.
  |      |]
  \\      /
   \`----'
              `}
            </pre>
            <motion.div
              className="absolute -bottom-8 left-1/2 -translate-x-1/2 font-mono text-xs text-[var(--text-secondary)]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              transition={{ delay: 1.5 }}
            >
              fueled by caffeine
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* Grain Overlay */}
      <div className="grain" />
    </div>
  );
}
