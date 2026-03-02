"use client";

import { useEffect } from "react";
import posthog from "posthog-js";
import { POSTHOG_KEY, POSTHOG_HOST } from "@/lib/constants";

export function PostHogProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    if (!POSTHOG_KEY) return;

    posthog.init(POSTHOG_KEY, {
      api_host: POSTHOG_HOST,
      capture_pageview: true,
      capture_pageleave: true,
      autocapture: true,
    });
  }, []);

  return <>{children}</>;
}
