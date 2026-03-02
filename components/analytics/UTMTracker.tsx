"use client";

import { useEffect } from "react";

const UTM_PARAMS = ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content"];

export function UTMTracker() {
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const utmData: Record<string, string> = {};
    let hasUTM = false;

    for (const param of UTM_PARAMS) {
      const value = params.get(param);
      if (value) {
        utmData[param] = value;
        hasUTM = true;
      }
    }

    if (hasUTM) {
      // Store as last-touch attribution
      localStorage.setItem("sq_utm_last", JSON.stringify(utmData));
      localStorage.setItem("sq_utm_last_ts", new Date().toISOString());

      // Store as first-touch only if not already set
      if (!localStorage.getItem("sq_utm_first")) {
        localStorage.setItem("sq_utm_first", JSON.stringify(utmData));
        localStorage.setItem("sq_utm_first_ts", new Date().toISOString());
      }
    }
  }, []);

  return null;
}
