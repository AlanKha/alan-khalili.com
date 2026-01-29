import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { BsSun, BsMoon } from "react-icons/bs";
import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { menuItems } from "../../data/content";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    const savedTheme = localStorage.getItem("theme");
    const systemPrefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    if (savedTheme === "dark" || (!savedTheme && systemPrefersDark)) {
      setTheme("dark");
      document.documentElement.classList.add("dark");
    } else {
      setTheme("light");
      document.documentElement.classList.remove("dark");
    }

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        hasScrolled
          ? "bg-[var(--bg-primary)]/90 backdrop-blur-md border-b border-[var(--border)]/10"
          : "bg-transparent"
      }`}
    >
      <div className="h-20 flex justify-between items-center px-6 lg:px-24 xl:px-36">
        {/* Logo */}
        <motion.a
          href="#Hero"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="font-display text-2xl tracking-wider text-[var(--text-primary)] hover:text-[var(--accent)] transition-colors"
        >
          AK
        </motion.a>

        {/* Desktop Navigation */}
        <motion.nav
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="hidden lg:flex items-center gap-8"
        >
          {menuItems.map((item, index) => (
            <motion.a
              key={item.text}
              href={item.href}
              target={item.isExternal ? "_blank" : undefined}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
              className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors link-hover"
            >
              {item.text}
            </motion.a>
          ))}

          {/* Theme Toggle */}
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.6 }}
            onClick={toggleTheme}
            className="w-10 h-10 flex items-center justify-center border border-[var(--border)]/20 hover:border-[var(--accent)] hover:text-[var(--accent)] transition-all duration-300"
            aria-label="Toggle Dark Mode"
          >
            <motion.div
              key={theme}
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              {theme === "dark" ? <BsSun size={16} /> : <BsMoon size={16} />}
            </motion.div>
          </motion.button>
        </motion.nav>

        {/* Mobile Controls */}
        <div className="lg:hidden flex items-center gap-4">
          <button
            onClick={toggleTheme}
            className="w-10 h-10 flex items-center justify-center border border-[var(--border)]/20"
            aria-label="Toggle Dark Mode"
          >
            {theme === "dark" ? <BsSun size={18} /> : <BsMoon size={18} />}
          </button>

          <button
            onClick={toggleMenu}
            className="w-10 h-10 flex items-center justify-center"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <AiOutlineClose size={24} />
            ) : (
              <AiOutlineMenu size={24} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {createPortal(
        <AnimatePresence onExitComplete={() => { document.body.style.overflow = ""; }}>
          {isOpen && (
            <motion.div
              initial={{ clipPath: "circle(0% at calc(100% - 40px) 40px)" }}
              animate={{ clipPath: "circle(150% at calc(100% - 40px) 40px)" }}
              exit={{ clipPath: "circle(0% at calc(100% - 40px) 40px)" }}
              transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1] }}
              onAnimationStart={() => { document.body.style.overflow = "hidden"; }}
              className="fixed inset-0 bg-[var(--bg-primary)] z-[100] flex flex-col justify-center items-center"
            >
              <button
                onClick={toggleMenu}
                className="absolute top-6 right-6 w-10 h-10 flex items-center justify-center"
                aria-label="Close menu"
              >
                <AiOutlineClose size={28} />
              </button>

              <nav className="flex flex-col items-center gap-8">
                {menuItems.map((item, index) => (
                  <motion.a
                    key={item.text}
                    href={item.href}
                    target={item.isExternal ? "_blank" : undefined}
                    onClick={toggleMenu}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 30 }}
                    transition={{
                      duration: 0.4,
                      delay: 0.1 + index * 0.1,
                      ease: [0.33, 1, 0.68, 1],
                    }}
                    className="font-display text-5xl tracking-wider text-[var(--text-primary)] hover:text-[var(--accent)] transition-colors"
                  >
                    {item.text}
                  </motion.a>
                ))}
              </nav>

              {/* Decorative number */}
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.05 }}
                transition={{ delay: 0.5 }}
                className="absolute bottom-12 right-12 font-display text-[20rem] leading-none text-[var(--text-primary)] select-none"
              >
                24
              </motion.span>
            </motion.div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </header>
  );
}
