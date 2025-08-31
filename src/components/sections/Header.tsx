import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";
import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect } from "react";
import { RESUME_LINK } from "../../constants";

/**
 * A component that renders the header section.
 */
export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  const menuItems = [
    { href: "#Experience", text: "Experience" },
    { href: "#Projects", text: "Projects" },
    { href: "#Contact", text: "Contact" },
    {
      href: RESUME_LINK,
      text: "Resume",
      isExternal: true,
    },
  ];

  return (
    <div
      className={`sticky top-0 z-50 h-16 transition-all duration-300 ${
        hasScrolled ? "bg-custom-ivory bg-noise-light" : "bg-transparent"
      }`}
    >
      <div
        className={`h-full transition-all duration-300 ${
          hasScrolled
            ? "bg-custom-brown border-b-2 border-custom-custom-ivory bg-noise-light"
            : ""
        }`}
      >
        <div className="flex justify-between items-center px-12 lg:px-36 h-full text-xl">
          {/* Left side */}
          <div>
            <a href="#Hero" className="text-2xl font-semibold">
              <span>Alan Khalili</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex text-md space-x-8">
            {menuItems.map((item) => (
              <a
                key={item.text}
                href={item.href}
                target={item.isExternal ? "_blank" : undefined}
              >
                <span>{item.text}</span>
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden z-60">
            <motion.button
              onClick={toggleMenu}
              animate={{ rotate: isOpen ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              {isOpen ? (
                <AiOutlineClose size={30} className="text-custom-black" />
              ) : (
                <AiOutlineMenu size={30} />
              )}
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        <AnimatePresence
          onExitComplete={() => {
            document.body.style.overflow = "unset";
          }}
        >
          {isOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                transitionEnd: {
                  overflow: "hidden",
                },
              }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-custom-ivory text-custom-black z-50"
              style={{ overflow: "hidden" }}
              onAnimationStart={() => {
                document.body.style.overflow = "hidden";
              }}
            >
              <div className="flex flex-col items-center justify-center h-full gap-8">
                {menuItems.map((item, index) => (
                  <motion.div
                    key={item.text}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ delay: index * 0.1 }}
                    className="hover:underline"
                  >
                    <a
                      href={item.href}
                      target={item.isExternal ? "_blank" : undefined}
                      onClick={toggleMenu}
                      className="text-3xl"
                    >
                      {item.text}
                    </a>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
