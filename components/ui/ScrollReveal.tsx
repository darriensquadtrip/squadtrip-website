"use client";

import { useEffect, useRef } from "react";

// Shared IntersectionObserver for all ScrollReveal instances
let sharedObserver: IntersectionObserver | null = null;
let observedCount = 0;

function getSharedObserver(): IntersectionObserver {
  if (!sharedObserver) {
    sharedObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            sharedObserver?.unobserve(entry.target);
            observedCount--;
            if (observedCount <= 0) {
              sharedObserver?.disconnect();
              sharedObserver = null;
              observedCount = 0;
            }
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );
  }
  return sharedObserver;
}

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  stagger?: boolean;
}

export function ScrollReveal({ children, className = "", stagger = false }: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = getSharedObserver();
    observedCount++;
    observer.observe(el);

    return () => {
      observer.unobserve(el);
      observedCount--;
      if (observedCount <= 0 && sharedObserver) {
        sharedObserver.disconnect();
        sharedObserver = null;
        observedCount = 0;
      }
    };
  }, []);

  const baseClass = stagger ? "stagger-children" : "animate-on-scroll";
  return (
    <div ref={ref} className={`${baseClass} ${className}`}>
      {children}
    </div>
  );
}
