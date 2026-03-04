/**
 * Verify analytics scripts are present on all key pages.
 *
 * Usage: npx tsx scripts/verify-analytics.ts
 *        npx tsx scripts/verify-analytics.ts https://custom-staging-url.vercel.app
 *
 * Fetches each key page, inspects the HTML for analytics snippets,
 * and writes an audit report to audit/analytics-verification.md.
 */

import fs from "fs";
import path from "path";

// ---------------------------------------------------------------------------
// Configuration
// ---------------------------------------------------------------------------

const DEFAULT_BASE_URL = "https://squadtrip-website.vercel.app";

const KEY_PAGES = [
  "/",
  "/features",
  "/pricing",
  "/guides",
  "/travel-agents",
  "/travel-groups",
  "/destination-wedding-planners",
  "/about-us",
  "/press",
  "/privacy",
];

interface AnalyticsCheck {
  name: string;
  /** Return true if the analytics system is detected in the HTML string. */
  detect: (html: string) => boolean;
}

const ANALYTICS_CHECKS: AnalyticsCheck[] = [
  {
    name: "GA4",
    detect: (html) =>
      html.includes("googletagmanager.com/gtag/js?id=G-3NZKWM9L6K") ||
      html.includes("G-3NZKWM9L6K"),
  },
  {
    name: "PostHog",
    detect: (html) =>
      /posthog/i.test(html) ||
      html.includes("phc_dgJAmzgSLHv1G5fhmOSpQsAMQArJMi6YJcsSqmKwThb"),
  },
  {
    name: "Facebook Pixel",
    detect: (html) =>
      html.includes("fbevents.js") || html.includes("1000431533341595"),
  },
  {
    name: "Intercom",
    detect: (html) =>
      /intercom/i.test(html) || html.includes("iq5gq02t"),
  },
  {
    name: "UTM Tracker",
    detect: (html) =>
      /utm/i.test(html) || html.includes("sq_utm"),
  },
];

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

interface PageResult {
  page: string;
  status: "ok" | "error";
  httpStatus?: number;
  results: Record<string, boolean>;
  error?: string;
}

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

async function fetchPage(url: string): Promise<{ ok: boolean; status: number; html: string }> {
  const response = await fetch(url, {
    headers: {
      "User-Agent": "SquadtripAnalyticsVerifier/1.0",
    },
    redirect: "follow",
  });

  const html = await response.text();
  return { ok: response.ok, status: response.status, html };
}

function checkMark(detected: boolean): string {
  return detected ? "Y" : "X";
}

function padRight(str: string, len: number): string {
  return str.length >= len ? str : str + " ".repeat(len - str.length);
}

// ---------------------------------------------------------------------------
// Report generation
// ---------------------------------------------------------------------------

function generateReport(baseUrl: string, results: PageResult[]): string {
  const analyticsNames = ANALYTICS_CHECKS.map((c) => c.name);
  const timestamp = new Date().toISOString();

  const lines: string[] = [];

  lines.push("# Analytics Verification Report");
  lines.push("");
  lines.push(`**Base URL:** ${baseUrl}`);
  lines.push(`**Generated:** ${timestamp}`);
  lines.push("");

  // ---- Summary table ----
  lines.push("## Summary");
  lines.push("");

  // Build markdown table
  const header = `| Page | ${analyticsNames.join(" | ")} |`;
  const separator = `| --- | ${analyticsNames.map(() => "---").join(" | ")} |`;

  lines.push(header);
  lines.push(separator);

  let totalChecks = 0;
  let totalPassed = 0;
  const warnings: string[] = [];

  for (const result of results) {
    if (result.status === "error") {
      const row = `| \`${result.page}\` | ${analyticsNames.map(() => "ERR").join(" | ")} |`;
      lines.push(row);
      warnings.push(`- **${result.page}**: Failed to fetch (${result.error})`);
      continue;
    }

    const cells: string[] = [];
    for (const name of analyticsNames) {
      const detected = result.results[name] ?? false;
      totalChecks++;
      if (detected) totalPassed++;
      cells.push(checkMark(detected));
    }

    const row = `| \`${result.page}\` | ${cells.join(" | ")} |`;
    lines.push(row);

    // Collect per-page warnings for missing integrations
    const missing = analyticsNames.filter((n) => !result.results[n]);
    if (missing.length > 0) {
      warnings.push(
        `- **${result.page}**: Missing ${missing.join(", ")}`
      );
    }
  }

  lines.push("");
  lines.push(`> **Legend:** Y = detected, X = not detected, ERR = page fetch failed`);
  lines.push("");

  // ---- Warnings ----
  if (warnings.length > 0) {
    lines.push("## Warnings");
    lines.push("");
    for (const w of warnings) {
      lines.push(w);
    }
    lines.push("");
  }

  // ---- Overall status ----
  const allPassed = totalPassed === totalChecks && totalChecks > 0;

  lines.push("## Overall Status");
  lines.push("");
  if (allPassed) {
    lines.push(
      `**PASS** -- All ${totalChecks} analytics checks passed across ${results.length} pages.`
    );
  } else {
    lines.push(
      `**FAIL** -- ${totalPassed}/${totalChecks} analytics checks passed across ${results.length} pages.`
    );
  }
  lines.push("");

  return lines.join("\n");
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------

async function main() {
  const baseUrl = (process.argv[2] || DEFAULT_BASE_URL).replace(/\/+$/, "");

  console.log("=== Squadtrip Analytics Verification ===");
  console.log(`Base URL: ${baseUrl}`);
  console.log(`Pages to check: ${KEY_PAGES.length}`);
  console.log(`Analytics systems: ${ANALYTICS_CHECKS.map((c) => c.name).join(", ")}`);
  console.log("");

  const results: PageResult[] = [];

  for (const pagePath of KEY_PAGES) {
    const url = `${baseUrl}${pagePath}`;
    process.stdout.write(`Checking ${pagePath} ... `);

    try {
      const { ok, status, html } = await fetchPage(url);

      if (!ok) {
        console.log(`HTTP ${status}`);
        results.push({
          page: pagePath,
          status: "error",
          httpStatus: status,
          results: {},
          error: `HTTP ${status}`,
        });
        continue;
      }

      const checkResults: Record<string, boolean> = {};
      const detected: string[] = [];
      const missing: string[] = [];

      for (const check of ANALYTICS_CHECKS) {
        const found = check.detect(html);
        checkResults[check.name] = found;
        (found ? detected : missing).push(check.name);
      }

      const summary = missing.length === 0
        ? `OK (all ${detected.length} found)`
        : `${detected.length}/${ANALYTICS_CHECKS.length} found, missing: ${missing.join(", ")}`;

      console.log(summary);

      results.push({
        page: pagePath,
        status: "ok",
        httpStatus: status,
        results: checkResults,
      });
    } catch (err) {
      const message = err instanceof Error ? err.message : String(err);
      console.log(`ERROR: ${message}`);
      results.push({
        page: pagePath,
        status: "error",
        results: {},
        error: message,
      });
    }
  }

  console.log("");

  // ---- Write report ----
  const auditDir = path.join(process.cwd(), "audit");
  if (!fs.existsSync(auditDir)) {
    fs.mkdirSync(auditDir, { recursive: true });
  }

  const reportPath = path.join(auditDir, "analytics-verification.md");
  const report = generateReport(baseUrl, results);
  fs.writeFileSync(reportPath, report, "utf-8");

  console.log(`Report written to: ${reportPath}`);

  // ---- Print pass/fail to console ----
  const totalChecks = results
    .filter((r) => r.status === "ok")
    .reduce((sum, r) => sum + ANALYTICS_CHECKS.length, 0);
  const totalPassed = results
    .filter((r) => r.status === "ok")
    .reduce((sum, r) => {
      return sum + Object.values(r.results).filter(Boolean).length;
    }, 0);

  console.log("");
  if (totalPassed === totalChecks && totalChecks > 0) {
    console.log(`PASS: All ${totalChecks} checks passed.`);
  } else {
    console.log(`FAIL: ${totalPassed}/${totalChecks} checks passed.`);
    process.exitCode = 1;
  }
}

main().catch((err) => {
  console.error("Fatal error:", err);
  process.exitCode = 1;
});
