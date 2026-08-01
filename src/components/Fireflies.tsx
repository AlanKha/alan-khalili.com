import { useEffect, useRef } from "react";

interface Firefly {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  phase: number;
  flickerSpeed: number;
  baseOpacity: number;
}

const DESKTOP_COUNT = 26;
const MOBILE_COUNT = 12;
const FALLBACK_ACCENT_RGB = "255, 107, 53";

function readAccentRgb(): string {
  const raw = getComputedStyle(document.documentElement)
    .getPropertyValue("--accent")
    .trim();
  const hex = raw.replace("#", "");
  if (hex.length !== 6) return FALLBACK_ACCENT_RGB;
  const r = parseInt(hex.slice(0, 2), 16);
  const g = parseInt(hex.slice(2, 4), 16);
  const b = parseInt(hex.slice(4, 6), 16);
  if ([r, g, b].some(Number.isNaN)) return FALLBACK_ACCENT_RGB;
  return `${r}, ${g}, ${b}`;
}

export default function Fireflies() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    let width = window.innerWidth;
    let height = window.innerHeight;
    let accentRgb = readAccentRgb();

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    window.addEventListener("resize", resize);

    const themeObserver = new MutationObserver(() => {
      accentRgb = readAccentRgb();
    });
    themeObserver.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    const count = width < 768 ? MOBILE_COUNT : DESKTOP_COUNT;
    const flies: Firefly[] = Array.from({ length: count }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      radius: Math.random() * 1.3 + 1,
      phase: Math.random() * Math.PI * 2,
      flickerSpeed: Math.random() * 0.0018 + 0.0007,
      baseOpacity: Math.random() * 0.4 + 0.45,
    }));

    let rafId = 0;
    let lastTime = performance.now();

    const step = (time: number) => {
      const dt = Math.min(time - lastTime, 48);
      lastTime = time;

      ctx.clearRect(0, 0, width, height);

      for (const fly of flies) {
        fly.phase += fly.flickerSpeed * dt;

        fly.vx += (Math.random() - 0.5) * 0.012;
        fly.vy += (Math.random() - 0.5) * 0.012 - 0.0012;
        fly.vx = Math.max(-0.35, Math.min(0.35, fly.vx));
        fly.vy = Math.max(-0.4, Math.min(0.15, fly.vy));

        fly.x += fly.vx * (dt / 16);
        fly.y += fly.vy * (dt / 16);

        if (fly.x < -20) fly.x = width + 20;
        if (fly.x > width + 20) fly.x = -20;
        if (fly.y < -20) fly.y = height + 20;
        if (fly.y > height + 20) fly.y = -20;

        const flicker = (Math.sin(fly.phase) + 1) / 2;
        const opacity = fly.baseOpacity * (0.25 + flicker * 0.75);
        const glowRadius = fly.radius * 7;

        const gradient = ctx.createRadialGradient(
          fly.x,
          fly.y,
          0,
          fly.x,
          fly.y,
          glowRadius,
        );
        gradient.addColorStop(0, `rgba(${accentRgb}, ${opacity})`);
        gradient.addColorStop(0.4, `rgba(${accentRgb}, ${opacity * 0.28})`);
        gradient.addColorStop(1, `rgba(${accentRgb}, 0)`);

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(fly.x, fly.y, glowRadius, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = `rgba(${accentRgb}, ${Math.min(opacity * 1.6, 1)})`;
        ctx.beginPath();
        ctx.arc(fly.x, fly.y, fly.radius, 0, Math.PI * 2);
        ctx.fill();
      }

      rafId = requestAnimationFrame(step);
    };

    if (prefersReducedMotion) {
      step(performance.now());
    } else {
      rafId = requestAnimationFrame(step);
    }

    return () => {
      window.removeEventListener("resize", resize);
      themeObserver.disconnect();
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        zIndex: 1,
        pointerEvents: "none",
      }}
    />
  );
}
