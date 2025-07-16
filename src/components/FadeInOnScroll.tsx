"use client";

import { useEffect, useRef } from "react";

interface FadeInOnScrollProps {
  children: React.ReactNode;
  direction?: "up" | "down" | "left" | "right" | "bounce" | "bounceIn";
  delay?: number; // ms
  className?: string;
  id?: string;
}

export default function FadeInOnScroll({
  children,
  direction = "up",
  delay = 0,
  className = "",
  id,
}: FadeInOnScrollProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const fadeClass = `fadein-${direction}`;
          if (delay > 0) {
            setTimeout(() => {
              el.classList.remove("before-animate");
              el.classList.add(fadeClass);
            }, delay);
          } else {
            el.classList.remove("before-animate");
            el.classList.add(fadeClass);
          }
          observer.unobserve(el);
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(el);

    return () => observer.disconnect();
  }, [direction, delay]);

  return (
    <div ref={ref} id={id} className={`before-animate ${className}`}>
      {children}
    </div>
  );
}
