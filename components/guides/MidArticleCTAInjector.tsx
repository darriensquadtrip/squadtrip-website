"use client";

import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { useState } from "react";
import { getSignupUrl } from "@/lib/constants";

export function MidArticleCTAInjector({ slug }: { slug: string }) {
  const [targetEl, setTargetEl] = useState<HTMLElement | null>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const article = document.querySelector("article");
    if (!article) return;

    const h2s = article.querySelectorAll("h2");
    // Insert after the 3rd H2, or after the last one if fewer than 3
    const targetIndex = Math.min(2, h2s.length - 1);
    if (targetIndex < 0) return;

    const targetH2 = h2s[targetIndex];

    // Find the next sibling section break — we insert after the content
    // block following the target H2
    const wrapper = document.createElement("div");
    wrapper.setAttribute("data-mid-cta", "true");
    targetH2.parentNode?.insertBefore(wrapper, targetH2.nextSibling);
    setTargetEl(wrapper);

    return () => {
      wrapper.remove();
    };
  }, []);

  if (!targetEl) return null;

  const signupUrl = getSignupUrl("guides", "inline", slug);

  return createPortal(
    <div ref={ctaRef} className="not-prose my-10 rounded-xl border border-purple/20 bg-purple/5 p-6 sm:p-8">
      <p className="text-base font-semibold text-gray-900 mb-2">
        Planning a group trip?
      </p>
      <p className="text-sm text-gray-600 mb-4">
        Create a booking page, collect payments, and track who paid — all in one place.
      </p>
      <a
        href={signupUrl}
        className="btn-primary inline-block text-sm"
      >
        Get started for free
      </a>
    </div>,
    targetEl
  );
}
