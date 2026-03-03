"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { NAV_ITEMS, SIGNUP_URL, LOGIN_URL } from "@/lib/constants";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const closeMobile = useCallback(() => {
    setMobileOpen(false);
    document.body.style.overflow = "";
  }, []);

  const toggleMobile = useCallback(() => {
    setMobileOpen((prev) => {
      const next = !prev;
      document.body.style.overflow = next ? "hidden" : "";
      return next;
    });
  }, []);

  // Close on Escape
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" && mobileOpen) closeMobile();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [mobileOpen, closeMobile]);

  return (
    <>
      <header className="header" role="banner">
        <div className="header-container">
          <Link href="/" className="logo">
            <img
              src="https://squadtrip.com/wp-content/uploads/2022/09/squad-trip-Blog-Logo-300x73.png"
              alt="SquadTrip"
              width={150}
              height={37}
            />
          </Link>

          <nav className="nav" role="navigation" aria-label="Main navigation">
            {NAV_ITEMS.map((item) =>
              "external" in item && item.external ? (
                <div key={item.label} className="nav-item">
                  <a
                    href={item.href}
                    className="nav-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {item.label}
                  </a>
                </div>
              ) : (
                <div key={item.label} className="nav-item">
                  <Link href={item.href} className="nav-link">
                    {item.label}
                  </Link>
                </div>
              )
            )}
          </nav>

          <div className="header-cta">
            <a href={LOGIN_URL} className="btn-login">
              Log in
            </a>
            <a href={SIGNUP_URL} className="btn-signup">
              Sign up for free
            </a>
          </div>

          <button
            className={`mobile-menu-toggle${mobileOpen ? " active" : ""}`}
            onClick={toggleMobile}
            aria-label="Toggle mobile menu"
            aria-expanded={mobileOpen}
            aria-controls="mobileNav"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </header>

      {/* Mobile Nav Overlay */}
      <div
        className={`mobile-nav-overlay${mobileOpen ? " active" : ""}`}
        id="mobileNav"
      >
        <div className="mobile-nav-section">
          {NAV_ITEMS.map((item) =>
            "external" in item && item.external ? (
              <a
                key={item.label}
                href={item.href}
                onClick={closeMobile}
                target="_blank"
                rel="noopener noreferrer"
              >
                {item.label}
              </a>
            ) : (
              <Link key={item.label} href={item.href} onClick={closeMobile}>
                {item.label}
              </Link>
            )
          )}
        </div>
        <div className="mobile-cta">
          <a href={LOGIN_URL} className="btn-login">
            Log in
          </a>
          <a href={SIGNUP_URL} className="btn-signup-mobile">
            Sign up for free
          </a>
        </div>
      </div>
    </>
  );
}
