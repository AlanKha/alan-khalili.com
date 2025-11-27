import { useEffect, useState } from "react";
import marqueeBorderSvg from "../assets/patterns/marquee_border.svg";
import { ASSETS } from "../data/content";

/**
 * A component that preloads background images before rendering children.
 */
export default function ImagePreloader({ children }: { children: React.ReactNode }) {
  const [imagesLoaded, setImagesLoaded] = useState(false);

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
    const preloadPromises = imageUrls.map((url) => {
      return new Promise<void>((resolve) => {
        const img = new Image();
        img.onload = () => resolve();
        img.onerror = () => {
          // Still resolve even if an image fails to load
          // to prevent the app from being stuck
          console.warn(`Failed to load image: ${url}`);
          resolve();
        };
        img.src = url;
      });
    });

    // Wait for all images to load
    Promise.all(preloadPromises).then(() => {
      setImagesLoaded(true);
    });
  }, []);

  if (!imagesLoaded) {
    // Optional: You can add a loading spinner here if desired
    return null;
  }

  return <>{children}</>;
}

