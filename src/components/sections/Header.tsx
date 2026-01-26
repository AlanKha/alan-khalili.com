import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";
import { BsSun, BsMoon } from "react-icons/bs";
import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { menuItems } from "../../data/content";

/**
 * A component that renders the header section.
 */
export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    // Initialize Theme
    const savedTheme = localStorage.getItem("theme");
    const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    
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
    if (newTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  return (
    <div
      className={`sticky top-0 z-50 h-20 transition-all duration-300 ${
        hasScrolled
          ? "bg-custom-ivory/95 backdrop-blur-md border-b-2 border-custom-black shadow-[0px_4px_0px_0px_rgba(0,0,0,0.05)]"
          : "bg-transparent"
      }`}
    >
      <div className="h-full flex justify-between items-center px-6 lg:px-36">
        {/* Left side */}
        <div className="z-60">
          <a href="#Hero" className="text-3xl font-serif font-bold italic tracking-tight hover:text-custom-brown transition-colors">
            <span>Alan Khalili</span>
          </a>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-8">
          {menuItems.map((item) => (
            <a
              key={item.text}
              href={item.href}
              target={item.isExternal ? "_blank" : undefined}
              className="uppercase font-bold tracking-widest text-xs hover:text-custom-brown transition-colors relative group"
            >
              <span>{item.text}</span>
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-custom-brown transition-all group-hover:w-full"></span>
            </a>
          ))}
          
          {/* Theme Toggle Desktop */}
          <button
            onClick={toggleTheme}
            className="p-2 border-2 border-custom-black bg-[var(--color-surface)] hover:shadow-[2px_2px_0px_0px_var(--color-custom-black)] transition-all active:translate-x-[1px] active:translate-y-[1px] active:shadow-none"
            aria-label="Toggle Dark Mode"
          >
            {theme === "dark" ? <BsSun size={18} /> : <BsMoon size={18} />}
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden z-60 flex items-center gap-4">
           {/* Theme Toggle Mobile */}
          <button
            onClick={toggleTheme}
            className="p-2 border-2 border-custom-black bg-[var(--color-surface)] hover:shadow-[2px_2px_0px_0px_var(--color-custom-black)] transition-all active:translate-x-[1px] active:translate-y-[1px] active:shadow-none"
            aria-label="Toggle Dark Mode"
          >
            {theme === "dark" ? <BsSun size={20} /> : <BsMoon size={20} />}
          </button>

          <button
            onClick={toggleMenu}
            className="p-2 focus:outline-none"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <AiOutlineClose size={32} className="text-custom-black" />
            ) : (
              <AiOutlineMenu size={32} className="text-custom-black" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {createPortal(
        <AnimatePresence
          onExitComplete={() => {
            document.body.style.overflow = "unset";
          }}
        >
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, x: "100%" }}
              animate={{
                opacity: 1,
                x: 0,
                transition: { duration: 0.4, ease: "circOut" },
              }}
              exit={{ opacity: 0, x: "100%", transition: { duration: 0.3 } }}
              className="fixed inset-0 bg-custom-ivory text-custom-black z-50 flex flex-col justify-center items-center"
              style={{ overflow: "hidden" }}
              onAnimationStart={() => {
                document.body.style.overflow = "hidden";
              }}
            >
              {/* Add Close Button inside Portal since Main Button is under it in z-index context relative to body? 
                  Wait, Main Button is z-60 in Header. Header is z-50.
                  Portal is appended to Body.
                  Portal z-50.
                  Header z-50.
                  They might fight. 
                  Better to include a close button inside the portal to be safe, OR ensure Portal z-index is lower than Header?
                  No, Header has backdrop-blur, so we want Portal OUT of it.
                  If Portal is out, Header z-50 might be below Portal z-50 (DOM order).
                  So Main Button (z-60 inside Header) might be covered by Portal.
                  Solution: Add a close button inside the Portal again.
              */}
              <button
                onClick={toggleMenu}
                className="absolute top-6 right-6 p-2 z-60"
              >
                 <AiOutlineClose size={32} />
              </button>

              <div className="flex flex-col items-center justify-center gap-10">
                {menuItems.map((item, index) => (
                  <motion.div
                    key={item.text}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ delay: 0.2 + index * 0.1 }}
                  >
                    <a
                      href={item.href}
                      target={item.isExternal ? "_blank" : undefined}
                      onClick={toggleMenu}
                      className="font-serif text-4xl italic hover:text-custom-brown transition-colors"
                    >
                      {item.text}
                    </a>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </div>
  );
}
