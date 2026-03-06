"use client";

import { SIGNUP_URL } from "@/lib/constants";

interface SignupLinkProps {
  children: React.ReactNode;
  className?: string;
  href?: string;
  source?: string;
  medium?: string;
  campaign?: string;
}

function getCookie(name: string): string {
  const match = document.cookie.match(new RegExp("(^| )" + name + "=([^;]+)"));
  return match ? decodeURIComponent(match[2]) : "";
}

function parseJsonCookie(name: string): Record<string, string> {
  try {
    const val = getCookie(name);
    return val ? JSON.parse(val) : {};
  } catch {
    return {};
  }
}

function setCookie(name: string, value: string) {
  const isLocalhost = window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1";
  const domainPart = isLocalhost ? "" : "; domain=.squadtrip.com";
  document.cookie = `${name}=${encodeURIComponent(value)}; path=/${domainPart}; max-age=${30 * 24 * 60 * 60}; SameSite=Lax`;
}

export function SignupLink({
  children,
  className,
  href = SIGNUP_URL,
  source,
  medium,
  campaign,
}: SignupLinkProps) {
  function handleClick(e: React.MouseEvent<HTMLAnchorElement>) {
    e.preventDefault();

    // Update last touch right before navigating
    setCookie("sq_last_touch", window.location.pathname);

    // Read cookies
    const utmCookie = parseJsonCookie("sq_utm_last") || parseJsonCookie("sq_utm_first") || {};
    const firstTouch = getCookie("sq_first_touch");
    const lastTouch = window.location.pathname;
    const referrer = getCookie("sq_referrer");
    const clickId = getCookie("sq_click_id");
    const firstVisit = getCookie("sq_first_visit");
    const pageViews = getCookie("sq_page_views");

    // Build ref_* params — URL cookies take priority, then component props as context fallback
    const params = new URLSearchParams();

    if (firstTouch) params.set("ref_first_touch", firstTouch);
    params.set("ref_last_touch", lastTouch);
    params.set("ref_utm_source", utmCookie.source || source || "");
    params.set("ref_utm_medium", utmCookie.medium || medium || "");
    params.set("ref_utm_campaign", utmCookie.campaign || campaign || "");
    if (referrer) params.set("ref_referrer", referrer);
    if (clickId) params.set("ref_click_id", clickId);
    if (firstVisit) params.set("ref_first_visit", firstVisit);
    if (medium) params.set("ref_signup_placement", medium);
    if (pageViews) params.set("ref_page_views", pageViews);

    // Build final URL
    const separator = href.includes("?") ? "&" : "?";
    window.location.href = `${href}${separator}${params.toString()}`;
  }

  return (
    <a href={href} className={className} onClick={handleClick}>
      {children}
    </a>
  );
}
