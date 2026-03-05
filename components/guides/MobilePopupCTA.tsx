"use client";

import { useEffect, useState, useRef } from "react";
import { getHomepageUrl } from "@/lib/constants";

export function MobilePopupCTA({ slug }: { slug: string }) {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  const initialScrollRef = useRef<number | null>(null);

  useEffect(() => {
    if (dismissed) return;

    // Capture the scroll position on first load so we can
    // require the user to scroll an additional 25% from there
    if (initialScrollRef.current === null) {
      initialScrollRef.current = window.scrollY;
    }

    function handleScroll() {
      const scrolledFromLoad = window.scrollY - (initialScrollRef.current ?? 0);
      // Only trigger if user has actively scrolled down at least 25% of the page
      if (scrolledFromLoad <= 0) return;

      const scrollPct =
        window.scrollY /
        (document.documentElement.scrollHeight - window.innerHeight);
      setVisible(scrollPct >= 0.25);
    }

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [dismissed]);

  const url = getHomepageUrl("guides", "mobile-popup", slug);

  if (!visible || dismissed) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center lg:hidden">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={() => setDismissed(true)}
      />

      {/* Card */}
      <div className="relative mx-4 w-full max-w-sm rounded-xl overflow-hidden shadow-2xl bg-[#1A1A2E] animate-in fade-in zoom-in duration-300">
        {/* Close button */}
        <button
          onClick={() => setDismissed(true)}
          className="absolute top-2 right-2 z-10 w-7 h-7 flex items-center justify-center rounded-full bg-black/30 text-white/70 hover:text-white hover:bg-black/50 transition-colors"
          aria-label="Close"
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11 3L3 11M3 3l8 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </button>

        {/* Gray zone: mockup + logos */}
        <div className="bg-gray-100 mx-2 mt-2 rounded-lg px-3 pt-3">
          {/* Browser mockup */}
          <div className="rounded-lg bg-white shadow-sm overflow-hidden">
            <div className="flex items-center gap-1.5 bg-gray-50 px-2.5 py-1.5 border-b border-gray-100">
              <span className="w-2 h-2 rounded-full bg-[#FF5F57]" />
              <span className="w-2 h-2 rounded-full bg-[#FFBD2E]" />
              <span className="w-2 h-2 rounded-full bg-[#28CA41]" />
              <span className="ml-2 flex-1 rounded bg-gray-100 px-2 py-0.5 text-[10px] text-gray-400 truncate">
                dashboard.squadtrip.com
              </span>
            </div>
            <div className="px-3 py-2.5">
              <div className="flex items-center justify-between mb-2 pb-1.5 border-b border-gray-100">
                <span className="text-[11px] font-semibold text-gray-800">Payment Plan Settings</span>
                <div className="flex items-center gap-1">
                  <span className="text-[9px] text-gray-500">Auto-charge</span>
                  <div className="w-7 h-3.5 bg-emerald-500 rounded-full relative">
                    <div className="absolute w-3 h-3 bg-white rounded-full top-[1px] right-[1px] shadow-sm" />
                  </div>
                </div>
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-2 rounded bg-gray-50 px-2 py-1.5">
                  <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center text-[9px]">&#10003;</span>
                  <div className="flex-1 min-w-0">
                    <div className="text-[10px] font-medium text-gray-700">Nov 15, 2024</div>
                    <div className="text-[8px] text-gray-400">Deposit collected</div>
                  </div>
                  <span className="text-[10px] font-semibold text-purple">$534.75</span>
                </div>
                <div className="flex items-center gap-2 rounded bg-gray-50 px-2 py-1.5">
                  <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center text-[9px]">&#10003;</span>
                  <div className="flex-1 min-w-0">
                    <div className="text-[10px] font-medium text-gray-700">Dec 15, 2024</div>
                    <div className="text-[8px] text-gray-400">Auto-charged</div>
                  </div>
                  <span className="text-[10px] font-semibold text-purple">$534.75</span>
                </div>
                <div className="flex items-center gap-2 rounded bg-gray-50 px-2 py-1.5">
                  <span className="w-5 h-5 rounded-full bg-purple-light text-white flex items-center justify-center text-[9px] font-bold">3</span>
                  <div className="flex-1 min-w-0">
                    <div className="text-[10px] font-medium text-gray-700">Jan 15, 2025</div>
                    <div className="text-[8px] text-gray-400">Scheduled</div>
                  </div>
                  <span className="text-[10px] font-semibold text-purple">$534.75</span>
                </div>
              </div>
              <div className="flex gap-1 mt-2 flex-wrap">
                <span className="text-[8px] font-medium bg-emerald-50 text-emerald-600 rounded-full px-2 py-0.5">&#10003; Auto-charge enabled</span>
                <span className="text-[8px] font-medium bg-emerald-50 text-emerald-600 rounded-full px-2 py-0.5">&#10003; Reminders sent</span>
                <span className="text-[8px] font-medium bg-emerald-50 text-emerald-600 rounded-full px-2 py-0.5">&#10003; Receipts automatic</span>
              </div>
            </div>
          </div>
          {/* Payment method logos */}
          <div className="flex items-center justify-center gap-3 py-3">
            <svg className="h-3.5 w-auto opacity-70" viewBox="0 0 50 20" xmlns="http://www.w3.org/2000/svg">
              <path d="M9.6 2.8C10.3 1.9 10.7 0.8 10.6 0c-1 0-2.3.7-3 1.6-.6.7-1.2 1.9-1 3 1.1.1 2.2-.6 3-1.8zM10.5 3.8c-1.7-.1-3.1 1-3.9 1s-2-.9-3.3-.9C1.4 3.9 0 5.5 0 8.5c0 1.9.7 3.8 1.6 5.1.8 1.1 1.5 2 2.5 2s1.4-.9 2.7-.9 1.6.9 2.7.9 1.7-.9 2.4-2c.5-.8.9-1.5 1.1-2-.1 0-2.1-.8-2.1-3.2 0-2 1.6-2.9 1.7-3-.9-1.4-2.4-1.6-2.6-1.6z" fill="#1A1A2E"/>
              <text x="18" y="14" fontSize="10" fontFamily="system-ui" fontWeight="600" fill="#1A1A2E">Pay</text>
            </svg>
            <svg className="h-3 w-auto opacity-70" viewBox="0 0 60 18" xmlns="http://www.w3.org/2000/svg">
              <text x="0" y="14" fontSize="12" fontFamily="system-ui" fontWeight="700" fill="#1A1A2E">klarna</text>
            </svg>
            <svg className="h-3 w-auto opacity-70" viewBox="0 0 50 18" xmlns="http://www.w3.org/2000/svg">
              <text x="0" y="14" fontSize="11" fontFamily="system-ui" fontWeight="700" fill="#1A1A2E">affirm</text>
            </svg>
            <svg className="h-3 w-auto opacity-70" viewBox="0 0 65 18" xmlns="http://www.w3.org/2000/svg">
              <text x="0" y="14" fontSize="11" fontFamily="system-ui" fontWeight="600" fill="#1A1A2E">afterpay</text>
            </svg>
            <svg className="h-3.5 w-auto opacity-60" viewBox="0 0 32 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="0.5" y="0.5" width="31" height="23" rx="3.5" fill="white" stroke="#D1D5DB" />
              <rect x="0" y="5" width="32" height="5" fill="#374151" />
              <rect x="4" y="14" width="8" height="2" rx="1" fill="#D1D5DB" />
              <rect x="4" y="18" width="12" height="2" rx="1" fill="#D1D5DB" />
              <rect x="22" y="14" width="6" height="6" rx="1" fill="#F59E0B" />
              <circle cx="24" cy="17" r="2" fill="#EF4444" />
              <circle cx="26" cy="17" r="2" fill="#F59E0B" fillOpacity="0.8" />
            </svg>
          </div>
        </div>

        {/* Copy + button — dark zone */}
        <div className="px-5 pt-3 pb-4">
          <p className="text-base font-semibold text-white mb-1">
            Plan your group trip
          </p>
          <p className="text-sm text-white/55 leading-relaxed mb-4">
            Booking pages, payments, and guest tracking — all in one place.
          </p>
          <a
            href={url}
            className="block text-center text-sm font-semibold text-gray-900 bg-yellow hover:bg-yellow-hover transition-colors rounded-lg py-3"
          >
            Get started free
          </a>
        </div>
      </div>
    </div>
  );
}
