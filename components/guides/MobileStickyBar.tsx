"use client";

import { useEffect, useState } from "react";
import { SignupLink } from "@/components/common/SignupLink";

export function MobileStickyBar({ slug }: { slug: string }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setVisible(window.scrollY > 300);
    }

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 lg:hidden border-t border-gray-200 bg-white/95 backdrop-blur-sm shadow-[0_-2px_10px_rgba(0,0,0,0.08)]">
      <div className="flex items-center justify-between gap-3 px-4 py-3">
        <span className="text-sm font-medium text-gray-900">Plan your group trip</span>
        <SignupLink source="guides" medium="mobile-sticky" campaign={slug} className="btn-primary shrink-0 text-sm !py-2 !px-5">
          Start free
        </SignupLink>
      </div>
    </div>
  );
}
