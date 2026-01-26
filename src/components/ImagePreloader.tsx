import { useEffect } from "react";
import marqueeBorderSvg from "../assets/patterns/marquee_border.svg";
import { ASSETS } from "../data/content";

/**
 * A component that preloads background images before rendering children.
 */
export default function ImagePreloader({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // List of background images to preload
    const imageUrls = [
      // SVG from local assets (imported so Vite processes it correctly)
      marqueeBorderSvg,
      // External PNG images
      ASSETS.marqueeBannerPng,
      ASSETS.noiseLight,
    ];

    // Preload all images
    imageUrls.forEach((url) => {
      const img = new Image();
      img.src = url;
    });
  }, []);

  // Removed blocking render to improve FCP
  return <>{children}</>;
}

