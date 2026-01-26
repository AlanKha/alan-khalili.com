import { useState } from "react";
import { musicContent } from "../../data/content";
import { BsMusicNoteBeamed, BsX } from "react-icons/bs";

/**
 * A sticky component that renders the Apple Music embed with show/hide functionality.
 */
export default function Music() {
  const [isLoading, setIsLoading] = useState(true);
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div
      className="fixed bottom-6 right-6 z-50 flex flex-col items-end"
      id="Music"
    >
      {/* Music Player Container */}
      <div
        className={`absolute bottom-20 right-0 w-[350px] md:w-[450px] max-w-[calc(100vw-3rem)] transition-all duration-500 cubic-bezier(0.175, 0.885, 0.32, 1.275) origin-bottom-right ${
          isVisible
            ? "opacity-100 scale-100 translate-y-0 pointer-events-auto"
            : "opacity-0 scale-90 translate-y-8 pointer-events-none"
        }`}
      >
        <div className="bg-custom-ivory border-2 border-custom-black p-2 shadow-[8px_8px_0px_0px_var(--color-custom-black)]">
          <div className="flex justify-between items-center mb-2 px-1">
            <h3 className="font-serif italic text-xl text-custom-black">
              Now Playing
            </h3>
            <div className="flex gap-1">
               <span className="w-2 h-2 bg-custom-black rounded-full animate-bounce delay-100"></span>
               <span className="w-2 h-2 bg-custom-black rounded-full animate-bounce delay-200"></span>
               <span className="w-2 h-2 bg-custom-black rounded-full animate-bounce delay-300"></span>
            </div>
          </div>
          
          <div className="relative w-full h-[152px] bg-custom-black/5">
             {isLoading && (
              <div className="absolute inset-0 flex items-center justify-center z-0">
                <p className="font-mono text-xs uppercase tracking-widest text-custom-black/50 animate-pulse">
                  Loading...
                </p>
              </div>
            )}
            <iframe
              onLoad={() => setTimeout(() => setIsLoading(false), 2000)}
              allow="autoplay *; encrypted-media *; fullscreen *; clipboard-write"
              height="152"
              width="100%"
              className={`w-full overflow-hidden bg-transparent relative z-10 ${
                isLoading ? "opacity-0" : "opacity-100"
              } transition-opacity duration-500`}
              sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation"
              src={musicContent.playlistUrl}
              title={musicContent.title}
            ></iframe>
          </div>
        </div>
      </div>

      {/* Toggle Button & Tooltip */}
      <div className="flex flex-col items-end gap-3">
        {!isVisible && (
          <div className="bg-[var(--color-surface)] border-2 border-custom-black px-4 py-2 shadow-[4px_4px_0px_0px_var(--color-custom-black)] hidden md:block">
            <p className="text-custom-black text-xs font-bold uppercase tracking-widest whitespace-nowrap">
              Soundtrack
            </p>
          </div>
        )}
        <button
          onClick={() => setIsVisible(!isVisible)}
          className={`w-14 h-14 bg-custom-black text-custom-ivory border-2 border-custom-black flex items-center justify-center shadow-[4px_4px_0px_0px_var(--color-custom-ivory)] hover:shadow-[2px_2px_0px_0px_var(--color-custom-ivory)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all duration-200 group overflow-hidden relative`}
          aria-label={isVisible ? "Hide Music Player" : "Show Music Player"}
        >
          <div className="relative z-10">
             {isVisible ? (
              <BsX className="w-8 h-8 group-hover:rotate-90 transition-transform duration-300" />
            ) : (
              <BsMusicNoteBeamed className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
            )}
          </div>
        </button>
      </div>
    </div>
  );
}
