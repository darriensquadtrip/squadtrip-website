"use client";

import { useEffect } from "react";
import { POSTHOG_KEY, POSTHOG_HOST } from "@/lib/constants";

export function PostHogProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    if (!POSTHOG_KEY) return;

    const init = () => {
      import("posthog-js").then((mod) => {
        mod.default.init(POSTHOG_KEY, {
          api_host: POSTHOG_HOST,
          capture_pageview: true,
          capture_pageleave: true,
          autocapture: false,
        });
      });
    };

    // Defer PostHog init until the browser is idle to reduce TBT
    if ("requestIdleCallback" in window) {
      requestIdleCallback(init, { timeout: 3000 });
    } else {
      setTimeout(init, 2000);
    }
  }, []);
  return <>{children}</>;
}
