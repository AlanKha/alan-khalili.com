import { useState } from "react";
import { musicContent } from "../../data/content";

/**
 * A component that renders the Apple Music embed.
 */
export default function Music() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="w-full flex justify-center pt-12" id="Music">
      <div className="w-full max-w-4xl mx-auto px-4 flex justify-center relative">
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center z-0">
            <div className="w-full max-w-[660px] h-[450px] animate-pulse rounded-xl flex items-center justify-center">
              <span className="text-white/50 font-mono text-sm">Loading playlist...</span>
            </div>
          </div>
        )}
        <iframe
          onLoad={() => setTimeout(() => setIsLoading(false), 2000)}
          allow="autoplay *; encrypted-media *; fullscreen *; clipboard-write"
          height="450"
          className={`w-full max-w-[660px] overflow-hidden bg-transparent transition-opacity duration-500 relative z-10 ${
            isLoading ? "opacity-0" : "opacity-100"
          }`}
          sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation"
          src={musicContent.playlistUrl}
          title={musicContent.title}
        ></iframe>
      </div>
    </div>
  );
}
