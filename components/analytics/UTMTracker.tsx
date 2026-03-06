"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

const UTM_PARAMS = ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content"];
const COOKIE_DOMAIN = ".squadtrip.com";
const COOKIE_MAX_AGE = 30 * 24 * 60 * 60; // 30 days

function setCookie(name: string, value: string, maxAge = COOKIE_MAX_AGE) {
  const isLocalhost = window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1";
  const domainPart = isLocalhost ? "" : `; domain=${COOKIE_DOMAIN}`;
  document.cookie = `${name}=${encodeURIComponent(value)}; path=/${domainPart}; max-age=${maxAge}; SameSite=Lax`;
}

function getCookie(name: string): string | null {
  const match = document.cookie.match(new RegExp("(^| )" + name + "=([^;]+)"));
  return match ? decodeURIComponent(match[2]) : null;
}

export function UTMTracker() {
  const pathname = usePathname();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const pagePath = pathname;

    // First touch — set once, never overwrite
    if (!getCookie("sq_first_touch")) {
      setCookie("sq_first_touch", pagePath);
    }

    // Last touch — updated every page load
    setCookie("sq_last_touch", pagePath);

    // First visit timestamp — set once
    if (!getCookie("sq_first_visit")) {
      setCookie("sq_first_visit", new Date().toISOString());
    }

    // Page view counter — increment every page load
    const currentCount = parseInt(getCookie("sq_page_views") || "0", 10);
    setCookie("sq_page_views", String(currentCount + 1));

    // External referrer — set once on first visit from outside squadtrip
    if (!getCookie("sq_referrer") && document.referrer) {
      try {
        const referrerHost = new URL(document.referrer).hostname;
        if (!referrerHost.includes("squadtrip")) {
          setCookie("sq_referrer", document.referrer);
        }
      } catch {
        // Invalid referrer URL, skip
      }
    }

    // Ad click IDs (gclid/fbclid) — set once
    if (!getCookie("sq_click_id")) {
      const gclid = params.get("gclid");
      const fbclid = params.get("fbclid");
      if (gclid) setCookie("sq_click_id", `gclid:${gclid}`);
      else if (fbclid) setCookie("sq_click_id", `fbclid:${fbclid}`);
    }

    // UTM data — only when UTM params present in URL
    const utmData: Record<string, string> = {};
    let hasUTM = false;
    for (const param of UTM_PARAMS) {
      const value = params.get(param);
      if (value) {
        utmData[param.replace("utm_", "")] = value;
        hasUTM = true;
      }
    }

    if (hasUTM) {
      const json = JSON.stringify(utmData);
      // Last-touch — always overwrite
      setCookie("sq_utm_last", json);

      // First-touch — set once
      if (!getCookie("sq_utm_first")) {
        setCookie("sq_utm_first", json);
      }
    }
  }, [pathname]);

  return null;
}
