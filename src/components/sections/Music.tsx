import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { musicContent } from "../../data/content";
import { BsMusicNoteBeamed, BsX } from "react-icons/bs";

export default function Music() {
  const [isLoading, setIsLoading] = useState(true);
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end" id="Music">
      {/* Music Player Container */}
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.4, ease: [0.33, 1, 0.68, 1] }}
            className="absolute bottom-20 right-0 w-[350px] md:w-[400px] max-w-[calc(100vw-3rem)]"
          >
            <div className="bg-[var(--surface)] border border-[var(--border)]/20 backdrop-blur-sm overflow-hidden">
              {/* Header */}
              <div className="flex justify-between items-center px-4 py-3 border-b border-[var(--border)]/10">
                <div className="flex items-center gap-3">
                  <div className="flex gap-1">
                    <motion.span
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 0.6, repeat: Infinity, delay: 0 }}
                      className="w-1.5 h-1.5 bg-[var(--accent)] rounded-full"
                    />
                    <motion.span
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 0.6, repeat: Infinity, delay: 0.2 }}
                      className="w-1.5 h-1.5 bg-[var(--accent)] rounded-full"
                    />
                    <motion.span
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 0.6, repeat: Infinity, delay: 0.4 }}
                      className="w-1.5 h-1.5 bg-[var(--accent)] rounded-full"
                    />
                  </div>
                  <span className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--text-secondary)]">
                    Now Playing
                  </span>
                </div>
                <button
                  onClick={() => setIsVisible(false)}
                  className="w-6 h-6 flex items-center justify-center text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
                  aria-label="Close player"
                >
                  <BsX size={20} />
                </button>
              </div>

              {/* Player */}
              <div className="relative w-full h-[152px] bg-[var(--bg-secondary)]">
                {isLoading && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="font-mono text-xs uppercase tracking-widest text-[var(--text-secondary)] animate-pulse">
                      Loading...
                    </span>
                  </div>
                )}
                <iframe
                  onLoad={() => setTimeout(() => setIsLoading(false), 2000)}
                  allow="autoplay *; encrypted-media *; fullscreen *; clipboard-write"
                  height="152"
                  width="100%"
                  className={`w-full overflow-hidden bg-transparent transition-opacity duration-500 ${
                    isLoading ? "opacity-0" : "opacity-100"
                  }`}
                  sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation"
                  src={musicContent.playlistUrl}
                  title={musicContent.title}
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Toggle Button */}
      <div className="flex flex-col items-end gap-3">
        <AnimatePresence>
          {!isVisible && (
            <motion.div
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 10 }}
              className="hidden md:block bg-[var(--surface)] border border-[var(--border)]/20 px-4 py-2"
            >
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--text-secondary)]">
                Soundtrack
              </span>
            </motion.div>
          )}
        </AnimatePresence>

        <motion.button
          onClick={() => setIsVisible(!isVisible)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={`w-14 h-14 flex items-center justify-center border transition-all duration-300 ${
            isVisible
              ? "bg-[var(--accent)] border-[var(--accent)] text-[var(--bg-primary)]"
              : "bg-[var(--bg-primary)] border-[var(--border)]/20 text-[var(--text-primary)] hover:border-[var(--accent)] hover:text-[var(--accent)]"
          }`}
          aria-label={isVisible ? "Hide Music Player" : "Show Music Player"}
        >
          {isVisible ? (
            <BsX className="w-7 h-7" />
          ) : (
            <BsMusicNoteBeamed className="w-5 h-5" />
          )}
        </motion.button>
      </div>
    </div>
  );
}
