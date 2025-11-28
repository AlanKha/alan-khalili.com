import { useState } from "react";
import { musicContent } from "../../data/content";

/**
 * A sticky component that renders the Apple Music embed with show/hide functionality.
 */
export default function Music() {
  const [isLoading, setIsLoading] = useState(true);
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div
      className="fixed bottom-4 right-4 z-50 flex flex-col items-end"
      id="Music"
    >
      {/* Music Player Container - always rendered for preloading */}
      <div
        className={`absolute bottom-14 right-0 w-[700px] max-w-[calc(100vw-2rem)] transition-all duration-500 ease-in-out ${
          isVisible
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 translate-y-4 pointer-events-none"
        }`}
      >
        <div className="w-full flex justify-center relative bg-custom-brown/95 backdrop-blur-sm rounded-xl p-4 pb-2 md:pb-4 shadow-2xl border border-custom-ivory/20">
          {isLoading && (
            <div className="absolute inset-0 flex items-center justify-center z-0 rounded-lg">
              <div className="w-full max-w-[660px] animate-pulse rounded-xl flex items-center justify-center">
                <span className="text-white/50 font-mono text-sm">
                  Loading Music...
                </span>
              </div>
            </div>
          )}
          <iframe
            onLoad={() => setTimeout(() => setIsLoading(false), 2000)}
            allow="autoplay *; encrypted-media *; fullscreen *; clipboard-write"
            height="450"
            width="100%"
            className={`w-full max-w-[660px] overflow-hidden bg-transparent transition-opacity duration-500 relative z-10 rounded-lg ${
              isLoading ? "opacity-0" : "opacity-100"
            }`}
            sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation"
            src={musicContent.playlistUrl}
            title={musicContent.title}
          ></iframe>
        </div>
      </div>

      {/* Toggle Button with Fun Text */}
      <div className="flex flex-col items-end gap-2">
        {!isVisible && (
          <div className="bg-custom-green/90 backdrop-blur-sm px-3 py-1.5 rounded-full shadow-lg border border-custom-ivory/20 animate-pulse">
            <p className="text-custom-ivory text-xs font-mono whitespace-nowrap">
              🎵 Wanna see what I'm listening to? 🎵
            </p>
          </div>
        )}
        <button
          onClick={() => setIsVisible(!isVisible)}
          className="w-12 h-12 rounded-full bg-custom-green hover:bg-custom-green/80 text-custom-ivory flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110"
          aria-label={isVisible ? "Hide Music Player" : "Show Music Player"}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className={`w-6 h-6 transition-transform duration-300 ${
              isVisible ? "rotate-180" : ""
            }`}
          >
            {isVisible ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 5.25l-7.5 7.5-7.5-7.5m15 6l-7.5 7.5-7.5-7.5"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 15.75l7.5-7.5 7.5 7.5"
              />
            )}
          </svg>
        </button>
      </div>
    </div>
  );
}
