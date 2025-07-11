"use client";

import { useEffect, useRef } from "react";

interface FadeInOnScrollProps {
  children: React.ReactNode;
  direction?: "up" | "down" | "left" | "right";
  delay?: number; // ms
  className?: string;
}

export default function FadeInOnScroll({
  children,
  direction = "up",
  delay = 0,
  className = "",
}: FadeInOnScrollProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            el.classList.add(`fadein-${direction}`);
          }, delay);
          observer.unobserve(el);
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(el);

    return () => observer.disconnect();
  }, [direction, delay]);

  return (
    <div ref={ref} className={`opacity-0 ${className}`}>
      {children}
    </div>
  );
}
